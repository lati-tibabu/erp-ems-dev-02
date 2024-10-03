import React, { useEffect, useState } from "react";
import ColumnWrapper from "../../../components/column_wrapper";
import { PrimaryButton, SecondaryButton } from "../../../components/buttons";
import { Heading3, Heading4, Heading5, Label, Paragraph } from "../../../components/Typography";
import { InputField } from "../../../components/input_field";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function Course() {
    const {token} = localStorage.getItem('jwt');
    const header = {'authorization': `Bearer ${token}`};

    const apiURL = import.meta.env.VITE_API_URL;

    const [courses, setCourses] = useState([]);
    const [courseName, setCourseName] = useState({course_name: '', course_grade: 0});
    const [showBulkAddForm, setShowBulkAddForm] = useState(false);


    const getCourses = async () => {
        try {
            const response = await axios.get(`${apiURL}/api/course/load`, {headers: header});
            const data = response.data;
            setCourses(data);
        } catch (error) {
            console.log(error);
        }
    }
    

    useEffect(() => {
        getCourses();
    }, []);

    console.log(courses);

    const handleDelete = async (course_id) => {
        try {
            if (window.confirm(`Are you sure you want to delete the course with id ${course_id}?`)) {
                const response = await axios.delete(`${apiURL}/api/course/delete/${course_id}`, {
                    headers: header
                });
                const data = response.data;
                console.log(data);
                getCourses();
            } else {
                console.log('Deletion canceled');
            }
        } catch (error) {
            console.error(error);
        }
        // alert("Course: ", course_id)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (courseName.course_name.trim() === "") {
            console.log("Course name is required");
            return;
        }
        // proceed to submit
        try {
            const response = await axios.post(`${apiURL}/api/course/create`, courseName , 
                { 
                    headers: header 
                });
            const data = response.data;
            setCourses([...courses, data]);  // Optionally update the courses list in real-time
            setCourseName({ course_name: '', course_grade: 0 });  // Reset form input
        } catch (error) {
            console.log(error);
        }
    }
    
  return(
    <div className="flex-row gap-10 p-5">
        <ColumnWrapper className='min-h-70s w-100p br-10px shadow-xs bw-none back-color-white align-start'>
            <Heading3 text='Add Course' />
            <form 
                className="flex-column bw-1px bs-dashed bc-blueGreen100-50 p-10 align-center br-15px w-90p mt-10"
                onSubmit={handleSubmit}>
                    {/* Name: {courseName} */}
                <InputField 
                    labelName='Course Name' 
                    required type="text" 
                    placeholder="Enter Course Name"
                    onChange={(e) => setCourseName(prev => ({...prev, course_name:e.target.value}))}
                    value={courseName.course_name}
                    />
                <InputField 
                    labelName='Course Grade' 
                    required type="number" 
                    placeholder="Enter Course Grade"
                    onChange={(e) => setCourseName(prev => ({...prev, course_grade:e.target.value}))}
                    value={courseName.course_grade}
                />
                <PrimaryButton className='min-w-100px font-w-400 p-5 font-xs'>Add Course</PrimaryButton>
            </form>

            <div className="flex-column align-center w-90p p-20 ">
                <div className="flex-row justify-between w-100p back-color-blue60-60 color-blue90 p-10 br-30px font-xs">
                    <Paragraph text='Bulk Add Courses' className='font-w-700'/>
                    <FontAwesomeIcon icon={`fa-solid fa-chevron-${showBulkAddForm?'up':'down'}`} onClick={() => setShowBulkAddForm(!showBulkAddForm)} style={{cursor:'pointer'}}/>
                </div>
                { showBulkAddForm &&
                <form className="bw-2px bs-solid bc-blue60 br-20px back-color-blue60-10 w-90p flex-column justify-center align-center p-20 m-10">
                    <InputField labelName='Select Courses Excel file' type='file' accept=".xls, .xlsx" />
                    <PrimaryButton className='min-w-100px font-w-400 p-5 font-xs'>Add Courses To Database</PrimaryButton>
                </form>
                }
            </div>

            <div className="mt-50 p-10">
                <FontAwesomeIcon icon='fa-solid fa-info' className="w-20px h-20px back-color-blueGreen100-30 bw-1px bs-solid bc-blueGreen100 font-sm br-50p color-blueGreen100 p-10"/>
                <Heading5 text='Add new course' />
                <Label text='Use the form above to enter the course name. Once added, the school principal can select the courses offered at their school from the available list.' />
            </div>
        </ColumnWrapper>
        <ColumnWrapper className='min-h-70s w-100p br-10px shadow-xs bw-none back-color-white'>
            <Heading3 text='Courses/Subjects' />
            <div>
                <ul className="flex-column align-center p-20">
                    {/* <li><Paragraph text={courseName} /></li> */}
                    {
                        courses.length > 0
                        ? (courses.map((course) => (
                            <li className="flex-row w-100p justify-between bw-1px bs-solid bc-purple100-10 p-10 mb-10 br-20px">
                                <Paragraph text={`${course.course_name} - Grade ${course.course_grade}`} className='font-w-400'/> 
                                <div>
                                    <FontAwesomeIcon 
                                        icon='fa-solid fa-xmark' 
                                        className="color-red80 back-color-red10-10 w-70px bw-1px bs-dashed bc-red10 br-10px" 
                                        onClick={() => handleDelete(course.course_id)} 
                                        style={{cursor: 'pointer'}}/>
                                </div>
                            </li>
                        )))
                        : <Heading4 className='color-red10' text='No courses record' />
                    }
                </ul>
            </div>
        </ColumnWrapper>
    </div>
);
}

export default Course;
