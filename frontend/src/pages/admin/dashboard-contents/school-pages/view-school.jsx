import React, { useEffect, useState } from 'react'
import ColumnWrapper from '../../../../components/column_wrapper'
import RowWrapper from '../../../../components/row_wrapper'
import { CenterColumn, CenterRow } from '../../../../components/center'
import { PrimaryButton, SecondaryButton, DangerButton } from '../../../../components/buttons'
import { Heading2, Heading3, Heading4, Label, Paragraph } from '../../../../components/Typography'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ViewSchool() {

    const [schoolInfo, setSchoolInfo] = useState({})
    const [address, setAddress] = useState({});

    const { schoolId } = useParams();

    const getSchoolInfo = async (schoolId) => {
        try {
            const response = await fetch(`http://localhost:3060/api/school/load/${schoolId}`,)
            const data = await response.json()
            setSchoolInfo(data)
        } catch (error) {
            console.error("Error fetching school information: ", error);
        }
    }
    
    useEffect(() => {
        getSchoolInfo(schoolId);
    }, [schoolId]);

    // const address_id = schoolInfo.address_id;
    const getAddress = async (addressId) => {
        try{
            const response = await fetch(`http://localhost:3060/api/address/load/${addressId}`)
            const data = await response.json()
            setAddress(data)
        } catch(err){
            console.error("Error fetching address: ", err);
        }
    };

    // useEffect(() =>{
    //     getAddress(schoolInfo.address_id)
    // },[schoolInfo.address_id]);

    useEffect(() => {
        if (schoolInfo.address_id) {
            console.log("Fetching address with ID:", schoolInfo.address_id);
            getAddress(schoolInfo.address_id);
        } else {
            console.error("Invalid address_id:", schoolInfo.address_id);
        }
    }, [schoolInfo.address_id]);

    const backHandle = () => {history.back()};
    return (
        <div>
            <ColumnWrapper>
                <Heading3 text='School Information'/>

                <ColumnWrapper style={styles.container_section_style}>
                    <RowWrapper style={{border:"none",}}>
                        <FontAwesomeIcon icon='fa-solid fa-chevron-left' style={{cursor: 'pointer'}} onClick={backHandle}/>
                    </RowWrapper>
                    <ColumnWrapper style={styles.school_name_header_style}>
                        <img src={ schoolInfo.school_logo || 'https://th.bing.com/th/id/OIG1.jbQxdyFv6GO9.USaSMR8?w=1024&h=1024&rs=1&pid=ImgDetMain'} alt='School Logo' style={styles.school_logo_header_styles}/>
                        <Heading4 text={schoolInfo.name || 'School Name'}/>
                        <Paragraph text={schoolInfo.school_motto || 'Education For All'} />
                    </ColumnWrapper>
                    <ColumnWrapper style={styles.card_section_style}>
                        <Heading4 text='Basic Information' />
                        <ColumnWrapper style={styles.info_section_style}>
                            <RowWrapper style={styles.information_row}>
                                <Label text='School Name: ' />
                                <Paragraph text={schoolInfo.name || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='School Code: ' />
                                <Paragraph text={schoolInfo.school_code || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Type: ' />
                                <Paragraph text={schoolInfo.type || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Affiliation: ' />
                                <Paragraph text={schoolInfo.affiliation || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='School Level: ' />
                                <Paragraph text={schoolInfo.school_level || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Established Year: ' />
                                <Paragraph text={schoolInfo.established_year || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Accreditation Status: ' />
                                <Paragraph text={schoolInfo.accreditation_status || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='School Motto: ' />
                                <Paragraph text={schoolInfo.school_motto || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='School Logo: ' />
                                <img src={schoolInfo.school_logo || 'https://via.placeholder.com/150'} alt='School Logo' style={styles.school_logo_info_styles}/>
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Website: ' />
                                <Paragraph text={schoolInfo.website || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Email: ' />
                                <Paragraph text={schoolInfo.email || 'N/A'} />
                            </RowWrapper>
                        </ColumnWrapper>
                    </ColumnWrapper>

                    <ColumnWrapper style={styles.card_section_style}>
                        <Heading4 text='Contact Information' />
                        <ColumnWrapper style={styles.info_section_style}>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Address: ' />
                                {/* <Paragraph text={schoolInfo.address_id || 'N/A'} /> */}
                                {/* <Paragraph text={address.city+","+address.subcity+","+address.woreda+","+address.kebele || 'N/A'} /> */}
                                <Paragraph text={`${address.city || ''}, ${address.subcity || ''}, ${address.woreda || ''}, ${address.kebele || ''}` || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Contact Details: ' />
                                <Paragraph text={schoolInfo.contact_details || 'N/A'} />
                            </RowWrapper>
                        </ColumnWrapper>
                    </ColumnWrapper>

                    <ColumnWrapper style={styles.card_section_style}>
                        <Heading4 text='Facilities and Resources' />
                        <ColumnWrapper style={styles.info_section_style}>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Campus Area: ' />
                                <Paragraph text={schoolInfo.campus_area || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Number of Classrooms: ' />
                                <Paragraph text={schoolInfo.facilities_number_of_classrooms || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Number of Labs: ' />
                                <Paragraph text={schoolInfo.number_of_labs || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Transport Facility: ' />
                                <Paragraph text={schoolInfo.transport_facility ? 'Yes' : 'No'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Hostel Facility: ' />
                                <Paragraph text={schoolInfo.hostel_facility ? 'Yes' : 'No'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Health Services: ' />
                                <Paragraph text={schoolInfo.health_services ? 'Yes' : 'No'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Accessibility Features: ' />
                                <Paragraph text={schoolInfo.accessibility_features || 'N/A'} />
                            </RowWrapper>
                        </ColumnWrapper>
                    </ColumnWrapper>

                    <ColumnWrapper style={styles.card_section_style}>
                        <Heading4 text='Management and Staff' />
                        <ColumnWrapper style={styles.info_section_style}>
                            <RowWrapper style={styles.information_row}>
                                <Label text='School Manager: ' />
                                <Paragraph text={schoolInfo.school_manager || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Principal: ' />
                                <Paragraph text={schoolInfo.principal || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Total Teachers: ' />
                                <Paragraph text={schoolInfo.total_teachers || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Teacher-Student Ratio: ' />
                                <Paragraph text={schoolInfo.teacher_student_ratio || 'N/A'} />
                            </RowWrapper>
                        </ColumnWrapper>
                    </ColumnWrapper>

                    <ColumnWrapper style={styles.card_section_style}>
                        <Heading4 text='Student Information' />
                        <ColumnWrapper style={styles.info_section_style}>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Total Students: ' />
                                <Paragraph text={schoolInfo.total_students || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Student Gender Ratio: ' />
                                <Paragraph text={schoolInfo.student_gender_ratio || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Special Programs: ' />
                                <Paragraph text={schoolInfo.special_programs || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Language Offerings: ' />
                                <Paragraph text={schoolInfo.language_offerings || 'N/A'} />
                            </RowWrapper>
                        </ColumnWrapper>
                    </ColumnWrapper>

                    <ColumnWrapper style={styles.card_section_style}>
                        <Heading4 text='Financial Information' />
                        <ColumnWrapper style={styles.info_section_style}>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Annual Budget: ' />
                                <Paragraph text={schoolInfo.annual_budget || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Annual Tuition Fee: ' />
                                <Paragraph text={schoolInfo.annual_tuition_fee || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Sponsorship Details: ' />
                                <Paragraph text={schoolInfo.sponsorship_details || 'N/A'} />
                            </RowWrapper>
                        </ColumnWrapper>
                    </ColumnWrapper>

                    <ColumnWrapper style={styles.card_section_style}>
                        <Heading4 text='Additional Details' />
                        <ColumnWrapper style={styles.info_section_style}>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Medium of Instruction: ' />
                                <Paragraph text={schoolInfo.medium_of_instruction || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Accreditation Number: ' />
                                <Paragraph text={schoolInfo.accreditation_number || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Special Programs: ' />
                                <Paragraph text={schoolInfo.special_programs || 'N/A'} />
                            </RowWrapper>
                            <RowWrapper style={styles.information_row}>
                                <Label text='Accessibility Features: ' />
                                <Paragraph text={schoolInfo.accessibility_features || 'N/A'} />
                            </RowWrapper>
                        </ColumnWrapper>
                    </ColumnWrapper>
                
                </ColumnWrapper>
            </ColumnWrapper>
        </div>
    )
}

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
}

export default ViewSchool
