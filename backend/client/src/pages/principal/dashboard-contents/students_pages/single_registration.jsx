import React from "react";

import { Label } from "../../../../components/Typography";
import ColumnWrapper from '../../../../components/column_wrapper';
import RowWrapper from "../../../../components/row_wrapper";

import { HorizontalLine } from "../../../../components/line_separator";
import { InputField } from '../../../../components/input_field';
import { PrimaryButton } from '../../../../components/buttons';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function SingleStudentRegistration() {
    const apiURL = import.meta.env.VITE_API_URL;

    const navigate = useNavigate();

    const [userData, setUserData] = useState({});
    const [addressData, setAddressData] = useState([]);
    const [credentials, setCredentials] = useState({});
    const [address_id, setAddressId] = useState('')
    const [role_id, setRoleId] = useState('')
    const [gender, setGender] = useState({gender: ''})
    const location = useLocation();

    const onPage = location.pathname;

    const onSpecificPage = onPage.startsWith('/principal/students/registration/single/specific')

    // const genusername = async (first_name,)

    const getAddress = async () => {
        try{
            const response = await fetch(`${apiURL}/api/address/load`)
            const data = await response.json();
            setAddressData(data);
        }catch(error){
            console.error('Error fetching address: ', error);
        }
    };

    const getRole = async () => {
        try{
            const response = await fetch(`${apiURL}/api/role/loadn/Student`);
            const data = await response.json();
            setRoleId(data.role_id)
        }catch(error){
            console.error('Error fetching role:', error);
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

    const handleGenderChange = (event) => {
        const { value } = event.target;
        setGender({ gender: value });
    };

    const handleAddressChange = (event) => {
        const { value } = event.target;
        setAddressId(value);
    }
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const combinedData = {
    //             ...userData,
    //             address_id,
    //             role_id,
    //             username: (userData.first_name + userData.last_name).toLowerCase() + (Math.ceil(Math.random() * 1000)),
    //             password: (Math.ceil(Math.random() * 10000000)).toString(36),
    //             ...gender
    //         };
            
    //         const response = await axios.post(`${apiURL}/api/user/create`, combinedData);
    
    //         if (response.status === 201) {
    //             alert(`User created successfully!`);
                
    //             // Set the credentials state
    //             setCredentials({
    //                 user_id: response.data.user_id,
    //                 username: combinedData.username,
    //                 password: combinedData.password
    //             });

    //             const credential_response = await axios.post(`${apiURL}/api/credentials/create`, credentials);
    //             if (credential_response.status === 201) {
    //                 alert(`Credentials also created successfully!`);
    //             }    
                
    //             navigate('/principal/students/registration/single/specific/' + response.data.user_id, { state: combinedData });
    //             console.log('User created successfully', response);
    //         } else {
    //             alert('Error Adding User');
    //             console.log('Error Adding User');
    //         }
    //     } catch (error) {
    //         console.error('Error: ', error);
    //         if (error.response) {
    //             console.error('Error details:', error.response.data);
    //         }
    //         if (error.response && error.response.status === 500) {
    //             alert("An internal server error occurred. Please try again later.");
    //         } else {
    //             alert("An error occurred while submitting the form. Please check your input and try again.");
    //         }
    //     }
    // }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const combinedData = {
                ...userData,
                address_id,
                role_id,
                username: (userData.first_name + userData.last_name).toLowerCase() + (Math.ceil(Math.random() * 1000)),
                password: (Math.ceil(Math.random() * 10000000)).toString(36),
                ...gender
            };
            
            const response = await axios.post(`${apiURL}/api/user/create`, combinedData);
    
            if (response.status === 201) {
                alert(`User created successfully!`);
                
                const newCredentials = {
                    user_id: response.data.user_id,
                    username: combinedData.username,
                    password: combinedData.password
                };
    
                // Post credentials directly using newCredentials
                // const credential_response = await axios.post(`${apiURL}/api/credentials/create`, newCredentials);
                const credential_response = await axios.post(`${apiURL}/api/credentials/create`, newCredentials);
                if (credential_response.status === 201) {
                    alert(`Credentials also created successfully!`);
                }
    
                navigate('/principal/students/registration/single/specific/' + response.data.user_id, { state: combinedData });
                console.log('User and credentials created successfully', response);
            } else {
                alert('Error Adding User');
                console.log('Error Adding User');
            }
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
    

    console.log('Credentials: ',credentials);

    
    
  return (
    <RowWrapper className='w-100p bw-none justify-between gap-20 align-start'>
        <ColumnWrapper style={{width: '50%', padding: '20px', borderRadius: '20px', borderWidth: '2px', background: 'white', boxShadow: '3px 3px 5px 0px #0088ff23'}}>
            <Label text="Enter Student's user's information"/>
            <HorizontalLine style={{background: 'rgb(0, 57, 110)',height:'2px' }} />
            
            <form onSubmit={handleSubmit}>

                <InputField 
                    labelName="First Name" 
                    placeholder="Enter First Name" 
                    name="first_name" 
                    type="text" 
                    value={userData.first_name} 
                    onChange={handleUserChange} />

                <InputField 
                    labelName="Middle Name" 
                    placeholder="Enter Middle Name" 
                    name="middle_name" 
                    type="text" 
                    value={userData.middle_name} 
                    onChange={handleUserChange} />

                <InputField 
                    labelName="Last Name" 
                    placeholder="Enter Last Name" 
                    name="last_name" 
                    type="text" 
                    value={userData.last_name} 
                    onChange={handleUserChange} />

                {/* <InputField 
                    labelName="Username" 
                    required 
                    placeholder="Enter Username" 
                    name="username" 
                    type="text" 
                    value={userData.username} 
                    onChange={handleUserChange} />

                <InputField 
                    labelName="Password" 
                    required 
                    placeholder="Enter Password" 
                    name="password" 
                    type="password" 
                    value={userData.password} 
                    onChange={handleUserChange} /> */}

                <InputField 
                    labelName="Date of Birth" 
                    placeholder="Select Date of Birth" 
                    name="date_of_birth" 
                    type="date" 
                    value={userData.date_of_birth} 
                    onChange={handleUserChange} />

                <ColumnWrapper style={{border:'none'}}>
                    <Label text="Gender" required />
                    <Select placeholder="Select User's Gender"
                    options={[
                        {value: 'Male', label: 'Male'},
                        {value: 'Female', label: 'Female'},
                    ]} 
                    onChange={(e) => {setGender({ gender: e.value })}}
                    />
                </ColumnWrapper>
                
                <InputField 
                    labelName="Email Address" 
                    placeholder="Enter Email Address" 
                    name="email" 
                    type="email" 
                    value={userData.email} 
                    onChange={handleUserChange} />

                {/* <InputField 
                    labelName="House Number" 
                    placeholder="Enter House Number" 
                    name="house_number" 
                    type="text" 
                    value={userData.house_number} 
                    onChange={handleUserChange} />

                <InputField 
                    labelName="Nationality" 
                    placeholder="Enter Nationality" 
                    name="nationality" 
                    type="text" 
                    value={userData.nationality} 
                    onChange={handleUserChange} />

                <InputField 
                    labelName="Profile Photo URL" 
                    placeholder="Enter Profile Photo URL" 
                    name="profile_photo" 
                    type="text" 
                    value={userData.profile_photo} 
                    onChange={handleUserChange} /> */}
                
                <ColumnWrapper style={{border:'none'}}>
                    <Label text="Address" required/>
                        <Select placeholder="Select User's Address"
                            options={addressData.map((address) => ({
                                value: address.address_id,
                                label: `${address.city}, ${address.subcity}, ${address.woreda}, ${address.kebele}`,
                            }))}
                            onChange={(e) => setAddressId(e.value)}></Select>
                </ColumnWrapper>

                {!onSpecificPage&&<RowWrapper style={{ justifyContent: 'flex-end', border: 'none'}}>
                    <PrimaryButton style={{width:'100px', fontWeight: 'normal'}}>Next</PrimaryButton>
                </RowWrapper>}
            </form>
        </ColumnWrapper>
        {onSpecificPage&&
        <ColumnWrapper style={{width: '50%', padding: '20px', borderRadius: '20px', borderWidth: '2px', background: 'white', boxShadow: '3px 3px 5px 0px #0088ff23'}}>
            <Outlet />
        </ColumnWrapper>}
        </RowWrapper>
  );
}

export default SingleStudentRegistration;
