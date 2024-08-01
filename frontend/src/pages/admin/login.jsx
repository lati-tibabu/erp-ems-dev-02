import React from 'react';
import { PrimaryButton } from "../../components/buttons";
import { CenterColumn } from "../../components/center";
import ColumnWrapper from "../../components/column_wrapper";
import FullScreen from "../../components/full_screen";
import { InputField } from "../../components/input_field";
import RowWrapper from "../../components/row_wrapper";
import { Heading1, Label, Heading2 } from "../../components/Typography";

function Login() {
  return (
    <div>
      <FullScreen style={{ width: '30vw' }}>
        <RowWrapper 
          style={{ 
            height: '100vh', 
            gap: '20px', 
            justifyContent: 'center' 
          }}
        >
          <ColumnWrapper style={{ width: '40%', border: 'none' }}>
            <CenterColumn style={{ width: '70%', padding: '30px', borderRadius: '20px' }}>
              <Heading1 
                text="EMS" 
                style={{ fontSize: '3rem', fontWeight: '800' }} 
              />
              <Heading2 text="Login" />
              <Label text="Admin Login Portal" />
              <InputField placeholder="Enter Username" labelName="Username" />
              <InputField placeholder="Enter Password" labelName="Password" />
              <PrimaryButton style={{ width: '50%', marginTop: '20px' }}>Login</PrimaryButton>
              <Label text="Forgot Password?" />
            </CenterColumn>
          </ColumnWrapper>
        </RowWrapper>
      </FullScreen>
    </div>
  );
}

export default Login;
