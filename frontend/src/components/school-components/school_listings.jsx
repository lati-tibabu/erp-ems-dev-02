import React from 'react'
import { Heading5 } from '../Typography';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas)

function SchoolListing({ title, schools, handleEdit, handleView, limit, page }) {
  const schoolHeadings = ['School Code', 'School Name', 'Type', 'Action']

  return (
    <div>
      <Heading5 text={title} />
      <div className='school-listing-container'>
        
        <table 
          className='font-xs font-w-400 p-5 m-5 bw-2px bs-solid bc-blueGreen80-40 w-90p br-10px' 
          // style={{borderCollapse: ''}} 
          >

          <thead>
            <tr>
              {schoolHeadings.map((heading, index) => (
                <th key={index} className='text-left'>{heading}</th>
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

export default SchoolListing;