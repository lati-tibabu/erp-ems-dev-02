import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import SchoolListing from '../../../../../components/school-components/school_listings';
import '../../../../../styles/admin-school.css'
import '../button-styles.css'

// library.add(fas)

function PendingSchoolListing() {

  const apiURL = import.meta.env.VITE_API_URL;

  const [schools, setSchools] = useState([])
  const getSchools = async () => {
    try {
      const response = await fetch(`${apiURL}/api/school/load/pending`);
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

  return (
    <SchoolListing 
    title='Pending Schools Listing'
    schools={schools}
    handleEdit={handleEdit}
    handleView={handleView}
    />
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

export default PendingSchoolListing;