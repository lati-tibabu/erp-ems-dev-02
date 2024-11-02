import React, { useEffect, useState } from "react";
import { Heading3, Heading4, Heading5, Heading6, Label, Paragraph } from "../../../components/Typography";
import { InputField } from "../../../components/input_field";
import { PrimaryButton, SecondaryButton } from "../../../components/buttons";
import ColumnWrapper from "../../../components/column_wrapper";
import RowWrapper from "../../../components/row_wrapper";
import api from '../../../api';
import { Outlet } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";

library.add(fas);

function Classes() {
    const apiURL = import.meta.env.VITE_API_URL;

    const {token} = localStorage.getItem('jwt');
    const header = {'authorization': `Bearer ${token}`};

    const [userDataInfo, setUserDataInfo] = useState(() => JSON.parse(localStorage.getItem('data')));
    const [classes, setClasses] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [teachersData, setTeachersData] = useState([]);
    const [classReload, setClassReload] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null); // For storing the selected class details
    const [courseModify, setCourseModify] = useState(false);
    const [courses, setCourses] = useState([]);
    const [assignedCourse, setAssignedCourse] = useState([]);
    const [synchronizing, setSynchronizing] = useState(false);

    const [classData, setClassData] = useState({
        class_grade: '',
        class_name: '',
        section_name: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setClassData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

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
        getClasses(userDataInfo?.school?.school_id);
    }, [classReload]);

    classes.sort((a, b) => a.class_grade - b.class_grade);

    const handleSubmit = (event) => {
        event.preventDefault();
        setClassReload(false);

        if (classData.class_name && classData.class_grade) {
            const updatedClassData = {
                ...classData,
                section_name: `${classData.class_grade}${classData.class_name}`,
                school_id: userDataInfo.school.school_id,
            };

            setClassData(updatedClassData);

            api.post(`${apiURL}/api/class/create`, updatedClassData)
                .then((response) => {
                    alert(`Class created successfully with id ${response.data.class_id}`);
                    setClassReload(true);
                })
                .catch((error) => console.error('Error creating class:', error));
        }
    };

    // Updated handleClassView to display selected class
    const handleClassView = (selectedClass) => {
        setSelectedClass(selectedClass);
    }

    const handleModifyToggle = () => {
        setCourseModify(!courseModify);
    }

    const getCourses = async () => {
        try {
            const response = await axios.get(`${apiURL}/api/course/load`, {
                headers: header,
            });
            const data = await response.data;
            // console.log(data);
            setCourses(data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    }

    useEffect(()=> {
        getCourses();
    }, [courseModify]);

    const handleAssignCourse = async (course_ID, class_ID) => {
        try {
            const response = await axios.post(`${apiURL}/api/assign_course/assign`, {
                    course_id: course_ID,
                    class_id: class_ID,
                },{
                headers: header,
            });
            
            const data = await response.data;
            console.log(data);

            getCourses();
            // getAssignedCourses();
        } catch (error) {
            console.error('Error assigning course:', error);
        }
    }

    const handleCourseDelete = async (course_ID, class_ID) => {
        // alert('Clicked')
        try {
            // const response = await axios.delete(`${apiURL}/api/assign_course/remove`, 
            //     {
            //         course_id: course_ID,
            //         class_id: class_ID
            //     },
            //     {
            //     headers: header
            // });
            const response = await axios({
                method: 'delete',
                url: `${apiURL}/api/assign_course/remove`,
                headers: header,
                data: {
                    course_id: course_ID,
                    class_id: class_ID,
                },
            });
            const data = await response.data;
            console.log(data);
            getCourses();
            // getAssignedCourses();
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    }
    
    const getAssignedCourses = async (class_ID) => {
        if (!class_ID) {
            console.error('Class ID is missing');
            return;
        }
    
        try {
            const response = await fetch(`${apiURL}/api/assign_course/${class_ID}/courses`, {
                method: 'GET',
                headers: header,
            });
            const data = await response.json();
            console.log('Assigned courses:', data);
            setAssignedCourse(data);  // Set the fetched assigned courses
        } catch (error) {
            console.error('Error fetching assigned courses:', error);
        }
    };
    
    useEffect(()=> {
        if(selectedClass?.class_id){
            getAssignedCourses(selectedClass?.class_id);
        }
    }, [selectedClass, courses]);

    // console.log("assignedCourse: ",assignedCourse);
    
    // console.log("courses: ",courses);
    // console.log("classes: ", classes);

    const synchronizeCourseClass = async () => {
        try {
            setSynchronizing(true);
            courses.forEach(courseObj => {
                classes.forEach(classObj => {
                    if(courseObj.course_grade === classObj.class_grade){
                        handleAssignCourse(courseObj.course_id, classObj.class_id)
                    }
                });
            });
            setSynchronizing(false);
        } catch (error) {
            console.error('Error synchronizing courses and classes:', error);
        }
    }

    const colorArray = ['blue', 'red', 'orange', 'green', 'purple'];

    const getTeachers = async (classId) => {
        setTeachers([]);
        setTeachersData([]);
    
        try {
            const response = await fetch(`${apiURL}/api/teacher-class/load_teacher/${classId}/teachers`, {
                method: 'GET',
                headers: header,
              });
            const data = await response.json();
            setTeachers(data || []);
            console.log("Fetched: ",data);
        } catch (error) {
            console.error('Error fetching teachers:', error);
            setTeachers([]); 
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

                const courseResponse = await fetch(`${apiURL}/api/teacher-course/load_course/${teacher.teacher_id}/courses`, {
                    method: 'GET',
                    headers: header,
                    });
                const courseData = await courseResponse.json();

                return { ...teacher, user: userData, course: courseData };
            })
        );
        setTeachersData(dataWithRelations);
    };

    useEffect(() => {
        getTeachers(selectedClass?.class_id);
    }, [selectedClass]);

    useEffect(() => {
        if (teachers.length > 0) {
            getTeachersData(teachers);
        } else {
            setTeachersData([]);
        }
    }, [teachers]);

    console.log("teachersData: ", teachers);


    return (
        <>
            <div className="flex-column">
                <RowWrapper className='bw-none gap-50 justify-start'>
                    <form onSubmit={handleSubmit} 
                    className="w-50p max-w-400px flex-column p-15 back-color-white br-10px bw-1px bs-solid bc-blue60 bw-none">
                        <Heading3 text='Add Class' />
                        <InputField
                            name="class_grade"
                            labelName="Class Grade"
                            type="number"
                            value={classData.class_grade}
                            onChange={handleInputChange}
                            placeholder="Enter class grade"
                            required
                        />

                        <InputField
                            name="class_name"
                            labelName="Section"
                            value={classData.class_name}
                            onChange={handleInputChange}
                            placeholder="Enter class name"
                            required
                        />

                        <PrimaryButton type="submit" className="font-sm font-w-400">
                            Add Class
                        </PrimaryButton>
                    </form>

                    <div className='p-10 bw-1px bs-solid bc-blue60 br-10px bw-none'>
                        
                        <div className="flex-row justify-end">
                            <SecondaryButton onClick={synchronizeCourseClass} className='flex-row gap-10 justify-center align-center bw-none mb-20'>
                                <FontAwesomeIcon icon='fa-solid fa-arrows-rotate' />
                                <p className="font-w-400">
                                    Synchronize Classes and Courses    
                                </p>
                            </SecondaryButton> 
                        </div>

                        <Heading6 text={`Classes in ${userDataInfo.school.name}`} />
                        <ColumnWrapper className='bw-3px h-250px gap-10 p-20 br-20px' style={{flexWrap: 'wrap', overflowX: 'scroll'}}>
                            {
                                classes.length > 0 ?
                                    classes.map((c, index) => (
                                        <SecondaryButton
                                            className='flex-row bw-none gap-10'
                                            key={c.class_id}
                                            onClick={() => handleClassView(c)}
                                        >
                                            <Label text={index+1} />
                                            <Heading4 text={`Grade ${c.class_grade} - `} />
                                            <Heading5 text={`Section: ${c.class_name}`} />
                                        </SecondaryButton>
                                    ))
                                    :
                                    <Heading4 className='color-red100' text="No classes found" />
                            }
                        </ColumnWrapper>
                    </div>
                </RowWrapper>

                <ColumnWrapper className='p-10 bw-none br-10px back-color-white'>
                    <Heading3 text='Class Detail' />
                    <div>
                        {selectedClass ? (
                            <div className='flex-row gap-10 p-10 bw-1px bs-solid bc-blue60 color-blue60 back-color-blue60-10 br-10px'>
                                <div className="flex-column gap-10 p-15 bw-1px bs-solid bc-blue60">
                                    <Heading4 text={`Class Grade: ${selectedClass.class_grade}`} />
                                    <Heading5 text={`Class Section: ${selectedClass.class_name}`} />
                                    <Paragraph text={`Total Students: ${selectedClass.total_students || 'N/A'}`} />
                                </div>
                                <div className="bw-1px bs-solid bc-blue60 back-color-white shadow-lg w-90p p-16 br-25px">
                                    <div className="flex-row justify-between">
                                        <Heading5 text='Courses' />
                                        <div className="flex-row align-center gap-5">
                                            <Heading6 text='Modify Courses' className='font-w-100'/>
                                            <div
                                                onClick={handleModifyToggle}
                                                className={`flex-row align-center w-50px h-25px br-15px back-color-white bw-2px bs-solid bc-blue100 ${courseModify?'justify-end':'justify-start'}`} 
                                                style={{cursor: 'pointer'}}>
                                                <div className="w-20px h-20px back-color-blue100 br-50p mr-4 ml-4"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-row justify-between gap-10 ">
                                        <div className="bw-1px bs-solid bc-blue60 br-20px w-100p p-10 m-5">
                                            <Heading6 text='Assigned Courses' />    
                                            {assignedCourse.length > 0 
                                            ?<div className="flex-column gap-10 p-10 m-5">    
                                                {assignedCourse.map((course, index) => (
                                                    <div className="flex-row justify-between gap-16 align-center p-10 bw-1px bs-solid bc-blue60 br-20px">
                                                        <Label  /*key={course.course_id}*/ 
                                                            key={index+1} 
                                                            text={`${index+1}. ${course.course_name} - Grade ${course.course_grade}`} 
                                                            className='font-w-600' />

                                                        {courseModify &&<FontAwesomeIcon 
                                                            icon='fa-solid fa-xmark' 
                                                            className="color-red100 w-40px h-20px p-5 br-20px back-color-red100-10" 
                                                            onClick={() => handleCourseDelete(course.course_id, selectedClass.class_id)} 
                                                            style={{cursor: 'pointer'}} 
                                                            />}
                                                    </div>
                                                ))}
                                            </div>
                                            :<Heading4 text='No course is assigned to this class' />
                                        }
                                        </div>
                                        {courseModify &&
                                        <div className="bw-1px bs-solid bc-blue60 br-20px w-100p p-10 m-5">
                                            <Heading6 text='Course Lists' />
                                            <div>
                                                {courses.map((course) => (
                                                    <div className="flex-row gap-16 align-center p-10">
                                                        {
                                                        // assignedCourse.includes(course.course_id)
                                                        // !assignedCourse.length>0
                                                        (assignedCourse.length>0&&
                                                            assignedCourse.map((assigned) => assigned.course_id).includes(course.course_id)
                                                        ? 
                                                        <div
                                                            style={{cursor: 'pointer'}} 
                                                            className="color-white back-color-blueGreen100 font-xs bw-1px bs-solid bc-blueGreen100 br-10px p-2">
                                                            <FontAwesomeIcon icon='fa-solid fa-check' />
                                                            Assigned
                                                        </div>
                                                        :
                                                        <div 
                                                            style={{cursor: 'pointer'}} 
                                                            className="color-blueGreen100 font-xs bw-1px bs-solid bc-blueGreen100 br-10px p-2"
                                                            onClick={() => handleAssignCourse(course.course_id, selectedClass.class_id)}>
                                                            <FontAwesomeIcon icon='fa-solid fa-check' />
                                                            Assign
                                                        </div>)
                                                        }
                                                        <Label  key={course.course_id} text={`${course.course_name} - Grade ${course.course_grade}`} className='font-w-600' />   
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Paragraph text="Select a class to view details." />
                        )}
                    </div>
                    <Outlet />
                </ColumnWrapper>
            </div>

            <div 
                style={{position: 'absolute', top: '0', left: '0', backdropFilter: 'blur(3px)', display: synchronizing?'flex':'none'}} 
                className="flex-row align-center justify-center w-100s h-100s back-color-gray100-30">

                <div className="flex-column justify-center align-center w-40s h-40s back-color-white br-30px gap-30">
                    <FontAwesomeIcon icon='fa-solid fa-sync' fontSize={60} style={{animation: 'rotate 2s linear infinite'}} className="color-blue60"/>
                    <Heading4 text='Synchronizing Course with Classes' />
                </div>
            </div>

        </>
    );
}

export default Classes;
