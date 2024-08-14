// admin_dashboard.jsx
import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import RowWrapper from '../../components/row_wrapper';
import ColumnWrapper from '../../components/column_wrapper';
import { AiLogo, AiLogo2, AiLogo3 } from '../../components/ems_logo';
import circle8175 from '../../assets/circle8175.png';
import { Heading3, Label } from '../../components/Typography';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';
import '../../styles/admin_dashboard.css'

import { useSelector,useDispatch } from 'react-redux';
import { logout } from '../../store';

library.add(fas);

function AdminDashboard() {

  const homePage = '/admin/home';
  const schoolPage = '/admin/school/listing/all';
  const usersPage = '/admin/users';
  const reportPage = '/admin/report';
  const profilePage = '/admin/profile';
  const settingsPage = '/admin/settings';
  const helpPage = '/admin/help';

  const location = useLocation();

  const currentLocation = location.pathname;

  const onHomePage  = (currentLocation === homePage);
  const onSchoolPage = (currentLocation === schoolPage);
  const onUsersPage = (currentLocation === usersPage);
  const onReportPage = (currentLocation === reportPage);
  const onProfilePage = (currentLocation === profilePage);
  const onSettingsPage = (currentLocation === settingsPage);
  const onHelpPage = (currentLocation === helpPage);

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
      background: 'rgba(0,170,255,0.1)',
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
    }}

  return (
    <div style={styles.main_container}>
      {/* Header */}
      <RowWrapper style={styles.header_styles}>

        {username === '@lati' ? <AiLogo2 style={{ width: '80px' }} /> :<AiLogo3 style={{ width: '80px' }} />}

        <RowWrapper style={{  alignItems: 'center', width: '100%', border:'none'}}>
          <RowWrapper style={{ width: '100%',border:'none' }}>
            <Heading3 text="Admin Dashboard" style={{ fontSize: '1.82rem', fontWeight: '700' }} />
          </RowWrapper>
          <RowWrapper style={{ width: '100%',border:'none'}}>
            <Label text="Welcome to the Admin Dashboard. Here you can manage all the activities related to the EMS." />
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
                {linkTo: reportPage, icon: 'fa-file-alt', label: 'Reports', styleClassName: onReportPage && 'onPage'},
                {linkTo: profilePage, icon: 'fa-user', label: 'Profile', styleClassName: onProfilePage && 'onPage'},
                {linkTo: settingsPage, icon: 'fa-cog', label: 'Settings', styleClassName: onSettingsPage && 'onPage'},
                {linkTo: helpPage, icon: 'fa-question', label: 'Help', styleClassName: onHelpPage && 'onPage'},
              ].map((navInfo) => (
                <Link to={navInfo.linkTo} style={{textDecoration: 'none'}}>
                  <RowWrapper style={styles.home_nav_button_style}>
                    <FontAwesomeIcon icon={`fa-solid ${navInfo.icon}`} color='#383861' className={navInfo.styleClassName}/>
                    <Label text={visibleNav==0?navInfo.label:''} className2={navInfo.styleClassName} />
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
          {/* <h1>Current Location: {currentLocation} </h1> */}
          <Outlet />
        </ColumnWrapper>
      </RowWrapper>

      {/* <style>
        {`
        body{
          background: #f0fbff;
        }
          RowWrapper {
           background: red;
          }
        `}
      </style> */}
    </div>
  );
}

export default AdminDashboard;
