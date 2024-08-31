import { Label } from '../../../../components/Typography';
import ColumnWrapper from '../../../../components/column_wrapper';
import RowWrapper from '../../../../components/row_wrapper';
import { HorizontalLine } from '../../../../components/line_separator';
import { InputField } from '../../../../components/input_field';
import { PrimaryButton } from '../../../../components/buttons';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../../../api';
import axios from 'axios';


function StudentSpecificInfo() {
    const apiURL = import.meta.env.VITE_API_URL;

    const token = localStorage.getItem('jwt');
    const header = {'authorization': `Bearer ${token}`};

    const {user_id} = useParams()

    const schoolData = JSON.parse(localStorage.getItem('data'));

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

    useEffect( () => {
        getUser(user_id);
    }, [user_id])

    // console.log(userData);

    useEffect(()=>{
        getClasses(schoolID);
    },[schoolID])
    
    // console.log('Classes: ',s_classes);
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
                user_id: user_id,
                class_id: classID,
                student_gender: userData.gender,
                school_id: schoolID,
            }
            // alert('information');
            console.log(combinedData);
            console.log('information');
            
            const response = await axios.post(`${apiURL}/api/student/create`, combinedData, {
                headers: header,
            });

            if(response.status === 201) {
                console.log('Student Created Succesfully');
                alert('Student Added');
                navigate('/principal/students');
            }
        } catch (error) {

        }
    }


    // const classes = [
    //     {
    //         class_id: "123e4567-e89b-12d3-a456-426614174000",
    //         name: "Grade 1 - A",
    //     },
    //     {
    //         class_id: "123e4567-e89b-12d3-a456-426614174001",
    //         name: "Grade 2 - B",
    //     },
    //     {
    //         class_id: "123e4567-e89b-12d3-a456-426614174002",
    //         name: "Grade 3 - C",
    //     },
    // ];

    // const medicalConditions = [
    //     { value: 'asthma', label: 'Asthma' },
    //     { value: 'allergies', label: 'Allergies' },
    //     { value: 'diabetes', label: 'Diabetes' },
    //     { value: 'epilepsy', label: 'Epilepsy' },
    //     { value: 'adhd', label: 'ADHD (Attention Deficit Hyperactivity Disorder)' },
    //     { value: 'autism', label: 'Autism Spectrum Disorder' },
    //     { value: 'anemia', label: 'Anemia' },
    //     { value: 'heart_conditions', label: 'Heart Conditions' },
    //     { value: 'celiac_disease', label: 'Celiac Disease' },
    //     { value: 'visual_impairment', label: 'Visual Impairment' },
    //     { value: 'hearing_impairment', label: 'Hearing Impairment' },
    //     { value: 'physical_disabilities', label: 'Physical Disabilities' },
    //     { value: 'mental_health_conditions', label: 'Mental Health Conditions' },
    //     { value: 'chronic_conditions', label: 'Chronic Conditions (e.g., Crohn\'s Disease, Sickle Cell Disease)' },
    //     { value: 'food_intolerances', label: 'Food Intolerances' },
    //     { value: 'severe_eczema', label: 'Severe Eczema or Skin Conditions' },
    // ];
    
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
            value={studentData.id_number}
            onChange={handleStudentChange}
            placeholder="Enter student's id number"
            required
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
                options={s_classes.map((classItem) => ({
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
