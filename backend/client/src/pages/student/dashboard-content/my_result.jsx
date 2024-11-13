import React, { useState } from "react";
import { Heading1, Heading3, Heading5 } from "../../../components/Typography";
import Select from 'react-select';

function MyResult() {
  const studentData = JSON.parse(localStorage.getItem('data'))

  const apiURL = import.meta.env.VITE_API_URL;

  const token = localStorage.getItem('jwt');
  const header = { 'authorization': `Bearer ${token}` };

  const classId = studentData.student.class_id;
  
  const [courses, setCourses] = useState([])
  const [coueseName, setCourseName] = useState('')
  const [assesments, setAssesments] = useState([]);

  const fetchCourses = async () => {
    const response = await fetch(`${apiURL}/api/assign_course/${classId}/courses`, {
      method: 'GET',
      headers: header
    })
    if(response.status === 200){
      // console.log(await response.json());
      setCourses(await response.json())
    }
  }

  useState(()=> {
    fetchCourses();
  }, []);

  const handleViewResult = async (courseId, courseNm) => {
    setCourseName(courseNm);
    setAssesments([]);
    try {
        const response = await fetch(`${apiURL}/api/assesment-student/${studentData.student.student_id}/${courseId}/course_assesments`, {
            method: 'GET',
            headers: header
        });

        if (!response.ok) {
            console.log('No assessments found');
            return;
        }

        const data = await response.json();
        setAssesments(data);
        console.log(data);
    } catch (error) {
        console.error('Error fetching assessments:', error);
    }
  };


  // console.log(studentData);
  return(
  <div>
    <Heading1 text="My Result" />
    {/* <Select 
      options=[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]
    /> */}

    <p>Select your course to view your assesment</p>

      <Select
        options={
          courses.map((course) => (
            { value: course.course_id, label: course.course_name }
          ))
        }
        onChange={(e) => handleViewResult(e.value, e.label) }
        placeholder="Select Course"
      />

      {assesments.length > 0 ?
        <div>
        {coueseName && <Heading5 text={`Assesment Result of ${coueseName}`} />}
        <table>
          <thead>
            <tr className="back-color-blue100 color-white">
              <th>S/N</th>
              <th>Assesment Name</th>
              <th>Assesment Type</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {assesments.map((assesment, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{assesment.assesment_name}</td>
                <td>{assesment.assesment_type}</td>
                <td>{assesment.AssesmentStudent.student_mark}</td>
              </tr>
            ))}
            <tr>
              <th className="bw-none ">Total</th>
              <td className="bw-none "></td>
              <td className="bw-none "></td>
              <td>
                {assesments.reduce((total, assesment) => total + parseInt(assesment.AssesmentStudent.student_mark), 0)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      : <p>No assesment for course</p>
    }

      <style>
        {
          `
            table {
              width: 100%;
              border-collapse: collapse;
              background: white
            }

            th,td {
              padding: 10px;
              border: 1px solid black;
            }
          `
        }
      </style>
  </div>
  );
}

export default MyResult;
