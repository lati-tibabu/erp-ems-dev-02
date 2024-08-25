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
import { Outlet } from 'react-router-dom';
import loading from '/loading.gif'
import { CenterColumn } from '../../../../../../components/center';

library.add(fas);

function PrincipalList() {
  
  const token = localStorage.getItem('jwt');
  const header = {'authorization' : `Bearer ${token}`};
    

  const apiURL = import.meta.env.VITE_API_URL;

  const [principals, setPrincipals] = useState([])
  const [user, setUser] = useState([])
  const [school, setSchool] = useState([])

  const [principalData, setPrincipalData] = useState([])

  const getPrincipals = async () => {
    try {
      const response = await fetch(`${apiURL}/api/principal/load`);
      const data = await response.json();
      setPrincipals(data);
    } catch (error) {
      console.error('Error fetching principals:', error);
    }
  };

  const getPrincipalData = async (principalsArray) => {
    const dataWithRelations = await Promise.all(
        principalsArray.map(async (principal) => {
            const userResponse = await fetch(`${apiURL}/api/user/load/${principal.user_id}`, {
              method: 'GET',
              headers: header
            });
            const userData = await userResponse.json();

            const schoolResponse = await fetch(`${apiURL}/api/school/load/${principal.school_id}`,{
              method: 'GET',
              headers: header
            });
            const schoolData = await schoolResponse.json();

            // const contactResponse = await fetch(`${apiURL}/api/contact/load/${principal.contact_id}`);
            // const contactData = await contactResponse.json();
            const contactResponse = await fetch(`${apiURL}/api/contact/loadu/${principal.user_id}`, {
              method: 'GET',
              headers: header
            });
            const contactData = await contactResponse.json();


            return { ...principal, user: userData, school: schoolData, contact: contactData };
        })
    );
    setPrincipalData(dataWithRelations);
  };

  console.log(principalData);
  

  useEffect(() => {
    getPrincipals()
  }, []);

  useEffect(() => {
    // getSchools(principals);
    // getUsers(principals);
    if (principals.length > 0) {
        getPrincipalData(principals);
    }
  },[principals]);
 
const navigate = useNavigate();

  const handleEdit = (principalID) => {
    console.log('Editing principal with ID:', principalID);
    // navigate(`/admin/principal/edit/${principalID}`)
  };

  const handleView = (principalID) => {
    alert('ViewSchool')
    // navigate(`/admin/principal/view/${principalID}`)
  }
  return (
    <>
    <RowWrapper style={{justifyContent: 'space-between', gap: '20px', border: 'none',}}>
      {
        principalData.length === 0?
        <CenterColumn>
          <img src={loading} alt="" style={{width: '100px'}} />
        </CenterColumn>
        :
        <PrincipalListing
          title='Principals'
          principals={principalData}
          handleEdit={handleEdit}
          // handleView={handleView}
          width='100%'
        />
        }

        <Outlet />

    </RowWrapper>
    </>
  )

}

export default PrincipalList;