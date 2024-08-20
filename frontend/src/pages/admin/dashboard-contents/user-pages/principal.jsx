import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import RowWrapper from '../../../../components/row_wrapper'
import { SecondaryButton } from '../../../../components/buttons';
import { Link } from 'react-router-dom';

function Principal() {
  
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=> {

    location.pathname === '/admin/users/overview/principal' && navigate('/admin/users/overview/principal/create');

  },[])
  return (
    <>
        {/* <div>Principal</div> */}
        {/* <hr /> */}
        <RowWrapper>
          <Link to={'/admin/users/overview/principal/create/user'}>
            <SecondaryButton>
              Create Principal
            </SecondaryButton>
          </Link>
          <Link to='/admin/users/overview/principal/list'>
            <SecondaryButton>
              Principal Listings
            </SecondaryButton>
          </Link>
        </RowWrapper>
        <Outlet />
    </>
  )
}

export default Principal