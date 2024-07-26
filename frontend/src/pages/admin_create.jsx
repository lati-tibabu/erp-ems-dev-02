// import React from "react";
import FullScreen from '../components/full_screen'
import { Heading2,Label } from '../components/Typography';
import ColumnWrapper from '../components/column_wrapper';
import RowWrapper from '../components/row_wrapper';
import { HorizontalLine } from '../components/line_separator';
import { InputField } from '../components/input_field';
import { PrimaryButton } from '../components/buttons';
import { CenterColumn } from '../components/center';
import { AiLogo } from '../components/ems_logo';

function AdminCreate (props){
    return (
        // <div>Hello</div>
        // <FullScreen style={{overflow: 'scroll'}}>
            <CenterColumn>
                <AiLogo style={{width: '100px'}}/>
            <ColumnWrapper style={
                {
                    width: '30vw', 
                    borderRadius: '30px', 
                    padding: '30px',

                    // @media (max-width:600px){
                    //     width: '60vw'
                    // }
                }
                
                }>
                <CenterColumn>
                <Heading2 text="Create Admin"/>
                <Label text="Portal to create Admin of the system"/>
                </CenterColumn>
                <HorizontalLine style={{background: 'rgb(0, 57, 110)',height:'2px' }} />
                <InputField labelName="Username" placeholder="Enter Username" name="username" type="text" />
                        <InputField labelName="Password" placeholder="Enter Password" name="password" type="password" />
                        <InputField labelName="Email Address" placeholder="Enter Email Address" name="email_address" type="email" />
                        <InputField labelName="Phone Number" placeholder="Enter Phone Number" name="phone_number" type="tel" />
                        <InputField labelName="First Name" placeholder="Enter First Name" name="first_name" type="text" />
                        <InputField labelName="Last Name" placeholder="Enter Last Name" name="last_name" type="text" />
                        <InputField labelName="Street Address" placeholder="Enter Street Address" name="street_address" type="text" />
                        <InputField labelName="City" placeholder="Enter City" name="city" type="text" />
                        <InputField labelName="State/Region" placeholder="Enter State/Region" name="state" type="text" />
                        <InputField labelName="Postal Code" placeholder="Enter Postal Code" name="postal_code" type="text" />
                        <InputField labelName="Country" placeholder="Enter Country" name="country" type="text" />
                        <RowWrapper style={{border: 'none'}}>
                            <PrimaryButton>Submit</PrimaryButton>
                        </RowWrapper>
            </ColumnWrapper>   
            </CenterColumn>         

        // </FullScreen>
    );
}

export default AdminCreate