import React, { useState, useEffect } from "react";
import { Heading1, Heading3, Heading5 } from "../../../components/Typography";
import Select from 'react-select';
import Skeleton from "../../../components/skeleton";

function MyResult() {
  const studentData = JSON.parse(localStorage.getItem('data'))

  const apiURL = import.meta.env.VITE_API_URL;

  const token = localStorage.getItem('jwt');
  const header = { 'authorization': `Bearer ${token}` };

  const classId = studentData.student.class_id;
  
  const [courses, setCourses] = useState([])
  const [coueseName, setCourseName] = useState('')
  const [assesments, setAssesments] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [loadingResults, setLoadingResults] = useState(false);

  const fetchCourses = async () => {
    setLoadingCourses(true);
    try {
      const response = await fetch(`${apiURL}/api/assign_course/${classId}/courses`, {
        method: 'GET',
        headers: header
      })
      if(response.status === 200){
        setCourses(await response.json())
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingCourses(false);
    }
  }

  useEffect(()=> {
    fetchCourses();
  }, []);

  const handleViewResult = async (courseId, courseNm) => {
    setCourseName(courseNm);
    setAssesments([]);
    setLoadingResults(true);
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
    } catch (error) {
        console.error('Error fetching assessments:', error);
    } finally {
        setLoadingResults(false);
    }
  };


  // console.log(studentData);
  return(
  <div>
    <Heading1 text="My Result" />

    <p>Select your course to view your assesment</p>

      {loadingCourses ? (
        <Skeleton width="100%" height="38px" borderRadius="4px" />
      ) : (
        <Select
          options={
            courses.map((course) => (
              { value: course.course_id, label: course.course_name }
            ))
          }
          onChange={(e) => handleViewResult(e.value, e.label) }
          placeholder="Select Course"
        />
      )}

      {loadingResults ? (
        <div className="mt-20">
          <Skeleton width="300px" height="25px" marginBottom="10px" />
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
              {Array.from({ length: 3 }).map((_, index) => (
                <tr key={index}>
                  <td><Skeleton width="20px" /></td>
                  <td><Skeleton width="150px" /></td>
                  <td><Skeleton width="100px" /></td>
                  <td><Skeleton width="40px" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : assesments.length > 0 ? (
        <div className="mt-20">
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
                <tr key={index}>
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
      ) : (coueseName && !loadingResults) ? (
        <p className="mt-20">No assesment for course</p>
      ) : null}

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
