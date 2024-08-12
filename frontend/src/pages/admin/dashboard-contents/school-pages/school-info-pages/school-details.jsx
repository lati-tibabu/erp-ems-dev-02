import React, { useEffect, useState } from 'react';
import ColumnWrapper from '../../../../../components/column_wrapper';
import RowWrapper from '../../../../../components/row_wrapper';
import { Heading4, Label, Paragraph } from '../../../../../components/Typography';
import { Link, useParams } from 'react-router-dom';
import { SecondaryButton } from '../../../../../components/buttons';

function SchoolDetails() {
    const [schoolInfo, setSchoolInfo] = useState({});
    const [address, setAddress] = useState({});
    const { schoolId } = useParams();

    useEffect(() => {
        const fetchSchoolInfo = async () => {
            try {
                const response = await fetch(`http://localhost:3060/api/school/load/${schoolId}`);
                const data = await response.json();
                setSchoolInfo(data);
            } catch (error) {
                console.error("Error fetching school information: ", error);
            }
        };

        fetchSchoolInfo();
    }, [schoolId]);

    useEffect(() => {
        const fetchAddress = async (addressId) => {
            try {
                const response = await fetch(`http://localhost:3060/api/address/load/${addressId}`);
                const data = await response.json();
                setAddress(data);
            } catch (error) {
                console.error("Error fetching address: ", error);
            }
        };

        if (schoolInfo.address_id) {
            fetchAddress(schoolInfo.address_id);
        }
    }, [schoolInfo.address_id]);

    return (
        <>
            <ColumnWrapper style={styles.card_section_style}>
                <Heading4 text='Basic Information' />
                <ColumnWrapper style={styles.info_section_style}>
                    {[
                        { label: 'School Name', value: schoolInfo.name },
                        { label: 'School Status', value: schoolInfo.status },
                        { label: 'School Code', value: schoolInfo.school_code },
                        { label: 'Type', value: schoolInfo.type },
                        { label: 'Affiliation', value: schoolInfo.affiliation },
                        { label: 'School Level', value: schoolInfo.school_level },
                        { label: 'Established Year', value: schoolInfo.established_year },
                        { label: 'Accreditation Status', value: schoolInfo.accreditation_status },
                        { label: 'School Motto', value: schoolInfo.school_motto },
                    ].map((item, index) => (
                        <RowWrapper key={index} style={styles.information_row}>
                            <Label text={`${item.label}: `} />
                            <Paragraph text={item.value || 'N/A'} />
                        </RowWrapper>
                    ))}
                    <RowWrapper style={styles.information_row}>
                        <Label text='School Logo: ' />
                        <img
                            src={schoolInfo.school_logo || 'https://via.placeholder.com/150'}
                            alt='School Logo'
                            style={styles.school_logo_info_styles}
                        />
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
                        <Paragraph
                            text={`${address.city || ''}, ${address.subcity || ''}, ${address.woreda || ''}, ${address.kebele || ''}` || 'N/A'}
                        />
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
                    {[
                        { label: 'Campus Area', value: schoolInfo.campus_area },
                        { label: 'Number of Classrooms', value: schoolInfo.facilities_number_of_classrooms },
                        { label: 'Number of Labs', value: schoolInfo.number_of_labs },
                        { label: 'Transport Facility', value: schoolInfo.transport_facility ? 'Yes' : 'No' },
                        { label: 'Hostel Facility', value: schoolInfo.hostel_facility ? 'Yes' : 'No' },
                        { label: 'Health Services', value: schoolInfo.health_services ? 'Yes' : 'No' },
                        { label: 'Accessibility Features', value: schoolInfo.accessibility_features },
                    ].map((item, index) => (
                        <RowWrapper key={index} style={styles.information_row}>
                            <Label text={`${item.label}: `} />
                            <Paragraph text={item.value || 'N/A'} />
                        </RowWrapper>
                    ))}
                </ColumnWrapper>
            </ColumnWrapper>

            <ColumnWrapper style={styles.card_section_style}>
                <Heading4 text='Management and Staff' />
                <ColumnWrapper style={styles.info_section_style}>
                    {[
                        { label: 'School Manager', value: schoolInfo.school_manager },
                        { label: 'Principal', value: schoolInfo.principal },
                        { label: 'Total Teachers', value: schoolInfo.total_teachers },
                        { label: 'Teacher-Student Ratio', value: schoolInfo.teacher_student_ratio },
                    ].map((item, index) => (
                        <RowWrapper key={index} style={styles.information_row}>
                            <Label text={`${item.label}: `} />
                            <Paragraph text={item.value || 'N/A'} />
                        </RowWrapper>
                    ))}
                </ColumnWrapper>
            </ColumnWrapper>

            <ColumnWrapper style={styles.card_section_style}>
                <Heading4 text='Student Information' />
                <ColumnWrapper style={styles.info_section_style}>
                    {[
                        { label: 'Total Students', value: schoolInfo.total_students },
                        { label: 'Student Gender Ratio', value: schoolInfo.student_gender_ratio },
                        { label: 'Special Programs', value: schoolInfo.special_programs },
                        { label: 'Language Offerings', value: schoolInfo.language_offerings },
                    ].map((item, index) => (
                        <RowWrapper key={index} style={styles.information_row}>
                            <Label text={`${item.label}: `} />
                            <Paragraph text={item.value || 'N/A'} />
                        </RowWrapper>
                    ))}
                </ColumnWrapper>
            </ColumnWrapper>

            <ColumnWrapper style={styles.card_section_style}>
                <Heading4 text='Financial Information' />
                <ColumnWrapper style={styles.info_section_style}>
                    {[
                        { label: 'Annual Budget', value: schoolInfo.annual_budget },
                        { label: 'Annual Tuition Fee', value: schoolInfo.annual_tuition_fee },
                        { label: 'Sponsorship Details', value: schoolInfo.sponsorship_details },
                    ].map((item, index) => (
                        <RowWrapper key={index} style={styles.information_row}>
                            <Label text={`${item.label}: `} />
                            <Paragraph text={item.value || 'N/A'} />
                        </RowWrapper>
                    ))}
                </ColumnWrapper>
            </ColumnWrapper>

            <ColumnWrapper style={styles.card_section_style}>
                <Heading4 text='Additional Details' />
                <ColumnWrapper style={styles.info_section_style}>
                    {[
                        { label: 'Medium of Instruction', value: schoolInfo.medium_of_instruction },
                        { label: 'Accreditation Number', value: schoolInfo.accreditation_number },
                        { label: 'Special Programs', value: schoolInfo.special_programs },
                        { label: 'Accessibility Features', value: schoolInfo.accessibility_features },
                    ].map((item, index) => (
                        <RowWrapper key={index} style={styles.information_row}>
                            <Label text={`${item.label}: `} />
                            <Paragraph text={item.value || 'N/A'} />
                        </RowWrapper>
                    ))}
                </ColumnWrapper>
            </ColumnWrapper>
            <ColumnWrapper style={styles.card_section_style}>
                <Link to={`/admin/school/edit/${schoolId}`}>
                    <SecondaryButton>Edit Details</SecondaryButton>
                </Link>
            </ColumnWrapper>
        </>
    );
}

export default SchoolDetails;

const styles = {
    card_section_style: {
        padding: '20px',
        border: 'none',
        borderRadius: '30px',
        background: 'white'
    },
    info_section_style: {
        background: 'rgba(0,180,250,0.05)',
        padding: '10px',
        borderRadius: '20px',
        border: 'none',
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
    school_logo_info_styles: {
        maxWidth: '200px',
    },
};
