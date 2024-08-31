import React, { useEffect, useState } from "react";
import api from "../../../../api";
import { Heading3, Heading4, Heading5, Heading6 } from "../../../../components/Typography";
import ColumnWrapper from "../../../../components/column_wrapper";

function StudentList() {
    const apiURL = import.meta.env.VITE_API_URL;

    const token = localStorage.getItem('jwt');
    const header = {'authorization' : `Bearer ${token}`};

    const schoolData = JSON.parse(localStorage.getItem('data'));
    const school_id = schoolData.school.school_id;
    
    const [students, setStudents] = useState([]);
    const [studentsData, setStudentsData] = useState([]);

    const [classes, setClasses] = useState([]);
    const [classID, setClassID] = useState('');

    const [listType, setListType] = useState('all');

    const getClasses = async (schoolID) => {
        try {
            const classes = await fetch(`${apiURL}/api/class/load_s/${schoolID}`);
            const data = await classes.json();
            setClasses(data);
        } catch(error) {
            console.error('Error fetching classes:', error);
        }
    }

    useEffect(() => {
        getClasses(school_id)
    }, [school_id]);

    if (classes.length > 0){
        classes.sort((a, b) => a.class_grade - b.class_grade)
    }

    var class_grades = []

    classes.map((item) => {
        class_grades.push(item.class_grade);
    })
    
    console.log(classes);


    

    const getStudents = async (schoolID) => {
        try {
            let students;
            switch (listType) {
                case 'all':
                    students = await fetch(`${apiURL}/api/student/load_s/${schoolID}`, {
                        method: 'GET',
                        headers: header
                    });
                    break;
                case 'male':
                    students = await fetch(`${apiURL}/api/student/load_g/${schoolID}/male`, {
                        method: 'GET',
                        headers: header
                    });
                    break;
                case 'female':
                    students = await fetch(`${apiURL}/api/student/load_g/${schoolID}/female`, {
                        method: 'GET',
                        headers: header
                    });
                    break;
                case 'class':
                    students = await fetch(`${apiURL}/api/student/load_c/${schoolID}/${classID}`, {
                        method: 'GET',
                        headers: header
                    });
                    break;
                default:
                    break;
            }
            const data = await students.json() || [''];
            
            setStudents(data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };
    
    const getStudentsData = async(students) => {
        const dataWithRelations = await Promise.all(
            students.map(async (student) => {
                const userResponse = await fetch(`${apiURL}/api/user/load/${student.user_id}`, {
                    method: 'GET',
                    headers: header
                  });

                // const userResponse = await api.get(`${apiURL}/api/user/load/${student.user_id}`);
                const userData = await userResponse.json();

                const classResponse = await fetch(`${apiURL}/api/class/load/${student.class_id}`, {
                    method: 'GET',
                    headers: header
                });
                const classData = await classResponse.json();
                
                return { ...student, user: userData, class: classData };
            })
        );
        setStudentsData(dataWithRelations);
    };

    useEffect(()=>{
        getStudents(school_id);
    },[school_id, listType, classID])

    useEffect(()=> {
        if(students.length > 0){
            getStudentsData(students)
        }
    }, [students, listType, classID])

    // console.log('Data is here: ', studentsData)

  return(
    <div className="flex-row gap-10">

        
        <ColumnWrapper className="listing option back-color-blue60-20 color-black p-10 p-10px br-10px" >

            <ColumnWrapper>
                Gender
                <ul>
                    <li onClick={() => setListType('all')} style={{cursor:'pointer'}}>All Students</li>
                    <li onClick={()=> setListType('male')} style={{cursor:'pointer'}}>Male Students</li>
                    <li onClick={() => setListType('female')} style={{cursor:'pointer'}}>Female Students</li>
                </ul>
            </ColumnWrapper>
            <ColumnWrapper>
                Class
                <ul>
                    <li onClick={() => setListType('all')}>All Classes</li>
                    {
                        classes.map((item) => (
                            <li onClick={() => (
                                setClassID(item.class_id), 
                                setListType('class'))}>{`Class ${item.class_grade}`}</li>
                        ))
                    }
                </ul>
            </ColumnWrapper>
            <ColumnWrapper>
                Class and Section
                <ul>
                {
                    classes.map((item) => (
                        <li onClick={() => (
                            setClassID(item.class_id), 
                            setListType('class'))}>{`Class ${item.section_name}`}</li>
                    ))
                }
                    {/* <li>
                        Class 2
                        <ul>
                            <li>Section A</li>
                            <li>Section B</li>
                        </ul>
                    </li> */}
                </ul>
            </ColumnWrapper>
            <ColumnWrapper>
                Gender Within Class
                <ul>
                    <li>
                        Class 1
                        <ul>
                            <li>Male Students</li>
                            <li>Female Students</li>
                        </ul>
                    </li>
                    <li>
                        Class 2
                        <ul>
                            <li>Male Students</li>
                            <li>Female Students</li>
                        </ul>
                    </li>
                </ul>
            </ColumnWrapper>
            <ColumnWrapper>
                Gender Within Class and Section
                <ul>
                    <li>
                        Class 1, Section A
                        <ul>
                            <li>Male Students</li>
                            <li>Female Students</li>
                        </ul>
                    </li>
                    <li>
                        Class 1, Section B
                        <ul>
                            <li>Male Students</li>
                            <li>Female Students</li>
                        </ul>
                    </li>
                    <li>
                        Class 2, Section A
                        <ul>
                            <li>Male Students</li>
                            <li>Female Students</li>
                        </ul>
                    </li>
                </ul>
            </ColumnWrapper>
        </ColumnWrapper>
        <div>
            <Heading3 text="Students List" />
            <Heading6 text={`List by: ${listType[0].toUpperCase()+listType.slice(1)} students`} className='font-w-300'/>
            <table border="1" cellpadding="10" cellspacing="0" className="br-10px back-color-white font-w-100 font-sm">
            <thead className="bw-0">
                <tr>
                    <th className="bw-none">Student ID</th>
                    <th className="bw-none">Name</th>
                    <th className="bw-none">Gender</th>
                    <th className="bw-none">Class</th>
                    <th className="bw-none">Section</th>
                </tr>
            </thead>
            <tbody>
            {studentsData.map((student, index) => (

                    <tr key={index}>
                        <td className="bc-gray100-30">{schoolData.school.school_code+'/'+student.id_number}</td>
                        <td className="bc-gray100-30">{`${student.user.first_name} ${student.user.middle_name} ${student.user.last_name}`}</td>
                        <td className="bc-gray100-30">{student.user.gender}</td>
                        <td className="bc-gray100-30">Class {student.class.class_grade}</td>
                        <td className="bc-gray100-30">Section {student.class.class_name}</td>
                    </tr>

                ))}
                </tbody>
            </table>
        </div>
    </div>
);
}

export default StudentList;
