import React, { useEffect, useState } from 'react'
import ColumnWrapper from '../../../../components/column_wrapper'
import RowWrapper from '../../../../components/row_wrapper'
import { CenterColumn, CenterRow } from '../../../../components/center'
import { PrimaryButton, SecondaryButton, DangerButton } from '../../../../components/buttons'
import { Heading2, Heading3, Heading4, Label, Paragraph } from '../../../../components/Typography'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Outlet } from 'react-router-dom'

function ViewSchool() {

    const apiURL = import.meta.env.VITE_API_URL;
    
    const { schoolId } = useParams();
    const [schoolInfo, setSchoolInfo] = useState({});
    const location = useLocation();
    
    const onDetailsPage = location.pathname.endsWith('/details')
    const onStudentsPage = (location.pathname.endsWith('/students'))
    const onTeachersPage = (location.pathname.endsWith('/teachers'))
    const onDepartmentsPage = (location.pathname.endsWith('/departments'))
    const onClubsPage = (location.pathname.endsWith('/clubs'))
    const onEventsPage = (location.pathname.endsWith('/events'))
    const onExtraPage = (location.pathname.endsWith('/extras'))

    useEffect(() => {
        const fetchSchoolInfo = async () => {
            try {
                const response = await fetch(`${apiURL}/api/school/load/${schoolId}`);
                const data = await response.json();
                setSchoolInfo(data);
            } catch (error) {
                console.error("Error fetching school information: ", error);
            }
        };

        fetchSchoolInfo();
    }, [schoolId]);

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
                    
                    <RowWrapper style={{ marginTop: '20px', gap: '15px', height: '50px',border: 'none',}}>

                        <Link to={`/admin/school/view/${schoolId}/details`}> 
                            <button 
                            className={'schoolButtonStyle details-button '+(onDetailsPage && 'selected-button')}>
                                School Details
                            </button>
                        </Link>
                       
                        <Link to={`/admin/school/view/${schoolId}/students`}> 
                            <button 
                                className={'schoolButtonStyle students-button ' +(onStudentsPage && 'selected-button')}>
                                    Students
                            </button>
                        </Link>
                        
                        <Link to={`/admin/school/view/${schoolId}/teachers`}> 
                            <button className={'schoolButtonStyle teachers-button ' +(onTeachersPage && 'selected-button')} >
                                Teachers
                            </button>
                        </Link>
                        
                        <Link to={`/admin/school/view/${schoolId}/departments`}> 
                            <button className={'schoolButtonStyle departments-button ' +(onDepartmentsPage && 'selected-button')}>
                                Departments
                            </button>
                        </Link>
                        
                        <Link to={`/admin/school/view/${schoolId}/clubs`}> 
                            <button className={'schoolButtonStyle clubs-button ' +(onClubsPage && 'selected-button')}>
                                Clubs
                            </button>
                        </Link>

                        <Link to={`/admin/school/view/${schoolId}/events`}> 
                            <button className={'schoolButtonStyle events-button ' +(onEventsPage && 'selected-button')}>
                                Events
                            </button>
                        </Link>

                        <Link to={`/admin/school/view/${schoolId}/extras`}>
                            <button className={'schoolButtonStyle extra-activities-button ' +(onExtraPage && 'selected-button')}>
                                Extra Activities
                            </button>
                        </Link>

                    </RowWrapper>
                    <div className="school-info-containe">
                        <Outlet />
                    </div>
                
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
