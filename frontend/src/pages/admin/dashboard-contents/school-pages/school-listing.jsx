import React, { useEffect, useState } from 'react'
import { Heading4, } from '../../../../components/Typography'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../../../../styles/admin-school.css'
import '../../../../styles/admin-school.css'
import { Link, Outlet } from 'react-router-dom';
import ViewSchool from './view-school';
// import SchoolListing from './school-pages/school-listing';
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

// const schoolData = [
//   { 'School Code': 'ADS-001', 'School Name': 'Adama Primary School', 'Type': 'Public' },
//   { 'School Code': 'BHS-002', 'School Name': 'Bright Horizons School', 'Type': 'Private' },
//   { 'School Code': 'CPS-003', 'School Name': 'Cedar Park School', 'Type': 'Public' },
//   { 'School Code': 'DLS-004', 'School Name': 'Dawn Learning School', 'Type': 'Private' },
//   { 'School Code': 'EPS-005', 'School Name': 'Eagle Primary School', 'Type': 'Public' },
//   { 'School Code': 'FCS-006', 'School Name': 'Future Creators School', 'Type': 'Private' },
//   { 'School Code': 'GSS-007', 'School Name': 'Greenfield Secondary School', 'Type': 'Public' },
//   { 'School Code': 'HIS-008', 'School Name': 'Hope International School', 'Type': 'Private' },
//   { 'School Code': 'ISS-009', 'School Name': 'Inspire Secondary School', 'Type': 'Public' },
//   { 'School Code': 'JPS-010', 'School Name': 'Joyful Primary School', 'Type': 'Private' },
// ];
const navigate = useNavigate();

  const handleEdit = (schoolID) => {
    // console.log('Editing school with ID:', schoolID);
    navigate(`/admin/school/edit/${schoolID}`)
  };

// const handleView = (schoolCode) => {
//   console.log('Viewing school with code:', schoolCode);
// };

  const handleView = (schoolID) => {
    // alert('ViewSchool')
    navigate(`/admin/school/view/${schoolID}`)
  }

// try{
//   console.log(schools);
// }catch(err){
//   console.log('Error' ,err);
// }

  // console.log('Hello')
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
                    {/* {
                      Object.values(data).map((value, idx) => (
                        <td key={idx}>{value}</td>
                      ))
                    } */}
                    <td>{school.school_code}</td>
                    <td>{school.name}</td>
                    <td>{school.type}</td>
                    <td className='actions'>
                      <button onClick={() => handleEdit(school.school_id)}>
                        <FontAwesomeIcon icon='fa-solid fa-pencil' />
                        Edit
                      </button>

                      {/* <button onClick={() => handleView(data['school_id'])}>
                        <FontAwesomeIcon icon='fa-solid fa-eye' />
                        View
                      </button> */}
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