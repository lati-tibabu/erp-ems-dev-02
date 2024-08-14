import React, { useState } from 'react';
import { Heading3, Label } from '../../../components/Typography';
import ColumnWrapper from '../../../components/column_wrapper';
import RowWrapper from '../../../components/row_wrapper';
import { Checkbox } from '../../../components/input_field';
import { CheckboxWrapper } from '../../../components/wrapper';
import { PrimaryButton, SecondaryButton } from '../../../components/buttons';
// import SchoolListing from './school-pages/school-listing';
// import AddSchool from './school-pages/add-school';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faDisplay, fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, useNavigate } from 'react-router-dom';
import { color } from 'chart.js/helpers';

library.add(fas);


function School() {
  const navigate = useNavigate();

  const [schoolWindow, setSchoolWindow] = useState('listing');
  const [isLoading, setIsLoading] = useState(false);
  
  const [filterVisible, setFilterVisible] = useState(false)
  
  const handleAddSchoolClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      schoolWindow === 'listing' ? setSchoolWindow('add') : setSchoolWindow('listing');
      schoolWindow === 'listing' ? navigate('/admin/school/add') : navigate('/admin/school/listing/all');
      setIsLoading(false);
    }, 500); 
  };

  const handleFilterClick = () => {
    setFilterVisible(!filterVisible)
  }
  const styles = {
    columnWrapper: {
      borderRadius: '15px',
      overflow: 'scroll',
      padding: '10px',
      border: 'none',
      // boxShadow: '0px 0px 20px 0px rgba(0,136,255,0.2)',
      background: 'white',
    },
    rowWrapperTop: {
      width: '100%',
      justifyContent: 'space-between',
      border: 'none',
    },
    searchWrapper: {
      width: '300px',
      borderRadius: '20px',
      justifyContent: 'end',
      alignItems: 'center',
      padding: '0',
      border: 'none',
      // boxShadow: '0px 0px 20px 0px rgba(0,136,255,0.2)',
      border: '1px solid #e8e8e8',
    },
    searchInput: {
      borderRadius: '20px 0 0 20px',
      fontSize: '0.8rem',
      width: '100%',
      // minWidth: '300px',
      height: '60%',
      border: 'none',
    },
    searchIcon: {
      padding: '10px',
      borderRadius: '0 20px 20px 0',
      // background: '#0088ff',
      // background: '#e8e8e8',
      background: 'rgba(0,141,218,1)',
      cursor: 'pointer',
      width: '40px',
    },
    add_listing_button: {
      borderRadius: '5px',
      border: 'none',
      // boxShadow: '0px 0px 20px 0px rgba(0,136,255,0.2)',
      maxWidth: '160px',
      height: '40px',
      fontSize: '0.8rem',
      fontWeight: '600',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '5px',
    },
    rowWrapperBottom: {
      gap: '5px',
      height: '100%',
      border: 'none',
    },
    filterColumnWrapper: {
      zIndex: '30',
      width: '200px',
      // height: '100%',
      // border: 'none',
      background: 'rgba(239,250,255,0.41)',
      backdropFilter: 'blur(15px)',
      padding: '30px',
      borderRadius: '20px',
      position: 'absolute',
  
      display: filterVisible ? 'flex' : 'none',
    },
    filterColumnInnerWrapper: {
      gap: '5px',
      border: 'none',
    },
    mainContentColumnWrapper: {
      width: '100%',
      border: 'none',
    },
    search_container: {
      border: 'none', 
      gap: '5px',
    },
    search_filter_container: {
      background: 'rgba(0,141,218,1)',
      borderRadius: '25px',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 15px 0 15px',
      gap: '3px',
      cursor: 'pointer',
    },
    main_search_container:{
      // background'red',
      border: 'none',
    },
    filter_items: {
      // background'red',
      border: 'none',
    },
    filter_item: {
      // border: 'none',
      padding: '2px 5px 2px 5px',
      borderRadius: '25px',
      gap: '5px',
      background: 'rgba(0,151,218,0.1)',
      borderWidth: '2px',
      borderColor: 'rgba(0,151,218,1)',
      alignItems: 'center',
      // cursor: 'pointer','
    },
    filter_item_label: {
      fontWeight: 'bold',
      color: 'rgba(0,151,218,1)',
    },
    filter_item_xmark: {
      cursor: 'pointer',
      width: '0.61rem',
      height: '0.61rem',
      // background: 'rgba(255,11,21,1)',
      color: 'rgba(0,151,218,1)',
      border: '2px solid rgba(0,151,218,1)',
      padding: '2px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };
  return (
    <div>
      <Heading3 text="School Management" />
      <ColumnWrapper style={styles.columnWrapper}>
        <RowWrapper style={{ border: 'none' }}>

          <RowWrapper style={styles.rowWrapperTop}>

            {/* Search container */}

            <ColumnWrapper style={styles.main_search_container}>
              <RowWrapper style={styles.search_container}>
                
                <RowWrapper style={styles.search_filter_container} onClick={handleFilterClick}>
                  <FontAwesomeIcon icon='fa-solid fa-filter' style={{color: 'white'}} / >
                  <Label text="Filter Search" style={{fontWeight: 'bold', color: 'white'}}/>
                </RowWrapper>

                <RowWrapper style={styles.searchWrapper}>
                  <input type="text" placeholder="Search school" style={styles.searchInput}/>
                  <FontAwesomeIcon
                    icon="fa-solid fa-search"
                    color="#fff"
                    onClick={() => {
                      alert('hi');
                    }}
                    style={styles.searchIcon}
                  />
                </RowWrapper>
              </RowWrapper>
              <RowWrapper style={styles.filter_items}>
                <RowWrapper style={styles.filter_item}>
                  <Label text="Public" style={styles.filter_item_label}/>
                  <FontAwesomeIcon icon='fa-solid fa-xmark' style={styles.filter_item_xmark}/>
                </RowWrapper>
              </RowWrapper>
            </ColumnWrapper>
            
            <SecondaryButton
              style={styles.add_listing_button}
              onClick={handleAddSchoolClick}
              disabled={isLoading}>
                {schoolWindow === 'listing' ? <FontAwesomeIcon icon="fa-solid fa-plus" /> : <FontAwesomeIcon icon="fa-solid fa-list" />}
                { isLoading ? 'Loading...' : schoolWindow === 'listing' ? 'Add School' : 'School Listing'}
            </SecondaryButton>
          </RowWrapper>
        </RowWrapper>
        <RowWrapper style={styles.rowWrapperBottom}>
          <ColumnWrapper style={styles.filterColumnWrapper}>
            <Label text="Filter school search" />
            <ColumnWrapper style={styles.filterColumnInnerWrapper}>
              <CheckboxWrapper wrapperName="School Type" style={{ border: 'none', }}>
                <Checkbox itemName="Public" name="public" value />
                <Checkbox itemName="Private" name="private" value />
              </CheckboxWrapper>
              <CheckboxWrapper wrapperName="Location" style={{ border: 'none' }}>
                <Checkbox itemName="Urban" name="urban" value />
                <Checkbox itemName="Rural" name="rural" value />
              </CheckboxWrapper>
              <CheckboxWrapper wrapperName="School Level" style={{ border: 'none' }}>
                <Checkbox itemName="Primary" name="primary" value />
                <Checkbox itemName="Secondary" name="secondary" value />
                <Checkbox itemName="Higher" name="higher" value />
              </CheckboxWrapper>
              <CheckboxWrapper wrapperName="Language Medium" style={{ border: 'none' }}>
                <Checkbox itemName="English" name="english" value />
                <Checkbox itemName="Afaan Oromoo" name="afaan_oromoo" value />
                <Checkbox itemName="Amharic" name="amharic" value />
              </CheckboxWrapper>
            </ColumnWrapper>
          </ColumnWrapper>
          <ColumnWrapper style={styles.mainContentColumnWrapper}>
            <Outlet />
          </ColumnWrapper>
        </RowWrapper>
      </ColumnWrapper>
    </div>
  );
}

export default School;
