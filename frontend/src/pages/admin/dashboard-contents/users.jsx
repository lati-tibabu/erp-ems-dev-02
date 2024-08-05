import React, { useState } from 'react';
import ColumnWrapper from '../../../components/column_wrapper';
import RowWrapper from '../../../components/row_wrapper';
import { Heading3, Label } from '../../../components/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Users() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (button) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div>
      <ColumnWrapper
        style={{
          height: '100vh',
          border: 'none'
        }}
      >
        <Heading3 text='Users Overview' />
        <RowWrapper
          style={{
            gap: '10px',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '5px',
            border: 'none'
          }}
        >
          <ColumnWrapper
            style={{ 
              width: '20%',
              height: '100px',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '3px 3px 5px 0px #0088ff23',
              borderRadius: '10px',
              background: '#DAA520', // Goldenrod for Principals
              gap: '20px',
              border: 'none'
            }}
          >
            <Heading3 text='300' style={{ color: 'white', fontWeight: 'bold' }} />
            <Label text='Principals' style={{ color: 'white', fontWeight: 'bold' }} />
          </ColumnWrapper>

          <ColumnWrapper
            style={{ 
              width: '20%',
              height: '100px',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '3px 3px 5px 0px #0088ff23',
              borderRadius: '10px',
              background: '#4682B4', // SteelBlue for Teachers
              gap: '20px',
              border: 'none'
            }}
          >
            <Heading3 text='500' style={{ color: 'white', fontWeight: 'bold' }} />
            <Label text='Teachers' style={{ color: 'white', fontWeight: 'bold' }} />
          </ColumnWrapper>

          <ColumnWrapper
            style={{ 
              width: '20%',
              height: '100px',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '3px 3px 5px 0px #0088ff23',
              borderRadius: '10px',
              background: '#32CD32', // LimeGreen for Students
              gap: '20px',
              border: 'none'
            }}
          >
            <Heading3 text='1000' style={{ color: 'white', fontWeight: 'bold' }} />
            <Label text='Students' style={{ color: 'white', fontWeight: 'bold' }} />
          </ColumnWrapper>

          <ColumnWrapper
            style={{ 
              width: '20%',
              height: '100px',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '3px 3px 5px 0px #0088ff23',
              borderRadius: '10px',
              background: '#FF6347', // Tomato for Parent Users
              gap: '20px',
              border: 'none'
            }}
          >
            <Heading3 text='150' style={{ color: 'white', fontWeight: 'bold' }} />
            <Label text='Parent Users' style={{ color: 'white', fontWeight: 'bold' }} />
          </ColumnWrapper>
        </RowWrapper>
        <RowWrapper 
          style={{
            gap: '10px',
            padding: '10px',
            borderRadius: '5px',
            border: 'none'
          }}
        >
          <ColumnWrapper
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '3px 3px 5px 0px #0088ff23',
              flex: '1',
              gap: '20px',
              border: 'none'
            }}
          >
            <Label text='Add Users'/>

            <ColumnWrapper
              style={{
                justifyContent: 'space-between',
                alignItems: 'center',
                flex: '1',
                gap: '20px',
                border: 'none'
              }} 
            >
              <button
                style={{
                  padding: '10px 20px', 
                  borderRadius: '5px', 
                  border: 'none', 
                  cursor: 'pointer', 
                  background: hoveredButton === 'principal' ? '#9ACD32' : '#AFF120', 
                  color: '#2E7A57'             
                }}
                onMouseEnter={() => handleMouseEnter('principal')}
                onMouseLeave={handleMouseLeave}
              >
                <FontAwesomeIcon icon={"fa-solid fa-plus"} color='#2e7a57' />
                Add New Principal
              </button>
              <button 
                style={{
                  padding: '10px 20px', 
                  borderRadius: '5px', 
                  border: 'none', 
                  cursor: 'pointer',
                  // width: hoveredButton === 'teacher' ? '30px' : '150px',
                  background: hoveredButton === 'teacher' ? '#9ACD32' : '#AFF120',
                  color: '#2E7A57' 
                }}
                onMouseEnter={() => handleMouseEnter('teacher')}
                onMouseLeave={handleMouseLeave}
              >
                <FontAwesomeIcon icon={"fa-solid fa-plus"} color='#2e7a57' />
                Add New Teacher
              </button>
            </ColumnWrapper>
          </ColumnWrapper>
          <ColumnWrapper
            style={{
              flex: '3',
              border: 'none'
            }}
          >
            <Label text='Add Users'/> 
          </ColumnWrapper>
        </RowWrapper>
      </ColumnWrapper>
    </div>
  );
}

export default Users;
