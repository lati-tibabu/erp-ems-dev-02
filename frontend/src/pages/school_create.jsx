import React, { useState } from 'react'
import { Heading1 } from '../components/Typography'
import {InputField} from '../components/input_field'
import { PrimaryButton } from '../components/buttons'
import { CenterColumn } from '../components/center'
import axios from 'axios'



function SchoolCreate() {

    const [schoolData, setSchoolData] = useState({
        school_id: '',
        school_name: '',
        school_address: '',
        city: '',
        subcity: '',
        woreda: '',
        kebele: '',
        phone_number: '',
        email_address: '',
        established_year: '',
        school_type: '',
        student_capacity: '',
        current_enrollment: '',
        description: '',
        logo: '',
    });
    const handleChange = (event) => {
        const {name, value} = event.target;
        setSchoolData({
            ...schoolData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(schoolData);
        try {
            const response = await axios.post('http://localhost:3050/api/school/create', schoolData);
            console.log("Success:", response);
        } catch (error) {
            console.error("Error: ",error)
        }
    };
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <CenterColumn>
        <Heading1 text="Create New School" />
        <InputField labelName="School ID" placeholder="Enter School ID" name="school_id" type="text"value={schoolData.school_id} onChange={handleChange} />
        <InputField labelName="School Name" placeholder="Enter School Name" name="school_name" type="text"value={schoolData.school_name} onChange={handleChange} />
        <InputField labelName="School Address" placeholder="Enter School Address" name="school_address" type="text"value={schoolData.school_address} onChange={handleChange} />
        <InputField labelName="City" placeholder="Enter City" name="city" type="text"value={schoolData.city} onChange={handleChange} />
        <InputField labelName="Subcity" placeholder="Enter Subcity" name="subcity" type="text"value={schoolData.subcitycity} onChange={handleChange} />
        <InputField labelName="Woreda" placeholder="Enter Woreda" name="woreda" type="text"value={schoolData.woreda} onChange={handleChange} />
        <InputField labelName="Kebele" placeholder="Enter Kebele" name="kebele" type="text"value={schoolData.kebele} onChange={handleChange} />
        <InputField labelName="Phone Number" placeholder="Enter Phone Number" name="phone_number" type="tel" value={schoolData.phone_number} onChange={handleChange}/>
        <InputField labelName="Email Address" placeholder="Enter Email Address" name="email_address" type="email" value={schoolData.email_address} onChange={handleChange} />
        <InputField labelName="Established Year" placeholder="Enter Established Year" name="established_year" type="number" value={schoolData.established_year} onChange={handleChange} />
        <InputField labelName="School Type" placeholder="Enter School Type" name="school_type" type="text"value={schoolData.school_type} onChange={handleChange} />
        <InputField labelName="Student Capacity" placeholder="Enter Student Capacity" name="student_capacity" type="number" value={schoolData.student_capacity} onChange={handleChange} />
        <InputField labelName="Current Enrollment" placeholder="Enter Current Enrollment" name="current_enrollment" type="number" value={schoolData.current_enrollment} onChange={handleChange} />
        <InputField labelName="Description" placeholder="Enter Description" name="description" type="text"value={schoolData.description} onChange={handleChange} />
        <InputField labelName="Logo URL" placeholder="Enter Logo URL" name="logo" type="url" value={schoolData.logo} onChange={handleChange}/>
        <PrimaryButton>Submit</PrimaryButton>
        </CenterColumn>
        </form>
    </div>
  )
}

export default SchoolCreate;