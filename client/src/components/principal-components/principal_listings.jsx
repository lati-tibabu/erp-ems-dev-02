import React, { useState } from 'react'
import { Heading5 } from '../Typography';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import Skeleton from '../skeleton';
library.add(fas)

// function PrincipalListing({title, principals, handleEdit, handleView, width}) {
  function PrincipalListing({title, principals, handleEdit, width, loading}) {

  const [selectedRow, setSelectedRow] =  useState(false);

  const navigate = useNavigate();

  const handleView = (principal) => {
    setSelectedRow(!selectedRow);
    navigate(`/admin/users/overview/principal/list/view`, {state: {principal}})
  }
    // const schoolHeadings = ['School Code', 'School Name', 'Type', 'Action']
    // const principalHeadings = ['','','Name', 'School', 'Type', 'Action'];
    // const principalHeadings = ['','','Name', 'School', 'Type','Contact'];
    const principalHeadings = ['','','Name', 'School','Gender', 'Type'];

  return (
    <div>
      <Heading5 text={title} />

      {/* <div className='flex-col back-color-red80 w-100p h-100px p-5 br-32px bw-8px bc-blueGreen100 bs-solid '>

      </div> */}

      <div className='school-listing-container'>
        <table 
          // className='' 
          className='font-xs font-w-400 p-20 m-5 bw-2px bs-solid bc-blueGreen80-40 w-100p br-30px' 
          // style={{width: {width}, borderRadius: '10px'}}
          
          >
          <thead>
            <tr>
              {principalHeadings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td><Skeleton width="20px" /></td>
                  <td><Skeleton width="40px" height="40px" borderRadius="50%" /></td>
                  <td><Skeleton width="150px" /></td>
                  <td><Skeleton width="120px" /></td>
                  <td><Skeleton width="60px" /></td>
                  <td><Skeleton width="80px" /></td>
                </tr>
              ))
            ) : (
              principals && principals.map((principal, index) => (
                // <Link to='/principal/${principal.principal_id'>
                  <tr key={index} onClick={() => handleView(principal)} className='table-row'>
                    <td>{index+1}</td>
                    <td>
                      <img 
                      src={principal.user.profile_photo ? principal.user.profile_photo : 
                      "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"} 
                      // width={40} 
                      alt="principals_avatar" 
                      style={{borderRadius: '50%', width: '40px', height: '40px'}}
                      />
                      </td>
                    {/* <td> <Link style={{textDecoration: 'none', color: 'rgb(0,0,0)'}} to={`/admin/users/overview/principal/list/view/${principal.principal_id}`}> {principal.user.first_name+" "+principal.user.middle_name+" "+principal.user.last_name} </Link> </td> */}
                    <td>{principal.user.first_name+" "+principal.user.middle_name+" "+principal.user.last_name} </td>
                    <td>{principal.school.name}</td>
                    <td>{principal.user.gender}</td>
                    <td>{principal.principal_type}</td>
                  </tr>
                // </Link>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const styles = {
  school_listing_button_style:{
    width: '150px',
    borderRadius: '5px',
    background: 'rgba(0,140,200,0.11)',
    border: '1px solid rgb(0,140,200)',
    fontWeight: 'normal',
    color: 'rgb(0,140,200)',
  }
}

export default PrincipalListing;