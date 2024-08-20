import React, { useEffect, useState } from 'react'
import '../../../../../../styles/admin-school.css';
import { useNavigate } from 'react-router-dom';
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
    const [userData, setUserData] = useState({})
    const {user_id} = useParams()

    const getUser = async (user_id) => {
        const response = await fetch(`${apiURL}/api/user/load/${user_id}`);
        const data = await response.json();
        return data
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
                <img src="https://img.freepik.com/free-photo/confident-good-looking-beautiful-woman-with-blonde-dyed-hair-dressed-casual-clothes-looking-seriously_176420-15186.jpg" alt="principal_profile_image" 
                    style={{width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover'}}
                />
                <Label style={{fontWeight: 'bold'}} text='Alice James' />
                </ColumnWrapper>
                <ColumnWrapper style={{gap: '10px', border: 'none',}}>

                <RowWrapper style={{gap: '10px', border: 'none',}}>
                    <ColumnWrapper style={{gap: '10px', border: 'none',}}>
                        <Label text='Gender' style={{fontWeight: 'bold'}}/>
                        <Label text='Female' />
                    </ColumnWrapper>
                </RowWrapper>

                <RowWrapper style={{justifyContent:'space-between', alignItems: 'center', border: 'none'}}>
                    <ColumnWrapper style={{gap: '10px', border: 'none',}}>
                        <Label text='Email' style={{fontWeight: 'bold'}}/>
                        <Label text='p8b2z@example.com' />
                    </ColumnWrapper>
                    <FontAwesomeIcon icon='fa-solid fa-envelope' color='rgba(0,130,239,0.6)' style={{cursor: 'pointer'}}/>
                </RowWrapper>

                <RowWrapper style={{justifyContent:'space-between', alignItems: 'center', border: 'none'}}>
                    <ColumnWrapper style={{gap: '10px', border: 'none',}}>
                        <Label text='Phone Number' style={{fontWeight: 'bold'}}/>
                        <Label text='08012345678' />
                    </ColumnWrapper>
                    <FontAwesomeIcon icon='fa-solid fa-phone' color='rgba(0,130,239,0.6)' style={{cursor: 'pointer'}}/>
                </RowWrapper>
                </ColumnWrapper>

                <TertiaryButton style={{fontSize: '0.7rem'}}>View Profile</TertiaryButton>
            </ColumnWrapper>
    )
}

export default ViewPrincipal