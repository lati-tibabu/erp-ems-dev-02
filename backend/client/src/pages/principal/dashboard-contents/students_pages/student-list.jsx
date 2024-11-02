// import React, { useEffect, useState } from "react";
// import api from "../../../../api";
// import { Heading3, Heading1, Heading6, Paragraph, Heading5, Label } from "../../../../components/Typography";
// import ColumnWrapper from "../../../../components/column_wrapper";
// import RowWrapper from "../../../../components/row_wrapper";
// import { SecondaryButton, TertiaryButton } from "../../../../components/buttons";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Outlet, useNavigate } from "react-router-dom";
// import * as XLSX from 'xlsx';
// import { saveAs } from 'file-saver';

// library.add(fas);

// function StudentList() {
//   const apiURL = import.meta.env.VITE_API_URL;
//   const token = localStorage.getItem('jwt');
//   const header = { authorization: `Bearer ${token}` };
//   const schoolData = JSON.parse(localStorage.getItem('data'));
//   const schoolId = schoolData.school.school_id;

//   const [students, setStudents] = useState([]);
//   const [studentsData, setStudentsData] = useState([]);
//   const [classes, setClasses] = useState([]);
//   const [credentials,  setCredentials] = useState({});
//   const [classId, setClassId] = useState('');
//   const [classLvl, setClassLvl] = useState('');
//   const [listType, setListType] = useState('all');
//   const [listFilterName, setListFilterName] = useState('All Students');
//   const [filterDisplay, setFilterDisplay] = useState(false);
//   const [query, setQuery] = useState('');

//   const getClasses = async () => {
//     try {
//       const response = await fetch(`${apiURL}/api/class/load_s/${schoolId}`);
//       const data = await response.json();
//       setClasses(data);
//     } catch (error) {
//       console.error('Error fetching classes:', error);
//     }
//   };

//   useEffect(() => {
//     getClasses();
//   }, [schoolId]);

//   useEffect(() => {
//     if (classes.length > 0) {
//       classes.sort((a, b) => a.class_grade - b.class_grade);
//     }
//   }, [classes]);

//   const classGrades = [...new Set(classes.map((item) => item.class_grade))];

//   const handleInputChange = async (e) => {
//     setQuery(e.target.value);
//     try {
//       const response = await fetch(`${apiURL}/api/student/search?query=${query}&school_id=${schoolId}`);
//       if (response.ok) {
//         const data = await response.json();
//         setStudents(data); 
//       } else {
//         console.error('Failed to fetch students');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // const handleStudentSearch = async () => {
//   //   // const schoolId = schoolId; 
//   //   try {
//   //     const response = await fetch(`${apiURL}/api/student/search?query=${query}&school_id=${schoolId}`);
//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       setStudents(data); 
//   //     } else {
//   //       console.error('Failed to fetch students');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //   }
//   // };


//   const getStudents = async () => {
//     setStudents([]);
//     setStudentsData([]);

//     try {
//       let response;
//       switch (listType) {
//         case 'all':
//           response = await fetch(`${apiURL}/api/student/load_s/${schoolId}`, {
//             method: 'GET',
//             headers: header,
//           });
//           break;
//         case 'male':
//           response = await fetch(`${apiURL}/api/student/load_g/${schoolId}/male`, {
//             method: 'GET',
//             headers: header,
//           });
//           break;
//         case 'female':
//           response = await fetch(`${apiURL}/api/student/load_g/${schoolId}/female`, {
//             method: 'GET',
//             headers: header,
//           });
//           break;
//         case 'grade':
//           response = await fetch(`${apiURL}/api/student/load_grade/${schoolId}/${classLvl}`, {
//             method: 'GET',
//             headers: header,
//           });
//           break;
//         case 'class':
//             response = await fetch(`${apiURL}/api/student/load_c/${schoolId}/${classId}`, {
//               method: 'GET',
//               headers: header,
//             });
//             break;
//         default:
//           return;
//       }

//       const data = await response.json();
//       setStudents(data || []); 
//       setListType('');
//     } catch (error) {
//       console.error('Error fetching students:', error);
//       setStudents([]);
//     }
//   };
  

//   const getStudentsData = async (students) => {
//     const dataWithRelations = await Promise.all(
//       students.map(async (student) => {
//         const userResponse = await fetch(`${apiURL}/api/user/load/${student.user_id}`, {
//           method: 'GET',
//           headers: header,
//         });
//         const userData = await userResponse.json();

//         const classResponse = await fetch(`${apiURL}/api/class/load/${student.class_id}`, {
//           method: 'GET',
//           headers: header,
//         });

//         const classData = await classResponse.json();

//         const credentialsResponse = await fetch (`${apiURL}/api/credentials/loadu/${student.user_id}`, {
//           method: 'GET',
//           headers: header
//         });
//         const credentialsData = await credentialsResponse.json() || []; // Ensure it's an array

//         return { ...student, user: userData, class: classData, credentials: credentialsData };
//       })
//     );
//     setStudentsData(dataWithRelations);
//   };

//   useEffect(() => {
//     getStudents();
//   }, [schoolId, listType, classId]);

//   useEffect(() => {
//     if (students.length > 0) {
//       getStudentsData(students);
//     } else {
//       setStudentsData([]);
//     }
//   }, [students, listType, classId]);

//   console.log("Student Data: ", studentsData)
//   const classNames = {
//     filteringbtn: 'font-xs font-w-400 flex-row justify-start m-5 br-10px',
//   }

//   const navigate = useNavigate();
//   const handleViewStudent = (student) => {
//     navigate('/principal/students/list/view', {state: {student}})
//   }
  

//   // Export to CSV
//   const exportToCSV = () => {
//     const worksheet = XLSX.utils.json_to_sheet(studentsData.map((student, index) => ({
//       RollNo: index + 1,
//       IDNumber: student.id_number,
//       StudentName: `${student.user.first_name} ${student.user.middle_name} ${student.user.last_name}`,
//       Gender: student.user.gender,
//       Grade: student.class.class_grade,
//       Section: student.class.class_name,
//     })));
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
//     const csvData = XLSX.write(workbook, { bookType: 'csv', type: 'array' });
//     const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
//     saveAs(blob, `${schoolData.school.name} - ${listFilterName} - Students.csv`);
//   };

//   // Export to Excel
//   const exportToExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(studentsData.map((student, index) => ({
//       RollNo: index + 1,
//       IDNumber: student.id_number,
//       StudentName: `${student.user.first_name} ${student.user.middle_name} ${student.user.last_name}`,
//       Gender: student.user.gender,
//       Grade: student.class.class_grade,
//       Section: student.class.class_name,
//     })));
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
//     const excelData = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
//     const blob = new Blob([excelData], { type: 'application/octet-stream' });
//     saveAs(blob, `${schoolData.school.name} - ${listFilterName} - Students.xlsx`);
//   };

//   // const handleSort = () => {
//     // setWithRoleNo(true);
//     studentsData.sort((a, b) => a.user.first_name.localeCompare(b.user.first_name));
//   // }
  
//   return (
//     <>
//     <div className="flex-row gap-10">

//         <RowWrapper className='h-30px justify-center align-center p-5 br-30px back-color-blue60-20 bw-1px bs-solid bc-blue60-70`' 
//             style={{cursor: 'pointer', zIndex:'100'}}
//             onClick={() => setFilterDisplay(!filterDisplay)}
//             >
//             <FontAwesomeIcon icon='fa-solid fa-filter' />
//             <Heading6 text='Filter' />
//         </RowWrapper>

//         {filterDisplay && 
//         <RowWrapper style={{position: 'absolute',backdropFilter:'blur(6px)', marginTop: '40px'}}
//             className="back-color-gray10-40 color-black p-10 p-10px br-20px bw-none">
//             <ColumnWrapper className='bw-none'>
//             <Paragraph text='Gender' />
//             <ColumnWrapper className='bw-none'>
//                 <SecondaryButton 
//                     className = {classNames.filteringbtn} 
//                     onClick={() => (setListType('all'), setListFilterName('All Students'), setFilterDisplay(!filterDisplay))} 
//                     style={{ cursor: 'pointer' }}>
//                         All Students
//                 </SecondaryButton>

//                 <SecondaryButton 
//                     className = {classNames.filteringbtn} 
//                     onClick={() => (setListType('male'), setListFilterName('Male Students'), setFilterDisplay(!filterDisplay))} 
//                     style={{ cursor: 'pointer' }}>
//                         Male Students
//                 </SecondaryButton>

//                 <SecondaryButton 
//                     className = {classNames.filteringbtn} 
//                     onClick={() => (setListType('female'), setListFilterName('Female Students'), setFilterDisplay(!filterDisplay))} 
//                     style={{ cursor: 'pointer' }}>
//                         Female Students
//                 </SecondaryButton>

//             </ColumnWrapper>
//             </ColumnWrapper>
//             <ColumnWrapper className='bw-none'>
//             <Paragraph text='Class' />
//             <ColumnWrapper className='bw-none'>
//                 <SecondaryButton 
//                     className = {classNames.filteringbtn} 
//                     onClick={() => (setListType('all'),setListFilterName('All Students'), setFilterDisplay(!filterDisplay))}>
//                     All Classes
//                 </SecondaryButton>
//                 {classGrades.map((item) => (
//                 <SecondaryButton
//                     key={item}
//                     className = {classNames.filteringbtn}
//                     onClick={() => {
//                     setClassLvl(item);
//                     setListType('grade');
//                     setListFilterName(`Class ${item} Students`);
//                     setFilterDisplay(!filterDisplay)
//                     }}
//                     style={{ cursor: 'pointer' }}>
//                     Class {item}
//                 </SecondaryButton>
//                 ))}
//             </ColumnWrapper>
//             </ColumnWrapper>
//             <ColumnWrapper className='bw-none'>
//             <Paragraph text='Class and Section' />
//             <ColumnWrapper className='bw-none'>
//                 {classes.map((item) => (
//                 <SecondaryButton
//                     key={item.class_id}
//                     className = {classNames.filteringbtn}
//                     onClick={() => {
//                     setClassId(item.class_id);
//                     setListType('class');
//                     setListFilterName(`Class ${item.class_grade}, Section ${item.section_name} Students`);
//                     setFilterDisplay(!filterDisplay);
//                     }}
//                     style={{ cursor: 'pointer' }}>
//                     Class {item.class_grade}, Section {item.section_name}
//                 </SecondaryButton>
//                 ))}
//             </ColumnWrapper>
//             </ColumnWrapper>
//         </RowWrapper>
//         }

//       <div>
//         <Heading3 text="Students List" />
//         <Heading6
//           text={listFilterName}
//           className="font-w-300"
//         />
        
//       </div>
//     </div>
    
//     <div className="flex-column gap-20 back-color-gray100-10 p-10">
        
//     <div id="student_search" className="flex-row w-40p align-center">
//       <div className='back-color-blue100 color-white p-10 font-sm'>
//         Search
//       </div>
//       <input
//         id="bar"
//         placeholder="Search student"
//         type="text"
//         className="flex-grow-1 p-10"
//         style={{borderRadius: '0 10px 10px 0'}}
//         value={query}
//         onChange={handleInputChange} />
//       {/* <div
//         id="search_button"
//         className="flex-row justify-center align-center back-color-blue100 color-white p-10"
//         style={{ cursor: 'pointer' }}
//         onClick={handleStudentSearch} >
//         <FontAwesomeIcon icon="fa-solid fa-search" />
//       </div> */}
//     </div>
        
//     {/* principals.count === 0?
//         <CenterColumn>
//           <img src={loading} alt="" style={{width: '100px'}} />
//         </CenterColumn>
//         : */}

//         <div className="flex-row align-start gap-20 p-20 br-50px justify-between ">
//         {studentsData.length > 0 ? (
//             <table
//             border="1"
//             cellPadding="10"
//             cellSpacing="0"
//             className="br-10px back-color-white font-w-100 font-sm w-100p bw-none"
//             style={{color: '#034303'}}>
//             <thead className="bw-0">
//                 <tr>
//                     <th className="bw-none">Student ID</th>
//                     <th className="bw-none">Name</th>
//                     <th className="bw-none">Gender</th>
//                     <th className="bw-none">Grade</th>
//                     <th className="bw-none">Section</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {studentsData.map((student, index) => (
//                 <tr key={index} className="bw-0 font-w-400" style={{cursor: 'pointer'}} onClick={() => handleViewStudent(student)}>
//                     <td className="bc-gray100-30">{`${student.id_number}`}</td>
//                     <td className="bc-gray100-30">{`${student.user.first_name} ${student.user.middle_name} ${student.user.last_name}`}</td>
//                     <td className="bc-gray100-30">{student.user.gender}</td>
//                     <td className="bc-gray100-30">Class {student.class.class_grade}</td>
//                     <td className="bc-gray100-30">Section {student.class.class_name}</td>
//                 </tr>
//                 ))}
//             </tbody>
//             </table>) : (
//             <Heading5 className='color-red100' text="No students" />)}
//             <Outlet />
//         </div>
//     </div>
//     <div className="flex-row gap-10 mt-20" style={{justifyContent: 'center'}}>
//       <SecondaryButton onClick={exportToCSV}>Export to CSV</SecondaryButton>
//       <SecondaryButton onClick={exportToExcel}>Export to Excel</SecondaryButton>
//     </div>
//     </>
//   );
// }

// export default StudentList;


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
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

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
  const [credentials,  setCredentials] = useState({});
  const [classId, setClassId] = useState('');
  const [classLvl, setClassLvl] = useState('');
  // State for the current list type (all, male, female, grade, class)
  const [listType, setListType] = useState('all');
  // State for the name displayed in the filter section
  const [listFilterName, setListFilterName] = useState('All Students');
  const [filterDisplay, setFilterDisplay] = useState(false);
  const [query, setQuery] = useState('');

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

  const handleInputChange = async (e) => {
    setQuery(e.target.value);
    try {
      const response = await fetch(`${apiURL}/api/student/search?query=${query}&school_id=${schoolId}`);
      if (response.ok) {
        const data = await response.json();
        setStudents(data); 
      } else {
        console.error('Failed to fetch students');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to fetch students based on the current list type
  const getStudents = async () => {
    setStudents([]); // Reset students before fetching new data

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
      setStudents(data); // Update students state with fetched data
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    getStudents(); 
  }, [listType, classId, classLvl]); 

  console.log(students);


  // const getStudentsData = async (students) => {
  //   const dataWithRelations = await Promise.all(
  //     students.map(async (student) => {
  //       const userResponse = await fetch(`${apiURL}/api/user/load/${student.user_id}`, {
  //         method: 'GET',
  //         headers: header,
  //       });
  //       const userData = await userResponse.json();

  //       const classResponse = await fetch(`${apiURL}/api/class/load/${student.class_id}`, {
  //         method: 'GET',
  //         headers: header,
  //       });

  //       const classData = await classResponse.json();

  //       const credentialsResponse = await fetch (`${apiURL}/api/credentials/loadu/${student.user_id}`, {
  //         method: 'GET',
  //         headers: header
  //       });
  //       const credentialsData = await credentialsResponse.json() || []; // Ensure it's an array

  //       return { ...student, user: userData, class: classData, credentials: credentialsData };
  //     })
  //   );
  //   setStudentsData(dataWithRelations);
  // };

  // useEffect(() => {
  //   if (students.length > 0) {
  //     getStudentsData(students);
  //   } else {
  //     setStudentsData([]);
  //   }
  // }, [students, listType, classId]);

  // console.log("Student Data: ", studentsData)
  const classNames = {
    filteringbtn: 'font-xs font-w-400 flex-row justify-start m-5 br-10px',
  }

  const navigate = useNavigate();
  const handleViewStudent = (student) => {
    navigate('/principal/students/list/view', {state: {student}})
  }
  

  // Export to CSV
  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(studentsData.map((student, index) => ({
      RollNo: index + 1,
      IDNumber: student.id_number,
      StudentName: `${student.user.first_name} ${student.user.middle_name} ${student.user.last_name}`,
      Gender: student.user.gender,
      Grade: student.class.class_grade,
      Section: student.class.class_name,
    })));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    const csvData = XLSX.write(workbook, { bookType: 'csv', type: 'array' });
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, `${schoolData.school.name} - ${listFilterName} - Students.csv`);
  };

  // Export to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(studentsData.map((student, index) => ({
      RollNo: index + 1,
      IDNumber: student.id_number,
      StudentName: `${student.user.first_name} ${student.user.middle_name} ${student.user.last_name}`,
      Gender: student.user.gender,
      Grade: student.class.class_grade,
      Section: student.class.class_name,
    })));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    const excelData = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelData], { type: 'application/octet-stream' });
    saveAs(blob, `${schoolData.school.name} - ${listFilterName} - Students.xlsx`);
  };

  // Button handlers for filtering
  const handleAllStudents = () => {
    setListType('all');
    setListFilterName('All Students');
  };

  const handleMaleStudents = () => {
    setListType('male');
    setListFilterName('Male Students');
  };

  const handleFemaleStudents = () => {
    setListType('female');
    setListFilterName('Female Students');
  };

  const handleClassGrade = (grade) => {
    setClassLvl(grade);
    setListType('grade');
    setListFilterName(`Class ${grade} Students`);
  };

  const handleClassSection = (classId, grade, sectionName) => {
    setClassId(classId);
    setListType('class');
    setListFilterName(`Class ${grade}, Section ${sectionName} Students`);
  };

  // const handleSort = () => {
    // setWithRoleNo(true);
    // studentsData.sort((a, b) => a.user.first_name.localeCompare(b.user.first_name));
    // students.sort((a, b) => a.user.first_name.localeCompare(b.user.first_name));
  // }
  
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
                    onClick={handleAllStudents} 
                    style={{ cursor: 'pointer' }}>
                        All Students
                </SecondaryButton>

                <SecondaryButton 
                    className = {classNames.filteringbtn} 
                    onClick={handleMaleStudents} 
                    style={{ cursor: 'pointer' }}>
                        Male Students
                </SecondaryButton>

                <SecondaryButton 
                    className = {classNames.filteringbtn} 
                    onClick={handleFemaleStudents} 
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
                    onClick={handleAllStudents}>
                    All Classes
                </SecondaryButton>
                {classGrades.map((item) => (
                <SecondaryButton
                    key={item}
                    className = {classNames.filteringbtn}
                    onClick={() => handleClassGrade(item)}
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
                    onClick={() => handleClassSection(item.class_id, item.class_grade, item.section_name)}
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
    
    <div className="flex-column gap-20 back-color-gray100-10 p-10">
        
    <div id="student_search" className="flex-row w-40p align-center">
      <div className='back-color-blue100 color-white p-10 font-sm'>
        Search
      </div>
      <input
        id="bar"
        placeholder="Search student"
        type="text"
        className="flex-grow-1 p-10"
        style={{borderRadius: '0 10px 10px 0'}}
        value={query}
        onChange={handleInputChange} />
      {/* <div
        id="search_button"
        className="flex-row justify-center align-center back-color-blue100 color-white p-10"
        style={{ cursor: 'pointer' }}
        onClick={handleStudentSearch} >
        <FontAwesomeIcon icon="fa-solid fa-search" />
      </div> */}
    </div>
        
    {/* principals.count === 0?
        <CenterColumn>
          <img src={loading} alt="" style={{width: '100px'}} />
        </CenterColumn>
        : */}

        <div className="flex-row align-start gap-20 p-20 br-50px justify-between ">
        {/* {studentsData.length > 0 ? ( */}
        {students.length > 0 ? (
            <table
            border="1"
            cellPadding="10"
            cellSpacing="0"
            className="br-10px back-color-white font-w-100 font-sm w-100p bw-none"
            style={{color: '#034303'}}>
            <thead className="bw-0">
                <tr>
                    <th className="bw-none">Student ID</th>
                    <th className="bw-none">Name</th>
                    <th className="bw-none">Gender</th>
                    <th className="bw-none">Grade</th>
                    <th className="bw-none">Section</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                // {studentsData.map((student, index) => (
                <tr key={index} className="bw-0 font-w-400" style={{cursor: 'pointer'}} onClick={() => handleViewStudent(student)}>
                    <td className="bc-gray100-30">{`${student.id_number}`}</td>
                    <td className="bc-gray100-30">{`${student.user.first_name} ${student.user.middle_name} ${student.user.last_name}`}</td>
                    <td className="bc-gray100-30">{student.user.gender}</td>
                    <td className="bc-gray100-30">Class {student?.Class?.class_grade}</td>
                    <td className="bc-gray100-30">Section {student?.Class?.class_name}</td>
                </tr>
                ))}
            </tbody>
            </table>) : (
            <Heading5 className='color-red100' text="No students" />)}
            <Outlet />
        </div>
    </div>
    <div className="flex-row gap-10 mt-20" style={{justifyContent: 'center'}}>
      <SecondaryButton onClick={exportToCSV}>Export to CSV</SecondaryButton>
      <SecondaryButton onClick={exportToExcel}>Export to Excel</SecondaryButton>
    </div>
    </>
  );
}

export default StudentList;