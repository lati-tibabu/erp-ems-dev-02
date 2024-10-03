import React from "react";

import ColumnWrapper from "../../../../../components/column_wrapper";
import RowWrapper from "../../../../../components/row_wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label } from "../../../../../components/Typography";
import { TertiaryButton } from "../../../../../components/buttons";
import { useLocation } from "react-router-dom";
function ViewStudent() {

    const location = useLocation();
    const student = location.state.student;

    // console.log(student)
  return(
    <ColumnWrapper className='w-30p back-color-white shadow-lg p-20 br-40px bw-none'>
            <RowWrapper className='justify-end bw-none'>
                <FontAwesomeIcon icon='fa-solid fa-xmark' color='rgba(0,130,239,0.6)' style={{cursor: 'pointer'}}/>
            </RowWrapper>
            <ColumnWrapper style={{justifyContent: 'center', alignItems: 'center', gap: '20px', border: 'none',}}>
                <img 
                src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"
                alt="principal_profile_image"
                style={{width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover'}}/>

                {/* <Label style={{fontWeight: 'bold'}} text='Tokuma Mitiku'/> */}
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
                    <Label text={`Class ${student.class.section_name}`} />
                </ColumnWrapper>
                <FontAwesomeIcon icon='fa-solid fa-envelope' color='rgba(0,130,239,0.6)' style={{cursor: 'pointer'}}/>
            </RowWrapper>

            {/* <RowWrapper style={{justifyContent:'space-between', alignItems: 'center', border: 'none'}}>
                <ColumnWrapper style={{gap: '10px', border: 'none',}}>
                    <Label text='Phone Number' style={{fontWeight: 'bold'}}/> */}
                    {/* {Array.isArray(principalData?.contact) && 
                        principalData?.contact.map((cont, index) => (
                            <Label key={index} text={`${cont?.name}: ${cont?.phone}`}/> 
                        ))} */}
                    {/* <Label text='09282898228' />
                </ColumnWrapper>
                <FontAwesomeIcon icon='fa-solid fa-phone' color='rgba(0,130,239,0.6)' style={{cursor: 'pointer'}}/>
            </RowWrapper> */}
            </ColumnWrapper>

            <TertiaryButton style={{fontSize: '0.7rem'}} >View Profile</TertiaryButton>
        </ColumnWrapper>
  );
}

export default ViewStudent;
