import React, { useEffect, useState } from 'react'
import '../../../../../../styles/admin-school.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import '../button-styles.css'

import ColumnWrapper from '../../../../../../components/column_wrapper';
import RowWrapper from '../../../../../../components/row_wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Heading5, Label, Paragraph } from '../../../../../../components/Typography';
import { SecondaryButton, TertiaryButton } from '../../../../../../components/buttons';

import Select from 'react-select';
import { InputField } from '../../../../../../components/input_field';
import axios from 'axios';

library.add(fas)

function ViewTeacherProfile() {
    const apiURL = import.meta.env.VITE_API_URL;

    const [teacherData, setTeacherData] = useState({});
    const { state } = useLocation();
    const navigate = useNavigate();
    const [editMode, setEditMode] = useState(false);
    
    const [user_id, setUserId] = useState({user_id:''})
    const [userEditData, setUserEditData] = useState({})
    const [teacherEditData, setTeacherEditData] = useState({})

    useEffect(() => {
        setTeacherData(state?.teacher);
    }, [state]);

    const handleDelete = async (teacherId) => {
        try {
          if (window.confirm('Are you sure you want to delete this teacher\'s data?')) {
              const response = await fetch(`${apiURL}/api/teacher/delete/${teacherId}`, {
                  method: 'DELETE',
                  headers: {
                      'Content-Type': 'application/json'
                  }
              });
              const data = await response.json();
              console.log(data);
              alert('Deleted')
              navigate('/admin/users/overview/teacher/list')
          } else {
              console.log('Deletion canceled');
          }

        } catch (error) {
            console.error('Error deleting teacher: ', error);
        }
    }

    useEffect(() => {
        // setUserEditData((prev) => ({...prev, user_id: teacherData?.user_id}))
        setUserId({user_id: teacherData?.user_id})
    },[teacherData])

    const handleEditSave = async () => {

        const user_len = Object.keys(userEditData).length;
        const teacher_len = Object.keys(teacherEditData).length;


        try{
            let responses = {};
            if( user_len>0 ) {
                const response = await axios.put(`${apiURL}/api/user/update/${teacherData?.user_id}`, userEditData);

                // console.log(response)
                responses.user = response;
            }
            if ( teacher_len>0 ) {
                const response2 = await axios.put(`${apiURL}/api/teacher/update/${teacherData?.teacher_id}`, teacherEditData)

                // console.log(response2)
                responses.teacher = response2
            }

            if((responses.user.statusText === 'OK') || (responses.teacher.statusText === 'OK')) {
                console.log('Teacher information is updated')
            } else {
                console.log('Information is not updated')
            }

        } catch(error) {
            console.error('Error: ', error)
        } finally {
            navigate('/admin/users/overview/teacher/list')
        }        
        
        console.log(Object.keys(userEditData).length);
        // console.log(teacherEditData);
        
    }

    return (
      <ColumnWrapper style={{ justifyContent: 'center', alignItems: 'center', gap: '20px', border: 'none' }}>
        <ColumnWrapper 
        style={{
            width: '70%',
            background: 'rgba(235,235,235,0.15)',
            boxShadow: '3px 3px 10px 4px #0000001a',
        //     padding: '20px',
        //     borderRadius: '40px',
        //     border: 'none',
        //     margin: '30px'
        }}
        
        className='bw-none br-32px p-20 m-20'>
            <RowWrapper style={{ justifyContent: 'end', border: 'none' }}>
                <FontAwesomeIcon onClick={() => {history.back()}} icon='fa-solid fa-xmark' color='rgba(0,130,239,0.6)' style={{ cursor: 'pointer' }} />
            </RowWrapper>
            <ColumnWrapper style={{ justifyContent: 'center', alignItems: 'center', gap: '20px', border: 'none' }}>
                <img
                    src={teacherData?.user?.profile_photo ? teacherData?.user?.profile_photo :
                        "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png"}
                    alt="teacher_profile_image"
                    style={{ width: '160px', height: '160px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <Label style={{ fontWeight: 'bold' }} text={`${teacherData?.user?.first_name} ${teacherData?.user?.middle_name} ${teacherData?.user?.last_name}`} />
                <Paragraph text={teacherData?.bio} />

                {editMode&&
                <RowWrapper className='w-100p justify-end bw-none'>
                    <TertiaryButton
                    className='font-w-400 color-red50 p-6 br-20px h-35px bw-2px bs-solid back-color-gray10 flex-row gap-10 align-center'  
                    onClick={()=>{setEditMode(false)}}>
                        <FontAwesomeIcon icon='fa-solid fa-chevron-left'/>
                        <p className='font-sm'>Exit t editing mode</p>
                    </TertiaryButton>
                </RowWrapper>}
            </ColumnWrapper>

            <ColumnWrapper className='bw-none'>
            
                <ColumnWrapper className='bw-none gap-20'>
                    <Heading5 text="1. Personal Information" />
                    <ColumnWrapper className='bw-none gap-10'>
                        <RowWrapper style={{justifyContent:'space-between', gap: '10px', border: 'none'}}>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                {!editMode?<Label text="Full Name" style={{ fontWeight: 'bold' }} />:<Label text="Name" style={{ fontWeight: 'bold' }} />}
                                
                                {editMode ?
                                <>
                                    {/* <input 
                                        type="text" 
                                        value={userEditData.name ||(`${teacherData?.user?.first_name} ${teacherData?.user?.middle_name} ${teacherData?.user?.last_name}`)} 
                                        onChange={(e) => {setUserEditData((prevData) => ({...prevData, name: e.target.value}))}}
                                        /> */}

                                    <InputField 
                                        labelName='First Name' 
                                        type="text" 
                                        value={userEditData.first_name || teacherData?.user?.first_name } 
                                        onChange={(e) => {setUserEditData((prev) => ({...prev, first_name: e.target.value}))}}
                                        />

                                    <InputField 
                                        labelName='Middle Name' 
                                        type="text" 
                                        value={userEditData.middle_name || teacherData?.user?.middle_name}
                                        onChange={(e) => {setUserEditData((prev) => ({...prev, middle_name: e.target.value}))}}
                                        />

                                    <InputField 
                                        labelName='Last Name' 
                                        type="text" 
                                        value={userEditData.last_name || teacherData?.user?.last_name} 
                                        onChange={(e) => {setUserEditData((prev) => ({...prev, last_name: e.target.value}))}}
                                        />

                                    </>
                                : <Label text={`${teacherData?.user?.first_name} ${teacherData?.user?.middle_name} ${teacherData?.user?.last_name}`} />}

                            </ColumnWrapper>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                <Label text="Gender" style={{ fontWeight: 'bold' }} />
                                {
                                    editMode
                                    ?<Select
                                        placeholder={userEditData?.gender || teacherData?.user?.gender}
                                        options={[
                                            { value: 'Male', label: 'Male' },
                                            { value: 'Female', label: 'Female' },
                                        ]}
                                        // value={ userEditData?.gender || teacherData?.user?.gender }
                                        onChange={(e) => setUserEditData(prev => ({...prev, gender: e.value}))}
                                    />
                                    :<Label text={teacherData?.user?.gender} />
                                }
                            </ColumnWrapper>
                        </RowWrapper>
                        <RowWrapper style={{justifyContent:'space-between', gap: '10px', border: 'none' }}>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                <Label text="Date of Birth" style={{ fontWeight: 'bold' }} />
                                {editMode
                                    ?<InputField type='date' 
                                    // value={(teacherData?.user?.date_of_birth).toLocaleDateString}
                                    value={ userEditData.date_of_birth || (teacherData?.user?.date_of_birth ? new Date(teacherData.user.date_of_birth).toISOString().split('T')[0] : '')}//Lati, do not forget to study about this you dont write this part :hhhh!!
                                    onChange={(e) => setUserEditData((prev) => ({...prev, date_of_birth: e.target.value}))}
                                    />
                                    :<Label text={new Date(teacherData?.user?.date_of_birth).toLocaleDateString()} />}
                            </ColumnWrapper>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                <Label text="Nationality" style={{ fontWeight: 'bold' }} />
                                {
                                    editMode
                                    ?<InputField 
                                        type="text" 
                                        value={userEditData.nationality || teacherData?.user?.nationality} 
                                        onChange={(e) => setUserEditData((prev) => ({...prev, nationality: e.target.value}))}
                                        />
                                    :<Label text={teacherData?.user?.nationality} />
                                }
                            </ColumnWrapper>
                        </RowWrapper>
                        <RowWrapper style={{justifyContent:'space-between', gap: '10px', border: 'none' }}>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                <Label text="Email" style={{ fontWeight: 'bold' }} />
                                {
                                    editMode
                                    ?<InputField 
                                        type="email" 
                                        value={userEditData.email || teacherData?.user?.email} 
                                        onChange={(e) => setUserEditData((prev) => ({...prev, email: e.target.value}))}
                                        />
                                    :<Label text={teacherData?.user?.email} />
                                }
                            </ColumnWrapper>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                <Label text="Mobile Number" style={{ fontWeight: 'bold' }} />
                                {teacherData?.contact?.map((contact, index) => (<Label key={index} text={contact.name + ": "+contact.phone}/>))}
                                {editMode && <Label className='color-orange80' text='Contact editing is not now supported' /> }
                            </ColumnWrapper>
                        </RowWrapper>
                        <RowWrapper style={{justifyContent:'space-between', gap: '10px', border: 'none' }}>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                <Label text="Address" style={{ fontWeight: 'bold' }} />
                                {
                                    editMode
                                    ?<>
                                        <InputField 
                                            labelName='House Number' 
                                            type="text" 
                                            value={userEditData.house_number || teacherData?.user?.house_number} 
                                            onChange={(e) => setUserEditData((prev) => ({...prev, house_number:e.target.value}))}
                                            />
                                        <InputField 
                                            labelName='Office Location' 
                                            type="text" 
                                            value={teacherData?.office_location} 
                                            />
                                    </>
                                    :<>
                                        <Label text={`House No. ${teacherData?.user?.house_number}`} />
                                        <Label text={`Office Location: ${teacherData?.office_location}`} />
                                    </>

                                }
                            </ColumnWrapper>
                        </RowWrapper>
                    </ColumnWrapper>

                    <Heading5 text="2. Professional Information" />
                    <ColumnWrapper className='bw-none gap-10'>
                        <RowWrapper style={{justifyContent:'space-between', gap: '10px', border: 'none' }}>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                <Label text="Education Level" style={{ fontWeight: 'bold' }} />
                                {editMode
                                ?<InputField 
                                    type="text" 
                                    value={teacherEditData.education_level || teacherData?.education_level} 
                                    onChange={(e) => setTeacherEditData((prev) => ({...prev, education_level: e.target.value}))}
                                    />
                                :<Label text={teacherData?.education_level} />}
                            </ColumnWrapper>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                <Label text="Qualification" style={{ fontWeight: 'bold' }} />
                                {editMode
                                    ?<InputField 
                                        type="text"
                                        value = {teacherEditData.qualifications || teacherData?.qualifications}
                                        onChange={(e) => setTeacherEditData((prev) => ({...prev, qualifications: e.target.value}))}
                                    />
                                    :<Label text={teacherData?.qualifications} />}
                            </ColumnWrapper>
                        </RowWrapper>
                        <RowWrapper style={{justifyContent:'space-between', gap: '10px', border: 'none' }}>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                <Label text="Experience" style={{ fontWeight: 'bold' }} />
                                {editMode 
                                ?<InputField 
                                    type='text'
                                    value={teacherEditData.years_of_experience || teacherData?.years_of_experience }
                                    onChange={(e) => setTeacherEditData((prev) => ({...prev, years_of_experience: e.target.value}))}
                                />
                                :<Label text={`${teacherData?.years_of_experience} years`} />}
                            </ColumnWrapper>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                <Label text="Specialization" style={{ fontWeight: 'bold' }} />
                                {editMode
                                    ?<InputField 
                                        type="text"
                                        value = {teacherEditData.specialization || teacherData?.specialization}
                                        onChange={(e) => setTeacherEditData((prev) => ({...prev, specialization: e.target.value}))}
                                    />
                                    :<Label text={teacherData?.specialization} />}
                            </ColumnWrapper>
                        </RowWrapper>
                        <RowWrapper style={{justifyContent:'space-between', gap: '10px', border: 'none' }}>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                <Label text="Status" style={{ fontWeight: 'bold' }} />
                                {editMode
                                    ?
                                        <Select 
                                            placeholder={teacherData?.status}
                                            options = {[
                                                {value: 'Active', label: 'Active'},
                                                {value: 'Inactive', label: 'Inactive'},
                                            ]}
                                            onChange={(e) => setTeacherEditData(prev => ({...prev, status: e.value})) }
                                        />
                                    :<Label text={teacherData?.status} />
                                }
                            </ColumnWrapper>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                <Label text="Start Date" style={{ fontWeight: 'bold' }} />
                                {editMode
                                ?<InputField 
                                    type='date'
                                    value={teacherEditData.start_date || (teacherData?.start_date ? new Date(teacherData.start_date).toISOString().split('T')[0]:'')}
                                    onChange={(e) => setTeacherEditData((prev) => ({...prev, start_date: e.target.value}))}
                               />
                                :<Label text={new Date(teacherData?.start_date).toLocaleDateString()} />}
                            </ColumnWrapper>
                        </RowWrapper>
                        <RowWrapper style={{justifyContent:'space-between', gap: '10px', border: 'none' }}>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                <Label text="Contract Type" style={{ fontWeight: 'bold' }} />
                                {editMode
                                    ?
                                        <Select 
                                            placeholder={teacherData?.contract_type}
                                            options = {[
                                                {value: 'Permanent', label: 'Permanent'},
                                                {value: 'Contractual', label: 'Contractual'},
                                            ]}
                                            onChange={(e) => setTeacherEditData(prev => ({...prev, contract_type: e.value})) }
                                        />
                                    :<Label text={teacherData?.contract_type} />
                                }
                            </ColumnWrapper>
                            <ColumnWrapper className='bw-none gap-10 w-50p'>
                                <Label text="Classroom Teacher" style={{ fontWeight: 'bold' }} />
                                {editMode
                                    ?
                                        <Select 
                                            placeholder={teacherData?.is_classroom_teacher}
                                            options = {[
                                                {value: 'True', label: 'True'},
                                                {value: 'False', label: 'False'},
                                            ]}
                                            onChange={(e) => setTeacherEditData(prev => ({...prev, is_classroom_teacher: e.value})) }
                                        />
                                    :<Label text={teacherData?.is_classroom_teacher ? 'Yes' : 'No'} />
                                }
                            </ColumnWrapper>
                        </RowWrapper>
                    </ColumnWrapper>

                    <Heading5 text="3. School Information (Assigned School)" />
                    <ColumnWrapper className='bw-none gap-10'>
                        <ColumnWrapper className='bw-none gap-10 w-50p'>
                            <Label text="School Name" style={{ fontWeight: 'bold' }} />
                            <Label text={teacherData?.school?.name} />
                        </ColumnWrapper>
                        <ColumnWrapper className='bw-none gap-10 w-50p'>
                            <Label text="School Code" style={{ fontWeight: 'bold' }} />
                            <Label text={teacherData?.school?.school_code} />
                        </ColumnWrapper>
                    </ColumnWrapper>
                </ColumnWrapper>

            </ColumnWrapper>
            
            {editMode
            ?<SecondaryButton className='font-sm font-w-600 max-w-300px' onClick={handleEditSave} >Save Changes </SecondaryButton>
            :<RowWrapper className='bw-none mt-5p justify-around gap-30'>
                <TertiaryButton onClick={() => setEditMode(true)} className='color-green80 font-xs p-10 back-color-white'>Edit</TertiaryButton>
                <TertiaryButton onClick={() => handleDelete(teacherData?.teacher_id)} className='color-red100 font-xs'/*style={{ color: 'red', fontSize: '0.7rem' }}*/>Delete</TertiaryButton>
            </RowWrapper>   
            }
        </ColumnWrapper>
      </ColumnWrapper>
    )
}

export default ViewTeacherProfile;