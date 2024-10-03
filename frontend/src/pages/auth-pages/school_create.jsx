import React, { useState } from 'react'
import { Heading2 } from '../../components/Typography'
import {InputField} from '../../components/input_field'
import { PrimaryButton, SecondaryButton, TertiaryButton, DangerButton, OKButton } from '../../components/buttons'
import { CenterColumn } from '../../components/center'
import axios from 'axios'
import ColumnWrapper from '../../components/column_wrapper'
import RowWrapper from '../../components/row_wrapper'



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
        logo: ''
    });

    const [userData, setUserData] = useState({
        username: '',
        password: '123456',
        role: 'Principal',
        school: '',
    })
    
    const handleChange = (event) => {
        const {name, value} = event.target;

        // setSchoolData({
        //     ...schoolData,
        //     [name]: value,
        // });

        setSchoolData(
            prevSchoolData => {
                const newSchoolData = {
                    ...prevSchoolData,
                    [name]: value,
                };
                
                const user_name = schoolData.school_name
                // let schoolId = schoolData.school_id
            
                let newUsername = [...user_name]
            
                let newUN = ''
            
                for (let i = 0; i < newUsername.length; i++){
                    if (newUsername[i] != " "){
                        newUN = newUN + newUsername[i].toLowerCase()
                    }
                }
            
                setUserData( prevUserData => ({
                    ...prevUserData,
                    username: newUN,
                    school: newSchoolData.school_id,
                }));

                return newSchoolData
                
            }
        )

        // const user_name = schoolData.school_name
        // // let schoolId = schoolData.school_id
    
        // let newUsername = [...user_name]
    
        // let newUN = ''
    
        // for (let i = 0; i < newUsername.length; i++){
        //     if (newUsername[i] != " "){
        //         newUN = newUN + newUsername[i].toLowerCase()
        //     }
        // }
    
        // setUserData({
        //     ...userData,
        //     username: newUN,
        //     school: schoolData.school_id,
        // });

    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        // handleUserData();

        console.log(schoolData);
        // handleUserData();
        console.log("UserData", userData)
        try {
            const response = await axios.post('http://localhost:3060/api/school/create', schoolData);
            try{
            const response2 = await axios.post('http://localhost:3060/api/user/create', userData)
            }catch(error){
                console.error("Error: ", error)
            }
            console.log("Success:", response);
            // handleUserData();
        } catch (error) {
            console.error("Error: ",error)
        }
    };
  return (
    <div >
        <form onSubmit={handleSubmit} >
        <CenterColumn>
        <ColumnWrapper style={{
                width: '400px', 
                padding: '30px',
                borderRadius: '10px',
                }}>
            <Heading2 text="Create New School" />
            <InputField labelName="School ID" placeholder="Enter School ID" name="school_id" type="text"value={schoolData.school_id} onChange={handleChange} />
            <InputField labelName="School Name" placeholder="Enter School Name" name="school_name" type="text"value={schoolData.school_name} onChange={handleChange} />
            <InputField labelName="School Address" placeholder="Enter School Address" name="school_address" type="text"value={schoolData.school_address} onChange={handleChange} />
            <InputField labelName="City" placeholder="Enter City" name="city" type="text"value={schoolData.city} onChange={handleChange} />
            <InputField labelName="Subcity" placeholder="Enter Subcity" name="subcity" type="text"value={schoolData.subcity} onChange={handleChange} />
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
            <InputField labelName="Just For Fun" placeholder="This just a placeholder" type="text"/>

            <RowWrapper>
            <PrimaryButton>Submit</PrimaryButton>
            <TertiaryButton>OK</TertiaryButton>
            </RowWrapper>
            </ColumnWrapper>
        </CenterColumn>
        </form>
    </div>
  )
}

export default SchoolCreate;