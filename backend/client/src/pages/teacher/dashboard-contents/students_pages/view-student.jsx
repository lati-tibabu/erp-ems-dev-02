import React, { useEffect, useState } from 'react'
import { Heading5 } from '../../../../components/Typography'
import { useLocation } from 'react-router-dom'
import { InputField } from '../../../../components/input_field';
import axios from 'axios';


const ViewStudent = () => {
    const apiURL = import.meta.env.VITE_API_URL;

    const token = localStorage.getItem('jwt');
    const header = {'Authorization': `Bearer ${token}`}
    
    const location = useLocation();

    const student = location.state.student;
    const teacherData = JSON.parse(localStorage.getItem('data'));

    const [assesment, setAssesment] = useState([]);
    const [assesmentMark, setAssesmentMark] = useState({});
    const [otherData, setOtherData] = useState({});


    const handleOpenMarkFiller = async (event) => {
        event.preventDefault()

        const result = await axios.put(`${apiURL}/api/assesment-student/add-mark/${otherData.assesment_id}/${otherData.student_id}`, {
            student_mark: assesmentMark.student_mark,
            status: 'filled'
        }, {
            headers: header
        })

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
    }, [student])

    console.log(assesment);

    return (
        <div className="back-color-white p-10 br-10px bw-2px bs-solid bc-blue80-20 w-70p">
            <Heading5 text="Selected Student Information" />
            <div className="flex-column gap-10">
                <img 
                    // src="https://via.placeholder.com/150" 
                    // load a placeholder for avatar from internet
                    src={student.user.profile_photo}
                    alt="Placeholder Image" 
                    width={150} 
                    height={150} 
                    className="br-4px"
                    />

                <div className="flex-row gap-10">
                    <span>ID Number:</span>
                    <span>{student.id_number}</span>
                </div>
                <div className="flex-row gap-10">
                    <span>Student Name:</span>
                    <span>
                        {`${student.user.first_name} ${student.user.middle_name} ${student.user.last_name}`}
                    </span>
                </div>
                <div className="flex-row gap-10">
                    <span>Gender:</span>
                    <span>{student.user.gender}</span>
                </div>
                <div className="flex-row gap-10">
                    <span>Grade:</span>
                    <span>{`${student.Class.class_grade} Section ${student.Class.class_name}`}</span>
                </div>
            </div>

            <div>
                <h3>
                Fill Assesment Mark
                </h3>
                <div className='flex-column gap-3'>
                {
                    assesment.length > 0 ?
                    (assesment.map((assesmentItem, index) => (
                    <div className="flex-row gap-10 justify-start align-start p-5 br-4px back-color-gray40">
                        <div>
                            {index+1}
                        </div>
                        {
                            assesmentItem.AssesmentStudent.status === 'not_filled' ?
                            <div className='flex-column align-center justify-center bw-1px bs-solid bc-orange100 p-3 mt-10 br-4px back-color-orange100-10'>
                                <p className='p-2 br-5px font-xs'>Mark Status</p>
                                <p className='back-color-orange100 p-2 br-5px color-white font-xs'>Not Filled</p>
                            </div>
                            :
                            <div className='flex-column align-center justify-center bw-1px bs-solid bc-blueGreen100 p-3 mt-10 br-4px back-color-blueGreen100-10'>
                                <p className='p-2 br-5px font-xs'>Mark Status</p>
                                <p className='back-color-blueGreen100 p-2 pl-10 br-5px color-white font-xs'>Filled</p>
                            </div>
                        }
                        <form 
                            onSubmit={handleOpenMarkFiller}
                            className='flex-row align-start w-100p'
                            >
                            <div className='flex-column align-center justify-center bw-1px bs-solid bc-purple100 p-3 br-4px back-color-purple100-10'>
                                <p className='p-2 br-5px font-xs'>Asm't Status</p>
                                <p className='back-color-purple100 p-2 br-5px color-white font-xs'>{assesmentItem.status}</p>
                            </div>
                            <div>
                                <label className='font-sm'>{assesmentItem.assesment_name}</label>
                                <p className='font-sm'>{assesmentItem.assesment_type}</p>
                                <p className='font-sm'>Out of {assesmentItem.max_mark}</p>

                            </div>
                            {
                                assesmentItem.AssesmentStudent.status === 'not_filled' ?
                                <InputField 
                                    placeholder={`Eg ${assesmentItem.max_mark}`}
                                    name='mark'
                                    type='number'
                                    max={assesmentItem.max_mark}
                                    min={0}
                                    onChange={e => setAssesmentMark(
                                        {
                                            student_mark: e.target.value,
                                        }
                                    )}
                                />
                                : <p>{assesmentItem.AssesmentStudent.student_mark}</p>
                            }
                            <button 
                                onClick={() => setOtherData({
                                    // create a student_mark where it is going to take from the form input named student_mark
                                    assesment_id: assesmentItem.assesment_id,
                                    student_id: student.student_id,
                                    status: 'filled'
                                })}
                                className="color-white font-w-200 w-40p back-color-blue100 font-sm" 
                            >
                            Fill Mark
                            </button>
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
    )
}

export default ViewStudent;