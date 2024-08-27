import React, { useEffect, useState } from 'react'
import '../../../../../../styles/admin-school.css';
import '../button-styles.css'

import TeacherListing from '../../../../../../components/teacher-components/teacher_listings';
import RowWrapper from '../../../../../../components/row_wrapper';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import loading from '/loading.gif'
import { CenterColumn } from '../../../../../../components/center';
import { Label } from '../../../../../../components/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

  library.add(fas);

  function TeacherList() {

    const token = localStorage.getItem('jwt');
    const header = {'authorization' : `Bearer ${token}`};

    const apiURL = import.meta.env.VITE_API_URL;

    const [teachers, setTeachers] = useState({teachers:[],totalPages: 0, currentPage: 1, count: 0, headers: []});
    const [teacherData, setTeacherData] = useState([]);

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const [noTeacher, setNoTeacher] = useState('');

    const getTeachers = async (page, limit) => {
      try {
        const response = await fetch(`${apiURL}/api/teacher/load?page=${page}&limit=${limit}`, {
          method: 'GET',
          headers: header
        });
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error('Error fetching teachers:', error);
      }
    };

    // if(teachers.message === 'no teachers'){
    //   console.log("no teachers found");
    //   setNoTeacher('No teachers found');
    // }
    

    const getTeachersData = async (teachersArray) => {
      const dataWithRelations = await Promise.all(
          teachersArray.map(async (teacher) => {
              const userResponse = await fetch(`${apiURL}/api/user/load/${teacher.user_id}`, {
                method: 'GET',
                headers: header
              });
              const userData = await userResponse.json();

              const schoolResponse = await fetch(`${apiURL}/api/school/load/${teacher.school_id}`, {
                method: 'GET',
                headers: header
              });
              const schoolData = await schoolResponse.json();

              const contactResponse = await fetch(`${apiURL}/api/contact/loadu/${teacher.user_id}`,  {
                method: 'GET',
                headers: header
              });
              const contactData = await contactResponse.json();

              return { ...teacher, user: userData, school: schoolData, contact: contactData };
          })
      );
      setTeacherData(dataWithRelations);
    };

    // console.log(teacherData);
    

    useEffect(() => {
      getTeachers(page, limit)
    }, [page, limit]);

    useEffect(() => {
      if (teachers.teachers.count > 0) {
          getTeachersData(teachers.teachers.rows);
      }
    },[teachers]);

    // useEffect(() => {console.log(teachers.message)},[teachers.message]);
    console.log('teachers data',teachers);
    
    const handleEdit = (teacherID) => {
      console.log('Editing teacher with ID:', teacherID);
      // navigate(`/admin/teacher/edit/${teacherID}`)
    };

    const styleClasses = {
      plusMinus : 'color-blueGreen100 '
    }

    return (
      <>
      <RowWrapper style={{justifyContent: 'space-between', gap: '20px', border: 'none',}}>
        { noTeacher?
            <CenterColumn>
              <p>No teacher found</p>
            </CenterColumn>
            :
          (teachers.count === 0
          ? <CenterColumn>
              <img src={loading} alt="" style={{width: '100px'}} />
            </CenterColumn>
          :
          <div className='flex-column'>
            <div className='flex-row align-center gap-10 bw-1px bs-solid bc-blueGreen100-60 back-color-blueGreen80-30 p-10 w-20p min-w-250px br-4px'>
              <Label text='Principals per page' />

              <FontAwesomeIcon icon="fa-solid fa-minus" onClick={() => !(limit===1) && setLimit(limit-1) }  className={styleClasses.plusMinus}/>
              <input type="text" name="" value={limit} onChange={(e) => setLimit(parseInt(e.target.value))} className='w-20px br-2px'/>
              <FontAwesomeIcon icon="fa-solid fa-plus" onClick={() => setLimit(limit + 1)} className={styleClasses.plusMinus}/>

          </div>
            <TeacherListing
                title='Teachers'
                teachers={teacherData}
                handleEdit={handleEdit}
                // handleView={handleView}
                width='100%'
              />
              <div className='flex-column'>
            <p>Page {teachers.currentPage} of {teachers.totalPages}</p>

            <div className='flex- row gap-10'>
              {!(teachers.currentPage === 1)
                ?<FontAwesomeIcon style={{cursor: 'pointer'}} onClick={() => setPage(page-1)} icon='fa-solid fa-chevron-left' className='p-5 back-color-blueGreen100-50 w-30px br-4px color-white'/>
                :<FontAwesomeIcon style={{cursor: 'not-allowed'}} icon='fa-solid fa-chevron-left' className='p-5 back-color-gray100-50 w-30px br-4px color-white'/>
              }
              {!(teachers.currentPage === teachers.totalPages)
              ?<FontAwesomeIcon style={{cursor: 'pointer'}} onClick={() => setPage(page+1)} icon='fa-solid fa-chevron-right'className='p-5 back-color-blueGreen100-50 w-30px br-4px color-white' />
              :<FontAwesomeIcon style={{cursor: 'not-allowed'}} icon='fa-solid fa-chevron-right' className='p-5 back-color-gray100-50 w-30px br-4px color-white'/>
            }
            </div>
          </div>
          </div>          
          )
          }

          <Outlet />

      </RowWrapper>
      </>
    )

  }

  export default TeacherList;