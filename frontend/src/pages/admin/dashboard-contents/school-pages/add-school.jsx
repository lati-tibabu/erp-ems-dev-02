import React, { useEffect, useState } from 'react';
import { Heading2, Heading4 } from '../../../../components/Typography';
import { InputField } from '../../../../components/input_field';
import { PrimaryButton, TertiaryButton } from '../../../../components/buttons';
import { CenterColumn } from '../../../../components/center';
import ColumnWrapper from '../../../../components/column_wrapper';
import RowWrapper from '../../../../components/row_wrapper';
import Select from 'react-select';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AddSchool() {
  const [address, setAddress] = useState([]);
  const [schoolData, setSchoolData] = useState({
    name: '',
    established_year: '',
    type: '',
    website: '',
    affiliation: '',
    school_level: '',
    is_deleted: false,
    school_code: '',
    medium_of_instruction: '',
    total_students: 0,
    total_teachers: 0,
    accreditation_status: '',
    campus_area: '',
    facilities_number_of_classrooms: 0,
    number_of_labs: 0,
    annual_budget: 0,
    school_motto: '',
    school_logo: '',
    school_type: '',
    language_offerings: '',
    transport_facility: false,
    hostel_facility: false,
    health_services: false,
    school_manager: '',
    accreditation_number: '',
    sponsorship_details: '',
    annual_tuition_fee: 0,
    student_gender_ratio: '',
    teacher_student_ratio: '',
    special_programs: '',
    accessibility_features: '',
  });

  const [address_id, setAddressId] = useState('');
  const [contactData, setContactData] = useState({
    email: '',
  });

  // States for visibility of fields
  const [showAddressField, setShowAddressField] = useState('show');
  const [showBasicField, setShowBasicField] = useState('show');
  const [showAdditionalField, setShowAdditionalField] = useState('show');
  const [showFacilitiesField, setShowFacilitiesField] = useState('show');
  const [showContactField, setShowContactField] = useState('show');

  const getAddress = async () => {
    try {
      const response = await fetch('http://localhost:3060/api/address/load'); 
      const data = await response.json();
      setAddress(data);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  useEffect(() => {
    getAddress();
  }, []);

  const handleSchoolChange = (event) => {
    const { name, value } = event.target;
    setSchoolData((prevData) => ({
      ...prevData,
      [name]: (name === 'annual_tuition_fee' || name === 'annual_budget' || 
        name === 'total_students' || name === 'total_teachers' || 
        name === 'facilities_number_of_classrooms' || name === 'number_of_labs' ) ? 
        // Convert to number if necessary
        // The value is first parsed as an integer, and if it fails to parse, it falls back to 0. 
        // This is because parseInt() returns NaN if the string cannot be parsed as an integer.
        parseInt(value, 10) || 0 : 
        // If the value is not one of the specified fields, just assign the value as is
        value, 
    }));
  };

  const handleAddressChange = (event) => {
    setAddressId(event.target.value); // Assuming this is a dropdown
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const combinedData = {
        ...schoolData,
        address_id,
        ...contactData
      };

      const response = await axios.post('http://localhost:3060/api/school/create', combinedData);

      if (response.status === 201) {
        alert("School added successfully!");
        // Reset the form or redirect to a success page
      } else {
        alert("Error adding school. Please try again.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response) {
        console.error('Error details:', error.response.data);
      }
      if (error.response && error.response.status === 500) {
        alert("An internal server error occurred. Please try again later.");
      } else {
        alert("An error occurred while submitting the form. Please check your input and try again.");
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CenterColumn>
          <ColumnWrapper style={{
              padding: '30px',
              borderRadius: '10px',
              width: '700px',
              background: '#87CEFA54',
              border: 'none',
              gap: '20px'
            }}>

            <Heading2 text="Add New School" />

            {/* Basic Information Field */}
            <ColumnWrapper style={{
                background: 'white',
                borderRadius: '10px',
                border: 'none',
                }}>

                <RowWrapper
                style={{
                    border: 'none',
                    alignItems:'center',
                    gap: '30px',
                    justifyContent: 'space-between'
                }}>
                <Heading4 text="Basic Information" />
                <FontAwesomeIcon 
                    color='gray'
                    icon={showBasicField === 'show' ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}
                    style={{
                        cursor:'pointer'
                    }}
                    onClick={() => setShowBasicField(prevState => (prevState === 'show' ? 'hide' : 'show'))}
                    />
                </RowWrapper>

                <RowWrapper style={{ 
                    justifyContent: 'space-evenly',
                    display: (showBasicField === 'show')?'flex':'none',
                    border: 'none',
                    }}>
                <ColumnWrapper style={{ 
                    width: '300px',
                    border: 'none',
                    }}>
                    <InputField
                    required
                    labelName="Name"
                    placeholder="Enter School Name"
                    name="name"
                    type="text"
                    value={schoolData.name}
                    onChange={handleSchoolChange}
                    />
                    <InputField
                    labelName="Website"
                    placeholder="Enter Website"
                    name="website"
                    type="text"
                    value={schoolData.website}
                    onChange={handleSchoolChange}
                    />
                    <InputField
                    labelName="Established Year"
                    required
                    placeholder="Enter Established Year"
                    name="established_year"
                    type="number"
                    value={schoolData.established_year}
                    onChange={handleSchoolChange}
                    />
                    <InputField
                    labelName="Type"
                    required
                    placeholder="Enter School Type"
                    name="type"
                    type="text"
                    value={schoolData.type}
                    onChange={handleSchoolChange}
                    />
                    <InputField
                    labelName="School Code"
                    required
                    placeholder="Enter School Code"
                    name="school_code"
                    type="text"
                    value={schoolData.school_code}
                    onChange={handleSchoolChange}
                    />
                </ColumnWrapper>
                <ColumnWrapper style={{ 
                    width: '300px',
                    border: 'none'
                    }}>
                    <InputField
                    labelName="Affiliation"
                    placeholder="Enter Affiliation"
                    name="affiliation"
                    type="text"
                    value={schoolData.affiliation}
                    onChange={handleSchoolChange}
                    />
                    <InputField
                    labelName="Medium of Instruction"
                    placeholder="Enter Medium of Instruction"
                    name="medium_of_instruction"
                    type="text"
                    value={schoolData.medium_of_instruction}
                    onChange={handleSchoolChange}
                    />
                    <InputField
                    labelName="School Level"
                    required
                    placeholder="Enter School Level"
                    name="school_level"
                    type="text"
                    value={schoolData.school_level}
                    onChange={handleSchoolChange}
                    />
                    <InputField
                    labelName="Total Students"
                    placeholder="Enter Total Students"
                    name="total_students"
                    type="number"
                    value={schoolData.total_students}
                    onChange={handleSchoolChange}
                    />
                    <InputField
                    labelName="Total Teachers"
                    placeholder="Enter Total Teachers"
                    name="total_teachers"
                    type="number"
                    value={schoolData.total_teachers}
                    onChange={handleSchoolChange}
                    />
                </ColumnWrapper>
                </RowWrapper>
            </ColumnWrapper>

            {/* Address Field */}
            <ColumnWrapper style={{
                background: 'white',
                borderRadius: '10px',
                border: 'none',
                }}>
                <RowWrapper
                style={{
                    border: 'none',
                    alignItems:'center',
                    gap: '30px',
                    justifyContent: 'space-between'
                }}>
                <Heading4 text="Address Information*" />
                <FontAwesomeIcon 
                    color='gray'
                    icon={showAddressField === 'show' ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}
                    style={{
                        cursor:'pointer'
                    }}
                    onClick={() => setShowAddressField(prevState => (prevState === 'show' ? 'hide' : 'show'))}
                    />
                </RowWrapper>
                <RowWrapper style={{
                    display: (showAddressField === 'show')?'flex':'none',
                    border: 'none'
                }}>
                    
                    <Select
                    placeholder='Select the School Address'
                    options={address.map((addr) => ({
                        value: addr.address_id,
                        label: addr.city+","+addr.subcity+","+addr.woreda+","+addr.kebele
                    }))}
                    onChange={(option) => setAddressId(option.value)}
                    ></Select>
                </RowWrapper>

            </ColumnWrapper>

            {/* Additional Field */}
            <ColumnWrapper style={{
                background: 'white',
                borderRadius: '10px',
                border: 'none',
                }}>
                <RowWrapper
                style={{
                    border: 'none',
                    alignItems:'center',
                    gap: '30px',
                    justifyContent: 'space-between'
                }}>
                <Heading4 text="Additional Information" />
                <FontAwesomeIcon 
                    color='gray'
                    icon={showAdditionalField === 'show' ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}
                    style={{
                        cursor:'pointer'
                    }}
                    onClick={() => setShowAdditionalField(prevState => (prevState === 'show' ? 'hide' : 'show'))}
                    />
                </RowWrapper>
                <RowWrapper style={{ 
                    justifyContent: 'space-evenly', 
                    display: (showAdditionalField === 'show')?'flex':'none',
                    border: 'none'
                    }}>
                    <ColumnWrapper style={{ 
                        width: '300px',
                        border: 'none'
                        }}>
                        <InputField
                        labelName="Accreditation Status"
                        placeholder="Enter Accreditation Status"
                        name="accreditation_status"
                        type="text"
                        value={schoolData.accreditation_status}
                        onChange={handleSchoolChange}
                        />
                        <InputField
                        labelName="Campus Area"
                        placeholder="Enter Campus Area"
                        name="campus_area"
                        type="text"
                        value={schoolData.campus_area}
                        onChange={handleSchoolChange}
                        />
                        <InputField
                        labelName="Number of Classrooms"
                        placeholder="Enter Number of Classrooms"
                        name="facilities_number_of_classrooms"
                        type="number"
                        value={schoolData.facilities_number_of_classrooms}
                        onChange={handleSchoolChange}
                        />
                        <InputField
                        labelName="Number of Labs"
                        placeholder="Enter Number of Labs"
                        name="number_of_labs"
                        type="number"
                        value={schoolData.number_of_labs}
                        onChange={handleSchoolChange}
                        />
                        <InputField
                        labelName="Annual Budget"
                        placeholder="Enter Annual Budget"
                        name="annual_budget"
                        type="number"
                        value={schoolData.annual_budget}
                        onChange={handleSchoolChange}
                        />
                    </ColumnWrapper>
                    <ColumnWrapper style={{ 
                        width: '300px',
                        border: 'none' 
                        }}>
                        <InputField
                        labelName="Motto"
                        placeholder="Enter Motto"
                        name="school_motto"
                        type="text"
                        value={schoolData.school_motto}
                        onChange={handleSchoolChange}
                        />
                        <InputField
                        labelName="Logo URL"
                        placeholder="Enter Logo URL"
                        name="school_logo"
                        type="text"
                        value={schoolData.school_logo}
                        onChange={handleSchoolChange}
                        />
                        <InputField
                        labelName="Language Offerings"
                        placeholder="Enter Language Offerings"
                        name="language_offerings"
                        type="text"
                        value={schoolData.language_offerings}
                        onChange={handleSchoolChange}
                        />
                        <InputField
                        labelName="Special Programs"
                        placeholder="Enter Special Programs"
                        name="special_programs"
                        type="text"
                        value={schoolData.special_programs}
                        onChange={handleSchoolChange}
                        />
                        <InputField
                        labelName="Accessibility Features"
                        placeholder="Enter Accessibility Features"
                        name="accessibility_features"
                        type="text"
                        value={schoolData.accessibility_features}
                        onChange={handleSchoolChange}
                        />
                    </ColumnWrapper>
                </RowWrapper>
            </ColumnWrapper>

            {/* Facilities Field */}
            <ColumnWrapper style={{
                background: 'white',
                borderRadius: '10px',
                border: 'none',
                }}>
                <RowWrapper
                style={{
                    border: 'none',
                    alignItems:'center',
                    gap: '30px',
                    justifyContent: 'space-between'
                }}>
                <Heading4 text="Facilities" />
                <FontAwesomeIcon 
                    color='gray'
                    icon={showFacilitiesField === 'show' ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}
                    style={{
                        cursor:'pointer'
                    }}
                    onClick={() => setShowFacilitiesField(prevState => (prevState === 'show' ? 'hide' : 'show'))}
                    />
                </RowWrapper>
                <RowWrapper style={{ 
                    justifyContent: 'space-evenly', 
                    display: (showFacilitiesField === 'show')?'flex':'none',
                    border: 'none'
                    }}>
                <ColumnWrapper style={{ 
                    width: '300px',
                    border: 'none'
                    }}>
                    <label>
                    <input
                        type="checkbox"
                        name="transport_facility"
                        checked={schoolData.transport_facility}
                        onChange={() =>
                        setSchoolData((prevData) => ({
                            ...prevData,
                            transport_facility: !prevData.transport_facility,
                        }))
                        }
                    />
                    Transport Facility
                    </label>

                    <label>
                    <input
                        type="checkbox"
                        name="hostel_facility"
                        checked={schoolData.hostel_facility}
                        onChange={() =>
                        setSchoolData((prevData) => ({
                            ...prevData,
                            hostel_facility: !prevData.hostel_facility,
                        }))
                        }
                    />
                    Hostel Facility
                    </label>
                </ColumnWrapper>
                <ColumnWrapper style={{ 
                    width: '300px',
                    border: 'none'
                    }}>
                    <label>
                    <input
                        type="checkbox"
                        name="health_services"
                        checked={schoolData.health_services}
                        onChange={() =>
                        setSchoolData((prevData) => ({
                            ...prevData,
                            health_services: !prevData.health_services,
                        }))
                        }
                    />
                    Health Services
                    </label>
                </ColumnWrapper>
                </RowWrapper>
            </ColumnWrapper>

            {/* Contact Field */}
            <ColumnWrapper style={{
                background: 'white',
                borderRadius: '10px',
                border: 'none',
                // justifyContent: 'space-between'
                }}>
                <RowWrapper
                style={{
                    border: 'none',
                    alignItems:'center',
                    gap: '30px',
                    justifyContent: 'space-between'
                }}>
                <Heading4 text="Contact Information" />
                <FontAwesomeIcon 
                    color='gray'
                    icon={showContactField === 'show' ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'}
                    style={{
                        cursor:'pointer'
                    }}
                    onClick={() => setShowContactField(prevState => (prevState === 'show' ? 'hide' : 'show'))}
                    />
                </RowWrapper>
                <RowWrapper style={{ 
                    justifyContent: 'space-evenly', 
                    display: (showContactField === 'show')?'flex':'none',
                    border: 'none'
                    }}>
                <ColumnWrapper style={{ 
                    width: '300px',
                    border: 'none'
                    }}>
                    <InputField
                    labelName="Phone Number"
                    placeholder="Enter Phone Number"
                    name="phone_number"
                    type="text"
                    value={contactData.phone_number}
                    onChange={handleContactChange}
                    />
                    <InputField
                    labelName="Email Address"
                    placeholder="Enter Email Address"
                    name="email"
                    type="text"
                    value={contactData.email}
                    onChange={handleContactChange}
                    />
                </ColumnWrapper>
                </RowWrapper>

            </ColumnWrapper>
            <CenterColumn>
              <PrimaryButton type="submit"
                // style={{width: '100px'}}
              >Submit</PrimaryButton>
              <TertiaryButton text="Cancel" />
            </CenterColumn>
          </ColumnWrapper>
        </CenterColumn>
      </form>
    </div>
  );
}

export default AddSchool;