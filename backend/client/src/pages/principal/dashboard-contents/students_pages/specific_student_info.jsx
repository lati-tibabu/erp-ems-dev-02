import { Label } from '../../../../components/Typography';
import ColumnWrapper from '../../../../components/column_wrapper';
import RowWrapper from '../../../../components/row_wrapper';
import { HorizontalLine } from '../../../../components/line_separator';
import { InputField } from '../../../../components/input_field';
import { PrimaryButton } from '../../../../components/buttons';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function StudentSpecificInfo() {
    const apiURL = import.meta.env.VITE_API_URL;

    const token = localStorage.getItem('jwt');
    const header = {'authorization': `Bearer ${token}`};

    const {user_id} = useParams()

    const schoolData = JSON.parse(localStorage.getItem('data'));
    // const [idNumber, setIdNumber] = useState(schoolData.school.school_code.slice(0,3)+'/S/'+schoolData.school.student_id_count)
    const [idNumber, setIdNumber] = useState();
    const [currentSchool, setCurrentSchool] = useState({});

    const schoolID = schoolData.school.school_id;
    const [userData, setUserData] = useState({});

    const userID = {user_id: user_id};
    const [studentData, setStudentData] = useState({});
    const [classID, setClassID] = useState(null);
    const [s_classes, setS_Classes] = useState([]);
    const [medicalCondition, setMedicalCondition] = useState(null);
    const navigate = useNavigate();

    const  getUser = async (user_id) => {
        try {
            const user = await fetch(`${apiURL}/api/user/load/${user_id}`, {
                method: 'GET',
                headers: header,
            });
    
            const data = await user.json();
            setUserData(data);
    
            // console.log(userData);
    
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }
    
    const getSchoolIdCounter = async(school_id) => {
        try {
            const school = await fetch(`${apiURL}/api/school/load/${school_id}`, {
                method: 'GET',
                headers: header,
            });
            const data = await school.json();
            setIdNumber(schoolData.school.school_code.slice(0,3)+'/S/'+data.student_id_count);
            setCurrentSchool(data);

        } catch (error) {
            
        }
    }

    const getClasses = async(school_id) => {
        try {
            // const schoolID = localStorage.school.school_id;
            const classes = await fetch(`${apiURL}/api/class/load_s/${school_id}`, {
                method: 'GET',
                headers: header,
            });
            const data = await classes.json();
            setS_Classes(data);
        } catch (error) {
            console.error('Error fetching classes:', error);
        }
    }

    // console.log(currentSchool);

    useEffect(() => {
        getSchoolIdCounter(schoolData.school.school_id);
    });
    
    useEffect( () => {
        getUser(user_id);
    }, [user_id])


    useEffect(()=>{
        getClasses(schoolID);
    },[schoolID])
    
    const handleStudentChange = (event) =>{
        const{ name, value } = event.target;
        setStudentData((prevData) => ({
            ...prevData,
            [name]:value,
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const combinedData = {
                ...studentData,
                id_number: idNumber,
                user_id: user_id,
                class_id: classID,
                student_gender: userData.gender,
                school_id: schoolID,
            }
            // alert('information');
            console.log(combinedData);
            // console.log(studentData);
            // console.log(s_classes);
            
            // console.log('information');
            
            const response = await axios.post(`${apiURL}/api/student/create`, combinedData, {
                headers: header,
            });

            if(response.status === 201) {
                
                //Updating Schools student id number counter
                const response2 = await axios.put(`${apiURL}/api/school/update/${schoolData?.school?.school_id}`, {student_id_count: parseInt(currentSchool.student_id_count)+1}, {
                    headers: header
                });
                if (response2.status === 200) { // Assuming successful update returns status 200
                  console.log("School Information Updated Successfully");
                  alert("School Information Updated Successfully");
                } else {
                  console.error("Update failed with status:", response2.status);
                  // alert("Failed to update school information. Please try again."); // User feedback
                }                
                
                console.log('Student Created Succesfully');
                alert('Student Added');
                navigate('/principal/students');
            }
        } catch (error) {

        }
    }

   const today = new Date().toISOString().split('T')[0];
    
  return(
    <>
        <Label text="Enter Student's Specific Information" />
        <HorizontalLine style={{ background: 'rgb(0, 57, 110)', height: '2px' }} />
        
        <form onSubmit={handleSubmit}>

        <InputField 
            labelName="Student ID"
            type="text"
            name="id_number"
            // value={studentData.id_number}
            value={idNumber}
            onChange={handleStudentChange}
            placeholder="Enter student's id number"
            required
            readOnly
        />

        <InputField 
            labelName="Enrollment Date"
            type="date"
            name="enrollment_date"
            value={studentData.enrollment_date || today}
            onChange={handleStudentChange}
            placeholder="Enter enrollment date"
        />

        <InputField 
            labelName="Grade Level"
            type="text"
            name="grade_level"
            value={studentData.grade_level}
            onChange={handleStudentChange}
            placeholder="Enter grade level"
        />

        <ColumnWrapper className='bw-none'>
            <Label text="Class" />
            <Select 
                placeholder="Select Class"
                options={s_classes
                    .filter((classItem) => (classItem.class_grade === parseInt(studentData?.grade_level)))
                    .map((classItem) => ({
                    value: classItem.class_id,
                    label: classItem.section_name,
                }))}
                onChange={(e) => setClassID(e.value)}
            />
        </ColumnWrapper>

        <InputField 
            labelName="Date of Admission"
            type="date"
            name="date_of_admission"
            value={studentData.date_of_admission}
            onChange={handleStudentChange}
            placeholder="Enter date of admission"
        />

        {/* <InputField 
            labelName="Special Needs"
            type="text"
            name="special_needs"
            value={studentData.special_needs}
            onChange={handleStudentChange}
            placeholder="Enter special needs"
        /> */}

        <RowWrapper className='justify-end bw-none'>
            <PrimaryButton style={{ width: '100px', fontWeight: 'normal' }}>Create</PrimaryButton>
        </RowWrapper>

        </form>
    </>
  );
}

export default StudentSpecificInfo;
