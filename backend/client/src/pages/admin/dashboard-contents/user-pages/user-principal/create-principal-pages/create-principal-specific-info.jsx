import { Label } from '../../../../../../components/Typography';
import ColumnWrapper from '../../../../../../components/column_wrapper';
import RowWrapper from '../../../../../../components/row_wrapper';
import { HorizontalLine } from '../../../../../../components/line_separator';
import { InputField } from '../../../../../../components/input_field';
import { PrimaryButton } from '../../../../../../components/buttons';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function CreatePrincipalSpecific (props){

    const apiURL = import.meta.env.VITE_API_URL;

    const token = localStorage.getItem('jwt')
    const header = {'authorization': `Bearer ${token}`};
    
    const {user_id} = useParams();
    const userID = {user_id: user_id}
    const [schoolID, setSchoolID] = useState({school_id: ''})
    const [salaryRange, setSalaryRange] = useState({salary_range: ''})
    const [principalType, setPrincipalType] = useState({principal_type: ''})
    
    const [principalData, setPrincipalData] = useState({});

    const [schools, setSchools] = useState([])

    const navigate = useNavigate();

    const salaryRanges = [
        { value: "0-20000", label: "0 - 20,000" },
        { value: "20001-40000", label: "20,001 - 40,000" },
        { value: "40001-60000", label: "40,001 - 60,000" },
        { value: "60001-80000", label: "60,001 - 80,000" },
        { value: "80001-100000", label: "80,001 - 100,000" },
        { value: "100001-120000", label: "100,001 - 120,000" },
        { value: "120001-140000", label: "120,001 - 140,000" },
        { value: "140001-160000", label: "140,001 - 160,000" },
        { value: "160001-180000", label: "160,001 - 180,000" },
        { value: "180001-200000",
             label: "180,001 - 200,000" },
        { value: "200001+", label: "200,001 and above" }
      ];


    const getSchools = async () => {
        try{

            const response = await fetch(`${apiURL}/api/school/load`,  {
                method: 'GET',
                headers: header,
            });
            const data = await response.json();
            setSchools(data);

        }catch(error){
            
            console.error('Error fetching schools:', error);
        }
    }

    useEffect(() => {
        // getAddress();
        // getRole();
        getSchools();
    },[]);

    const handlePrincipalChange = (event) =>{
        const{ name, value } = event.target;
        setPrincipalData((prevData) => ({
            ...prevData,
            [name]:value,
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const combinedData = {
                ...principalData,
                ...userID,
                ...schoolID,
                ...salaryRange,
                ...principalType,
                // school_id,
            };
            const response = await axios.post(`${apiURL}/api/principal/create`, combinedData)

            if (response.status === 201) {
                alert(`Principal created succesfully with id ${response.data.user_id}`);
                console.log('Principal created succesfully',response);
                if(window.confirm("The user(principal) does not have a contand do you want to add one for it?")){
                    navigate('/admin/users/overview/principal/create/contact/'+response.data.user_id)
                } else{
                    navigate('/admin/users/overview/principal/list');
                }
            } else {
                alert('Error Adding Principal');
                console.log('Error Adding Principal');
            }
            // console.log(combinedData);

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
        <>
            <Label text="Enter principal's specific information"/>
            
            <HorizontalLine style={{background: 'rgb(0, 57, 110)',height:'2px' }} />
            
            <form onSubmit={handleSubmit}>

                <ColumnWrapper>
                    <Label text='Principal type' />
                    <Select 
                        placeholder='Select Principal type'
                        options={[
                            {value: 'main', label:'Main'},
                            {value: 'vice', label:'Vice'}
                        ]}
                        onChange={(e) => setPrincipalType(prevState => ({...prevState, principal_type: e.value}))}
                    />
                </ColumnWrapper>

                <ColumnWrapper style={{border: 'none'}}>
                    <Label text="Choose the Principals School" required/>
                        <Select 
                        placeholder="Select School"
                        options={schools.map((school) => ({
                            value: school.school_id,
                            label: school.name,
                        }))}
                        onChange={(e) => setSchoolID(prevState => ({ ...prevState,school_id: e.value}))}/>
                </ColumnWrapper>

                <ColumnWrapper style={{border: 'none'}}>
                    <Label text='Salary Range' />
                    <Select 
                        placeholder='Select the salary range'
                        options={salaryRanges.map((range) => ({
                            value: range.value, label: range.label
                        }))}
                        onChange={(e) => setSalaryRange(prevState => ({...prevState, salary_range: e.value}))}
                    />
                </ColumnWrapper>


                <InputField 
                    labelName="Years of Experience" 
                    placeholder="Enter Years of Experience" 
                    name="experience_years" 
                    type="number" 
                    value={principalData.experience_years} 
                    onChange={handlePrincipalChange} />

                <InputField 
                    labelName="Qualification" 
                    placeholder="Enter Qualification" 
                    name="qualification" 
                    type="text" 
                    value={principalData.qualification} 
                    onChange={handlePrincipalChange} />

                <InputField 
                    labelName="Status" 
                    placeholder="Enter Status" 
                    name="status" 
                    type="text" 
                    value={principalData.status} 
                    onChange={handlePrincipalChange} />

                <InputField 
                    labelName="Office Location" 
                    placeholder="Enter Office Location" 
                    name="office_location" 
                    type="text" 
                    value={principalData.office_location} 
                    onChange={handlePrincipalChange} />

                <InputField 
                    labelName="Bio" 
                    placeholder="Enter Bio" 
                    name="bio" 
                    type="text" 
                    value={principalData.bio} 
                    onChange={handlePrincipalChange} />

                <InputField 
                    labelName="Start Date" 
                    placeholder="Select Start Date" 
                    name="start_date" 
                    type="date" 
                    value={principalData.start_date} 
                    onChange={handlePrincipalChange} />

                <InputField 
                    labelName="Specialization" 
                    placeholder="Enter Specialization" 
                    name="specialization" 
                    type="text" 
                    value={principalData.specialization} 
                    onChange={handlePrincipalChange} />

                <InputField 
                    labelName="Social Media Links" 
                    placeholder="Enter Social Media Links" 
                    name="social_media_links" 
                    type="text" 
                    value={principalData.social_media_links} 
                    onChange={handlePrincipalChange} />

                <InputField 
                    labelName="Education Level" 
                    placeholder="Enter Education Level" 
                    name="education_level" 
                    type="text" 
                    value={principalData.education_level} 
                    onChange={handlePrincipalChange} />

                {/* <ColumnWrapper>
                    <Label text="User" required />
                    <Select 
                        placeholder="Select User"
                        options={userData.map((user) => ({
                            value: user.user_id,
                            label: `${user.first_name} ${user.last_name}`,
                        }))}
                        onChange={(e) => handlePrincipalChange({ target: { name: 'user_id', value: e.value } })} />
                </ColumnWrapper> 
                
                 <ColumnWrapper>
                    <Label text="School" required />
                    <Select 
                        placeholder="Select School"
                        options={schoolData.map((school) => ({
                            value: school.school_id,
                            label: school.school_name,
                        }))}
                        onChange={(e) => handlePrincipalChange({ target: { name: 'school_id', value: e.value } })} />
                </ColumnWrapper> */}

                <RowWrapper style={{ justifyContent: 'flex-end'}}>
                    <PrimaryButton style={{width:'100px', fontWeight: 'normal'}}>Create</PrimaryButton>
                </RowWrapper>

            </form>
        </>
    );
}

export default CreatePrincipalSpecific;
