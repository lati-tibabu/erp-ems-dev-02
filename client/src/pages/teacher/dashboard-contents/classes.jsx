import React, { useState, useEffect } from "react";
import { Heading3, Heading5 } from "../../../components/Typography";

function Classes() {
  const token = localStorage.getItem("jwt");
  const header = { "Authorization": `Bearer ${token}` };

  const userData = JSON.parse(localStorage.getItem("data"));
  const teacherId = userData.teacher.teacher_id;

  const apiURL = import.meta.env.VITE_API_URL;

  const [classes, setClasses] = useState([]);
  
  const getClasses = async (teacherId) => {
    try {
      const response = await fetch(`${apiURL}/api/teacher-class/load_class/${teacherId}/classes`, {
        method: "GET",
        headers: header,
      });
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getClasses(teacherId);
  }, [teacherId]);

  console.log(classes);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '10px', marginBottom: '10px' }}>
          <Heading3 text='Classes' style={{ marginBottom: '10px' }} />
        <div>
        {classes.length > 0 ?
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #ddd', borderRadius: '8px' }}>
            <thead>
              <tr style={{ backgroundColor: '#007bff', color: 'white', borderBottom: '1px solid #ddd' }}>
                <th style={{ padding: '10px', textAlign: 'left', width: '5%' }}></th>
                <th style={{ padding: '10px', textAlign: 'left', width: '45%' }}>Class Name</th>
                <th style={{ padding: '10px', textAlign: 'left', width: '45%' }}>Grade</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classData, index) => (
                <tr key={classData.class_id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '10px', textAlign: 'left' }}>{index+1}</td>
                  <td style={{ padding: '10px', textAlign: 'left' }}>{classData.section_name}</td>
                  <td style={{ padding: '10px', textAlign: 'left' }}>{`Grade ${classData.class_grade}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
          :
          <Heading5 text='You are not assigned to any class yet!' />
        }
        </div>
      </div>
    </div>
  );
}

export default Classes;