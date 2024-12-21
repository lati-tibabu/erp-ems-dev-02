import React, { useState } from "react";

import ColumnWrapper from "../../../../../components/column_wrapper";
import RowWrapper from "../../../../../components/row_wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Heading3, Heading5, Label } from "../../../../../components/Typography";
import { TertiaryButton } from "../../../../../components/buttons";
import { useLocation, useNavigate } from "react-router-dom";
function ViewStudent() {

    const location = useLocation();
    const student = location.state.student;
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    // console.log(student)

    const handleViewStudent = (studentData) => {
        // alert('view student')
        navigate('/principal/students/list/detail', {state: {studentData}})
    }

    const handleCloseButton = () => {
        navigate('/principal/students/list/')
    }
    return(
        <ColumnWrapper className='w-30p back-color-white shadow-lg p-20 br-10px bw-none'>
            <div className="w-100p flex-row justify-end pr-10">
                <FontAwesomeIcon 
                    icon='fa-solid fa-xmark' 
                    style={{cursor: 'pointer'}}
                    onClick={handleCloseButton}
                    className="p-5 w-20px h-20px back-color-red100 br-20px color-white"
                    />
            </div>
            <ColumnWrapper style={{justifyContent: 'center', alignItems: 'center', gap: '20px', border: 'none',}}>
                <img 
                    src={student.user.profile_photo || 'default-image-url.png'} 
                    alt="principal_profile_image"
                    style={{width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover'}}/>
                <Label style={{fontWeight: 'bold'}} text={`${student.user.first_name} ${student.user.middle_name} ${student.user.last_name}`}/>
            </ColumnWrapper>

            <ColumnWrapper style={{gap: '10px', border: 'none',}}>
                <RowWrapper style={{gap: '10px', border: 'none',}}>
                    <ColumnWrapper style={{gap: '10px', border: 'none',}}>
                        <Label text='Gender' style={{fontWeight: 'bold'}}/>
                        {/* <Label text='Male' /> */}
                        <Label text={student.user.gender} />
                    </ColumnWrapper>
                </RowWrapper>

                <RowWrapper style={{justifyContent:'space-between', alignItems: 'center', border: 'none'}}>
                    <ColumnWrapper style={{gap: '10px', border: 'none',}}>
                        <Label text='Email' style={{fontWeight: 'bold'}}/>
                        {/* <Label text='tokuma@gmail.com' /> */}
                        <Label text={student.user.email} />
                    </ColumnWrapper>
                    <FontAwesomeIcon icon='fa-solid fa-envelope' color='rgba(0,130,239,0.6)' style={{cursor: 'pointer'}}/>
                </RowWrapper>

                <RowWrapper style={{justifyContent:'space-between', alignItems: 'center', border: 'none'}}>
                    <ColumnWrapper style={{gap: '10px', border: 'none',}}>
                        <Label text='Student Class' style={{fontWeight: 'bold'}}/>
                        {/* <Label text='tokuma@gmail.com' /> */}
                        <Label text={`Class ${student.Class.section_name}`} />
                    </ColumnWrapper>
                    <FontAwesomeIcon icon='fa-solid fa-envelope' color='rgba(0,130,239,0.6)' style={{cursor: 'pointer'}}/>
                </RowWrapper>

                <Heading5 text='Login Credentials' />
                <ColumnWrapper className='bw-none'>
                    <RowWrapper className='bw-none gap-10 justify-between p-10'>
                        <Label text='Username' style={{fontWeight: 'bold'}}/> 
                        <Label text={`${student.user.userCredential?.username}`} className='font-sm font-w-400 ' />                
                    </RowWrapper>
                    <RowWrapper className='bw-none gap-10 justify-between p-10'>
                        <Label text='Password' style={{fontWeight: 'bold'}}/> 
                        <div className="flex-row justify-center gap-10">
                            <Label text={showPassword?`${student.user.userCredential?.password}`:'*****'} className='font-sm font-w-400 ' />
                            <FontAwesomeIcon 
                                icon={`fa-solid ${showPassword?'fa-eye-slash':'fa-eye'}`}
                                className="font-sm" 
                                style={{cursor: 'pointer'}}
                                onClick={()=>{setShowPassword(!showPassword)}}
                                />
                        </div>
                    </RowWrapper>
                </ColumnWrapper>
                <div> 
                    <button className="back-color-blue100 font-xs" onClick={() => handleViewStudent(student)}>View Student</button>
                </div>
            </ColumnWrapper>

            {/* <TertiaryButton style={{fontSize: '0.7rem'}} >View Profile</TertiaryButton> */}
        </ColumnWrapper>
    );
}

export default ViewStudent;
