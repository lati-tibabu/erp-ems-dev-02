import React, { useState } from 'react';
import { Heading3, Label } from '../../../components/Typography';
import ColumnWrapper from '../../../components/column_wrapper';
import RowWrapper from '../../../components/row_wrapper';
import { Checkbox } from '../../../components/input_field';
import { CheckboxWrapper } from '../../../components/wrapper';
import { PrimaryButton } from '../../../components/buttons';
import SchoolListing from './school-pages/school-listing';
import AddSchool from './school-pages/add-school';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

function School() {
  // const [schoolWindow, setSchoolWindow] = useState(<SchoolListing />);
  const [schoolWindow, setSchoolWindow] = useState('listing');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddSchoolClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      // schoolWindow === <SchoolListing /> ? setSchoolWindow(<AddSchool />) : setSchoolWindow(<AddSchool />);
      schoolWindow === 'listing' ? setSchoolWindow('add') : setSchoolWindow('listing');
      setIsLoading(false);
    }, 500); 
  };

  return (
    <div>
      <Heading3 text="School Management" />
      <ColumnWrapper
        style={{
          borderRadius: '5px',
          // height: '100vh',
          overflow: 'scroll',
          padding: '10px',
          border: 'none',
          boxShadow: '0px 0px 20px 0px rgba(0,136,255,0.2)',
          // background: 'red'
        }}>
        <RowWrapper style={{ border: 'none' }}>
          <RowWrapper
            style={{
              width: '100%',
              justifyContent: 'space-between',
              border: 'none',
            }}>
            <RowWrapper
              style={{
                width: '300px',
                borderRadius: '5px',
                justifyContent: 'end',
                alignItems: 'center',
                padding: '0',
                border: 'none',
                boxShadow: '0px 0px 20px 0px rgba(0,136,255,0.2)',
              }}>
              <input
                type="text"
                placeholder="Search school"
                style={{ borderRadius: '0', width: '100%', height: '60%', border: 'none' }}
              />
              <FontAwesomeIcon
                icon="fa-solid fa-search"
                color="#fff"
                onClick={() => {
                  alert('hi');
                }}
                style={{
                  padding: '10px',
                  borderRadius: '0 5px 5px 0',
                  background: '#0088ff',
                  cursor: 'pointer',
                }}
              />
            </RowWrapper>
            <PrimaryButton
              style={{
                borderRadius: '5px',
                border: 'none',
                boxShadow: '0px 0px 20px 0px rgba(0,136,255,0.2)',
                width: '200px',
              }}
              onClick={handleAddSchoolClick}
              disabled={isLoading}>
              {/* {isLoading ? 'Loading...' : schoolWindow === <AddSchool /> ? 'School Listing' : 'Add New School'} */}
              { isLoading?'loading...':schoolWindow === 'listing' ? 'Add School' : 'School Listing'}
            </PrimaryButton>
          </RowWrapper>
        </RowWrapper>
        <RowWrapper
          style={{
            gap: '5px',
            height: '100%',
            border: 'none',
          }}>
          <ColumnWrapper
            style={{
              width: '200px',
              height: '100%',
              border: 'none',
            }}>
            <Label text="Filter school search" />
            <ColumnWrapper
              style={{
                gap: '5px',
                border: 'none',
              }}>
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
          <ColumnWrapper style={{ width: '100%' }}>
            {/* {schoolWindow==='listing'?<SchoolListing/>:<AddSchool/>} */}
          </ColumnWrapper>
        </RowWrapper>
      </ColumnWrapper>
    </div>
  );
}

export default School;
