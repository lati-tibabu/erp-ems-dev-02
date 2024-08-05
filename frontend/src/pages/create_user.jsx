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
import { useEffect, useState } from 'react';
import Select from 'react-select';

function CreateUser (props){

    const [userData, setUserData] = useState({
        role_id: '',
        first_name: '',
        last_name: '',
        username: '',
        password: '',
        confirm_password: '',
        address_id: '',
    });
    const [addressData, setAddressData] = useState([]);
    const [roleData, setRoleData] = useState([]);

    const getAddress = async () => {
        try{
            const response = await fetch('http://localhost:3060/api/address/load')
            const data = await response.json();
            setAddressData(data);
            // console.log(data);
        }catch(error){
            console.error('Error fetching address: ', error);
        }
    };

    const getRole = async () => {
        try{
            const response = await fetch('http://localhost:3060/api/role/load');
            const data = await response.json();
            setRoleData(data)
            // console.log('Role data',data);
        }catch(error){
            console.error('Error fetching roles:', error);
        }
    };

    useEffect(() => {
        getAddress();
        getRole();
    },[]);
    
    return (
            <CenterColumn>
                <AiLogo style={{width: '100px'}}/>
            <ColumnWrapper style={
                {
                    width: '30vw', 
                    borderRadius: '30px', 
                    padding: '30px',
                }
                
                }>
                <CenterColumn>
                <Heading2 text="Create User"/>
                <Label text="Portal to create Admin of the system"/>
                </CenterColumn>
                    
                    <HorizontalLine style={{background: 'rgb(0, 57, 110)',height:'2px' }} />
                    {/* <InputField labelName="User Role" placeholder="Enter City" name="city" type="text" /> */}
                    <Label text="User Role"/>
                    <Select
                    placeholder="Select Role"
                    options={roleData.map((roles)=>(
                        {
                            value: roles.role_id,
                            label: roles.role_name,
                        }
                    ))}
                    >
                    </Select>
                    <InputField labelName="First Name" placeholder="Enter First Name" name="first_name" type="text" />
                    <InputField labelName="Last Name" placeholder="Enter Last Name" name="last_name" type="text" />
                    <InputField labelName="Username" required placeholder="Enter Username" name="username" type="text" />
                    <InputField labelName="Email Address" placeholder="Enter Email Address" name="email_address" type="email" />
                    <InputField labelName="Phone Number" placeholder="Enter Phone Number" name="phone_number" type="tel" />
                    <InputField labelName="Password" required placeholder="Password" name="password" type="password" />
                    <InputField labelName="Confirm Password" required placeholder="Confirm Password" name="confirm_password" type="password" />
                    {/* <InputField labelName="Address" placeholder="Enter Street Address" name="street_address" type="text" /> */}
                    <Label text="Address"/>
                    <Select 
                    placeholder='Select Address'
                    options={addressData.map((address)=>(
                        {
                            value: address.address_id,
                            label: address.city+","+address.subcity+","+address.woreda+","+address.kebele
                        }
                    ))}
                    >

                    </Select>
                    
                    <RowWrapper style={{border: 'none'}}>
                        <PrimaryButton>Submit</PrimaryButton>
                    </RowWrapper>

            </ColumnWrapper>   
            </CenterColumn>         

        // </FullScreen>
    );
}

export default CreateUser
