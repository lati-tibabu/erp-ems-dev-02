import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MessageModal from '../../../../components/message-modal';

const AssesmentView = () => {

    const apiURL = import.meta.env.VITE_API_URL;
    const {token} = localStorage.getItem('jwt');
    const header = {'authorization': `Bearer ${token}`};
    const teacherData = JSON.parse(localStorage.getItem('data'));

    const location = useLocation();
    const navigate = useNavigate();
    
    const assesment = location.state.assesment;

    const [assesmentUploaded, setAssesmentUploaded] = useState(false);

    const handleCloseButton = () => {
        navigate('/teacher/assesments/', {replace: true})
    }

    const handleDeleteAssesment = async (assesmentID) => {
        try{
            const response = await axios.delete(`${apiURL}/api/assesment/delete/${assesmentID}`, {
                headers: header,
            });
            // console.log(response.data);
            navigate(`/teacher/assesments/?refresh=${new Date().getTime()}`)
        }catch(error){
            console.error(error);
        }
    }

    const handleUploadForStudent = async (assesmentId, classId) => {
        console.log(assesmentId, classId);
        try{
            const response = await fetch(`${apiURL}/api/student/loadid_c/${teacherData.school.school_id}/${classId}`, {
                method: 'GET',
                headers: header,
            });
            const studentsIdData = await response.json();

            if (studentsIdData){
                const response = await axios.post(`${apiURL}/api/assesment-student/assign`, {
                    assesment_id: assesmentId,
                    student_id: studentsIdData
                }, {
                    headers: header,
                });
                // console.log(response.status);
                if (response.status === 201){
                    setAssesmentUploaded(true);
                }
            }
            // console.log("Students ID", studentsIdData);
        } catch(error){
            console.error(error);
        }
        console.log("Assesment ID", assesmentId);
        
    }
    return (
        <div 
            className='back-color-white w-100p p-10 br-10px bw-1px bs-solid bc-blue100'
            >
            <div className="w-100p flex-row justify-end pr-10">
                <FontAwesomeIcon 
                    icon='fa-solid fa-xmark' 
                    style={{cursor: 'pointer'}}
                    onClick={handleCloseButton}
                    className="p-5 w-20px h-20px back-color-black br-20px color-white"
                    />
            </div>
            <div className='m-10'>
                <button
                    className='upload-button back-color-blue100 font-w-200 flex-row gap-10 justify-center'
                    onClick={() => handleUploadForStudent(assesment.assesment_id, assesment.class_id,)}
                    >
                    Upload for student    
                    <FontAwesomeIcon icon={'fa-solid fa-cloud-upload'} />
                </button>
            </div>
            <div>
                <div 
                    className='p-10 br-4px back-color-gray100-10 color-black'
                    >
                    <h3 style={{ marginBottom: '10px' }}>Assessment Details</h3>
                    <p><strong>Name:</strong> <span>{assesment.assesment_name}</span></p>
                    <p><strong>Type:</strong> <span>{assesment.assesment_type}</span></p>
                    <p><strong>Class/Grade:</strong> <span>{`Grade ${assesment.Class.class_grade} Section ${assesment.Class.class_name}`}</span></p>
                    <p><strong>Maximum Mark:</strong> <span>{assesment.max_mark}</span></p>

                    <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>Performance Analytics</h3>
                    <p><strong>Average Score:</strong> <span>75</span></p>
                    <p><strong>Highest Score:</strong> <span>98</span></p>
                    <p><strong>Lowest Score:</strong> <span>52</span></p>
                    <p><strong>Pass Rate:</strong> <span>85%</span></p>

                    <h3 style={{ marginTop: '20px', marginBottom: '10px' }}>Class Comparison</h3>
                    <p><strong>Class Average:</strong> <span>78</span></p>    

                </div>
                <div className='flex-row justfiy-around gap-20 p-20'>
                    <button className='back-color-green100 font-w-200'>
                        <FontAwesomeIcon 
                            icon='fa-solid fa-pen-to-square' />
                        Edit
                    </button>

                    <button 
                        className='back-color-red100 font-w-200'
                        onClick={() => handleDeleteAssesment(assesment.assesment_id)}
                        >
                        <FontAwesomeIcon 
                            icon='fa-solid fa-trash' />
                        Delete
                    </button>

                </div>
            </div>

            {assesmentUploaded && 
                <MessageModal 
                    message_title='Successful'
                    message='Assesment successfully uploaded to students.'
                    succesful
                    navigateTo='/teacher/assesments/'
                />
            }
            <style>
                {
                    `
                        .upload-button:hover{
                            background: skyblue;
                            transition: 400ms;
                            color: black;
                        }
                        .upload-button:active{
                            scale: 1.1;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default AssesmentView