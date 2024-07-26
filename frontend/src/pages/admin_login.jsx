// import React from "react";
import FullScreen from '../components/full_screen';
import { Heading1,Heading2,Label } from '../components/Typography';
import ColumnWrapper from '../components/column_wrapper';
import RowWrapper from '../components/row_wrapper';
import { HorizontalLine } from '../components/line_separator';
import { InputField } from '../components/input_field';
import { PrimaryButton } from '../components/buttons';
import { CenterColumn } from '../components/center';
import { AiLogo } from '../components/ems_logo';

function AdminLogin (props){
    return (

        <FullScreen>
        <CenterColumn>

            {/* <Heading1 text="ERP-Based EMS"/> */}
            <AiLogo style={{width:'100px', }}/>
            
            <ColumnWrapper style={
                {
                    width: '20vw', 
                    borderRadius: '30px', 
                    padding: '30px',
                }
            }>
                
                <CenterColumn>
                    <Heading2 text="Admin Login"/>
                    <Label text="Admin portal to login to the system"/>
                </CenterColumn>
                <HorizontalLine style={{background: 'rgb(0, 57, 110)',height:'2px' }} />
                <InputField labelName="Username" placeholder="Enter Username" name="username" type="text" />
                <InputField labelName="Password" placeholder="Enter Password" name="password" type="password" />
                        
                <RowWrapper style={{border: 'none'}}>
                    <PrimaryButton>Submit</PrimaryButton>
                </RowWrapper>
            </ColumnWrapper>   
        </CenterColumn>   
        </FullScreen>      
    );
}

export default AdminLogin