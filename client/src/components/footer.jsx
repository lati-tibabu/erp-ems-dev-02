import React from 'react'
import { ProperLogo4 } from './ems_logo';
import { Paragraph } from './Typography';
import { Link } from 'react-router-dom';
import RowWrapper from './row_wrapper';

function Footer() {
  return (
    <div>
        <RowWrapper
          // style={{
          //   // background: '#004d99',
          //   // background: '#0000f9',
          //   background: "black",
          //   color: 'white',
          //   padding: '10px 20px',
          //   textAlign: 'center',
          //   border: 'none',
          //   display: 'flex',
          //   flexDirection: 'column',
          //   justifyContent: 'center',
          //   alignItems: 'center',
          //   gap: '10px'}} 
          className='back-color-blue80 color-white flex-column justify-center align-center p-50 m-20 br-20px gap-10'>
            <ProperLogo4 style={{width: '80px'}}/>
            <Paragraph className='font-xs font-w-400' text='© 2024 SchoolStream. All rights reserved.' style={{ color: 'white' }} />
            <Paragraph className='font-xs font-w-400' text='Contact Us' style={{ color: 'white' }} />
            <Paragraph className='font-xs font-w-400' text='About Us' style={{ color: 'white' }} />
            <Link>
              <Paragraph className='font-xs font-w-400' text='Privacy Policy | Terms of Service' style={{ color: 'white' }} />
            </Link>
        </RowWrapper>
      </div>
    )
}

export default Footer