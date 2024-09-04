import React, { useEffect, useState } from 'react';
import ColumnWrapper from '../../../../components/column_wrapper';
import RowWrapper from '../../../../components/row_wrapper';
import { PrimaryButton, SecondaryButton, DangerButton } from '../../../../components/buttons';
import { Heading2, Heading3, Heading4, Label, Paragraph } from '../../../../components/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputField } from '../../../../components/input_field';
import "../../../../styles/admin-dashboard/edit_field.css"
import { color } from 'chart.js/helpers';
import api from '../../../../api';
import axios from 'axios';
import Select from 'react-select'

function EditSchool() {
    const apiURL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem('jwt');
    const header = {'authorization': `Bearer ${token}`};

    const [schoolInfo, setSchoolInfo] = useState({
        name: '',
        established_year: '',
        // type: '',
        website: '',
        school_level: '',
        is_deleted: false,
        school_code: '',
        medium_of_instruction: '',
        total_students: 0,
        affiliation: '',
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
    const [address, setAddress] = useState({});
    const [schoolStatus, setSchoolStatus] = useState(''); // [schoolStatus]
    // const [schoolMotto, setSchoolMotto] = useState('');
    const [editedInfo, setEditedInfo] = useState()

    const { schoolId } = useParams();

    const getSchoolInfo = async (schoolId) => {
        try {
            const response = await fetch(`${apiURL}/api/school/load/${schoolId}`);
            const data = await response.json();
            setSchoolInfo(data);
            // setSchoolMotto(data.school_motto || '');
        } catch (error) {
            console.error("Error fetching school information: ", error);
        }
    };

    useEffect(() => {
        getSchoolInfo(schoolId);
    }, [schoolId]);

    const getAddress = async (addressId) => {
        try {
            const response = await fetch(`${apiURL}/api/address/load/${addressId}`);
            const data = await response.json();
            setAddress(data);
        } catch (err) {
            console.error("Error fetching address: ", err);
        }
    };

    useEffect(() => {
        if (schoolInfo.address_id) {
            console.log("Fetching address with ID:", schoolInfo.address_id);
            getAddress(schoolInfo.address_id);
        } else {
            console.error("Invalid address_id:", schoolInfo.address_id);
        }
    }, [schoolInfo.address_id]);

    const backHandle = () => {
        history.back();
    };

    const handleInputChange = (e, field) => {
        setSchoolInfo({
            ...schoolInfo,
            [field]: e.target.value,
        });
    };

    useEffect(() => {
        setEditedInfo({
            accessibility_features: schoolInfo.accessibility_features,
            accreditation_number: schoolInfo.accreditation_number,
            accreditation_status: schoolInfo.accreditation_status,
            address_id: schoolInfo.address_id,
            affiliation: schoolInfo.affiliation,
            annual_budget: schoolInfo.annual_budget,
            annual_tuition_fee: schoolInfo.annual_tuition_fee,
            campus_area: schoolInfo.campus_area,
            email: schoolInfo.email,
            established_year: schoolInfo.established_year,
            facilities_number_of_classrooms: schoolInfo.facilities_number_of_classrooms,
            health_services: schoolInfo.health_services,
            hostel_facility: schoolInfo.hostel_facility,
            is_deleted: schoolInfo.is_deleted,
            language_offerings: schoolInfo.language_offerings,
            medium_of_instruction: schoolInfo.medium_of_instruction,
            name: schoolInfo.name,
            number_of_labs: schoolInfo.number_of_labs,
            school_code: schoolInfo.school_code,
            school_level: schoolInfo.school_level,
            school_logo: schoolInfo.school_logo,
            school_manager: schoolInfo.school_manager,
            school_motto: schoolInfo.school_motto,
            school_type: schoolInfo.school_type,
            special_programs: schoolInfo.special_programs,
            sponsorship_details: schoolInfo.sponsorship_details,
            student_gender_ratio: schoolInfo.student_gender_ratio,
            teacher_student_ratio: schoolInfo.teacher_student_ratio,
            total_students: schoolInfo.total_students,
            total_teachers: schoolInfo.total_teachers,
            transport_facility: schoolInfo.transport_facility,
            type: schoolInfo.type,
            website: schoolInfo.website,
            status: schoolStatus || schoolInfo.status,
        })
    }, [schoolInfo,schoolStatus])


    // const handleMottoChange = (e) => {
    //     setSchoolMotto(e.target.value);
    // };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     alert('Submit Button Clicked')
    //     console.log(schoolInfo)
    //     try{
    //         const response = await axios.put(`${apiURL}/api/school/update/${schoolId}`, editedInfo)
    //         if (response.status === 201){
    //             console.log("School Created Successfully")
    //             alert("School Created Successfully")
    //         } else {
    //             console.log("Some bullshit error just occured");
    //             alert("Some bullshit error just occured");
    //         }
    //     } catch(error){
    //         console.error("Error updating schools information: ", error);
    //     }
    //     console.log(editedInfo);
    // }
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        alert('Submit Button Clicked');
        console.log(schoolInfo);

        try {
          // Ensure editedInfo includes all required fields
          const updatedData = {
            ...editedInfo,
            // schoolStatus,
            // Add any additional fields needed for update
          };

          console.log('Logging from inside');
          console.log(updatedData);

          const response = await axios.put(`${apiURL}/api/school/update/${schoolId}`, updatedData, {
            method: 'GET',
            headers: header
          });
          if (response.status === 200) { // Assuming successful update returns status 200
            console.log("School Information Updated Successfully");
            navigate(`/admin/school/view/${schoolId}`)
            // alert("School Information Updated Successfully");
          } else {
            console.error("Update failed with status:", response.status);
            // alert("Failed to update school information. Please try again."); // User feedback
          }
        } catch (error) {
          console.error("Error updating school information:", error);
        //   alert("Failed to update school information. Please try again."); // User feedback
        }
      };
      
    
    
    return (
        <div>
            <ColumnWrapper>
                <Heading3 text='School Information' />

                <RowWrapper style={{

                    border:'none',
                    marginBottom: '20px',
                    cursor:'pointer',
                    background: 'rgba(0,200,0,1)',
                    color:'white', 
                    borderRadius: '20px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '5px',
                    // background: 'red',
                     
                    }}>

                    <FontAwesomeIcon icon='fa-solid fa-pencil' />
                    <Label text='Editing mode' style={{color:'white', fontWeight: 'bolder'}} />
                </RowWrapper>

                <ColumnWrapper style={styles.container_section_style}>
                    <RowWrapper style={{ border: "none" }}>
                        <FontAwesomeIcon icon='fa-solid fa-chevron-left' style={{ cursor: 'pointer' }} onClick={backHandle} />
                    </RowWrapper>

                    <ColumnWrapper style={styles.school_name_header_style}>
                        <img src={ schoolInfo.school_logo || 'https://th.bing.com/th/id/OIG1.jbQxdyFv6GO9.USaSMR8?w=1024&h=1024&rs=1&pid=ImgDetMain'} alt='School Logo' style={styles.school_logo_header_styles}/>
                        <Heading4 text={schoolInfo.name || 'School Name'}/>
                        <Paragraph text={schoolInfo.school_motto || 'Education For All'} />
                    </ColumnWrapper>

                    <form onSubmit={handleSubmit}>
                        <ColumnWrapper style={styles.card_section_style}>
                            <Heading4 text='Basic Information' />
                            <ColumnWrapper style={styles.info_section_style}>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='School Name: ' style={styles.labelStyles} />
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.name || ''}
                                        onChange={(e) => handleInputChange(e, 'name')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='School Code: ' style={styles.labelStyles} />
                                    <InputField
                                        readOnly
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.school_code || ''}
                                        onChange={(e) => handleInputChange(e, 'school_code')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Type: '  style={styles.labelStyles}/>
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.type || ''}
                                        onChange={(e) => handleInputChange(e, 'type')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Affiliation: '  style={styles.labelStyles}/>
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.affiliation || ''}
                                        onChange={(e) => handleInputChange(e, 'affiliation')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='School Level: ' style={styles.labelStyles} />
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.school_level || ''}
                                        onChange={(e) => handleInputChange(e, 'school_level')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Established Year: ' style={styles.labelStyles} />
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.established_year || ''}
                                        onChange={(e) => handleInputChange(e, 'established_year')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Accreditation Status: ' style={styles.labelStyles} />
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.accreditation_status || ''}
                                        onChange={(e) => handleInputChange(e, 'accreditation_status')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='School Motto: ' style={styles.labelStyles} />
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        // value={schoolMotto || ''}
                                        value={schoolInfo.school_motto || ''}
                                        // onChange={handleMottoChange}
                                        onChange={(e) => handleInputChange(e, 'school_motto')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='School Logo: ' style={styles.labelStyles} />
                                    <img src={schoolInfo.school_logo || 'https://via.placeholder.com/150'} alt='School Logo' style={styles.school_logo_info_styles} />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Website: '  style={styles.labelStyles}/>
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.website || ''}
                                        onChange={(e) => handleInputChange(e, 'website')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Email: '  style={styles.labelStyles}/>
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.email || ''}
                                        onChange={(e) => handleInputChange(e, 'email')}
                                    />
                                </RowWrapper>
                            </ColumnWrapper>
                        </ColumnWrapper>

                        <ColumnWrapper style={styles.card_section_style}>
                            <Heading4 text='Contact Information' />
                            <ColumnWrapper style={styles.info_section_style}>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Address: '  style={styles.labelStyles}/>
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={`${address.city || ''}, ${address.subcity || ''}, ${address.woreda || ''}, ${address.kebele || ''}`}
                                        onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Contact Details: ' style={styles.labelStyles} />
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.contact_details || ''}
                                        onChange={(e) => handleInputChange(e, 'contact_details')}
                                    />
                                </RowWrapper>
                            </ColumnWrapper>
                        </ColumnWrapper>

                        <ColumnWrapper style={styles.card_section_style}>
                            <Heading4 text='Facilities and Resources' />
                            <ColumnWrapper style={styles.info_section_style}>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Campus Area: ' style={styles.labelStyles} />
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.campus_area || ''}
                                        onChange={(e) => handleInputChange(e, 'campus_area')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Number of Classrooms: ' style={styles.labelStyles}  />
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.facilities_number_of_classrooms || ''}
                                        onChange={(e) => handleInputChange(e, 'facilities_number_of_classrooms')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Number of Labs: ' style={styles.labelStyles} />
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.number_of_labs || ''}
                                        onChange={(e) => handleInputChange(e, 'number_of_labs')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Transport Facility: ' style={styles.labelStyles} />
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.transport_facility ? 'Yes' : 'No'}
                                        onChange={(e) => handleInputChange(e, 'transport_facility')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Hostel Facility: ' style={styles.labelStyles} />
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.hostel_facility ? 'Yes' : 'No'}
                                        onChange={(e) => handleInputChange(e, 'hostel_facility')}
                                    />
                                </RowWrapper>
                            </ColumnWrapper>
                        </ColumnWrapper>

                        {/* <ColumnWrapper style={styles.card_section_style}>
                            <Heading4 text='Student Information' />
                            <ColumnWrapper style={styles.info_section_style}>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Student Enrollment Process: ' style={styles.labelStyles}/>
                                    <InputField
                                        className = 'edit_field'
                                        style={{flex: 2}}
                                        type='text'
                                        value={schoolInfo.student_enrollment_process || 'N/A'}
                                        onChange={(e) => handleInputChange(e, 'student_enrollment_process')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Student Scholarships: ' style={styles.labelStyles} />
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.student_scholarships || 'N/A'}
                                        onChange={(e) => handleInputChange(e, 'student_scholarships')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Student Associations: ' style={styles.labelStyles} />
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.student_associations || 'N/A'}
                                        onChange={(e) => handleInputChange(e, 'student_associations')}
                                    />
                                </RowWrapper>
                                <RowWrapper style={styles.information_row}>
                                    <Label text='Alumni Network: ' style={styles.labelStyles} />
                                    <InputField
                                        className = 'edit_field'
                                        type='text'
                                        value={schoolInfo.alumni_network || 'N/A'}
                                        onChange={(e) => handleInputChange(e, 'alumni_network')}
                                    />
                                </RowWrapper>
                            </ColumnWrapper>
                        </ColumnWrapper> */}

                        <ColumnWrapper style={styles.card_section_style}>
                            <Heading4 text='School Status' />
                            <RowWrapper style={styles.information_row}>
                                <Label text='Current School Status: ' />
                                {/* <Paragraph text={schoolInfo.status || 'N/A'} /> */}
                                <Paragraph text={schoolStatus || schoolInfo.status || 'N/A'} />
                            </RowWrapper>

                            <RowWrapper style={styles.information_row}>
                                <Label text='Change School Status: ' />
                                <Select
                                    placeholder='Change School Status'
                                    options= {schoolStatusOption}
                                    // value={schoolStatus || schoolInfo.status || 'N/A'}
                                    onChange={(option) => setSchoolStatus(option.value)}
                                
                                ></Select>
                            </RowWrapper>
                        </ColumnWrapper>

                        <RowWrapper style={styles.update_button_container_style}>
                            <PrimaryButton style={{maxWidth:'400px'}}>
                                Update Information
                            </PrimaryButton>
                        </RowWrapper>
                    </form>
                </ColumnWrapper>
            </ColumnWrapper>
        </div>
    );
}

export default EditSchool;

const schoolStatusOption = [
    {value: 'active', label: 'Active'},
    {value: 'pending', label: 'Pending'},
    // {value: 'inactive', label: 'Inactive'},
    {value: 'deleted', label: 'Deleted'},
    {value: 'archived', label: 'Archived'}
]
const styles = {
    container_section_style: {
        background: 'rgba(19, 160, 233, 0.076)',
        gap: '20px',
        padding: '20px',
        border: 'none'
    },
    info_section_style: {
        background: 'rgba(0,180,250,0.05)',
        padding: '10px',
        borderRadius: '20px',
        border: 'none',
    },
    card_section_style: {
        padding: '20px',
        border: 'none',
        borderRadius: '30px',
        background: 'white'
    },
    information_row: {
        background: 'rgba(0,150,200,0.05)',
        marginTop: '3px',
        marginBottom: '3px',
        justifyContent: 'space-between',
        
        alignItems: 'center',
        gap: '10px',
        border: 'none'
    },
    school_name_header_style: {
        alignItems: 'center',
        border: 'none',
    },
    school_logo_header_styles: {
        borderRadius: '50%',
        maxWidth: '100px'
    },

    school_logo_info_styles: {
        maxWidth: '200px',
    },
    labelStyles: {
        // background: 'red',
        width: '40%'
    },
    update_button_container_style: {
        justifyContent:'center',
        alignItems:'center', 
        border:'none',
        gap:'30px'
    }
}

/*

{
accessibility_features : ""
accreditation_number : ""
accreditation_status: "Accrediated"
address_id : "9d068cb1-1d70-4edf-b1ba-49c50fd2e1a3"
affiliation : ""
annual_budget : "0"
annual_tuition_fee : "0"
campus_area : ""
createdAt : "2024-08-08T10:16:45.000Z"
email : "damoze@gmail.com"
established_year : 2002
facilities_number_of_classrooms : 0
health_services : false
hostel_facility : false
is_deleted : false
language_offerings : ""
medium_of_instruction : ""
name : "Damoze Baaduu Bet"
number_of_labs : 0
school_code : "BSR005"
school_id : "2e867621-9474-405e-aea9-71ae85fb4836"
school_level : "High School"
school_logo : ""
school_manager : ""
school_motto : ""
school_type : ""
special_programs : ""
sponsorship_details : ""
student_gender_ratio : ""
teacher_student_ratio: ""
total_students: 0
total_teachers: 0
transport_facility: false
type: "Public"
updatedAt: "2024-08-08T10:16:45.000Z"
website: ""
}

*/