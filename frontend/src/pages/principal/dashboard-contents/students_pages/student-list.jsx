import React, { useEffect, useState } from "react";
import api from "../../../../api";
import { Heading3, Heading1, Heading6, Paragraph, Heading5, Label } from "../../../../components/Typography";
import ColumnWrapper from "../../../../components/column_wrapper";
import RowWrapper from "../../../../components/row_wrapper";
import { SecondaryButton, TertiaryButton } from "../../../../components/buttons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, useNavigate } from "react-router-dom";

library.add(fas);

function StudentList() {
  const apiURL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('jwt');
  const header = { authorization: `Bearer ${token}` };
  const schoolData = JSON.parse(localStorage.getItem('data'));
  const schoolId = schoolData.school.school_id;

  const [students, setStudents] = useState([]);
  const [studentsData, setStudentsData] = useState([]);
  const [classes, setClasses] = useState([]);
  const [classId, setClassId] = useState('');
  const [classLvl, setClassLvl] = useState('');
  const [listType, setListType] = useState('all');
  const [listFilterName, setListFilterName] = useState('All Students');
  const [filterDisplay, setFilterDisplay] = useState(false);

  const getClasses = async () => {
    try {
      const response = await fetch(`${apiURL}/api/class/load_s/${schoolId}`);
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  useEffect(() => {
    getClasses();
  }, [schoolId]);

  useEffect(() => {
    if (classes.length > 0) {
      classes.sort((a, b) => a.class_grade - b.class_grade);
    }
  }, [classes]);

  const classGrades = [...new Set(classes.map((item) => item.class_grade))];

  const getStudents = async () => {
    setStudents([]);
    setStudentsData([]);

    try {
      let response;
      switch (listType) {
        case 'all':
          response = await fetch(`${apiURL}/api/student/load_s/${schoolId}`, {
            method: 'GET',
            headers: header,
          });
          break;
        case 'male':
          response = await fetch(`${apiURL}/api/student/load_g/${schoolId}/male`, {
            method: 'GET',
            headers: header,
          });
          break;
        case 'female':
          response = await fetch(`${apiURL}/api/student/load_g/${schoolId}/female`, {
            method: 'GET',
            headers: header,
          });
          break;
        case 'grade':
          response = await fetch(`${apiURL}/api/student/load_grade/${schoolId}/${classLvl}`, {
            method: 'GET',
            headers: header,
          });
          break;
        case 'class':
            response = await fetch(`${apiURL}/api/student/load_c/${schoolId}/${classId}`, {
              method: 'GET',
              headers: header,
            });
            break;
        default:
          return;
      }

      const data = await response.json();
      setStudents(data || []); 
      setListType('');
    } catch (error) {
      console.error('Error fetching students:', error);
      setStudents([]);
    }
  };

  const getStudentsData = async (students) => {
    const dataWithRelations = await Promise.all(
      students.map(async (student) => {
        const userResponse = await fetch(`${apiURL}/api/user/load/${student.user_id}`, {
          method: 'GET',
          headers: header,
        });
        const userData = await userResponse.json();

        const classResponse = await fetch(`${apiURL}/api/class/load/${student.class_id}`, {
          method: 'GET',
          headers: header,
        });
        const classData = await classResponse.json();

        return { ...student, user: userData, class: classData };
      })
    );
    setStudentsData(dataWithRelations);
  };

  useEffect(() => {
    getStudents();
  }, [schoolId, listType, classId]);

  useEffect(() => {
    if (students.length > 0) {
      getStudentsData(students);
    } else {
      setStudentsData([]);
    }
  }, [students, listType, classId]);

  const classNames = {
    filteringbtn: 'font-xs font-w-400 flex-row justify-start m-5 br-10px',
  }

  const navigate = useNavigate();
  const handleViewStudent = (student) => {
    navigate('/principal/students/list/view', {state: {student}})
  }
  return (
    <>
    <div className="flex-row gap-10">

        <RowWrapper className='h-30px justify-center align-center p-5 br-30px back-color-blue60-20 bw-1px bs-solid bc-blue60-70`' 
            style={{cursor: 'pointer', zIndex:'100'}}
            onClick={() => setFilterDisplay(!filterDisplay)}
            >
            <FontAwesomeIcon icon='fa-solid fa-filter' />
            <Heading6 text='Filter' />
        </RowWrapper>

        {filterDisplay && 
        <RowWrapper style={{position: 'absolute',backdropFilter:'blur(6px)', marginTop: '40px'}}
            className="back-color-gray10-40 color-black p-10 p-10px br-20px bw-none">
            <ColumnWrapper className='bw-none'>
            <Paragraph text='Gender' />
            <ColumnWrapper className='bw-none'>
                <SecondaryButton 
                    className = {classNames.filteringbtn} 
                    onClick={() => (setListType('all'), setListFilterName('All Students'), setFilterDisplay(!filterDisplay))} 
                    style={{ cursor: 'pointer' }}>
                        All Students
                </SecondaryButton>

                <SecondaryButton 
                    className = {classNames.filteringbtn} 
                    onClick={() => (setListType('male'), setListFilterName('Male Students'), setFilterDisplay(!filterDisplay))} 
                    style={{ cursor: 'pointer' }}>
                        Male Students
                </SecondaryButton>

                <SecondaryButton 
                    className = {classNames.filteringbtn} 
                    onClick={() => (setListType('female'), setListFilterName('Female Students'), setFilterDisplay(!filterDisplay))} 
                    style={{ cursor: 'pointer' }}>
                        Female Students
                </SecondaryButton>

            </ColumnWrapper>
            </ColumnWrapper>
            <ColumnWrapper className='bw-none'>
            <Paragraph text='Class' />
            <ColumnWrapper className='bw-none'>
                <SecondaryButton 
                    className = {classNames.filteringbtn} 
                    onClick={() => (setListType('all'), setFilterDisplay(!filterDisplay))}>
                    All Classes
                </SecondaryButton>
                {classGrades.map((item) => (
                <SecondaryButton
                    key={item}
                    className = {classNames.filteringbtn}
                    onClick={() => {
                    setClassLvl(item);
                    setListType('grade');
                    setListFilterName(`Class ${item} Students`);
                    setFilterDisplay(!filterDisplay)
                    }}
                    style={{ cursor: 'pointer' }}>
                    Class {item}
                </SecondaryButton>
                ))}
            </ColumnWrapper>
            </ColumnWrapper>
            <ColumnWrapper className='bw-none'>
            <Paragraph text='Class and Section' />
            <ColumnWrapper className='bw-none'>
                {classes.map((item) => (
                <SecondaryButton
                    key={item.class_id}
                    className = {classNames.filteringbtn}
                    onClick={() => {
                    setClassId(item.class_id);
                    setListType('class');
                    setListFilterName(`Class ${item.class_grade}, Section ${item.section_name} Students`);
                    setFilterDisplay(!filterDisplay);
                    }}
                    style={{ cursor: 'pointer' }}>
                    Class {item.class_grade}, Section {item.section_name}
                </SecondaryButton>
                ))}
            </ColumnWrapper>
            </ColumnWrapper>
        </RowWrapper>
        }

      <div>
        <Heading3 text="Students List" />
        <Heading6
          text={listFilterName}
          className="font-w-300"
        />
        
      </div>
    </div>
    <div className="flex-row align-start gap-20">
        {studentsData.length > 0 ? (
        <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        className="br-10px back-color-white font-w-100 font-sm"
        >
        <thead className="bw-0">
            <tr>
            <th className="bw-none">Student ID</th>
            <th className="bw-none">Name</th>
            <th className="bw-none">Gender</th>
            <th className="bw-none">Class</th>
            <th className="bw-none">Section</th>
            </tr>
        </thead>
        <tbody>
            {studentsData.map((student, index) => (
            <tr key={index} className="bw-0" style={{cursor: 'pointer'}} onClick={() => handleViewStudent(student)}>
                <td className="bc-gray100-30">{`${student.id_number}`}</td>
                <td className="bc-gray100-30">{`${student.user.first_name} ${student.user.middle_name} ${student.user.last_name}`}</td>
                <td className="bc-gray100-30">{student.user.gender}</td>
                <td className="bc-gray100-30">Class {student.class.class_grade}</td>
                <td className="bc-gray100-30">Section {student.class.class_name}</td>
            </tr>
            ))}
        </tbody>
        </table>) : (
        <Heading5 className='color-red100' text="No students" />)}
        <Outlet />
    </div>
    </>
  );
}

export default StudentList;