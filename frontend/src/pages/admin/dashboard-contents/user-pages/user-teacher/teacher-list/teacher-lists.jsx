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

  library.add(fas);

  function TeacherList() {

    const apiURL = import.meta.env.VITE_API_URL;

    const [teachers, setTeachers] = useState([]);
    const [teacherData, setTeacherData] = useState([]);
    const [noTeacher, setNoTeacher] = useState('');

    const getTeachers = async () => {
      try {
        const response = await fetch(`${apiURL}/api/teacher/load`);
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
              const userResponse = await fetch(`${apiURL}/api/user/load/${teacher.user_id}`);
              const userData = await userResponse.json();

              const schoolResponse = await fetch(`${apiURL}/api/school/load/${teacher.school_id}`);
              const schoolData = await schoolResponse.json();

              const contactResponse = await fetch(`${apiURL}/api/contact/loadu/${teacher.user_id}`);
              const contactData = await contactResponse.json();

              return { ...teacher, user: userData, school: schoolData, contact: contactData };
          })
      );
      setTeacherData(dataWithRelations);
    };

    // console.log(teacherData);
    

    useEffect(() => {
      getTeachers()
    }, []);

    useEffect(() => {
      if (teachers.length > 0) {
          getTeachersData(teachers);
      }
    },[teachers]);

    // useEffect(() => {console.log(teachers.message)},[teachers.message]);

    const handleEdit = (teacherID) => {
      console.log('Editing teacher with ID:', teacherID);
      // navigate(`/admin/teacher/edit/${teacherID}`)
    };

    // useEffect{}
    return (
      <>
      <RowWrapper style={{justifyContent: 'space-between', gap: '20px', border: 'none',}}>
        { noTeacher?
            <CenterColumn>
              <p>No teacher found</p>
            </CenterColumn>
            :
          (teacherData.length === 0
          ? <CenterColumn>
              <img src={loading} alt="" style={{width: '100px'}} />
            </CenterColumn>
          : <TeacherListing
              title='Teachers'
              teachers={teacherData}
              handleEdit={handleEdit}
              // handleView={handleView}
              width='100%'
            />)
          }

          <Outlet />

      </RowWrapper>
      </>
    )

  }

  export default TeacherList;