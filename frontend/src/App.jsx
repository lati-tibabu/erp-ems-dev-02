import React from 'react'
import { InputField } from './components/input_field' 
import ColumnWrapper from './components/column_wrapper'
import RowWrapper from './components/row_wrapper'
import { PrimaryButton, SecondaryButton } from './components/buttons'
import { Heading1,Heading2,Heading3,Heading4,Heading5,Heading6,Label,Paragraph} from './components/Typography'

import './index.css'

function App() {
  return (
    <div>
      <ColumnWrapper style={{justifyContent: 'center', width : '400px', padding: '20px', borderRadius: '10px'}}>
        <Heading2 text='Register' />
        <Paragraph text='Please fill in this form to create an account.' />
        <InputField labelName="Name" placeholder="Enter Name" name='name' type="text"/>
        <InputField labelName="Phone" placeholder="Enter Phone" name='phone' type="text"/> 
        <InputField labelName="Email" placeholder="Enter Email" name='email' type="email"/>
        <InputField labelName="Password" placeholder="Enter Password" name='password' type="password"/>
        <InputField labelName="Confirm Password" placeholder="Confirm Password" name='password' type="password"/>
        <InputField labelName="Occupation" placeholder="Occupation" name='Occupation' type="text"/>
        <RowWrapper style={{justifyContent: 'space-around', border: 'none'}}>
          <PrimaryButton>Register</PrimaryButton>
          <SecondaryButton>Cancel</SecondaryButton>
        </RowWrapper>

        <Label text="This is a labeled text"/>
        </ColumnWrapper>
      {/* <InputField labelName="Male" value="male" name='sex' type="radio"/>
      <InputField labelName="Female" value="female" name='sex' type="radio"/> */}
    </div>
  )
}

export default App