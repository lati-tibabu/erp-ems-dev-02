// admin_dashboard.jsx
import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import RowWrapper from '../../components/row_wrapper';
import ColumnWrapper from '../../components/column_wrapper';
// import { AiLogo } from '../../components/ems_logo';
import circle8175 from '../../assets/circle8175.png';
import { Heading3,Heading6, Label } from '../../components/Typography';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

library.add(fas);

function AdminDashboard() {


const uname = useSelector((state) => state.auth.username);
const uname2 = localStorage.getItem('username');
// console.log(uname2)
  
const [visibleNav,setVisibleNav] = useState(0);
const navigate = useNavigate();

const { state } = useLocation();

// const username = (state && "@"+state.username) || "Admin"; 
const username = (uname2 && "@"+uname2) || "Admin"; 

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    navigate('/auth/login');
  }

  const styles = 
  {
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
    boxShadow: '3px 3px 5px 0px #0088ff23',
    width: !visibleNav && '150px',
    // background: 'red',
  },
  header_styles: {
    // background:'#F0FBFF',
    background: 'white',
    border:'none',
    boxShadow:'0 4px 8px 0 rgba(0, 170, 230, 0.012)',
    borderRadius: '7px '
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
    boxShadow: '3px 3px 5px 0px #0088ff23',
    borderRadius: '10px',
    gap: '20px',
    background: '#fff',
    // background: 'red',
    border: 'none'
  },
  main_content_area:{
    width: '100%',
    border:'none',
    background: 'white',
    borderRadius: '10px',
    padding: '20px',
    gap: '10px',
    boxShadow: '3px 3px 5px 0px #0088ff23',
    height: '76.6vh',
    overflowY: 'scroll',
    // background: 'red'
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
}

  return (
    <div style={{
      minHeight: '100vh',
      background:'#09f1',
      padding: '5px'
      }}>
      {/* Header */}
      <RowWrapper style={styles.header_styles}>
        {/* <AiLogo style={{ width: '80px' }} /> */}
        <ProperLogo2 style={{ height: '70px' }} />
        <RowWrapper style={{ width: '100%',border:'none'}}>
          <RowWrapper style={{ width: '100%',border:'none' }}>
            <Heading3 text="Admin Dashboard" style={{ fontSize: '2rem' }} />
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
      <RowWrapper style={{ gap: '10px', border:'none', paddingRight: '0', paddingLeft: '0' }}>
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
            {linkTo: '/admin/home', icon: 'fa-house', label: 'Home'},
            {linkTo: '/admin/school/listing/all', icon: 'fa-school', label: 'School'},
            {linkTo: '/admin/users', icon: 'fa-users', label: 'Users'},
            {linkTo: '/admin/report', icon: 'fa-file-alt', label: 'Reports'},
            {linkTo: '/admin/profile', icon: 'fa-user', label: 'Profile'},
            {linkTo: '/admin/settings', icon: 'fa-cog', label: 'Settings'},
            {linkTo: '/admin/help', icon: 'fa-question', label: 'Help'},
          ].map((navInfo) => (
            <Link to={navInfo.linkTo} style={{textDecoration: 'none'}}>
              <RowWrapper style={styles.home_nav_button_style}>
                <FontAwesomeIcon icon={`fa-solid ${navInfo.icon}`} color='#383861' />
                <Label text={visibleNav==0?navInfo.label:''} style={{ color: '#383861', fontWeight: '700' }} />
              </RowWrapper>
            </Link>    
          ))}
            <Link to={'/admin/home'} style={{textDecoration: 'none'}}>
              <RowWrapper style={styles.home_nav_button_style}>
                <FontAwesomeIcon icon="fa-solid fa-house" color='#383861' />
                <Label text={visibleNav==0?'Home':''} style={{ color: '#383861', fontWeight: '700' }} />
              </RowWrapper>
            </Link>

            <Link to={'/admin/school/listing/all'} style={{textDecoration: 'none'}}>
              <RowWrapper style={styles.home_nav_button_style}>          
                <FontAwesomeIcon icon="fa-solid fa-school" color='#383861' />
                <Label text={visibleNav==0?'Schools':''} style={{ color: '#383861', fontWeight: '700' }} />
              </RowWrapper>
            </Link>

            <Link to={'/admin/users'} style={{textDecoration: 'none'}}>
              <RowWrapper style={styles.home_nav_button_style}>
                <FontAwesomeIcon icon="fa-solid fa-users" color='#383861' />
                <Label text={visibleNav==0?'Users':''} style={{ color: '#383861', fontWeight: '700' }} />
              </RowWrapper>
            </Link>

            <Link to={'/admin/report'} style={{textDecoration: 'none'}}>
              <RowWrapper style={styles.home_nav_button_style}>
                <FontAwesomeIcon icon="fa-solid fa-file-alt" color='#383861' />
                <Label text={visibleNav==0?'Reports':''} style={{ color: '#383861', fontWeight: '700' }} />
              </RowWrapper>
            </Link>

            <Link to={'/admin/profile'} style={{textDecoration: 'none'}}>
              <RowWrapper style={styles.home_nav_button_style}>
                <FontAwesomeIcon icon="fa-solid fa-user" color='#383861' />
                <Label text={visibleNav==0?'Profile':''} style={{ color: '#383861', fontWeight: '700' }} />
              </RowWrapper>
            </Link>

            <Link to={'/admin/settings'} style={{textDecoration: 'none'}}>
              <RowWrapper style={styles.home_nav_button_style}>
                <FontAwesomeIcon icon="fa-solid fa-cog" color='#383861' />
                <Label text={visibleNav==0?'Settings':''} style={{ color: '#383861', fontWeight: '700' }} />
              </RowWrapper>
            </Link>

            <Link to={'/admin/help'} style={{textDecoration: 'none'}}>          
              <RowWrapper style={styles.home_nav_button_style}>
                <FontAwesomeIcon icon="fa-solid fa-question" color='#383861' />
                <Label text={visibleNav==0?'Help':''} style={{ color: '#383861', fontWeight: '700' }} />
              </RowWrapper>
            </Link>

            {/* <Link to={'/auth/login'} style={{textDecoration: 'none'}}>
              <RowWrapper style={styles.home_nav_button_style}>
                <FontAwesomeIcon icon="fa-solid fa-sign-out-alt" color='#383861' />
                <Label text={visibleNav==0?'Logout':''} style={{ color: '#383861', fontWeight: '700' }} />
              </RowWrapper>
            </Link> */}

            <RowWrapper style={styles.home_nav_button_style}
              onClick={handleLogout}>
              <FontAwesomeIcon icon="fa-solid fa-sign-out-alt" color='#383861' />
              <Label text={visibleNav==0?'Logout':''} style={{ color: '#383861', fontWeight: '700' }} />
            </RowWrapper>
          </ColumnWrapper>
        </ColumnWrapper>

        <ColumnWrapper style={styles.main_content_area}>
          <Outlet />
        </ColumnWrapper>
      </RowWrapper>

      <style>
        {`
        body{
          background: #f0fbff;
        }
          RowWrapper {
           background: red;
          }
        `}
      </style>
    </div>
  );
}

export default AdminDashboard;
