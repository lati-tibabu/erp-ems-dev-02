import React from 'react'
import { Heading2 } from '../../../components/Typography'
import ColumnWrapper from '../../../components/column_wrapper'


function School() {
  return (
    <div>
      <Heading2 text="School Mangement" />
      <ColumnWrapper 
        style={{
          gap: '10px',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '10px',
          borderRadius: '5px',
          height: '100vh'
        }}
      >
      </ColumnWrapper>
      
    </div>
  )
}

export default School