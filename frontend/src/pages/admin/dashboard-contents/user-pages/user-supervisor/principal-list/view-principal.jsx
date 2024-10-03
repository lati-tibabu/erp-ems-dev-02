import React, { useEffect, useState } from 'react'
import '../../../../../../styles/admin-school.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../button-styles.css'

import PrincipalListing from '../../../../../../components/principal-components/principal_listings';
import ColumnWrapper from '../../../../../../components/column_wrapper';
import RowWrapper from '../../../../../../components/row_wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Heading6, Label, Paragraph } from '../../../../../../components/Typography';
import { TertiaryButton } from '../../../../../../components/buttons';

library.add(fas)
function ViewPrincipal() {

    const apiURL = import.meta.env.VITE_API_URL;
    const [principal, setPrincipal] = useState({});
    const [principalData, setPrincipalData] = useState({});
    const { principalId } = useParams();
    const { state } = useLocation();

    // const getPrincipal = async (principalId) => {
    //     try{
    //     const response = await fetch(`${apiURL}/api/principal/load/${principalId}`);
    //     const data = await response.json();
    //     setPrincipal(data)
    //     } catch (error) {
    //         console.error('Error fetching principal: ', error)
    //     }
    // };

    // const getPrincipalData = async (principalObj) =>{
    //     const dataWithRelation = await Promise.all([
    //         fetch(`${apiURL}/api/user/load/${principalObj.user_id}`).then(response => response.json()),
    //         fetch(`${apiURL}/api/school/load/${principalObj.school_id}`).then(response => response.json()),
    //         fetch(`${apiURL}/api/contact/loadu/${principalObj.user_id}`).then(response => response.json()),
    //     ]);

    //     const [user, school, contact] = dataWithRelation;

    //     const principalData = { ...principalObj, user: user, school: school, contact: contact };
    
    //     setPrincipalData(principalData);
    // }        

    // useEffect(() => {
    //     if (principalId) {
    //         getPrincipal(principalId);
    //     }
    // }, [principalId]);

    // useEffect(() => {
    //     if (principal) {
    //         getPrincipalData(principal);
    //     }
    // }, [principal]);

    // console.log(principal);
    // console.log("principal Data", principalData);

    useEffect(() => {
        setPrincipalData(state?.principal);
    },[state])

    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log(principalData);
    // })

    const handleViewProfile = (principal) => {
        navigate(`/admin/users/overview/principal/view_profile`, {state: {principal}})
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
                src={principalData?.user?.profile_photo ? principalData?.user?.profile_photo : 
                    "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"} 
                    
                
                alt="principal_profile_image" 
                    style={{width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover'}}
                />
                <Label style={{fontWeight: 'bold'}} text={principalData?.user?.first_name+" "+principalData?.user?.middle_name+" "+principalData?.user?.last_name} />
                </ColumnWrapper>
                <ColumnWrapper style={{gap: '10px', border: 'none',}}>

                <RowWrapper style={{gap: '10px', border: 'none',}}>
                    <ColumnWrapper style={{gap: '10px', border: 'none',}}>
                        <Label text='Gender' style={{fontWeight: 'bold'}}/>
                        <Label text={principalData?.user?.gender} />
                    </ColumnWrapper>
                </RowWrapper>

                <RowWrapper style={{justifyContent:'space-between', alignItems: 'center', border: 'none'}}>
                    <ColumnWrapper style={{gap: '10px', border: 'none',}}>
                        <Label text='Email' style={{fontWeight: 'bold'}}/>
                        <Label text={principalData?.user?.email} />
                    </ColumnWrapper>
                    <FontAwesomeIcon icon='fa-solid fa-envelope' color='rgba(0,130,239,0.6)' style={{cursor: 'pointer'}}/>
                </RowWrapper>

                <RowWrapper style={{justifyContent:'space-between', alignItems: 'center', border: 'none'}}>
                    <ColumnWrapper style={{gap: '10px', border: 'none',}}>
                        <Label text='Phone Numbers' style={{fontWeight: 'bold'}}/>
                        {/* <Label text={principalData?.contact?.phone}/> */}
                        {/* {principalData?.contact.map((cont, index) => (<Label key={index} text={cont?.phone}/>))} */}
                        <Label text='Phone' />
                    </ColumnWrapper>
                    <FontAwesomeIcon icon='fa-solid fa-phone' color='rgba(0,130,239,0.6)' style={{cursor: 'pointer'}}/>
                </RowWrapper>
                </ColumnWrapper>

                <TertiaryButton style={{fontSize: '0.7rem'}} onClick={()=> handleViewProfile(principalData)} >View Profile</TertiaryButton>
            </ColumnWrapper>
    )
}

export default ViewPrincipal