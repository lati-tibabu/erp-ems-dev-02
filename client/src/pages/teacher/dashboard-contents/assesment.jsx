import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { Heading2, Heading3, Label } from '../../../components/Typography'
import { PrimaryButton } from '../../../components/buttons'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { InputField } from '../../../components/input_field'

import Select from 'react-select';
import ColumnWrapper from '../../../components/column_wrapper'
import Skeleton from '../../../components/skeleton';

const Assesment = () => {
    const teacherData = JSON.parse(localStorage.getItem('data'));
    const apiURL = import.meta.env.VITE_API_URL;

    const {token} = localStorage.getItem('jwt');
    const header = {'authorization': `Bearer ${token}`};
    
    const [assesments, setAssesments ] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const location = useLocation();
    

    const handleAssesmentView = (assesment) => {
        navigate('/teacher/assesments/view', {state: {assesment}});
    }

    const handleAssesmentAdd = () => {
        navigate('/teacher/assesments/add')
    }


    const fetchAssesments = async (teacherId) => {
        setLoading(true);
        try{
            const response = await fetch(`${apiURL}/api/assesment/load_t/${teacherId}`, {
                method: 'GET',
                headers: header,
            });
            const data = await response.json();
            setAssesments(data);
        }catch(error){
            console.error(error);
        }finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAssesments(teacherData.teacher.teacher_id);
    }, []);
    // fetchAssesments(teacherData.teacher.teacher_id);
    
    // console.log(assesments);

  return (
    <div>
        <Heading2 text="Assesments" />  
        <PrimaryButton 
            className='button_add font-w-500 w-50p p-10'
            onClick={handleAssesmentAdd}
            >
            <FontAwesomeIcon icon='fa-solid fa-plus' />
            Add New Assesment            
        </PrimaryButton>

        <div className='flex-row align-start justify-between p-10'>
            <table style={{borderCollapse: 'collapse'}} className='table_styles p-10 back-color-white w-90p m-20'>
                <thead>
                    <tr className='back-color-blue80 color-white'>
                        <th className={`${table_border}`} style={table_border_style.no_side_border}>No</th>
                        <th className={`${table_border}`} style={table_border_style.no_side_border} >Assesment Name</th>
                        <th className={`${table_border}`} style={table_border_style.no_side_border} >Type</th>
                        <th className={`${table_border}`} style={table_border_style.no_side_border} >Class</th>
                        <th className={`${table_border}`} style={table_border_style.no_side_border} >Course</th>
                        <th className={`${table_border}`} style={table_border_style.no_side_border} >Max Mark</th>
                        <th className={`${table_border}`} style={table_border_style.no_side_border} >Status</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        Array.from({ length: 5 }).map((_, i) => (
                            <tr key={i}>
                                <td className={`${table_border}`} style={table_border_style.no_side_border}><Skeleton width="20px" /></td>
                                <td className={`${table_border}`} style={table_border_style.no_side_border}><Skeleton width="150px" /></td>
                                <td className={`${table_border}`} style={table_border_style.no_side_border}><Skeleton width="100px" /></td>
                                <td className={`${table_border}`} style={table_border_style.no_side_border}><Skeleton width="120px" /></td>
                                <td className={`${table_border}`} style={table_border_style.no_side_border}><Skeleton width="120px" /></td>
                                <td className={`${table_border}`} style={table_border_style.no_side_border}><Skeleton width="50px" /></td>
                                <td className={`${table_border}`} style={table_border_style.no_side_border}><Skeleton width="80px" /></td>
                            </tr>
                        ))
                    ) : assesments.length > 0 ? (
                        assesments.map((assesment, i) => (
                            <tr key={assesment.assesment_id} style={{cursor: 'pointer'}} onClick={() => handleAssesmentView(assesment)} className='table_hover'>
                                <td className={`${table_border}`} style={table_border_style.no_side_border} >{i+1}</td>
                                <td className={`${table_border}`} style={table_border_style.no_side_border} >{assesment.assesment_name}</td>
                                <td className={`${table_border}`} style={table_border_style.no_side_border} >{assesment.assesment_type}</td>
                                <td className={`${table_border}`} style={table_border_style.no_side_border} >{`Grade ${assesment.Class.class_grade} Section ${assesment.Class.class_name}`}</td>
                                <td className={`${table_border}`} style={table_border_style.no_side_border} >{`${assesment.Course.course_name} Grade ${assesment.Course.course_grade}`}</td>
                                <td className={`${table_border}`} style={table_border_style.no_side_border} >{assesment.max_mark}</td>
                                <td className={`${table_border}`} style={table_border_style.no_side_border} >{assesment.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className={`${table_border}`} style={{ textAlign: 'center', padding: '20px' }}>
                                <Label text="No assessments found" className="color-red100" />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className='p-20 '>
                <Outlet />
            </div>

        </div>
        <style>
            {
                `
                    .table_hover:hover{
                        transition: 300ms;
                        background: #dfdfdf90;
                    }
                    .table_styles{
                        transition: 5000ms;
                    }
                    .button_add{
                        background: transparent;
                        color: black;
                        display: flex;
                        flex-direction: row;
                        gap: 10px;
                        border: 1px dashed black;
                        justify-content: center;
                    }
                    .button_add:hover{
                        background: #3f3f3f0d;
                    }
                
                `
            }
        </style>
    </div>
  )
}
const table_border = 'bw-1px bs-solid bc-gray60 p-10';
const table_border_style = {
    no_side_border: {
        borderLeft: 'none',
        borderRight: 'none'
    }
}

export default Assesment