import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select';

import { Heading3, Label } from '../../../../components/Typography'
import { PrimaryButton } from '../../../../components/buttons'
import { InputField } from '../../../../components/input_field'
import ColumnWrapper from '../../../../components/column_wrapper';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AssesmentAdd = () => {
    const teacherData = JSON.parse(localStorage.getItem('data'));
    const apiURL = import.meta.env.VITE_API_URL;

    const {token} = localStorage.getItem('jwt');
    const header = {'authorization': `Bearer ${token}`};
    const [teacherClass, setTeacherClass] = useState([]);
    const [teacherCourse, setTeacherCourse] = useState([]);
    const [classCourse, setClassCourse] = useState([]);
    const [assesments, setAssesments ] = useState([]);

    const [course, setCourse] = useState([]);


    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    useEffect(()=>{
        setUserData({...userData, school_id:teacherData.school.school_id, teacher_id: teacherData.teacher.teacher_id})
    }, []);

    const fetchTeacherCourse = async (teacherId) => {
        try{
            const response = await fetch(`${apiURL}/api/teacher-course/load_course/${teacherId}/courses`, {
                method: 'GET',
                headers: header
            });
            const data = await response.json();
            setTeacherCourse(data);
        }catch(error){
            console.error(error);
        }
    }
    
    useEffect(() => {
        fetchTeacherCourse(teacherData.teacher.teacher_id);
    }, []);

    const fetchClassCourse = async (classId) => {
        try {
            const response = await fetch(`${apiURL}/api/assign_course/${classId}/courses`, {
                method: 'GET',
                headers: header
            });
            const data = await response.json();
            setClassCourse(data);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(()=> {
        fetchClassCourse(userData.class_id);
    }, [userData.class_id]);
    
    const fetchClasses = async (teacherId) => {
        try{
            const response = await fetch(`${apiURL}/api/teacher-class/load_class/${teacherId}/classes`, {
                method: 'GET',
                headers: header
            });
            const data = await response.json();
            setTeacherClass(data);
        }catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        fetchClasses(teacherData.teacher.teacher_id);
    },[teacherCourse]);

    useEffect(() => {
        if (classCourse.length > 0) {
            const matchingCourses = classCourse.filter(classCourseItem =>
                teacherCourse.some(teacherCourseItem => teacherCourseItem.course_id === classCourseItem.course_id)
            );
            setCourse(matchingCourses);
        }
    }, [classCourse, teacherCourse]);
    
    console.log("Class Courses: ", classCourse);
    console.log("Teacher Courses: ", teacherCourse);
    console.log("Course of class - teacher: ", course);
    
    // API endpoint to add assesment to the database
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData);
        
        try {
            const result = await axios.post(`${apiURL}/api/assesment/create`, userData, {
                headers: header
            });
            // const response = await result.json();
            console.log(result);

            if (result.status === 201) {
                alert('Assesment added successfully')
            }
            navigate('/teacher/assesments/')
        } catch (error) {
            console.error(error);
        }
        
        // navigate('/teacher/assesments/')
    }
    
    const handleCloseButton = () => {
        navigate('/teacher/assesments/')
    }

    return (
        <div 
            style={{position: 'absolute', top:'0', left: '0', backdropFilter:'blur(3px)', background: '#4d4d4da4'}} 
            className='w-100p h-100p p-10 flex-row justify-center align-center'
            >
            <div 
                className='back-color-white w-30p p-10 br-10px'
                style={{minHeight: '100px'}}
            >
                <div className="w-100p flex-row justify-end pr-10">
                    <FontAwesomeIcon 
                        icon='fa-solid fa-xmark' 
                        style={{cursor: 'pointer'}}
                        onClick={handleCloseButton}
                        className="p-5 w-20px h-20px back-color-red100 br-20px color-white"
                        />
                </div>
                <div className='w-100p flex-row justify-center'>
                    <Heading3 text='Add New Assesment' />
                </div>
                <form onSubmit={handleSubmit}>
                    <InputField 
                        labelName='Assesment Name'
                        placeholder="Eg. Midterm Exam" 
                        name="assesment_name" 
                        type="text" 
                        value={userData.assesment_name} 
                        onChange={e => setUserData({...userData, assesment_name: e.target.value})}
                    />
                    <ColumnWrapper className='bw-none'>
                        <Label text='Assesment Type' />
                        <Select 
                            placeholder='Select Assesment type'
                            // value={userData.assesment_type}
                            options={
                                [
                                    {value: 'Exam', label: 'Exam'},
                                    {value: 'Quiz', label: 'Quiz'},
                                    {value: 'Assignment', label: 'Assignment'},
                                    {value: 'Project', label: 'Project'}
                                ]

                            }
                            onChange={e => setUserData({...userData, assesment_type: e.value})}
                        />
                    </ColumnWrapper>

                    <ColumnWrapper className='bw-none'>
                        <Label text='Class' />
                        <Select 
                            placeholder='Select Class'
                            // value={userData.class}
                            options={teacherClass.map(item => ({value: item.class_id, label: `Grade ${item.class_grade} Section ${item.class_name}`}))}
                            onChange= {e => setUserData({...userData, class_id: e.value})}
                        />
                    </ColumnWrapper>

                    <ColumnWrapper className='bw-none'>
                        <Label text='Course' />
                        <Select 
                            placeholder='Select Course'
                            // value={userData.class}
                            options={course.map(item => ({value: item.course_id, label: `${item.course_name} Grade ${item.course_grade}`}))}
                            onChange= {e => setUserData({...userData, course_id: e.value})}
                        />
                    </ColumnWrapper>

                    <InputField 
                        labelName='Maximum Mark'
                        placeholder='Eg. 20'
                        name='max_mark'
                        type='number'
                        value={userData.max_mark}
                        onChange={e => setUserData({...userData, max_mark: e.target.value})}
                    />
                     <ColumnWrapper className='bw-none'>
                        <Label text='Status' />
                        <Select 
                            placeholder='Select Status'
                            // value={userData.class}
                            options={[
                                {value: 'ongoing', label: 'Ongoing'},
                                {value: 'completed', label: 'Completed'},
                                {value: 'active', label: 'Active'},
                                {value: 'inactive', label: 'Inactive'}
                            ]}
                            onChange= {e => setUserData({...userData, status: e.value})}
                        />
                    </ColumnWrapper>

                    <PrimaryButton>
                        Add
                    </PrimaryButton>
                </form>
            </div>
        </div>
        )
}

export default AssesmentAdd