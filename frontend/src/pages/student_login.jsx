import React from 'react'
import FullScreen from '../components/full_screen'
import { Heading2,Label } from '../components/Typography'
import { AiLogo } from '../components/ems_logo'
import { HorizontalLine } from '../components/line_separator'
import ColumnWrapper from '../components/column_wrapper'
import { CenterColumn } from '../components/center'
import { InputField } from '../components/input_field'
import { PrimaryButton } from '../components/buttons'
import { toPadding } from 'chart.js/helpers'



function StudentLogin() {
  return (
    // <div>StudentLogin</div>
  //
  <FullScreen>

<CenterColumn>
    
    <AiLogo style={{width: '100px'}}/>

    <ColumnWrapper style={{width:'40vh', padding:'30px', borderRadius: '20px'}}>
    
    <CenterColumn>
    <Heading2 text="Student Login"/>
    <Label text="Student login portal"/>
    </CenterColumn>

    
    <HorizontalLine style={{width:'100%', background: 'blue', height:'2px'}} />

    <InputField labelName="Username" type="text" name="username" />
    <InputField labelName="Password" type="password" name="username" />
    <PrimaryButton>Login</PrimaryButton>


    </ColumnWrapper>
    </CenterColumn>
   
  </FullScreen>
  )
}

export default StudentLogin