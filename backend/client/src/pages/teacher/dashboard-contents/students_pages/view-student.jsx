import React, { useEffect, useState } from 'react'
import { Heading3, Heading5 } from '../../../../components/Typography'
import { useLocation, useNavigate } from 'react-router-dom'
import { InputField } from '../../../../components/input_field';
import axios from 'axios';
import { DangerButton, SecondaryButton } from '../../../../components/buttons';
import ColumnWrapper from '../../../../components/column_wrapper';



const ViewStudent = () => {
    const apiURL = import.meta.env.VITE_API_URL;

    const token = localStorage.getItem('jwt');
    const header = {'Authorization': `Bearer ${token}`}
    
    const location = useLocation();
    const navigate = useNavigate();

    const student = location.state.student;
    const teacherData = JSON.parse(localStorage.getItem('data'));

    const [assesment, setAssesment] = useState([]);
    const [assesmentMark, setAssesmentMark] = useState({});
    const [otherData, setOtherData] = useState({});
    const [buttonClicked, setButtonClicked] = useState(false);
    const [editMode, setEditMode] = useState(false);


    const handleOpenMarkFiller = async (event) => {
        event.preventDefault()

        const result = await axios.put(`${apiURL}/api/assesment-student/add-mark/${otherData.assesment_id}/${otherData.student_id}`, {
            student_mark: assesmentMark.student_mark,
            status: 'filled'
        }, {
            headers: header
        })

        if(result.status === 200){
            alert("Mark filled or updated");
        }

        // console.log(result);
    }

    // console.log("Viewed Student", student);
    const fetchAssesments = async () => {
        try{
            const response = await fetch(`${apiURL}/api/assesment-student/${student.student_id}/${teacherData.teacher.teacher_id}/assesments`);
            const data = await response.json();
            // console.log(data);
            setAssesment(data);
        }catch(error){
            console.log(error);
        }
    }

    useEffect( () => {
        fetchAssesments();
    }, [student, editMode])

    const handleCloseView = () => {
        navigate('/teacher/students');
    }

    return (
        <div className='student-modal w-100p h-100s flex-row align-center justify-center'>
            <div className="overflow-y-scroll back-color-white p-10 br-10px bw-2px bs-solid bc-blue80-20 w-50p h-90p">
                <div className='flex-row justify-center align-center'>
                    <h2>
                        Student Information
                    </h2>
                </div>
                <DangerButton className='close-btn' onClick={handleCloseView}>
                    Close
                </DangerButton>
                <div className="flex-row gap-10 align-center">
                    <img src={student.user.profile_photo}
                        alt="Placeholder Image" 
                        width={200} 
                        height={200} 
                        className="br-4px"
                        />
                    <div className='flex-column gap-10'>
                        <div className="flex-row gap-10">
                            <span className='font-w-800'>ID Number:</span>
                            <span>{student.id_number}</span>
                        </div>
                        <div className="flex-row gap-10">
                            <span className='font-w-800'>Student Name:</span>
                            <span>
                                {`${student.user.first_name} ${student.user.middle_name} ${student.user.last_name}`}
                            </span>
                        </div>
                        <div className="flex-row gap-10">
                            <span className='font-w-800'>Gender:</span>
                            <span>{student.user.gender}</span>
                        </div>
                        <div className="flex-row gap-10">
                            <span className='font-w-800'>Grade:</span>
                            <span>{`${student.Class.class_grade} Section ${student.Class.class_name}`}</span>
                        </div>
                    </div>
                    
                </div>

                <div>
                    <div className='flex-row align-center justify-between'>
                        <h3>
                            Fill Assesment Mark
                        </h3>
                        <p>
                            {`Total assesments: ${assesment.length}`}
                        </p>
                    </div>
                    {/* Semester tab */}
                    <ColumnWrapper className='mb-5'>
                        <Heading5 text="Semester" />
                        <div className='flex-row gap-10'>
                            <SecondaryButton>
                                1st Semester
                            </SecondaryButton>
                            <SecondaryButton>
                                2nd Semester
                            </SecondaryButton>
                        </div>
                    </ColumnWrapper>
                    <button 
                        onClick={() => setEditMode(!editMode)}
                        className='back-color-blue100-10 font-sm font-sm font-w-200 color-blue100 bw-1px bs-solid bc-blue100'
                    >
                        {
                            editMode ? 
                            'View Mark'
                            : 'Edit Mark'
                        }
                    </button>
                    <div className='flex-column gap-3'>
                    {
                        assesment.length > 0 ?
                        (assesment.map((assesmentItem, index) => (
                        <div className="flex-row gap-10 justify-start align-start p-5 br-4px back-color-gray40">
                            <div className='w-20px h-20px back-color-blue80 br-15px flex-column align-center justify-center color-white font-w-bold font-xl p-3'>
                                {index+1}
                            </div>
                            <div className='flex-1'>
                                {
                                    assesmentItem.AssesmentStudent.status === 'not_filled' ?
                                    <div className='flex-column align-center justify-center bw-1px bs-solid bc-orange100 p-3 mt-10 br-4px back-color-orange100-10'>
                                        <p className='p-2 br-5px font-xs'>Mark Status</p>
                                        <p className='back-color-orange100 p-2 br-5px color-white font-xs'>Not Filled</p>
                                    </div>
                                    :
                                    <div className='flex-column align-center justify-center bw-1px bs-solid bc-blueGreen100 p-3 mt-10 br-4px back-color-blueGreen100-10 h-100p'>
                                        <p className='p-2 br-5px font-xs'>Mark Status</p>
                                        <p className='back-color-blueGreen100 p-2 pl-10 br-5px color-white font-xs'>Filled</p>
                                    </div>
                                }
                            </div>
                            {/* form section for viewing and filling the mark information */}
                            <form className='flex-row align-start w-100p justify-between flex-3'
                                onSubmit={handleOpenMarkFiller}
                                >
                                <div className='flex-column align-center justify-center bw-1px bs-solid bc-purple100 p-3 br-4px back-color-purple100-10 h-100p'>
                                    <p className='p-2 br-5px font-xs'>Asm't Status</p>
                                    <p className='back-color-purple100 p-2 br-5px color-white font-xs'>{assesmentItem.status}</p>
                                </div>
                                {/* assesment Information section */}
                                <div className='flex-row justify-between w-100p'>    
                                    <div className=''>
                                        <div className='flex-row gap-10 align-center'>
                                            <p className='font-xs font-w-600'>Name: </p>
                                            <p className='font-sm'>{assesmentItem.assesment_name}</p>
                                        </div>
                                        <div className='flex-row gap-10 align-center'>
                                            <p className='font-xs font-w-600'>Type: </p>
                                            <p className='font-sm'>{assesmentItem.assesment_type}</p>
                                        </div>
                                        <div className='flex-row gap-10 align-center'>
                                            <p className='font-xs font-w-600'>Maximum: </p>
                                            <p className='font-sm'>{assesmentItem.max_mark}</p>
                                        </div>

                                    </div>
                                    {editMode === true ?
                                    <div className='flex-column align-center'>
                                        {/* input field for filling mark */}
                                        <InputField 
                                            placeholder={editMode ? assesmentItem.AssesmentStudent.student_mark:`Eg ${assesmentItem.max_mark}`}
                                            name='mark'
                                            type='number'
                                            labelName='Mark Result'
                                            required
                                            max={assesmentItem.max_mark}
                                            min={0}
                                            onChange={e => setAssesmentMark(
                                                {
                                                    student_mark: e.target.value,
                                                }
                                            )}
                                        />
                                        {/* submit button to fill mark */}
                                        <div className='w-100p flex-column'>
                                            <button 
                                                onClick={() => {setOtherData({
                                                    // create a student_mark where it is going to take from the form input named student_mark
                                                    assesment_id: assesmentItem.assesment_id,
                                                    student_id: student.student_id,
                                                    status: 'filled'
                                                }), setButtonClicked(!buttonClicked)}}
                                                className="color-white font-w-200 w-100p back-color-blue100 font-sm" 
                                            >
                                                Fill Mark
                                            </button>
                                        </div>
                                    </div>
                                    :<div className='flex-row gap-10 align-center'>
                                        <p className='font-xs font-w-600'>Result: </p>
                                        <p>{assesmentItem.AssesmentStudent.student_mark}</p>
                                    </div>
                                    }
                                </div>
                            </form>
                        </div>
                        )
                        ))
                        :
                        <p>
                            No assesment for this student
                        </p>
                    }
                    </div>
                </div>
            </div>
            <style>
                {
                    `
                        .student-modal{
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background-color: rgba(0, 0, 0, 0.5);
                            padding: 10px;
                            backdrop-filter: blur(3px);
                        }

                        .overflow-y-scroll{
                            overflow-y: scroll;
                        }

                        .close-btn{
                            position: fixed;
                            top: 5%;
                            right: 13%;
                            width: 10%;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default ViewStudent;