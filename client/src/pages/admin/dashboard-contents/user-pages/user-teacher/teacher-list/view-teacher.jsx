import React, { useEffect, useState } from 'react'
import '../../../../../../styles/admin-school.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../button-styles.css'

import TeacherListing from '../../../../../../components/teacher-components/teacher_listings';
import ColumnWrapper from '../../../../../../components/column_wrapper';
import RowWrapper from '../../../../../../components/row_wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Heading6, Label, Paragraph } from '../../../../../../components/Typography';
import { TertiaryButton } from '../../../../../../components/buttons';

library.add(fas)
function ViewTeacher() {

    const apiURL = import.meta.env.VITE_API_URL;
    const [teacher, setTeacher] = useState({});
    const [teacherData, setTeacherData] = useState({});
    const { teacherId } = useParams();
    const { state } = useLocation();

    // const getPrincipal = async (teacherId) => {
    //     try{
    //     const response = await fetch(`${apiURL}/api/teacher/load/${teacherId}`);
    //     const data = await response.json();
    //     setTeacher(data)
    //     } catch (error) {
    //         console.error('Error fetching teacher: ', error)
    //     }
    // };

    // const getPrincipalData = async (principalObj) =>{
    //     const dataWithRelation = await Promise.all([
    //         fetch(`${apiURL}/api/user/load/${principalObj.user_id}`).then(response => response.json()),
    //         fetch(`${apiURL}/api/school/load/${principalObj.school_id}`).then(response => response.json()),
    //         fetch(`${apiURL}/api/contact/loadu/${principalObj.user_id}`).then(response => response.json()),
    //     ]);

    //     const [user, school, contact] = dataWithRelation;

    //     const teacherData = { ...principalObj, user: user, school: school, contact: contact };
    
    //     setTeacherData(teacherData);
    // }        

    // useEffect(() => {
    //     if (teacherId) {
    //         getPrincipal(teacherId);
    //     }
    // }, [teacherId]);

    // useEffect(() => {
    //     if (teacher) {
    //         getPrincipalData(teacher);
    //     }
    // }, [teacher]);

    // console.log(teacher);
    // console.log("teacher Data", teacherData);

    useEffect(() => {
        setTeacherData(state?.teacher);
    },[state])

    const navigate = useNavigate();

    const handleViewProfile = (teacher) => {
        navigate(`/admin/users/overview/teacher/view_profile`, {state: {teacher}})
    }
    return (
        <ColumnWrapper style={{
            width: '30%',
            background: 'rgba(235,235,235,0.15)',
            boxShadow: '3px 3px 10px 4px #0000001a',
            padding: '20px',
            borderRadius: '40px',
            border: 'none',
            margin: '30px'
            }}>
                <RowWrapper style={{justifyContent: 'end', border: 'none', }}>
                <FontAwesomeIcon icon='fa-solid fa-xmark' color='rgba(0,130,239,0.6)' style={{cursor: 'pointer'}}/>
                </RowWrapper>
                <ColumnWrapper style={{justifyContent: 'center', alignItems: 'center', gap: '20px', border: 'none',}}>
                <img 
                // src="https://img.freepik.com/free-photo/confident-good-looking-beautiful-woman-with-blonde-dyed-hair-dressed-casual-clothes-looking-seriously_176420-15186.jpg" 
                src={teacherData?.user?.profile_photo ? teacherData?.user?.profile_photo : 
                    "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"} 
                    
                
                alt="principal_profile_image" 
                    style={{width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover'}}
                />
                <Label style={{fontWeight: 'bold'}} text={teacherData?.user?.first_name+" "+teacherData?.user?.middle_name+" "+teacherData?.user?.last_name} />
                </ColumnWrapper>
                <ColumnWrapper style={{gap: '10px', border: 'none',}}>

                <RowWrapper style={{gap: '10px', border: 'none',}}>
                    <ColumnWrapper style={{gap: '10px', border: 'none',}}>
                        <Label text='Gender' style={{fontWeight: 'bold'}}/>
                        <Label text={teacherData?.user?.gender} />
                    </ColumnWrapper>
                </RowWrapper>

                <RowWrapper style={{justifyContent:'space-between', alignItems: 'center', border: 'none'}}>
                    <ColumnWrapper style={{gap: '10px', border: 'none',}}>
                        <Label text='Email' style={{fontWeight: 'bold'}}/>
                        <Label text={teacherData?.user?.email} />
                    </ColumnWrapper>
                    <FontAwesomeIcon icon='fa-solid fa-envelope' color='rgba(0,130,239,0.6)' style={{cursor: 'pointer'}}/>
                </RowWrapper>

                <RowWrapper style={{justifyContent:'space-between', alignItems: 'center', border: 'none'}}>
                    <ColumnWrapper style={{gap: '10px', border: 'none',}}>
                        <Label text='Phone Number' style={{fontWeight: 'bold'}}/>
                        {/* {teacherData?.contact.map((cont, index) => (<div key={index}> <Label text={`${cont?.name}: `}/> <Label text={`${cont?.phone}`}/> </div>))} */}
                        {Array.isArray(teacherData?.contact) && 
                            teacherData?.contact.map((cont, index) => (
                                <Label key={index} text={`${cont?.name}: ${cont?.phone}`}/> 
                            ))}
                        
                    </ColumnWrapper>
                    <FontAwesomeIcon icon='fa-solid fa-phone' color='rgba(0,130,239,0.6)' style={{cursor: 'pointer'}}/>
                </RowWrapper>
                </ColumnWrapper>

                <TertiaryButton style={{fontSize: '0.7rem'}} onClick={()=> handleViewProfile(teacherData)} >View Profile</TertiaryButton>
            </ColumnWrapper>
    )
}

export default ViewTeacher;