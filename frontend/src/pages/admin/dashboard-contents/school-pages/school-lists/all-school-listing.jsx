import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Label } from '../../../../../components/Typography';
import SchoolListing from '../../../../../components/school-components/school_listings';
import '../../../../../styles/admin-school.css'
import '../button-styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AllSchoolListing() {

  const apiURL = import.meta.env.VITE_API_URL;

  const [schools, setSchools] = useState({schools:[],totalPages:0,currentPage:1, headers:[]})
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);


  // const getSchools = async () => {
  //   try {
  //     const response = await fetch(`${apiURL}/api/school/load`);
  //     const data = await response.json();
  //     setSchools(data);
  //   } catch (error) {
  //     console.error('Error fetching schools:', error);
  //   }
  // };

  const getSchools = async (page, limit) => {
    try {
      const token = localStorage.getItem('token');
      const headers = {'authorization': `Bearer ${token}`};
      const response = await fetch(`${apiURL}/api/school/load/paginationC?page=${page}&limit=${limit}`, {
        method: 'GET',
        headers: headers
      });
      const data = await response.json();
      setSchools(data);
    } catch (error) {
      console.error('Error fetching schools:', error);
    }
  };


  useEffect(() => {
    getSchools(page,limit)
  }, [page, limit]);

// const schoolHeadings = ['School Code', 'School Name', 'Type', 'Action']

const navigate = useNavigate();

  const handleEdit = (schoolID) => {
    navigate(`/admin/school/edit/${schoolID}`)
  };

  const handleView = (schoolID) => {
    navigate(`/admin/school/view/${schoolID}`)
  }

  const styleClasses = {
    plusMinus : 'color-blueGreen100 '
  }

  useEffect(() => {
    console.log(schools)
  },[schools])
  return (
    <>
    <div className='flex-row align-center gap-10 bw-1px bs-solid bc-blueGreen100-60 back-color-blueGreen80-30 p-10 w-15p br-4px'>
        <Label text='School Per Page' />

        <FontAwesomeIcon icon="fa-solid fa-minus" onClick={() => !(limit===1) && setLimit(limit-1) }  className={styleClasses.plusMinus}/>
        <input type="text" name="" value={limit} onChange={(e) => setLimit(parseInt(e.target.value))} className='w-15p br-2px'/>
        <FontAwesomeIcon icon="fa-solid fa-plus" onClick={() => setLimit(limit + 1)} className={styleClasses.plusMinus}/>

      </div>

    <SchoolListing
    title="All School Listing"
    // schools={schoolsArray}
    schools={schools.schools}
    handleEdit={handleEdit}
    handleView={handleView}
    // limit={limit}
    />

    <div className='flex-column'>
      <p>Page {schools.currentPage} of {schools.totalPages}</p>
      <div className='flex-row gap-10'>
        {!(schools.currentPage === 1)
          ?<FontAwesomeIcon style={{cursor: 'pointer'}} onClick={() => setPage(page-1)} icon='fa-solid fa-chevron-left' className='p-5 back-color-blueGreen100-50 w-30px br-4px color-white'/>
          :<FontAwesomeIcon style={{cursor: 'not-allowed'}} icon='fa-solid fa-chevron-left' className='p-5 back-color-gray100-50 w-30px br-4px color-white'/>
        }
        {!(schools.currentPage === schools.totalPages)
        ?<FontAwesomeIcon style={{cursor: 'pointer'}} onClick={() => setPage(page+1)} icon='fa-solid fa-chevron-right'className='p-5 back-color-blueGreen100-50 w-30px br-4px color-white' />
        :<FontAwesomeIcon style={{cursor: 'not-allowed'}} icon='fa-solid fa-chevron-right' className='p-5 back-color-gray100-50 w-30px br-4px color-white'/>
      }
      </div>
    </div>
    </>
  )
}

export default AllSchoolListing;