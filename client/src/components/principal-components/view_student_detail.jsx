import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const ViewStudentDetail = () => {
  const apiURL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('jwt');
  const header = { authorization: `Bearer ${token}` };

  const location = useLocation();
  const student = location.state.studentData;
  console.log('Bullshit error')
  const navigate = useNavigate();

  const handleCloseButton = () => {
    navigate('/principal/students/list/')
  }
  const handleDeleteStudent = async (_id) => {
    alert(`Deleting! ${_id} ....`)
    const response = await fetch(`${apiURL}/api/student/delete/${_id}`, {
      method: 'DELETE',
      headers: header,
    });
    const data = await response.json()
    console.log(data);
    navigate('/principal/students/list/', { state: { refresh: true } });
  } 

  return (
    <div 
      style={{position: 'absolute', top: '0', left: '0', zIndex: '100', background:'#00000080'}} 
      className='w-100p min-h-100p back-color-black flex-row justify-center align-center'
      >
        {/* <div></div> */}
      <div 
        className='no_scroll_chrome back-color-white p-10 w-50p br-10px h-80s' 
        style={{overflowY: 'scroll'}}
        >
          <div className="back-color-gray100-20 p-10 br-5px">
            <div 
              className="w-100p flex-row justify-end pr-10"
              >
              <FontAwesomeIcon 
                icon='fa-solid fa-xmark' 
                style={{cursor: 'pointer'}}
                onClick={handleCloseButton}
                className="p-5 w-20px h-20px back-color-red100 br-20px color-white"
                />
            </div>
            <div>
              <h2>Student Information</h2>

              <div className="flex-row gap-10">
                <button 
                  // style={{background: 'transparent'}} 
                  className="color-black font-w-400 font-xs flex-row gap-5 justify-center align-center color-green100"
                  onClick={() => {
                    alert('Oops! Edit functionality is yet to be implemented!')
                  }}
                  >
                  <FontAwesomeIcon icon="fa-solid fa-pencil" />
                  Edit
                </button>
                <button 
                  // style={{background: 'transparent'}} 
                  className="color-black font-w-400 font-xs flex-row gap-5 justify-center align-center color-red100"
                  onClick={() => handleDeleteStudent(student.student_id)}
                  >
                  <FontAwesomeIcon icon="fa-solid fa-trash" />
                  Delete
                </button>
              </div>

              <div>
                <h3>Personal Details</h3>
                <div className="flex-row justify-center p-10">
                  <img 
                    src={student.user.profile_photo || 'default-image-url.png'} 
                    alt="Profile Photo" 
                    width="150" 
                    />
                </div>
                <p><strong>Name:</strong> 
                  {`${student.user.first_name || ''} ${student.user.middle_name || ''} ${student.user.last_name || 'Not Provided'}`}</p>
                <p><strong>Date of Birth:</strong> {student.user.date_of_birth || 'Not Provided'}</p>
                <p><strong>Gender:</strong> {student.user.gender || 'Not Provided'}</p>
                <p><strong>Email:</strong> {student.user.email || 'Not Provided'}</p>
                <p><strong>Username:</strong> {student.user.username || 'Not Provided'}</p>
                <p><strong>Nationality:</strong> {student.user.nationality || 'Not Provided'}</p>
              </div>

              <hr />

              <div>
                <h3>School Information</h3>
                <p><strong>Class:</strong> {`${student.Class.section_name || 'Not Provided'}${student.class_name || ''}`}</p>
                <p><strong>Grade Level:</strong> {student.Class.class_grade || 'Not Provided'}</p>
                <hr className="w-80p"/>
                <p><strong>Role:</strong> {student.user.Role.role_name || 'Not Provided'}</p>
                <p><strong>Role Description:</strong> {student.user.Role.role_description || 'Not Provided'}</p>
                <hr className="w-80p"/>
                <p><strong>Admission Number:</strong> {student.admission_number || 'Not Provided'}</p>
                <p><strong>Enrollment Date:</strong> {student.enrollment_date || 'Not Provided'}</p>
                <p><strong>Date of Admission:</strong> {student.date_of_admission || 'Not Provided'}</p>
                <p><strong>Date of Leaving:</strong> {student.date_of_leaving || 'Not Provided'}</p>
                <p><strong>Transfer Reason:</strong> {student.transfer_reason || 'Not Provided'}</p>
              </div>

              <hr />

              <div>
                <h3>Contact Information</h3>
                <p><strong>Address:</strong> 
                  {`${student.user.Address.subcity || 'Not Provided'}, 
                      Woreda ${student.user.Address.woreda || 'Not Provided'}, 
                      Kebele ${student.user.Address.kebele || 'Not Provided'}, 
                      ${student.user.Address.city || 'Not Provided'}`}</p>
                <p><strong>House Number:</strong> {student.user.house_number || 'Not Provided'}</p>
              </div>

              <hr />

              <div>
                <h3>Additional Information</h3>
                <p><strong>Extracurricular Activities:</strong> {student.extracurricular_activities || 'Not Provided'}</p>
                <p><strong>Health Insurance:</strong> {student.health_insurance || 'Not Provided'}</p>
                <p><strong>Hobbies:</strong> {student.hobbies || 'Not Provided'}</p>
                <p><strong>Language Proficiency:</strong> {student.language_proficiency || 'Not Provided'}</p>
                <p><strong>Medical Conditions:</strong> {student.medical_conditions || 'Not Provided'}</p>
                <p><strong>Past Achievements:</strong> {student.past_achievements || 'Not Provided'}</p>
                <p><strong>Previous School:</strong> {student.previous_school || 'Not Provided'}</p>
                <p><strong>Special Needs:</strong> {student.special_needs || 'Not Provided'}</p>
              </div>
            </div>
          </div>
      </div>
      <style>
        {`
            .no_scroll_chrome::-webkit-scrollbar {
                display: none; /* Safari and Chrome */
            }
            p {
              border-bottom: 1px solid #ececec;
              padding: 3px;
              display: flex;
              flex-direction: row;
              gap: 15px
            }
        `}
      </style>

    </div>
  )
}


export default ViewStudentDetail