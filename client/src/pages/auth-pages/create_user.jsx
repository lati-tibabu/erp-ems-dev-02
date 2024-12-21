// import React from "react";
import FullScreen from '../../components/full_screen'
import { Heading2,Label } from '../../components/Typography';
import ColumnWrapper from '../../components/column_wrapper';
import RowWrapper from '../../components/row_wrapper';
import { HorizontalLine } from '../../components/line_separator';
import { InputField } from '../../components/input_field';
import { PrimaryButton } from '../../components/buttons';
import { CenterColumn } from '../../components/center';
import { AiLogo } from '../../components/ems_logo';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';

function CreateUser (props){

    const apiURL = import.meta.env.VITE_API_URL;

    const [userData, setUserData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
    });
    
    const [addressData, setAddressData] = useState([]);
    const [roleData, setRoleData] = useState([]);
    const [address_id, setAddressId] = useState('')
    const [role_id, setRoleId] = useState('')

    const getAddress = async () => {
        try{
            // const response = await fetch('http://localhost:3060/api/address/load')
            const response = await fetch(`${apiURL}/api/address/load`)
            const data = await response.json();
            setAddressData(data);
        }catch(error){
            console.error('Error fetching address: ', error);
        }
    };

    const getRole = async () => {
        try{
            // const response = await fetch('http://localhost:3060/api/role/load');
            const response = await fetch(`${apiURL}/api/role/load`);
            const data = await response.json();
            setRoleData(data)
        }catch(error){
            console.error('Error fetching roles:', error);
        }
    };

    useEffect(() => {
        getAddress();
        getRole();
    },[]);

    const handleUserChange = (event) =>{
        const{ name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]:value,
        }))
    }

    const handleSubmit = async (event) => {
        // console.log('Submit is clicked');
        // alert('handleSubmit')
        event.preventDefault();

        try {
            const combinedData = {
                ...userData,
                address_id,
                role_id
            };

            // const response = await axios.post('http://localhost:3060/api/user/create', combinedData)
            const response = await axios.post(`${apiURL}/api/user/create`, combinedData)

            if (response.status === 201) {
                alert('User created succesfully');
                console.log('User created succesfully');
            } else {
                alert('Error Adding User');
                console.log('Error Adding User');
            }
            console.log(combinedData);  

        } catch (error) {
            console.error('Error: ', error);
            if (error.response) {
                console.error('Error details:', error.response.data);
              }
              if (error.response && error.response.status === 500) {
                alert("An internal server error occurred. Please try again later.");
              } else {
                alert("An error occurred while submitting the form. Please check your input and try again.");
              }
        }
    }
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

                <form onSubmit={handleSubmit}>
                    <Label text="User Role" required/>
                    <Select
                    placeholder="Select Role"
                    options={roleData.map((roles)=>(
                        {
                            value: roles.role_id,
                            label: roles.role_name,
                        }
                    ))}
                    onChange={(e) => setRoleId(e.value)}
                    >
                    </Select>
                    <InputField 
                        labelName="First Name" 
                        placeholder="Enter First Name" 
                        name="first_name" 
                        type="text" 
                        value = {userData.first_name}
                        onChange = {handleUserChange}
                        />
                    <InputField 
                        labelName="Last Name" 
                        placeholder="Enter Last Name" 
                        name="last_name" 
                        type="text" 
                        value = {userData.last_name}
                        onChange = {handleUserChange}
                        />
                    <InputField 
                        labelName="Username" 
                        required 
                        placeholder="Enter Username" 
                        name="username" 
                        type="text" 
                        value = {userData.username}
                        onChange = {handleUserChange}
                        />
                    <InputField 
                        labelName="Email Address" 
                        placeholder="Enter Email Address" 
                        name="email_address" 
                        type="email" 
                        value = {userData.email}
                        onChange = {handleUserChange}
                        />
                    <InputField 
                        labelName="Phone Number" 
                        placeholder="Enter Phone Number" 
                        name="phone_number" 
                        type="tel" 
                        value = {userData.phone_no}
                        onChange = {handleUserChange}
                        />
                    <InputField 
                        labelName="Password" 
                        required 
                        placeholder="Password" 
                        name="password" 
                        type="password" 
                        value = {userData.password}
                        onChange = {handleUserChange}
                        />
                    {/* <InputField 
                        labelName="Confirm Password" 
                        required placeholder="Confirm Password" 
                        name="confirm_password" 
                        type="password" 
                        /> */}
                    {/* <InputField labelName="Address" placeholder="Enter Street Address" name="street_address" type="text" /> */}
                    <Label text="Address" required/>
                    <Select 
                    placeholder='Select Address'
                    options={addressData.map((address)=>(
                        {
                            value: address.address_id,
                            label: address.city+","+address.subcity+","+address.woreda+","+address.kebele
                        }
                    ))}
                    onChange={(e)=> setAddressId(e.value)}
                    >

                    </Select>
                    
                    <RowWrapper style={{border: 'none'}}>
                        <PrimaryButton>Submit</PrimaryButton>
                    </RowWrapper>
                </form>
        </ColumnWrapper>   
        </CenterColumn>         

        // </FullScreen>
    );
}

export default CreateUser
