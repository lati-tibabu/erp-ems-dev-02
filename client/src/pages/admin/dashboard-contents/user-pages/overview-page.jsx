import React, { useEffect, useState } from 'react';
import ColumnWrapper from '../../../../components/column_wrapper';
import RowWrapper from '../../../../components/row_wrapper';
import { Heading3, Label } from '../../../../components/Typography';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { SecondaryButton } from '../../../../components/buttons';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Skeleton from '../../../../components/skeleton';
// import { Col } from 'sequelize/lib/utils';

library.add(fas);

function OverviewPages() {

  const apiURL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('jwt');
  const header = { 'Authorization': `Bearer ${token}` };

  const location = useLocation();
  const onPrincipalPage = (location.pathname.startsWith('/admin/users/overview/principal'))
  const onTeacherPage = (location.pathname.startsWith('/admin/users/overview/teacher'))

  const [counts, setCounts] = useState({ principal: 0, teacher: 0, student: 0, parent: 0 });
  const [loading, setLoading] = useState(true);

  const fetchCounts = async () => {
    setLoading(true);
    try {
      const [principalRes, teacherRes, studentRes, parentRes] = await Promise.all([
        fetch(`${apiURL}/api/principal/total`, { headers: header }),
        fetch(`${apiURL}/api/teacher/total`, { headers: header }),
        fetch(`${apiURL}/api/student/total`, { headers: header }),
        fetch(`${apiURL}/api/parent/total`, { headers: header }),
      ]);
      const [principalData, teacherData, studentData, parentData] = await Promise.all([
        principalRes.json(),
        teacherRes.json(),
        studentRes.json(),
        parentRes.json(),
      ]);
      setCounts({
        principal: principalData.count || 0,
        teacher: teacherData.count || 0,
        student: studentData.count || 0,
        parent: parentData.count || 0,
      });
    } catch (error) {
      console.error('Error fetching user counts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCounts();
  }, []);

  const overviewCards = [
    { border: '#DAA520', background: '#DAA52023', number: counts.principal, text: 'Principals' },
    { border: '#4682B4', background: '#4682B423', number: counts.teacher, text: 'Teachers' },
  ];

  // useEffect(() => {
  //   if (onPrincipalPage || onSupervisorPage || onTeacherPage || onStudentPage || onParentPage) {
  //       window.scrollTo(0, 20);
  //   }
  // },[])

  return (
    <div>
      <ColumnWrapper style={styles.main_container}>
        <Heading3 text="Users Overview" />
        <ColumnWrapper style={
          { 
            // gap: '10px', 
            padding: '10px', 
            borderRadius: '15px', 
            background: 'white',
            border: 'none' 

          }}>

          {/* <Label text="View Details" /> */}
          <RowWrapper style={styles.users_overview_container}>
            {overviewCards.map((cardInfo, index) => (
              <ColumnWrapper
                key={index}
                style={{
                  width: '20%',
                  height: '100px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // boxShadow: '3px 3px 5px 0px #0088ff23',
                  borderRadius: '10px',
                  background: cardInfo.background,
                  gap: '20px',
                  border: `2px solid ${cardInfo.border}`,
                }}>
                {loading ? (
                  <Skeleton width="60%" height="30px" borderRadius="10px" />
                ) : (
                  <Heading3 text={cardInfo.number} style={{ fontWeight: 'bold' }} />
                )}
                <Label text={cardInfo.text} style={{ fontWeight: 'bold' }} />
              </ColumnWrapper>
            ))}

        </RowWrapper>

        
      </ColumnWrapper>

      <RowWrapper
          style={styles.user_management_container}
          className='bw-none'
          >

          <ColumnWrapper
            style={styles.users_type_list_container}>
            <Heading3 text="Users" />
            <ColumnWrapper style={styles.users_management_section_container}>

                <RowWrapper className='bw-none' style={styles.users_navigation_bar_container}>

                  <Link to='/admin/users/overview/principal'> 
                    <button className={'schoolButtonStyle all-schools '+ (onPrincipalPage && 'selected-button')}>
                      Principal
                    </button>
                  </Link>
                  <Link to='/admin/users/overview/teacher'> 
                    <button className={'schoolButtonStyle pending-schools '+ (onTeacherPage && 'selected-button')}>
                      Teacher
                    </button>
                  </Link>
                </RowWrapper>

                <ColumnWrapper className='bw-none'>
                  <Outlet />
                </ColumnWrapper>
            </ColumnWrapper>


          </ColumnWrapper>

        </RowWrapper>

        <ColumnWrapper className='br-30px bw-none back-color-white p-20'>
            
        </ColumnWrapper>
        
      </ColumnWrapper>
    </div>
  );
}

export default OverviewPages;
