import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { Heading2, Heading3, Label } from '../../../components/Typography'
import { PrimaryButton } from '../../../components/buttons'
import { Outlet, useNavigate } from 'react-router-dom'
import { InputField } from '../../../components/input_field'

import Select from 'react-select';
import ColumnWrapper from '../../../components/column_wrapper'

const Assesment = () => {
    const navigate = useNavigate();

    const handleAssesmentView = () => {
        navigate('/teacher/assesments/view');
        // alert('Assesment View');
    }

    const handleAssesmentAdd = () => {
        navigate('/teacher/assesments/add')
    }

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

        <div className='flex-row'>

            <table style={{borderCollapse: 'collapse'}} className='table_styles p-10 back-color-white m-20'>
                <thead>
                    <tr className='back-color-blue80 color-white'>
                        <th className={`${table_border}`} style={table_border_style.no_side_border}>No</th>
                        <th className={`${table_border}`} style={table_border_style.no_side_border} >Assesment Name</th>
                        <th className={`${table_border}`} style={table_border_style.no_side_border} >Type</th>
                        <th className={`${table_border}`} style={table_border_style.no_side_border} >Class</th>
                        <th className={`${table_border}`} style={table_border_style.no_side_border} >Max Mark</th>
                        <th className={`${table_border}`} style={table_border_style.no_side_border} >Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{cursor: 'pointer'}} onClick={handleAssesmentView} className='table_hover'>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >1</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Mid Term Exam</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Exam</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Class1</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >30</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Completed</td>
                    </tr>
                    <tr style={{cursor: 'pointer'}} onClick={handleAssesmentView} className='table_hover'>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >2</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Final Term Exam</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Exam</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Class1</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >70</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Pending</td>
                    </tr>
                    <tr style={{cursor: 'pointer'}} onClick={handleAssesmentView} className='table_hover'>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >3</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Quiz 1</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Quiz</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Class2</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >10</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Completed</td>
                    </tr>
                    <tr style={{cursor: 'pointer'}} onClick={handleAssesmentView} className='table_hover'>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >4</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Assignment 1</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Assignment</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Class2</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >20</td>
                        <td className={`${table_border}`} style={table_border_style.no_side_border} >Pending</td>
                    </tr>
                </tbody>
            </table>
            <div className='p-20 '>
                <Outlet />

                {/* <div 
                    style={{position: 'absolute', top:'0', left: '0', backdropFilter:'blur(3px)', background: '#4d4d4da4'}} 
                    className='w-100p h-100p p-10 flex-row justify-center align-center'
                    >
                    <div 
                        className='back-color-white w-30p p-10 br-10px'
                        style={{minHeight: '100px'}}
                    >
                        <div className="w-100p flex-row justify-end pr-10">
                            <FontAwesomeIcon 
                                icon='fa-solid fa-xmark' 
                                style={{cursor: 'pointer'}}
                                onClick={handleCloseButton}
                                className="p-5 w-20px h-20px back-color-red100 br-20px color-white"
                                />
                        </div>
                        <div className='w-100p flex-row justify-center'>
                            <Heading3 text='Add New Assesment' />
                        </div>
                        <form action="">
                            <InputField 
                                labelName='Assesment Name'
                                placeholder="Eg. Midterm Exam" 
                                name="assesment_name" 
                                type="text" 
                                // value={userData.email} 
                                // onChange={handleUserChange}
                            />
                            <ColumnWrapper className='bw-none'>
                                <Label text='Assesment Type' />
                                <Select 
                                    placeholder='Select Assesment type'
                                    options={
                                        [
                                            {value: 'Exam', label: 'Exam'},
                                            {value: 'Quiz', label: 'Quiz'},
                                            {value: 'Assignment', label: 'Assignment'},
                                            {value: 'Project', label: 'Project'}
                                        ]
                                    }
                                />
                            </ColumnWrapper>

                            <ColumnWrapper className='bw-none'>
                                <Label text='Class' />
                                <Select 
                                    placeholder='Select Class'
                                    options={[
                                        {value: 'Class1', label: 'Class1'},
                                        {value: 'Class2', label: 'Class2'},
                                        {value: 'Class3', label: 'Class3'},
                                        {value: 'Class4', label: 'Class4'}
                                    ]}
                                />
                            </ColumnWrapper>

                            <InputField 
                                labelName='Maximum Mark'
                                placeholder='Eg. 20'
                                name='max_mark'
                                type='number'
                            />
                            <PrimaryButton>
                                Add
                            </PrimaryButton>
                        </form>
                    </div>
                </div> */}

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