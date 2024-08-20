import React, { useEffect, useState } from 'react';
import ColumnWrapper from '../../../../components/column_wrapper';
import RowWrapper from '../../../../components/row_wrapper';
import { Heading3, Label } from '../../../../components/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { SecondaryButton } from '../../../../components/buttons';
import { Link, Outlet, useLocation } from 'react-router-dom';

library.add(fas);

function OverviewPages() {

  const location = useLocation();
  const onPrincipalPage = (location.pathname.startsWith('/admin/users/overview/principal'))
  const onSupervisorPage = (location.pathname.startsWith('/admin/users/overview/supervisor'))
  const onTeacherPage = (location.pathname.startsWith('/admin/users/overview/teacher'))
  const onStudentPage = (location.pathname.startsWith('/admin/users/overview/student'))
  const onParentPage = (location.pathname.startsWith('/admin/users/overview/parent'))

  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const styles = {
    main_container: {
      height: '100vh',
      border: 'none',
      gap: '20px',
      padding: '20px',
      // background: 'white',
      // borderRadius: '5px',
      // boxShadow: '3px 3px 5px 0px #0088ff23',
    },
    users_overview_container: {
      gap: '10px',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
    },
    user_management_container: {
      gap: '10px',
      padding: '10px',
      borderRadius: '15px',
      background: 'white',
      // border: 'none',
    },
    users_type_list_container:{
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '3px 3px 5px 0px #0088ff23',
      flex: '1',
      gap: '20px',
      border: 'none',
    },
    users_navigation_bar_container: {
      // justifyContent: 'space-between',
      alignItems: 'center',
      flex: '1',
      gap: '20px',
      // border: 'none',
      // justi
    },
    users_management_section_container: {
      // background: 'red',
      width: '100%',
      // height: '100%',
      border: 'none',
      borderRadius: '15px',
      padding: '20px',
      // boxShadow: '3px 3px 5px 0px #0088ff23',
    },
  };

  const overviewCards = [
    { border: '#DAA520', background: /*localStorage.getItem('username') === 'lati'?'rgba(102,102,102,1)':*/'#DAA52023', number: '300', text: 'Principals' },
    { border: '#4682B4', background: /*localStorage.getItem('username') === 'lati'?'rgba(102,102,102,1)':*/'#4682B423', number: '500', text: 'Teachers' },
    { border: '#32CD32', background: /*localStorage.getItem('username') === 'lati'?'rgba(102,102,102,1)':*/'#32CD3223', number: '1000', text: 'Students' },
    { border: '#FF6347', background: /*localStorage.getItem('username') === 'lati'?'rgba(102,102,102,1)':*/'#FF634723', number: '150', text: 'Parent Users' },
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
                <Heading3 text={cardInfo.number} style={{ /*color: 'white',*/ fontWeight: 'bold' }} />
                <Label text={cardInfo.text} style={{ /*color: 'white',*/ fontWeight: 'bold' }} />
              </ColumnWrapper>
            ))}

        </RowWrapper>

        
      </ColumnWrapper>

      <RowWrapper
          style={styles.user_management_container}>

          <ColumnWrapper
            style={styles.users_type_list_container}>
            <Heading3 text="Users" />
            <ColumnWrapper style={styles.users_management_section_container}>

                <RowWrapper style={styles.users_navigation_bar_container}>

                  <Link to='/admin/users/overview/principal'> 
                    <button className={'schoolButtonStyle all-schools '+ (onPrincipalPage && 'selected-button')}>
                      Principal
                    </button>
                  </Link>
                  <Link to='/admin/users/overview/supervisor'> 
                    <button className={'schoolButtonStyle active-schools '+ (onSupervisorPage && 'selected-button')}>
                      Supervisor
                    </button>
                  </Link>
                  <Link to='/admin/users/overview/teacher'> 
                    <button className={'schoolButtonStyle pending-schools '+ (onTeacherPage && 'selected-button')}>
                      Teacher
                    </button>
                  </Link>
                  <Link to='/admin/users/overview/student'> 
                    <button className={'schoolButtonStyle deleted-schools '+ (onStudentPage && 'selected-button')}>
                      Student
                    </button>
                  </Link>
                  <Link to='/admin/users/overview/parent'> 
                    <button className={'schoolButtonStyle archived-schools '+ (onParentPage && 'selected-button')}>
                      Parent
                    </button>
                  </Link>
                </RowWrapper>

                <ColumnWrapper>
                  {/* This is wherr the list of users will be */}
                  {/* {onPrincipalPage && <h1>Principals</h1>}
                  {onSupervisorPage && <h1>Supervisor</h1>}
                  {onTeacherPage && <h1>Teacher</h1>}
                  {onStudentPage && <h1>Student</h1>}
                  {onParentPage && <h1>Parent</h1>} */}
                  <Outlet />
                </ColumnWrapper>

            </ColumnWrapper>

          </ColumnWrapper>
        </RowWrapper>
      </ColumnWrapper>
    </div>
  );
}

export default OverviewPages;
