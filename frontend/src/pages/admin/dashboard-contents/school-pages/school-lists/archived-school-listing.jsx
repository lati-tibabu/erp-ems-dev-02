import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import SchoolListing from '../../../../../components/school-components/school_listings';
import '../../../../../styles/admin-school.css'
import '../button-styles.css'

function ArchivedSchoolListing() {

  const apiURL = import.meta.env.VITE_API_URL;

  const [schools, setSchools] = useState([])
  const getSchools = async () => {
    try {
      const response = await fetch(`${apiURL}/api/school/load/archived`);
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

const navigate = useNavigate();

  const handleEdit = (schoolID) => {
    navigate(`/admin/school/edit/${schoolID}`)
  };

  const handleView = (schoolID) => {
    navigate(`/admin/school/view/${schoolID}`)
  }

  return (
    <SchoolListing 
    title={'Archived School Listing'}
    schools={schools}
    handleEdit={handleEdit}
    handleView={handleView}
    />
  )
}

export default ArchivedSchoolListing;