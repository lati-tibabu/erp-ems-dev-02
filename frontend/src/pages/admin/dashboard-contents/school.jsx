import React, { useState } from 'react';
import { Heading3, Label } from '../../../components/Typography';
import ColumnWrapper from '../../../components/column_wrapper';
import RowWrapper from '../../../components/row_wrapper';
import { Checkbox } from '../../../components/input_field';
import { CheckboxWrapper } from '../../../components/wrapper';
import { PrimaryButton } from '../../../components/buttons';
// import SchoolListing from './school-pages/school-listing';
// import AddSchool from './school-pages/add-school';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, useNavigate } from 'react-router-dom';

library.add(fas);

const styles = {
  columnWrapper: {
    borderRadius: '5px',
    overflow: 'scroll',
    padding: '10px',
    border: 'none',
    boxShadow: '0px 0px 20px 0px rgba(0,136,255,0.2)',
  },
  rowWrapperTop: {
    width: '100%',
    justifyContent: 'space-between',
    border: 'none',
  },
  searchWrapper: {
    width: '300px',
    borderRadius: '5px',
    justifyContent: 'end',
    alignItems: 'center',
    padding: '0',
    border: 'none',
    boxShadow: '0px 0px 20px 0px rgba(0,136,255,0.2)',
  },
  searchInput: {
    borderRadius: '0',
    width: '100%',
    height: '60%',
    border: 'none',
  },
  searchIcon: {
    padding: '10px',
    borderRadius: '0 5px 5px 0',
    background: '#0088ff',
    cursor: 'pointer',
  },
  button: {
    borderRadius: '5px',
    border: 'none',
    boxShadow: '0px 0px 20px 0px rgba(0,136,255,0.2)',
    width: '200px',
  },
  rowWrapperBottom: {
    gap: '5px',
    height: '100%',
    border: 'none',
  },
  filterColumnWrapper: {
    width: '200px',
    height: '100%',
    border: 'none',
  },
  filterColumnInnerWrapper: {
    gap: '5px',
    border: 'none',
  },
  mainContentColumnWrapper: {
    width: '100%',
    border: 'none',
  },
};

function School() {
  const navigate = useNavigate();

  const [schoolWindow, setSchoolWindow] = useState('listing');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddSchoolClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      schoolWindow === 'listing' ? setSchoolWindow('add') : setSchoolWindow('listing');
      schoolWindow === 'listing' ? navigate('/admin/school/add') : navigate('/admin/school/listing');
      setIsLoading(false);
    }, 500); 
  };

  return (
    <div>
      <Heading3 text="School Management" />
      <ColumnWrapper style={styles.columnWrapper}>
        <RowWrapper style={{ border: 'none' }}>
          <RowWrapper style={styles.rowWrapperTop}>
            <RowWrapper style={styles.searchWrapper}>
              <input
                type="text"
                placeholder="Search school"
                style={styles.searchInput}
              />
              <FontAwesomeIcon
                icon="fa-solid fa-search"
                color="#fff"
                onClick={() => {
                  alert('hi');
                }}
                style={styles.searchIcon}
              />
            </RowWrapper>
            <PrimaryButton
              style={styles.button}
              onClick={handleAddSchoolClick}
              disabled={isLoading}>
              { isLoading ? 'Loading...' : schoolWindow === 'listing' ? 'Add School' : 'School Listing'}
            </PrimaryButton>
          </RowWrapper>
        </RowWrapper>
        <RowWrapper style={styles.rowWrapperBottom}>
          <ColumnWrapper style={styles.filterColumnWrapper}>
            <Label text="Filter school search" />
            <ColumnWrapper style={styles.filterColumnInnerWrapper}>
              <CheckboxWrapper wrapperName="School Type" style={{ border: 'none' }}>
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
