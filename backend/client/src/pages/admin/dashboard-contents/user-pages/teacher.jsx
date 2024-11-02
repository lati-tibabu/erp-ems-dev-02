import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import RowWrapper from '../../../../components/row_wrapper'
import { SecondaryButton } from '../../../../components/buttons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Teacher() {
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/admin/users/overview/teacher') {
      navigate('/admin/users/overview/teacher/create');
    }
  }, [location.pathname, navigate]);

  const onPage = location.pathname;

  const onCreateTeacherPage = onPage.startsWith('/admin/users/overview/teacher/create');
  const onListTeacherPage = onPage.startsWith('/admin/users/overview/teacher/list');

  const onTeacherPage = onPage === '/admin/users/overview/teacher';

  useEffect(() => {
    if (onTeacherPage) {
      navigate('/admin/users/overview/teacher/list');
    }
  }, [onTeacherPage, navigate]);

  return (
    <>
        <RowWrapper className='bw-2px br-10px p-20 bs-dashed justify-start gap-100 font-xs '>
          {onListTeacherPage && (
            <Link to={'/admin/users/overview/teacher/create/user'} style={{ textDecoration: 'none' }}>
              <SecondaryButton className='font-w-400 br-5px flex-row gap-10'>
                <FontAwesomeIcon icon='fa-solid fa-plus' />
                Create Teacher
              </SecondaryButton>
            </Link>
          )}
          {onCreateTeacherPage && (
            <Link to='/admin/users/overview/teacher/list' style={{ textDecoration: 'none' }}>
              <SecondaryButton className='font-w-400 br-5px flex-row gap-10'>
                <FontAwesomeIcon icon='fa-solid fa-list' />
                Teacher Listings
              </SecondaryButton>
            </Link>
          )}
        </RowWrapper>
        <Outlet />
    </>
  )
}

export default Teacher;
