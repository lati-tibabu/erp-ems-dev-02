import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import RowWrapper from '../../../../components/row_wrapper'
import { SecondaryButton } from '../../../../components/buttons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { text } from '@fortawesome/fontawesome-svg-core';

function Principal() {
  
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=> {
    location.pathname === '/admin/users/overview/principal' && navigate('/admin/users/overview/principal/create');
  },[])

  const onPage = location.pathname;

  const onCreatePrincipalPage = onPage.startsWith('/admin/users/overview/principal/create')
  const onListPrincipalPage = onPage.startsWith('/admin/users/overview/principal/list')

  const onPrincipalPage = onPage === ('/admin/users/overview/principal')

  useEffect (() => {
    onPrincipalPage && navigate('/admin/users/overview/principal/list')
  })


  return (
    <>
        {/* <div>Principal</div> */}
        {/* <hr /> */}
        <RowWrapper className='bw-2px br-10px p-20 bs-dashed justify-start gap-100 font-xs '>
          {onListPrincipalPage &&<Link to={'/admin/users/overview/principal/create/user'} style={{"textDecoration": "none"}}>
            <SecondaryButton className='font-w-400 br-5px flex-row gap-10' >
              <FontAwesomeIcon icon='fa-solid fa-plus' />
              Create Principal
            </SecondaryButton>
          </Link>}
          {onCreatePrincipalPage &&<Link to='/admin/users/overview/principal/list' style={{"textDecoration": "none"}}>
            <SecondaryButton className='font-w-400 br-5px flex-row gap-10' >
              <FontAwesomeIcon icon='fa-solid fa-list' />
              Principal Listings
            </SecondaryButton>
          </Link>}
        </RowWrapper>
        <Outlet />
    </>
  )
}

export default Principal