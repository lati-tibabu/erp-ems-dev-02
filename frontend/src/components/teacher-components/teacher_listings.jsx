import React, { useState } from 'react'
import { Heading5 } from '../Typography';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

library.add(fas)

function TeacherListing({title, teachers, handleEdit, width}) {

const [selectedRow, setSelectedRow] =  useState(false);

const navigate = useNavigate();

const handleView = (teacher) => {
  setSelectedRow(!selectedRow);
  navigate(`/admin/users/overview/teacher/list/view`, {state: {teacher}})
}
const teacherHeadings = ['','','Name','School','Gender', 'Type'];

  return (
    <div>

      <Heading5 text={title} />

      <div className='school-listing-container'>
        <table 
        // className='school-data-table' style={{width: {width}, borderRadius: '10px'}}
        className='font-xs font-w-400 p-20 m-5 bw-2px bs-solid bc-blueGreen80-40 w-100p br-30px' 
        >
          <thead>
            <tr>
              {teacherHeadings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              (Array.isArray(teachers) && teachers.length>0) &&
              teachers.map((teacher, index) => (
                  <tr key={index} onClick={() => handleView(teacher)} className='table-row'>
                    <td>{index+1}</td>
                    <td>
                      <img 
                      src={teacher.user.profile_photo ? teacher.user.profile_photo : 
                      "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"} 
                      alt="teachers_avatar" 
                      style={{borderRadius: '50%', width: '40px', height: '40px'}}
                      />
                      </td>
                    <td>{teacher.user.first_name+" "+teacher.user.middle_name+" "+teacher.user.last_name} </td>
                    <td>{teacher?.school?.name}</td>
                    <td>{teacher.user.gender}</td>
                    <td>{teacher.teacher_type}</td>
                  </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default TeacherListing;