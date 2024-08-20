import React from 'react'
import { Heading5 } from '../Typography';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

// import '../../styles/admin-school.css'
// import '../button-styles.css'

library.add(fas)

function PrincipalListing({title, principals, handleEdit, handleView, width}) {
    // const schoolHeadings = ['School Code', 'School Name', 'Type', 'Action']
    // const principalHeadings = ['','','Name', 'School', 'Type', 'Action'];
    const principalHeadings = ['','','Name', 'School', 'Type'];

  return (
    <div>
      <Heading5 text={title} />

      <div className='school-listing-container'>
        <table className='school-data-table' style={{width: {width}, borderRadius: '10px'}}>
          <thead>
            <tr>
              {principalHeadings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {principals.map((principal, index) => (
              // <Link to='/principal/${principal.principal_id'>
                <tr key={index}>
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
                  <td> <Link style={{textDecoration: 'none', color: 'rgb(0,0,0)'}} to={`/admin/users/overview/principal/list/view/${principal.user.user_id}`}> {principal.user.first_name+" "+principal.user.middle_name+" "+principal.user.last_name} </Link> </td>
                  <td>{principal.school.name}</td>
                  <td>{principal.principal_type}</td>
                  {/* <td className='actions'>
                    <button onClick={() => handleEdit(principal.principal_id)}>
                      <FontAwesomeIcon icon='fa-solid fa-pencil' />
                      Edit
                    </button>

                    <button onClick={() => handleView(principal.principal_id)}>
                      <FontAwesomeIcon icon='fa-solid fa-eye' />
                      View
                    </button>
                  </td> */}
                </tr>
              // </Link>
            ))}
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