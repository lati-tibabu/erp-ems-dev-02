import { Label, Heading6 } from '../Typography';
// import { Label } from '../Typography'
import ColumnWrapper from '../column_wrapper';
import RowWrapper from '../row_wrapper';
import { HorizontalLine } from '../line_separator';
import { InputField } from '../input_field';
import { PrimaryButton } from '../buttons';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CreateContact({ user_type, user_id }) {

    const [contactData, setContactData] = useState([]);
    const [mobileSection, setMobileSection] = useState(false);
    const [homeSection, setHomeSection] = useState(false);
    const [emergencySection, setEmergencySection] = useState(false);
    const [pagerSection, setPagerSection] = useState(false);
    const [otherSection, setOtherSection] = useState(false);

    const navigate = useNavigate();

    const handleChange = (sectionName, event) => {
        const { name, value } = event.target;
        setContactData((prevData) => {
            const updatedData = [...prevData];
            const nameIndex = updatedData.findIndex(data => data.name === sectionName);
            if (nameIndex !== -1) {
                updatedData[nameIndex][name] = value;
            } else {
                updatedData.push({ user_id: user_id, name: sectionName, [name]: value });
            }
            return updatedData;
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3060/api/contact/create', contactData)

            if (response.status === 201) {
                console.log('Contacts created successfully', response);
                navigate(`/admin/users/overview/${user_type}/list`);
            } else {
                console.log('Error Adding Contacts');
            }
        } catch (error) {
            console.error('Error: ', error);
            if (error.response) {
                console.error('Error details:', error.response.data);
            }
            if (error.response && error.response.status === 500) {
                console.log("An internal server error occurred. Please try again later.");
            } else {
                console.log("An error occurred while submitting the form. Please check your input and try again.");
            }
        }
    };

    return (
        <>
            <Label text={`Enter ${user_type}'s contact information`} />
            <HorizontalLine style={{ background: 'rgb(0, 57, 110)', height: '2px' }} />

            <form onSubmit={handleSubmit}>

                <ColumnWrapper style={{ borderRadius: '10px', borderWidth: '2px', padding: '10px', background: 'rgba(0,120,170,0.03)' }}>
                    <RowWrapper style={{ border: 'none', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Heading6 text="Mobile" />
                        <FontAwesomeIcon icon={`fa-solid fa-chevron-${mobileSection ? "up" : "right"}`} style={{ fontSize: '0.7rem', cursor: 'pointer' }} onClick={() => setMobileSection(!mobileSection)} />
                    </RowWrapper>
                    <ColumnWrapper style={{ border: 'none', display: mobileSection ? 'flex' : 'none' }}>
                        <InputField
                            labelName="Phone Number"
                            placeholder="Enter Phone Number"
                            name="phone"
                            type="text"
                            onChange={(event) => handleChange('Mobile', event)}
                        />

                        <InputField
                            labelName="Relationship"
                            placeholder="Enter contact user relationship detail"
                            name="relationship"
                            type="text"
                            onChange={(event) => handleChange('Mobile', event)}
                        />
                    </ColumnWrapper>
                </ColumnWrapper>

                <ColumnWrapper style={{ borderRadius: '10px', borderWidth: '2px', padding: '10px', background: 'rgba(0,120,170,0.03)' }}>
                    <RowWrapper style={{ border: 'none', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Heading6 text="Home" />
                        <FontAwesomeIcon icon={`fa-solid fa-chevron-${homeSection ? "up" : "right"}`} style={{ fontSize: '0.7rem', cursor: 'pointer' }} onClick={() => setHomeSection(!homeSection)} />
                    </RowWrapper>
                    <ColumnWrapper style={{ border: 'none', display: homeSection ? 'flex' : 'none' }}>
                        <InputField
                            labelName="Phone Number"
                            placeholder="Enter Phone Number"
                            name="phone"
                            type="text"
                            onChange={(event) => handleChange('Home', event)}
                        />

                        <InputField
                            labelName="Relationship"
                            placeholder="Enter contact user relationship detail"
                            name="relationship"
                            type="text"
                            onChange={(event) => handleChange('Home', event)}
                        />
                    </ColumnWrapper>
                </ColumnWrapper>

                <ColumnWrapper style={{ borderRadius: '10px', borderWidth: '2px', padding: '10px', background: 'rgba(0,120,170,0.03)' }}>
                    <RowWrapper style={{ border: 'none', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Heading6 text="Emergency" />
                        <FontAwesomeIcon icon={`fa-solid fa-chevron-${emergencySection ? "up" : "right"}`} style={{ fontSize: '0.7rem', cursor: 'pointer' }} onClick={() => setEmergencySection(!emergencySection)} />
                    </RowWrapper>
                    <ColumnWrapper style={{ border: 'none', display: emergencySection ? 'flex' : 'none' }}>
                        <InputField
                            labelName="Phone Number"
                            placeholder="Enter Phone Number"
                            name="phone"
                            type="text"
                            onChange={(event) => handleChange('Emergency', event)}
                        />

                        <InputField
                            labelName="Relationship"
                            placeholder="Enter contact user relationship detail"
                            name="relationship"
                            type="text"
                            onChange={(event) => handleChange('Emergency', event)}
                        />
                    </ColumnWrapper>
                </ColumnWrapper>

                <ColumnWrapper style={{ borderRadius: '10px', borderWidth: '2px', padding: '10px', background: 'rgba(0,120,170,0.03)' }}>
                    <RowWrapper style={{ border: 'none', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Heading6 text="Pager" />
                        <FontAwesomeIcon icon={`fa-solid fa-chevron-${pagerSection ? "up" : "right"}`} style={{ fontSize: '0.7rem', cursor: 'pointer' }} onClick={() => setPagerSection(!pagerSection)} />
                    </RowWrapper>
                    <ColumnWrapper style={{ border: 'none', display: pagerSection ? 'flex' : 'none' }}>
                        <InputField
                            labelName="Pager Number"
                            placeholder="Enter Pager Number"
                            name="phone"
                            type="text"
                            onChange={(event) => handleChange('Pager', event)}
                        />
                    </ColumnWrapper>
                </ColumnWrapper>

                <ColumnWrapper style={{ borderRadius: '10px', borderWidth: '2px', padding: '10px', background: 'rgba(0,120,170,0.03)' }}>
                    <RowWrapper style={{ border: 'none', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Heading6 text="Other" />
                        <FontAwesomeIcon icon={`fa-solid fa-chevron-${otherSection ? "up" : "right"}`} style={{ fontSize: '0.7rem', cursor: 'pointer' }} onClick={() => setOtherSection(!otherSection)} />
                    </RowWrapper>
                    <ColumnWrapper style={{ border: 'none', display: otherSection ? 'flex' : 'none' }}>
                        <InputField
                            labelName="Contact Detail"
                            placeholder="Enter Contact Detail"
                            name="phone"
                            type="text"
                            onChange={(event) => handleChange('Other', event)}
                        />
                    </ColumnWrapper>
                </ColumnWrapper>

                <RowWrapper style={{ justifyContent: 'center', border: 'none' }}>
                    <PrimaryButton style={{ width: '100px', fontWeight: 'normal' }}>Create</PrimaryButton>
                </RowWrapper>

            </form>
        </>
    );
}

export default CreateContact;
