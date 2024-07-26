import React from 'react'
import RowWrapper from '../components/row_wrapper'
import ColumnWrapper from '../components/column_wrapper'
import { AiLogo } from '../components/ems_logo'
import { Heading3,Label,Paragraph } from '../components/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function AdminDashboard() {
  return (
    <div>
      <RowWrapper>
        <AiLogo style={{width: '80px'}}/>
        <RowWrapper style={{width:'100%'}}> 
        <FontAwesomeIcon icon="fa-solid fa-message" />
        </RowWrapper>
      </RowWrapper>

      <RowWrapper style={{gap:'10px '}}>
      
      <ColumnWrapper style={{width:'200px', minHeight:'80vh'}}>
      </ColumnWrapper>
      
      <ColumnWrapper style={{width:'100%'}}>
      </ColumnWrapper>

      </RowWrapper>
      
    </div>
  )
}

export default AdminDashboard