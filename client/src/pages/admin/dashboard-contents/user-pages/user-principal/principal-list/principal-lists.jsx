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

  const [principals, setPrincipals] = useState({principals:[],totalPages:0,currentPage:1,count:0, headers:[]})
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // const [principals, setPrincipals] = useState([])
  const [user, setUser] = useState([])
  const [school, setSchool] = useState([])

  const [principalData, setPrincipalData] = useState([])

  const getPrincipals = async (page, limit) => {
    try {
      const response = await fetch(`${apiURL}/api/principal/load?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: header
      });
      
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

  

  useEffect(() => {
    getPrincipals(page, limit)
  }, [page, limit]);

  useEffect(() => {
    if (parseInt(principals.principals.count) > 0) {
        getPrincipalData(principals.principals.rows);
    }
  },[principals]);

  // console.log("Principal Data",principalData);
  console.log("Principal Data",principals.principals.rows);
 
  const navigate = useNavigate();

  const handleEdit = (principalID) => {
    console.log('Editing principal with ID:', principalID);
    // navigate(`/admin/principal/edit/${principalID}`)
  };

  const handleView = (principalID) => {
    alert('ViewSchool')
    // navigate(`/admin/principal/view/${principalID}`)
  }

  const styleClasses = {
    plusMinus : 'color-blueGreen100 '
  }


  return (
    <>
    <RowWrapper style={{justifyContent: 'space-between', gap: '20px', border: 'none',}}>
      {
        principals.count === 0?
        <CenterColumn>
          <img src={loading} alt="" style={{width: '100px'}} />
        </CenterColumn>
        :
        <div className='flex-column'>
          <div className='flex-row align-center gap-10 bw-1px bs-solid bc-blueGreen100-60 back-color-blueGreen80-30 p-10 w-20p min-w-250px br-4px'>
          <Label text='Principals per page' />

            <FontAwesomeIcon icon="fa-solid fa-minus" onClick={() => !(limit===1) && setLimit(limit-1) }  className={styleClasses.plusMinus}/>
            <input type="text" name="" value={limit} onChange={(e) => setLimit(parseInt(e.target.value))} className='w-20px br-2px'/>
            <FontAwesomeIcon icon="fa-solid fa-plus" onClick={() => setLimit(limit + 1)} className={styleClasses.plusMinus}/>

          </div>
          <PrincipalListing
            title='Principals'
            principals={principalData}
            handleEdit={handleEdit}
            // handleView={handleView}
            width='100%'
          />
          <div className='flex-column'>
            <p>Page {principals.currentPage} of {principals.totalPages}</p>
            <div className='flex- row gap-10'>
              {!(principals.currentPage === 1)
                ?<FontAwesomeIcon style={{cursor: 'pointer'}} onClick={() => setPage(page-1)} icon='fa-solid fa-chevron-left' className='p-5 back-color-blueGreen100-50 w-30px br-4px color-white'/>
                :<FontAwesomeIcon style={{cursor: 'not-allowed'}} icon='fa-solid fa-chevron-left' className='p-5 back-color-gray100-50 w-30px br-4px color-white'/>
              }
              {!(principals.currentPage === principals.totalPages)
              ?<FontAwesomeIcon style={{cursor: 'pointer'}} onClick={() => setPage(page+1)} icon='fa-solid fa-chevron-right'className='p-5 back-color-blueGreen100-50 w-30px br-4px color-white' />
              :<FontAwesomeIcon style={{cursor: 'not-allowed'}} icon='fa-solid fa-chevron-right' className='p-5 back-color-gray100-50 w-30px br-4px color-white'/>
            }
            </div>
          </div>
        </div>
        }

        <Outlet />

    </RowWrapper>
    </>
  )

}

export default PrincipalList;