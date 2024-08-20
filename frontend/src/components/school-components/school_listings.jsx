import React from 'react'
import { Heading5 } from '../Typography';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import '../../styles/admin-school.css'
// import '../button-styles.css'

library.add(fas)

function SchoolListing({title, schools, handleEdit, handleView}) {
    const schoolHeadings = ['School Code', 'School Name', 'Type', 'Action']

  return (
    <div>
      <Heading5 text={title} />

      <div className='school-listing-container'>
        <table className='school-data-table' style={{width:'100%', borderRadius: '10px'}}>
          <thead>
            <tr>
              {schoolHeadings.map((heading, index) => (
                <th key={index}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schools.map((school, index) => (
              <tr key={index}>
                <td>{school.school_code}</td>
                <td>{school.name}</td>
                <td>{school.type}</td>
                <td className='actions'>
                  <button onClick={() => handleEdit(school.school_id)}>
                    <FontAwesomeIcon icon='fa-solid fa-pencil' />
                    Edit
                  </button>

                  <button onClick={() => handleView(school.school_id)}>
                    <FontAwesomeIcon icon='fa-solid fa-eye' />
                    View
                  </button>
                </td>
              </tr>
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

export default SchoolListing;