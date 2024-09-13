import React, { useEffect, useState } from "react";
import { Heading4, Heading6, Label } from "../../../components/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { SecondaryButton } from "../../../components/buttons";

function Teachers() {
  const apiURL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('jwt');
  const header = { authorization: `Bearer ${token}` };

  const schoolData = JSON.parse(localStorage.getItem('data'));
  const schoolId = schoolData.school.school_id;

  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [classes, setClasses] = useState([]);
  const [assignedClasses, setAssignedClasses] = useState([]);
  const [classModify, setClassModify] = useState(false);
  const [teacherListType, setTeacherListType] = useState('all');
  const [classId, setClassId] = useState('');
  const [categoryName, setCategoryName] = useState('All');

  const [teachersData, setTeachersData] = useState([]);

  const getTeachers = async () => {
    setTeachers([]);
    setTeachersData([]);

    try {
      let response;
      switch (teacherListType) {
        case 'all':
          response = await fetch(`${apiURL}/api/teacher/load_s/${schoolId}`, {
            method: 'GET',
            headers: header,
          });
          break;

        case 'section':
          response = await fetch(`${apiURL}/api/teacher-class/load_teacher/${classId}/teachers`, {
            method: 'GET',
            headers: header,
          });
          break;

        default:
          throw new Error('Invalid teacher list type'); // Handle invalid case
      }

      const data = await response.json();
      setTeachers(data || []);
      console.log("Fetched: ",data);

    } catch (error) {
      console.error('Error fetching teachers:', error);
      setTeachers([]); // Make sure the state is reset in case of failure
    }
  };

  const getTeachersData = async (teachers) => {
    const dataWithRelations = await Promise.all(
      teachers.map(async (teacher) => {
        const userResponse = await fetch(`${apiURL}/api/user/load/${teacher.user_id}`, {
          method: 'GET',
          headers: header,
        });
        const userData = await userResponse.json();

        const classResponse = await fetch(`${apiURL}/api/teacher-class/load_class/${teacher.teacher_id}/classes`, {
          method: 'GET',
          headers: header,
        });
        const classData = await classResponse.json();

        const courseResponse = await fetch(`${apiURL}/api/teacher-course/load_course/${teacher.teacher_id}/courses`, {
          method: 'GET',
          headers: header,
        });
        const courseData = await courseResponse.json();

        return { ...teacher, user: userData, class: classData, course: courseData };
      })
    );
    setTeachersData(dataWithRelations);
  };

  useEffect(() => {
    getTeachers();
  }, [schoolId, teacherListType, classId, assignedClasses]); 

  useEffect(() => {
    if (teachers.length > 0) {
      getTeachersData(teachers);
    } else {
      setTeachersData([]);
    }
  }, [teachers]);

  const handleViewTeacher = (teacher) => {
    setSelectedTeacher(teacher);
  };

  // console.log("Selected Teacher: ", selectedTeacher);

  // console.log('Hello, ', teachersData);

  const getClasses = async (school_id) => {
      try {
          const classes = await fetch(`${apiURL}/api/class/load_s/${school_id}`);
          const data = await classes.json();
          setClasses(data);
      } catch (err) {
          console.error('Error fetching class: ', err);
      }
  }

  useEffect(() => {
    getClasses(schoolId); // Fetch classes based on schoolId
  }, [schoolId]);

  // console.log("Classes: ",classes)


  const handleAssignTeacherToClass = async (class_id, teacher_id) => {
    try{
      const response = await axios.post(`${apiURL}/api/teacher-class/assign`, {
        class_id: class_id,
        teacher_id: teacher_id}, {
          headers: header
        })
      const data = response.data;
      alert(data.message);
      getAssignedClasses(selectedTeacher?.teacher_id);
    } catch (error) {
      console.error(error);
    }
  }

  const handleRemoveTeacherFromClass = async (class_id, teacher_id) => {
    try {
      const response = await axios({
        method: 'delete',
        url: `${apiURL}/api/teacher-class/remove`,
        headers: header,
        data: {
          teacher_id: teacher_id,
          class_id: class_id,
        },
      });

      const data = response.data;
      alert(data.message);
      getAssignedClasses(selectedTeacher?.teacher_id);

    } catch (error) {
      alert("Error Occured, read console message")
      // console.log(error)
    }
  }

  const getAssignedClasses = async(teacher_id) => {
    try{
      const response = await fetch(`${apiURL}/api/teacher-class/load_class/${teacher_id}/classes`, {
        method: 'GET',
        headers: header
      });
      const data = await response.json();
      setAssignedClasses(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (selectedTeacher && selectedTeacher.teacher_id) {
      getAssignedClasses(selectedTeacher.teacher_id);
    }
  }, [selectedTeacher]);
  

  // console.log('Assigned Classes: ',assignedClasses);

  const handleModifyToggle = () => {
    setClassModify(!classModify);
  }

  console.log("Teacher List Type: ", teacherListType);
  console.log("Class Id: ", classId);
  console.log("Teachers: ", teachers);

  return(
    <div>
      <div>
        <h2>Teachers</h2>
      </div>
      <div className="flex-row gap-10 justify-start align-start">
          <div className="flex-column w-100p gap-10">  
            <div>
              <SecondaryButton 
                className='font-xs font-w-400 m-5' 
                onClick={() => {
                  setTeacherListType('all');
                  setCategoryName('All');
                }}
                >
                  All Teachers
              </SecondaryButton>
              {
                classes.map((c) => (
                  <SecondaryButton 
                    className='font-xs font-w-400 m-5' 
                    onClick={() => {
                      setTeacherListType('section');
                      setClassId(c.class_id)
                      setCategoryName(`Class ${c.section_name}`);
                    }
                      }>
                      {`Class ${c.section_name} Teachers`}
                  </SecondaryButton>

                ))
              }
            </div>

              {
                teachersData.length > 0 ? 
                <>
                  <Heading4 text={`${categoryName} Teachers`} />
                  <table
                      border="1"
                      cellPadding="10"
                      cellSpacing="0"
                      className="br-10px back-color-white font-w-100 font-sm w-100p bw-none"
                      style={{color: '#034303'}}>

                      <thead className="bw-0">
                          <tr>
                              <th className="bw-none">Name</th>
                              <th className="bw-none">Specialization</th>
                              {/* <th className="bw-none">Classes</th> */}
                              {/* <th className="bw-none">Gender</th> */}
                          </tr>
                      </thead>
                      <tbody>
                          {teachersData.map((teacher, index) => (
                          <tr key={index} className="bw-0" style={{cursor: 'pointer'}}  onClick={() => handleViewTeacher(teacher)} >
                              <td className="bc-gray100-30" style={{color: 'black', fontWeight: '400'}}>{`${teacher.user.gender === 'Male'?'Mr. ':'Ms. '} ${teacher.user.first_name} ${teacher.user.middle_name} ${teacher.user.last_name}`}</td>
                              <td className="bc-gray100-30">{teacher.specialization}</td>
                              {/* <td className="bc-gray100-30">{teacher.class.map((c) => (`${c.section_name}`))}</td> */}
                              {/* <td className="bc-gray100-30">{teacher.user.gender}</td> */}
                          </tr>
                          ))}
                      </tbody>
                  </table>
                </>
            :
            <div>
              <p>No teachers found</p>
            </div>
              }
          </div>

          { selectedTeacher &&
          <div className="shadow-xl br-20px w-100p p-10 back-color-white ">
              <div 
                className="flex-row justify-start gap-10 shadow-lg br-20px p-10 back-color-gray100-10" 
                style={{position: 'sticky'}}>
                  <div className="br-20px p-10 flex-row justify-center align-center" >                    
                      <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="w-100px h-100px"/>
                  </div>
                  <div className="br-20px p-10">
                      <div className="flex-row gap-5">
                          <Label text="Name" className="font-w-100 font-xs"/>
                          <Label text={`${selectedTeacher.user.first_name} ${selectedTeacher.user.middle_name} ${selectedTeacher.user.last_name}`} className="font-w-600"/>
                      </div>
                      <div className="flex-row gap-5">
                          <Label text="Employee Number" className="font-w-100 font-xs" />
                          <Label text={selectedTeacher.employee_number || 'N/A'} className="font-w-600" />
                      </div>
                      <div className="flex-row gap-5">
                          <Label text="Position" className="font-w-100 font-xs" />
                          <Label text={selectedTeacher.position || 'N/A'} className="font-w-600" />
                      </div>
                      <div className="flex-row gap-5">
                          <Label text="Years of Experience" className="font-w-100 font-xs" />
                          <Label text={selectedTeacher.years_of_experience || 'N/A'} className="font-w-600" />
                      </div>
                  </div>
              </div>
              <div>
                <div className="flex-row justify-between">
                  <h3>Classes</h3>
                  <div className="flex-row align-center gap-5">
                    <Heading6 text='Modify Class' className='font-w-100'/>
                      <div
                          onClick={handleModifyToggle}
                          className={`flex-row align-center w-50px h-25px br-15px back-color-white bw-2px bs-solid bc-blue100 ${classModify?'justify-end':'justify-start'}`} 
                          style={{cursor: 'pointer'}}>
                          <div className="w-20px h-20px back-color-blue100 br-50p mr-4 ml-4"></div>
                      </div>
                  </div>

                </div>
                  <div className="flex-row br-10px p-5 justify-center gap-10 back-color-gray80-10">
                      <div className="br-10px p-5 w-100p">
                        <h4>Assigned Classes</h4>
                          <div className="flex-column shadow-xs br-10px p-5 gap-5">
                            {assignedClasses.length > 0
                              // selectedTeacher.class.map((c, index) => (
                              ?assignedClasses.map((c, index) => (
                                <div className="font-xs flex-row align-center gap-10 back-color-white p-10 br-10px">
                                  <p>{`${index+1}- Grade ${c.class_grade}, Section ${c.class_name}`}</p>
                                  {classModify && <FontAwesomeIcon 
                                      icon='fa-solid fa-xmark' 
                                      onClick={() => handleRemoveTeacherFromClass(c.class_id, selectedTeacher.teacher_id)} 
                                      style={{cursor:'pointer'}}
                                      className="flex-row p-5 color-red100 w-30px bw-1px bs-dashed bc-red100 br-20px back-color-red30-10"
                                      />
                                  }
                                </div>
                              ))
                              : <Label text='No class is assigned' className='color-red100'/>
                            }
                          </div>
                      </div>

                      {classModify &&<div className="back-color-white br-10px p-5 w-100p">
                        <h4>All Classes</h4>
                            {
                              classes.map((c,index) => (
                                <div className="font-xs flex-row justify-center align-center">
                                  {
                                    assignedClasses.map((assigned) => assigned.class_id).includes(c.class_id)
                                    // selectedTeacher.class.map((assigned) => assigned.class_id).includes(c.class_id)
                                    
                                    ?<div className="flex-row align-center gap-5 bw-1px bs-solid bc-blue60 p-10 br-20px back-color-blue60">
                                      <FontAwesomeIcon icon='fa-solid fa-check' />
                                      Assigned
                                    </div>
                                    
                                    :<div 
                                      className="flex-row align-center gap-5 bw-1px bs-solid bc-blue60 p-10 br-20px" 
                                      style={{cursor:'pointer'}}
                                      onClick={() => handleAssignTeacherToClass(c.class_id, selectedTeacher.teacher_id)}
                                      >
                                        <FontAwesomeIcon icon='fa-solid fa-check' />
                                        Assign
                                    </div>
                                  }
                                  <p>{`${index+1}- Grade ${c.class_grade}, Section ${c.class_name}`}</p>
                                </div>
                              ))
                            }
                      </div>}
                  </div>
              </div>
          </div>
          }
      </div>
    </div>
  );
}

export default Teachers;