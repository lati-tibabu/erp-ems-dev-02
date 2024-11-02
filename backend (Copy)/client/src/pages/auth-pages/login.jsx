import React from 'react'
import { CenterColumn, CenterRow } from '../../components/center'
import ColumnWrapper from '../../components/column_wrapper'
import { Heading2, Paragraph, Label } from '../../components/Typography'
import { InputField } from '../../components/input_field'
import { PrimaryButton } from '../../components/buttons'
import FullScreen from '../../components/full_screen'

export default function LoginPage() {
  return (
    <FullScreen >
        <CenterColumn>
            <ColumnWrapper style={{width:'400px', padding: '30px', borderRadius: '30px'}}>
            <CenterColumn>
            <Heading2 
            text="Login"
            />
            <Label 
            text="School Login Portal"
            />

            </CenterColumn>
            {/* <Paragraph>This is Paragraph</Paragraph> */}
            <CenterColumn style={{gap:'20px'}}>
            <InputField type="text" labelName="Username"/>
            <InputField type="password" labelName="Password"/>
            <PrimaryButton>Login</PrimaryButton>
            </CenterColumn>
            </ColumnWrapper>
        </CenterColumn>
    </FullScreen>
  )
}
