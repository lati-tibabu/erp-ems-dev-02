// teacher_dashboard.jsx
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import RowWrapper from '../../components/row_wrapper';
import ColumnWrapper from '../../components/column_wrapper';
import { AiLogo2, AiLogo3, ProperLogo2 } from '../../components/ems_logo';
import circle8175 from '../../assets/circle8175.png';
import { Heading5, Label } from '../../components/Typography';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import '../../styles/admin_dashboard.css';

import { useDispatch } from 'react-redux';
import { logout } from '../../store';
import { PrimaryButton } from '../../components/buttons';

library.add(fas);

function TeacherDashboard() {
    const homePage = '/teacher/home';
    const coursesPage = '/teacher/courses';
    const classesPage = '/teacher/classes';
    const studentsPage = '/teacher/students';
    const calendarPage = '/teacher/calendar';
    const attendancePage = '/teacher/attendance';
    const profilePage = '/teacher/profile';
    const helpPage = '/teacher/help';
    
    const location = useLocation();
    const currentLocation = location.pathname;
    
    const onHomePage = currentLocation.startsWith(homePage);
    const onCoursesPage = currentLocation.startsWith(coursesPage);
    const onClassesPage = currentLocation.startsWith(classesPage);
    const onStudentsPage = currentLocation.startsWith(studentsPage);
    const onCalendarPage = currentLocation.startsWith(calendarPage);
    const onAttendancePage = currentLocation.startsWith(attendancePage);
    const onProfilePage = currentLocation.startsWith(profilePage);
    const onHelpPage = currentLocation.startsWith(helpPage);
    
    const [theme, setTheme] = useState('light');
    const dispatch = useDispatch();
    const uname2 = localStorage.getItem('username');
    const schoolData = JSON.parse(localStorage.getItem('data'));
    const [visibleNav, setVisibleNav] = useState(0);
    const navigate = useNavigate();
    const username = (uname2 && "@" + uname2) || "Teacher";

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('jwt');
    navigate('/auth/login');
  };

  const themeToggleHandler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const styles = {
    main_container: {
      minHeight: '100vh',
      padding: '5px'
    },
    nav_buttons_style: {
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
      gap: '10px',
    },
    home_nav_button_style: {
      gap: '10px',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      border: 'none',
      width: !visibleNav && '120px',
      currentPage: {
        background: 'rgba(200,0,0,0.04)',
        color: 'rgba(200,0,0,1)',
      }
    },
    logout_nav_button_style: {
      gap: '5px',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      width: !visibleNav && '120px',
      borderColor: 'rgba(200,0,0,1)',
      background: 'rgba(200,0,0,0.04)',
      opacity: '90%',
    },
    header_styles: {
      border: 'none',
      boxShadow: '0 4px 8px 0 rgba(0, 170, 230, 0.012)',
    },
    header_user_notification: {
      width: '100%',
      gap: '10px',
      justifyContent: 'end',
      alignItems: 'center',
      border: 'none',
    },
    user_icon: {
      fontSize: '1.5rem',
      background: '#0088ff',
      padding: '8px',
      borderRadius: '50%',
      color: 'white',
      width: '30px',
      height: '30px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    user_icon_image: {
      fontSize: '1.5rem',
      background: '#0088ff',
      padding: '2px',
      borderRadius: '50%',
      color: 'white',
      width: '38px',
      height: '38px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    nav_bar_container: {
      minHeight: '80vh',
      gap: '20px',
      background: '#fff',
      border: 'none'
    },
    main_content_area: {
      width: '100%',
      border: 'none',
      backgroundImage: 'linear-gradient(45deg,rgba(0,170,255,0.1),rgba(0,170,255,0.07))',
      borderRadius: '30px',
      padding: '20px',
      gap: '10px',
      boxShadow: '3px 3px 5px 0px #0088ff23',
      height: '76.6vh',
      overflowY: 'scroll',
      marginTop: '10px',
      marginRight: '10px',
    },
    user_details: {
      borderRadius: '10px',
      gap: '10px',
      alignItems: 'center',
      padding: '5px',
      cursor: 'pointer',
      background: 'rgba(0,180,250,0.15)',
    },
    username_styles: {
      opacity: '100%',
      color: '#383861',
      fontStyle: 'italic',
    },
    navigation_button_styles: {
      height: '100%',
      justifyContent: 'space-between',
      border: 'none'
    },
    main_content_container: { 
      gap: '10px', 
      border: 'none', 
      padding: '0', 
      paddingRight: '0', 
      paddingLeft: '0',
      background: 'white',
    },
    logo_wrapper: {
      width: '100px',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
    },
    searchWrapper: {
      width: '280px',
      borderRadius: '40px',
      justifyContent: 'end',
      alignItems: 'center',
      height: '40px',
      padding: '2px'
    },
    searchInput: {
      borderRadius: '20px',
      fontSize: '0.8rem',
      width: '300px',
      height: '60%',
      border: 'none',
      background: 'white',
    },
    searchIcon: {
      padding: '10px',
      borderRadius: '20px',
      background: 'rgba(0,141,218,0.08)',
      color: 'rgba(0,141,218,1)',
      cursor: 'pointer',
      width: '20px',
      height: '20px',
      position: 'relative',
    },
    search_wrapper_container_style: { 
      width: '100%', 
      height: '100%', 
      border: 'none',
      alignItems: 'center'
    },
    light_dark_toggle: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
    },
    dark_light_toggle_button_style: {
      padding: '0px',
      alignItems: 'center',
      justifyContent: theme === 'light' ? 'end' : 'start',
      borderRadius: '20px',
      height: '18px',
      width: '40px',
      background: 'white',
      cursor: 'pointer'
    },
    moon_sun_button_styles: {
      width: '20px',
      height: '20px',
      background: 'black',
      borderRadius: '20px',
      padding: '2px',
      display: 'flex',
      fontSize: '0.1rem',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme === 'light' ? 'rgba(250,250,220,1)' : 'rgba(220,250,255,1)'
    }
  };

  useEffect(() => {
    (location.pathname === '/teacher' || location.pathname === '/teacher/') && navigate('/teacher/home');
  }, []);

  return (
    <div 
      style={styles.main_container}>
        
      <RowWrapper style={styles.header_styles}>
        <RowWrapper style={styles.logo_wrapper}>
            {/* {username === '@lati' ? <AiLogo2 style={{ width: '50px', height: '50px' }} /> : <AiLogo3 style={{ width: '50px', height: '50px' }} />} */}
            <ProperLogo2 style={{ height: '50px' }} />
        </RowWrapper>

        <RowWrapper style={{ alignItems: 'center', width: '100%', border: 'none' }}>
          <RowWrapper style={{ width: '100%', border: 'none' }}>
            <Heading5 text="Teacher Dashboard" style={{ fontWeight: '600' }} />
          </RowWrapper>

          <RowWrapper style={styles.search_wrapper_container_style}>
              <RowWrapper style={styles.searchWrapper}>
                  <input type="text" placeholder="Search from here..." style={styles.searchInput} />
                  <FontAwesomeIcon
                      icon="fa-solid fa-search"
                      color="#fff"
                      onClick={() => {
                        alert('hi');
                      }}
                      style={styles.searchIcon}
                    />
                </RowWrapper>
          </RowWrapper>

          <RowWrapper style={styles.light_dark_toggle}>

              <RowWrapper style={styles.dark_light_toggle_button_style} onClick={themeToggleHandler}>
                {theme === 'light' ? <FontAwesomeIcon icon="fa-solid fa-sun" style={styles.moon_sun_button_styles} /> : <FontAwesomeIcon icon="fa-solid fa-moon" style={styles.moon_sun_button_styles} />}
              </RowWrapper>

          </RowWrapper>

          <RowWrapper style={styles.header_user_notification}>
            <FontAwesomeIcon icon="fa-solid fa-message" color='#0088ff' />
            <FontAwesomeIcon icon="fa-solid fa-bell" />
            <RowWrapper style={styles.user_details}>
              <span style={styles.username_styles}>
                {username}
              </span>
              {(username === '@lati') 
              ? <img src={circle8175} style={styles.user_icon_image} /> 
              : (schoolData && schoolData.user.profile_photo) ? <img src={schoolData.user.profile_photo} style={styles.user_icon_image} /> : <FontAwesomeIcon icon="fa-solid fa-user" style={styles.user_icon} />}
            </RowWrapper>
          </RowWrapper>
        </RowWrapper>
      </RowWrapper>

      <RowWrapper style={styles.main_content_container}>
        <ColumnWrapper style={styles.nav_bar_container}>
          <RowWrapper
            style={{
              justifyContent: 'end',
              border: 'none'
            }}
          >
            <ColumnWrapper 
              onClick={() => { visibleNav == 0 ? setVisibleNav(1) : setVisibleNav(0) }}
              style={{
                cursor: 'pointer',
                border: 'none'
              }}
            >
            <FontAwesomeIcon icon={visibleNav == 0 ? "fa-solid fa-arrow-left" : "fa-solid fa-arrow-right"} color='#383861' />
            </ColumnWrapper>
          </RowWrapper>

          <ColumnWrapper style={styles.navigation_button_styles}>
              {[
                { linkTo: homePage, icon: 'fa-house', label: 'Home', styleClassName: onHomePage && 'onPage' },
                { linkTo: coursesPage, icon: 'fa-book', label: 'Courses', styleClassName: onCoursesPage && 'onPage' },
                { linkTo: classesPage, icon: 'fa-school', label: 'Classes', styleClassName: onClassesPage && 'onPage' },
                { linkTo: studentsPage, icon: 'fa-user-graduate', label: 'Students', styleClassName: onStudentsPage && 'onPage' },
                { linkTo: calendarPage, icon: 'fa-calendar-alt', label: 'Calendar', styleClassName: onCalendarPage && 'onPage' },
                { linkTo: attendancePage, icon: 'fa-check', label: 'Attendance', styleClassName: onAttendancePage && 'onPage' },
                { linkTo: profilePage, icon: 'fa-user', label: 'Profile', styleClassName: onProfilePage && 'onPage' },
                { linkTo: helpPage, icon: 'fa-question', label: 'Help', styleClassName: onHelpPage && 'onPage' },
                ].map((navInfo) => (
                                <Link to={navInfo.linkTo} style={{ textDecoration: 'none' }}>
                                <RowWrapper style={styles.home_nav_button_style}>
                    <FontAwesomeIcon icon={`fa-solid ${navInfo.icon}`} color='#383861' className={navInfo.styleClassName} />
                    <Label text={visibleNav == 0 ? navInfo.label : ''} className={navInfo.styleClassName} />
                  </RowWrapper>
                </Link>
              ))}
            
            <RowWrapper style={styles.logout_nav_button_style}
              onClick={handleLogout}
            >
              <FontAwesomeIcon icon="fa-solid fa-sign-out-alt" color='rgba(200,0,0,1)' />
              <Label text={visibleNav == 0 ? 'Logout' : ''} style={{ color: 'rgba(200,0,0,1)', fontWeight: '700' }} />
            </RowWrapper>

          </ColumnWrapper>
        </ColumnWrapper>

        <ColumnWrapper style={styles.main_content_area}>
          <Outlet />
        </ColumnWrapper>
      </RowWrapper>
    </div>
  );
}

export default TeacherDashboard;