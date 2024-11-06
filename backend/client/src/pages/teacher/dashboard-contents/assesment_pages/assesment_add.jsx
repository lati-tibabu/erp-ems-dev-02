import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select';

import { Heading3, Label } from '../../../../components/Typography'
import { PrimaryButton } from '../../../../components/buttons'
import { InputField } from '../../../../components/input_field'
import ColumnWrapper from '../../../../components/column_wrapper';
import { useNavigate } from 'react-router-dom';

const AssesmentAdd = () => {
    
    const navigate = useNavigate();

    const handleCloseButton = () => {
        navigate('/teacher/assesments/')
    }
    return (
        <div 
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
        </div>
        )
}

export default AssesmentAdd