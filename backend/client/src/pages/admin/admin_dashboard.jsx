// admin_dashboard.jsx
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import RowWrapper from '../../components/row_wrapper';
import ColumnWrapper from '../../components/column_wrapper';
import { AiLogo, AiLogo2, AiLogo3, ProperLogo2, ProperLogo4 } from '../../components/ems_logo';
import circle8175 from '../../assets/circle8175.png';
import { Heading3, Heading4, Heading5, Label, Paragraph } from '../../components/Typography';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import '../../styles/admin_dashboard.css'
import LogoAndName from '../../components/LogoAndName';

import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../../store';
import { color } from 'chart.js/helpers';
import Footer from '../../components/footer';

library.add(fas);

function AdminDashboard() {

  const homePage = '/admin/home';
  const schoolPage = '/admin/school/listing/all';
  const schoolPageCheck = '/admin/school';
  const usersPage = '/admin/users/overview';
  const usersPageCheck = '/admin/users';
  const coursePage = '/admin/course';
  const reportPage = '/admin/report';
  const profilePage = '/admin/profile';
  const settingsPage = '/admin/settings';
  const helpPage = '/admin/help';

  const location = useLocation();

  const currentLocation = location.pathname;

  const onHomePage  = (currentLocation.startsWith(homePage));
  const onSchoolPage = (currentLocation.startsWith(schoolPageCheck));
  const onUsersPage = (currentLocation.startsWith(usersPageCheck));
  const onCoursePage = (currentLocation.startsWith(coursePage));
  const onReportPage = (currentLocation.startsWith(reportPage));
  const onProfilePage = (currentLocation.startsWith(profilePage));
  const onSettingsPage = (currentLocation.startsWith(settingsPage));
  const onHelpPage = (currentLocation.startsWith(helpPage));


  // Theme setter

  const [theme, setTheme] = useState('light');

  const dispatch = useDispatch();
  
  // const uname = useSelector((state) => state.auth.username);
  const uname2 = localStorage.getItem('username');
  // console.log(uname2)
    
  const [visibleNav,setVisibleNav] = useState(0);
  const navigate = useNavigate();

  const { state } = useLocation();

  // const username = (state && "@"+state.username) || "Admin"; 
  const username = (uname2 && "@"+uname2) || "Admin"; 

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('jwt');
    navigate('/auth/login');
  }

  const themeToggleHandler = () => {
    theme === 'light'?setTheme('dark'):setTheme('light')
  }

  const styles = {
    main_container: {
      minHeight: '100vh',
      // background:'#09f1',
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
      // justifyContent: 'start',
      justifyContent: 'space-between',
      // justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
      border: 'none',
      // boxShadow: '3px 3px 5px 0px #0088ff23',
      width: !visibleNav && '120px',
      // fontWeight: 'lighter',
      // background: 'red',
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
      // background:'#F0FBFF',
      // background: 'white',
      // background: 'red',
      border:'none',
      boxShadow:'0 4px 8px 0 rgba(0, 170, 230, 0.012)',
      // borderRadius: '7px '
    },

    header_user_notification:{
      width: '100%',
      gap: '10px',
      justifyContent: 'end',
      alignItems: 'center',
      border:'none',
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

    nav_bar_container :{
      minHeight: '80vh',
      // boxShadow: '3px 3px 5px 0px #0088ff23',
      // borderRadius: '10px',
      gap: '20px',
      background: '#fff',
      // background: 'red',
      border: 'none'
    },

    main_content_area:{
      width: '100%',
      border:'none',
      // background: 'white',
      backgroundImage: 'linear-gradient(45deg,rgba(0,170,255,0.1),rgba(0,170,255,0.07))',
      borderRadius: '30px',
      padding: '20px',
      gap: '10px',
      boxShadow: '3px 3px 5px 0px #0088ff23',
      height: '76.6vh',
      overflowY: 'scroll',
      // background: 'red',
      marginTop: '10px',
      marginRight: '10px',
    },

    user_details:{
      // border: 'none',
      borderRadius: '10px',
      gap: '10px',
      alignItems: 'center',
      padding: '5px',
      cursor: 'pointer',
      background: 'rgba(0,180,250,0.15)',
    },

    username_styles:{
      opacity: '100%',
      // fontSize: '1.2rem',
      // fontWeight: '700',
      color: '#383861',
      fontStyle: 'italic',
      // fontWeight: '700'
    },

    navigation_button_styles:{
      // background: 'red',
      height: '100%',
      justifyContent: 'space-between',
      border: 'none'
    },
    main_content_container:{ 
      gap: '10px', 
      border:'none', 
      padding: '0', 
      paddingRight: '0', 
      paddingLeft: '0',
      // background: 'red',
      // background: 'rgba(0,0,0,0.1)',
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
      // paddincg: '0',
      height: '40px',
      padding: '2px'
      // border: 'none',

      // boxShadow: '0px 0px 20px 0px rgba(0,136,255,0.2)',
      // border: '1px solid #e8e8e8',
    },
    searchInput: {
      borderRadius: '20px',
      fontSize: '0.8rem',
      // width: '100%',
      width: '300px',
      height: '60%',
      border: 'none',
      background: 'white',
      // padding: '2px'
    },
    searchIcon: {
      padding: '10px',
      borderRadius: '20px',
      // background: '#0088ff',
      // background: '#e8e8e8',
      background: 'rgba(0,141,218,0.08)',
      // background: 'rgba(255,255,255,1)',
      color: 'rgba(0,141,218,1)',
      cursor: 'pointer',
      width: '20px',
      height: '20px',
      position: 'relative',
      // left: '-20px',
    },
    search_wrapper_container_style:{ 
      width: '100%', 
      height: '100%', 
      border:'none',
      alignItems: 'center'
    },
    light_dark_toggle: {
      // background: 'red',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      border: 'none',
    },
    dark_light_toggle_button_style: {
      // border: 'none',
      padding: '0px',
      alignItems: 'center',
      justifyContent: theme ==='light'?'end':'start',
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
      color: theme === 'light'?'rgba(250,250,220,1)':'rgba(220,250,255,1)'
    }

  }

  // const location = useLocation();

  useEffect(()=> {
    (location.pathname === '/admin' || location.pathname === '/admin/')&&navigate('/admin/home');
  },[])
  return (
    <div>
      <div 
      style={styles.main_container}>
        {/* Header */}
        <RowWrapper style={styles.header_styles}>
          <RowWrapper style={styles.logo_wrapper}>  
              {/* {username === '@lati' ? <AiLogo2 style={{ width: '50px', height: '50px' }} /> :<AiLogo3 style={{ width: '50px', height: '50px' }} />} */}
              <ProperLogo2 style={{ height: '50px' }} />
              {/* <LogoAndName /> */}
          </RowWrapper>

          <RowWrapper style={{ alignItems: 'center', width: '100%', border:'none'}}>
            <RowWrapper style={{ width: '100%',border:'none' }}>
              <Heading5 text="Admin Dashboard" style={{ fontWeight: '600' }} />
              {/* <Heading3 text="Admin Dashboard" style={{ fontSize: '1.82rem', fontWeight: '700' }} /> */}
            </RowWrapper>
            <RowWrapper style={{ width: '100%',border:'none'}}>
              {/* <Label text="Welcome to the Admin Dashboard." /> */}
            </RowWrapper>

            <RowWrapper style={styles.search_wrapper_container_style}>
                <RowWrapper style={styles.searchWrapper}>
                    <input type="text" placeholder="Search from here..." style={styles.searchInput}/>
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
                  {/* <FontAwesomeIcon icon="fa-solid fa-moon" /> */}
                  { theme === 'light' ? <FontAwesomeIcon icon="fa-solid fa-sun" style={styles.moon_sun_button_styles}/>:<FontAwesomeIcon icon="fa-solid fa-moon" style={styles.moon_sun_button_styles}/>}
                </RowWrapper>
            </RowWrapper>

            <RowWrapper style={styles.header_user_notification}>
              <FontAwesomeIcon icon="fa-solid fa-message" color='#0088ff' />
              <FontAwesomeIcon icon="fa-solid fa-bell" />
              <RowWrapper style={styles.user_details}>
                <span style={styles.username_styles}>
                  {username}
                </span>
                {(username === '@lati') ? <img src={circle8175} style={styles.user_icon_image} /> : <FontAwesomeIcon icon="fa-solid fa-user" style={styles.user_icon} />}
                {/* <FontAwesomeIcon icon="fa-solid fa-user" style={styles.user_icon} /> */}
              </RowWrapper>
            </RowWrapper>
          </RowWrapper>
        </RowWrapper>
      
        {/* Main Content Part */}
        <RowWrapper style={styles.main_content_container}>
          {/* Navigation Bar (Vertical Bar) */}
          <ColumnWrapper style={styles.nav_bar_container}>
            <RowWrapper
              style={{
                justifyContent: 'end',
                border: 'none'
              }}>
              <ColumnWrapper 
              onClick={()=>{visibleNav == 0?setVisibleNav(1):setVisibleNav(0)}}
              style={{
                cursor:'pointer',
                border: 'none'
              }}>
              <FontAwesomeIcon icon={visibleNav==0?"fa-solid fa-arrow-left":"fa-solid fa-arrow-right"} color='#383861'/>

              </ColumnWrapper>
            </RowWrapper>

            {/* Navigation Buttons */}

            <ColumnWrapper style={styles.navigation_button_styles}>

                {[
                  {linkTo: homePage, icon: 'fa-house', label: 'Home', styleClassName: onHomePage && 'onPage'},
                  {linkTo: schoolPage, icon: 'fa-school', label: 'School', styleClassName: onSchoolPage && 'onPage'},
                  {linkTo: usersPage, icon: 'fa-users', label: 'Users', styleClassName: onUsersPage && 'onPage'},
                  {linkTo: coursePage, icon: 'fa-book', label: 'Course', styleClassName: onCoursePage && 'onPage'},
                  {linkTo: reportPage, icon: 'fa-file-alt', label: 'Reports', styleClassName: onReportPage && 'onPage'},
                  {linkTo: profilePage, icon: 'fa-user', label: 'Profile', styleClassName: onProfilePage && 'onPage'},
                  {linkTo: settingsPage, icon: 'fa-cog', label: 'Settings', styleClassName: onSettingsPage && 'onPage'},
                  {linkTo: helpPage, icon: 'fa-question', label: 'Help', styleClassName: onHelpPage && 'onPage'},
                ].map((navInfo) => (
                  <Link to={navInfo.linkTo} style={{textDecoration: 'none'}}>
                    <RowWrapper style={styles.home_nav_button_style}>
                      <FontAwesomeIcon icon={`fa-solid ${navInfo.icon}`} color='#383861' className={navInfo.styleClassName}/>
                      <Label text={visibleNav==0?navInfo.label:''} className={navInfo.styleClassName} />
                    </RowWrapper>
                  </Link>    
                ))}
              
              <RowWrapper style={styles.logout_nav_button_style}
                onClick={handleLogout}>
                <FontAwesomeIcon icon="fa-solid fa-sign-out-alt" color='rgba(200,0,0,1)' />
                <Label text={visibleNav==0?'Logout':''} style={{ color: 'rgba(200,0,0,1)', fontWeight: '700' }} />
              </RowWrapper>

            </ColumnWrapper>

          </ColumnWrapper>

          <ColumnWrapper style={styles.main_content_area}>
            {/* Admin Content View */}
            <Outlet />
          </ColumnWrapper>

        </RowWrapper>
      </div>
      <Footer />
      {/* <div>
        <RowWrapper 
          style={{
            // background: '#004d99',
            background: '#0000f9',
            color: 'white',
            padding: '10px 20px',
            textAlign: 'center',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px'}} 
          className=''>
            <ProperLogo4 style={{width: '80px'}}/>
            <Paragraph className='font-xs font-w-400' text='© 2024 SchoolStream. All rights reserved.' style={{ color: 'white' }} />
            <Paragraph className='font-xs font-w-400' text='Contact Us' style={{ color: 'white' }} />
            <Paragraph className='font-xs font-w-400' text='About Us' style={{ color: 'white' }} />
            <Link>
              <Paragraph className='font-xs font-w-400' text='Privacy Policy | Terms of Service' style={{ color: 'white' }} />
            </Link>
        </RowWrapper>
      </div> */}
    </div>
  );
}

export default AdminDashboard;
