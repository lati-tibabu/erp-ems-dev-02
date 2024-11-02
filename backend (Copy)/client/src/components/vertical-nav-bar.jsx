import React, { Fragment } from 'react'
import React from 'react';
import { Link } from 'react-router-dom'
import RowWrapper from './row_wrapper';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/admin_dashboard.css'
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas);

function VerticalNav() {

    const styles = {
        
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
        } 
    }
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default VerticalNav