import React, { useState } from 'react';
// import RowWrapper from '../../../components/row_wrapper';

import ColumnWrapper from '../../../components/column_wrapper';
import { Heading3,Heading6, Label } from '../../../components/Typography';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PrimaryButton } from '../../../components/buttons';
import RowWrapper from '../../../components/row_wrapper';

library.add(fas);

function Home() {
  return (
    <div>
          <Heading3 text='Data Overview'/>
          <Label text='The followings are the overview of the entire data' />

          <RowWrapper
          style={{
            gap: '10px',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '5px'
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
                background: '#0088ff',
                gap: '20px'
              }}
            >
              <Heading3 text='390' style={{ color: 'white',fontWeight:'bold' }} />
              <Label text='Schools' style={{ color: 'white',fontWeight:'bold' }} />
            </ColumnWrapper>
            <ColumnWrapper
            style={{ 
              width: '20%',
              height: '100px',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '3px 3px 5px 0px #0088ff23',
              borderRadius: '10px',
              background: '#F08080',
              gap: '20px'
            }}>
              <Heading3 text='1200+' style={{ color: 'white',fontWeight:'bold' }}/>
              <Label text='Students' style={{ color: 'white',fontWeight:'bold' }}/>
            </ColumnWrapper>
            <ColumnWrapper
            style={{ 
              width: '20%',
              height: '100px',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '3px 3px 5px 0px #0088ff23',
              borderRadius: '10px',
              background: '#2E8B57',
              gap: '20px'
            }}>
              <Heading3 text='500+'style={{ color: 'white',fontWeight:'bold' }}/>
              <Label text='Teachers' style={{ color: 'white',fontWeight:'bold' }}/>
            </ColumnWrapper>
            <ColumnWrapper
            style={{ 
                width: '20%',
                height: '100px',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '3px 3px 5px 0px #0088ff23',
                borderRadius: '10px',
                background: '#DAA520',
                gap: '20px'
              }}>
              <Heading3 text='200+'style={{ color: 'white',fontWeight:'bold' }}/>
              <Label text='Parents' style={{ color: 'white',fontWeight:'bold' }}/>
            </ColumnWrapper>
          </RowWrapper>
          <RowWrapper style={{background:'FFFFE0'}}>
            <ColumnWrapper>
            <Heading6 text="Quick Actions"/>
              <ColumnWrapper
              style={{
                gap: '10px',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '10px',
                cursor: 'pointer',
                borderRadius: '5px'
              }}>
                <PrimaryButton>
                  <RowWrapper
                    style={{
                      gap: '10px',
                      justifyContent: 'start',
                      alignItems: 'center',
                      padding: '10px',
                      cursor: 'pointer',
                      borderRadius: '5px',
                      border: 'none',
                    }}
                    >
                    <FontAwesomeIcon icon="fa-solid fa-plus" color='#fff' />
                  Add School
                  </RowWrapper>
                  </PrimaryButton>
                <PrimaryButton
                  style={{background:'#AFF120',color:'#2E7A57'}}
                >
                <RowWrapper
                style={{
                  gap: '10px',
                  justifyContent: 'start',
                  alignItems: 'center',
                  padding: '10px',
                  cursor: 'pointer',
                  borderRadius: '5px',
                  border: 'none',
                }}
                >
                    <FontAwesomeIcon icon="fa-solid fa-plus" color='#2E7A57' />
                  Add Principal
                  </RowWrapper>
                </PrimaryButton>
              </ColumnWrapper>
            </ColumnWrapper>
            <ColumnWrapper>
            <Heading6 text="Recent Activities"/>
            <Label text="Recent Activities"/>
            <Label text="Recent Activities"/>
            <Label text={"JWT"} />
            </ColumnWrapper>
          </RowWrapper>
        </div> 
  )
}

export default Home