import { Label, Heading6 } from '../../../../../../components/Typography';
import ColumnWrapper from '../../../../../../components/column_wrapper';
import RowWrapper from '../../../../../../components/row_wrapper';
import { HorizontalLine } from '../../../../../../components/line_separator';
import { InputField } from '../../../../../../components/input_field';
import { PrimaryButton } from '../../../../../../components/buttons';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CreateContact (props){

    const apiURL = import.meta.env.VITE_API_URL;

    const {user_id} = useParams()

    const userID = {user_id: user_id}

    const [contactData, setContactData] = useState([]);
    const [currentSection, setCurrentSection] = useState('');

    const [mobileSection, setMobileSection] = useState(false);
    const [homeSection, setHomeSection] = useState(false);
    const [emergencySection, setEmergencySection] = useState(false);
    const [pagerSection, setPagerSection] = useState(false);
    const [otherSection, setOtherSection] = useState(false);

    const navigate = useNavigate();

    const handleMobileChange = (event) => {
        const { name, value } = event.target;
        setContactData((prevData) => {
            const updatedData = [...prevData];
            const nameIndex = updatedData.findIndex(data => data.name === 'Mobile');
            if (nameIndex !== -1) {
                updatedData[nameIndex][name] = value;
            } else {
                updatedData.push({ user_id: user_id, name: 'Mobile', [name]: value });
            }
            return updatedData;
        });
    };

    const handleHomeChange = (event) => {
        const { name, value } = event.target;
        setContactData((prevData) => {
            const updatedData = [...prevData];
            const nameIndex = updatedData.findIndex(data => data.name === 'Home');
            if (nameIndex !== -1) {
                updatedData[nameIndex][name] = value;
            } else {
                updatedData.push({ user_id: user_id, name: 'Home', [name]: value });
            }
            return updatedData;
        });
    };

    const handleEmergencyChange = (event) => {
        const { name, value } = event.target;
        setContactData((prevData) => {
            const updatedData = [...prevData];
            const nameIndex = updatedData.findIndex(data => data.name === 'Emergency');
            if (nameIndex !== -1) {
                updatedData[nameIndex][name] = value;
            } else {
                updatedData.push({ user_id: user_id, name: 'Emergency', [name]: value });
            }
            return updatedData;
        });
    };

    const handlePagerChange = (event) => {
        const { name, value } = event.target;
        setContactData((prevData) => {
            const updatedData = [...prevData];
            const nameIndex = updatedData.findIndex(data => data.name === 'Pager');
            if (nameIndex !== -1) {
                updatedData[nameIndex][name] = value;
            } else {
                updatedData.push({ user_id: user_id, name: 'Pager', [name]: value });
            }
            return updatedData;
        });
    };

    const handleOtherChange = (event) => {
        const { name, value } = event.target;
        setContactData((prevData) => {
            const updatedData = [...prevData];
            const nameIndex = updatedData.findIndex(data => data.name === 'Other');
            if (nameIndex !== -1) {
                updatedData[nameIndex][name] = value;
            } else {
                updatedData.push({ user_id: user_id, name: 'Other', [name]: value });
            }
            return updatedData;
        });
    };

    // const handleSectionChange = (section)
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${apiURL}/api/contact/create`, contactData)

            if (response.status === 201) {
                // alert(`Contacts created succesfully with id ${response.data.contact_id}`);
                console.log('Contacts created succesfully',response);
                navigate('/admin/users/overview/principal/list')
                
            } else {
                alert('Error Adding Contacts');
                console.log('Error Adding Contacts');
            }
            // console.log(combinedData);

        } catch (error) {
            console.error('Error: ', error);
            if (error.response) {
                console.error('Error details:', error.response.data);
              }
              if (error.response && error.response.status === 500) {
                // alert("An internal server error occurred. Please try again later.");
                console.log("An internal server error occurred. Please try again later.");
              } else {
                console.log("An error occurred while submitting the form. Please check your input and try again.");
              }
        }
    }

    const handleSubmit2 = (event) => {
        event.preventDefault();

        console.log('Contact Data');
        console.log(contactData);
    }

    return (
        <>
            <Label text="Enter principal's contact information"/>
            <HorizontalLine style={{background: 'rgb(0, 57, 110)',height:'2px' }} />
            
            <form onSubmit={handleSubmit}>

                <ColumnWrapper style={{borderRadius: '10px', borderWidth:'2px', padding: '10px', background: 'rgba(0,120,170,0.03)'}}>
                    <RowWrapper style={{border: 'none',justifyContent:'space-between', alignItems: 'center'}}>
                        <Heading6 text="Mobile"/>
                        <FontAwesomeIcon icon={`fa-solid fa-chevron-${mobileSection?"up":"right"}`} style={{fontSize: '0.7rem', cursor: 'pointer'}} onClick={()=>setMobileSection(!mobileSection)}/>
                    </RowWrapper>
                    <ColumnWrapper style={{border: 'none', display: mobileSection ? 'flex' : 'none',}}>
                        <InputField 
                            labelName="Phone Number" 
                            placeholder="Enter Phone Number" 
                            name="phone"
                            type="text" 
                            onChange={handleMobileChange}
                            // value={contactData.phone} 
                            />

                        <InputField
                            labelName="Relationship"
                            placeholder="Enter contact user relationship detail"
                            name="relationship"
                            type="text"
                            onChange={handleMobileChange}
                            // value={contactData.relationship} 
                            />
                    </ColumnWrapper>
                </ColumnWrapper>

                <ColumnWrapper style={{borderRadius: '10px', borderWidth:'2px', padding: '10px', background: 'rgba(0,120,170,0.03)'}}>
                    <RowWrapper style={{border: 'none',justifyContent:'space-between', alignItems: 'center'}}>
                        <Heading6 text="Home"/>
                        <FontAwesomeIcon icon={`fa-solid fa-chevron-${homeSection ? "up" : "right"}`} style={{fontSize: '0.7rem', cursor: 'pointer'}} onClick={() => setHomeSection(!homeSection)}/>
                    </RowWrapper>
                    <ColumnWrapper style={{border: 'none', display: homeSection ? 'flex' : 'none'}}>

                        <InputField 
                            labelName="Phone Number" 
                            placeholder="Enter Phone Number" 
                            name="phone"
                            type="text" 
                            onChange={handleHomeChange}
                            // value={contactData.homePhone} 
                            />

                        <InputField
                            labelName="Relationship"
                            placeholder="Enter contact user relationship detail"
                            name="relationship"
                            type="text"
                            onChange={handleHomeChange}
                            // value={contactData.homeRelationship} 
                            />
                    </ColumnWrapper>
                </ColumnWrapper>

                <ColumnWrapper style={{borderRadius: '10px', borderWidth:'2px', padding: '10px', background: 'rgba(0,120,170,0.03)'}}>
                    <RowWrapper style={{border: 'none',justifyContent:'space-between', alignItems: 'center'}}>
                        <Heading6 text="Emergency"/>
                        <FontAwesomeIcon icon={`fa-solid fa-chevron-${emergencySection ? "up" : "right"}`} style={{fontSize: '0.7rem', cursor: 'pointer'}} onClick={() => setEmergencySection(!emergencySection)}/>
                    </RowWrapper>
                    <ColumnWrapper style={{border: 'none', display: emergencySection ? 'flex' : 'none'}}>
                        <InputField 
                            labelName="Phone Number" 
                            placeholder="Enter Phone Number" 
                            name="phone"
                            type="text" 
                            onChange={handleEmergencyChange}
                            // value={contactData.emergencyPhone} 
                            />

                        <InputField
                            labelName="Relationship"
                            placeholder="Enter contact user relationship detail"
                            name="relationship"
                            type="text"
                            onChange={handleEmergencyChange}
                            // value={contactData.emergencyRelationship} 
                            />
                    </ColumnWrapper>
                </ColumnWrapper>

                <ColumnWrapper style={{borderRadius: '10px', borderWidth:'2px', padding: '10px', background: 'rgba(0,120,170,0.03)'}}>
                    <RowWrapper style={{border: 'none',justifyContent:'space-between', alignItems: 'center'}}>
                        <Heading6 text="Pager"/>
                        <FontAwesomeIcon icon={`fa-solid fa-chevron-${pagerSection ? "up" : "right"}`} style={{fontSize: '0.7rem', cursor: 'pointer'}} onClick={() => setPagerSection(!pagerSection)}/>
                    </RowWrapper>
                    <ColumnWrapper style={{border: 'none', display: pagerSection ? 'flex' : 'none'}}>
                        <InputField 
                            labelName="Pager Number" 
                            placeholder="Enter Pager Number" 
                            name="phone"
                            type="text" 
                            onChange={handlePagerChange}
                            // value={contactData.pagerNumber} 
                            />
                    </ColumnWrapper>
                </ColumnWrapper>

                <ColumnWrapper style={{borderRadius: '10px', borderWidth:'2px', padding: '10px', background: 'rgba(0,120,170,0.03)'}}>
                    <RowWrapper style={{border: 'none',justifyContent:'space-between', alignItems: 'center'}}>
                        <Heading6 text="Other"/>
                        <FontAwesomeIcon icon={`fa-solid fa-chevron-${otherSection ? "up" : "right"}`} style={{fontSize: '0.7rem', cursor: 'pointer'}} onClick={() => setOtherSection(!otherSection)}/>
                    </RowWrapper>
                    <ColumnWrapper style={{border: 'none', display: otherSection ? 'flex' : 'none'}}>
                        <InputField 
                            labelName="Contact Detail" 
                            placeholder="Enter Contact Detail" 
                            name="phone"
                            type="text" 
                            onChange={handleOtherChange}
                            // value={contactData.otherContact} 
                            />
                    </ColumnWrapper>
                </ColumnWrapper>



                <RowWrapper style={{ justifyContent: 'center', border: 'none'}}>
                    <PrimaryButton style={{width:'100px', fontWeight: 'normal'}}>Create</PrimaryButton>
                </RowWrapper>

            </form>
        </>
    );
}

export default CreateContact;
