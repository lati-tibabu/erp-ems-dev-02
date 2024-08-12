import React, { useEffect, useState } from 'react'
import { Heading4, } from '../../../../components/Typography'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../../../../styles/admin-school.css'
import '../../../../styles/admin-school.css'
import { Link, Outlet, useLocation } from 'react-router-dom';
import ViewSchool from './view-school';
// import SchoolListing from './school-pages/school-listing';
import { useNavigate } from 'react-router-dom';
import RowWrapper from '../../../../components/row_wrapper';
import { PrimaryButton, SecondaryButton } from '../../../../components/buttons';
import './button-styles.css'
import { HorizontalLine } from '../../../../components/line_separator';


library.add(fas)

function SchoolListing() {

  const [schools, setSchools] = useState([])
  const location = useLocation();

  const onAllPage = (location.pathname === ('/admin/school/listing/all'))
  const onActivePage = (location.pathname === ('/admin/school/listing/active'))
  const onPendingPage = (location.pathname === ('/admin/school/listing/pending'))
  const onDeletedPage = (location.pathname === ('/admin/school/listing/deleted'))
  const onArchivedPage = (location.pathname === ('/admin/school/listing/archived'))

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
    <div>
      <Heading4 text='School Listing' />

      {/* {location.pathname === '/admin/school/listing/all' && <h1>All Listing</h1>} */}
      {/* {onAllPage && <h1>All Listing</h1>}
      {onActivePage && <h1>Active Listing</h1>}
      {onPendingPage && <h1>Pending Listing</h1>}
      {onDeletedPage && <h1>Deleted Listing</h1>}
      {onArchivedPage && <h1>Archived Listing</h1>} */}

      <HorizontalLine
        style={{
          background: 'rgba(0,150,255,0.82)',
          marginTop: '5px',
        }} 
      />
      
      <RowWrapper style={{ 
        marginTop: '20px', 
        gap: '15px', 
        height: '50px',
        border: 'none',
        }}>
        {/* <SecondaryButton>All Schools </SecondaryButton> */}

        <Link to='/admin/school/listing/all'> 
          <button className={'schoolButtonStyle all-schools '+ (onAllPage && 'selected-button')}>
            All Schools
          </button>
        </Link>
        <Link to='/admin/school/listing/active'> 
          <button className={'schoolButtonStyle active-schools '+ (onActivePage && 'selected-button')}>
            Active Schools
          </button>
        </Link>
        <Link to='/admin/school/listing/pending'> 
          <button className={'schoolButtonStyle pending-schools '+ (onPendingPage && 'selected-button')}>
            Pending Schools
          </button>
        </Link>
        <Link to='/admin/school/listing/deleted'> 
          <button className={'schoolButtonStyle deleted-schools '+ (onDeletedPage && 'selected-button')}>
            Deleted Schools
          </button>
        </Link>
        <Link to='/admin/school/listing/archived'> 
          <button className={'schoolButtonStyle archived-schools '+ (onArchivedPage && 'selected-button')}>
            Archived Schools
          </button>
        </Link>

      </RowWrapper>
      {/* <div className='school-listing-container'>
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
      </div> */}
      <div className="school-listing-container">
        <Outlet />
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
    // border: '2px solid black'
  }
}

export default SchoolListing;