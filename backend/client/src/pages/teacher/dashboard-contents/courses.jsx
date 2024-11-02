import React, { useState, useEffect } from "react";
import { Heading3, Heading5 } from "../../../components/Typography";

function Courses() {
  const token = localStorage.getItem("jwt");
  const header = { "Authorization": `Bearer ${token}` };

  const userData = JSON.parse(localStorage.getItem("data"));
  const teacherId = userData.teacher.teacher_id;

  const apiURL = import.meta.env.VITE_API_URL;

  const [courses, setCourses] = useState([]);
  
  const getCourses = async (teacherId) => {
    try {
      const response = await fetch(`${apiURL}/api/teacher-course/load_course/${teacherId}/courses`, {
        method: "GET",
        headers: header,
      });
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCourses(teacherId);
  }, [teacherId]);

  console.log(courses);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '10px', marginBottom: '10px' }}>
          <Heading3 text='Courses' style={{ marginBottom: '10px' }} />
        <div>
        { courses.length > 0 ?
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd', borderRadius: '8px' }}>
            <thead>
              <tr style={{ backgroundColor: '#007bff', color: 'white', borderBottom: '1px solid #ddd' }}>
                <th style={{ padding: '10px', textAlign: 'left', width: '5%' }}></th>
                <th style={{ padding: '10px', textAlign: 'left', width: '45%' }}>Course Name</th>
                <th style={{ padding: '10px', textAlign: 'left', width: '45%' }}>Course Grade</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={course.course_id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px', textAlign: 'left' }}>{index+1}</td>
                  <td style={{ padding: '10px', textAlign: 'left' }}>{course.course_name}</td>
                  <td style={{ padding: '10px', textAlign: 'left' }}>{`Grade ${course.course_grade}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
          : <Heading5 text='You are not assigned to any course yet!' />
        }
        </div>
      </div>
    </div>
  );
}

export default Courses;