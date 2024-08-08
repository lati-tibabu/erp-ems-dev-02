import React, { useEffect, useState } from 'react'
import { Heading4 } from '../../../../components/Typography'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../../styles/admin-school.css'
import { useNavigate } from 'react-router-dom';

library.add(fas)

function SchoolListing() {
  const [schools, setSchools] = useState([])

  const getSchools = async () => {
    try {
      const response = await fetch('http://localhost:3060/api/school/load');
      const data = await response.json();
      setSchools(data);
    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  };

  useEffect(() => {
    getSchools()
  }, []);

  const schoolHeadings = ['School Code', 'School Name', 'Type', 'Action']

  const handleEdit = (schoolID) => {
    console.log('Editing school with ID:', schoolID);
  };

  const navigate = useNavigate();

  const handleView = (schoolID) => {
    navigate(`/admin/school/view/${schoolID}`)
  }

  return (
    <div>
      <Heading4 text='School Listing' />

      <table className='school-data-table' style={{width:'100%'}}>
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
  )
}

export default SchoolListing;
