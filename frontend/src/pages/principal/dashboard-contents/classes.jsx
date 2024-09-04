import React, { useEffect, useState } from "react";
import { Heading4, Heading6, Label } from "../../../components/Typography";
import { InputField } from "../../../components/input_field";
import { PrimaryButton } from "../../../components/buttons";
import ColumnWrapper from "../../../components/column_wrapper";
import RowWrapper from "../../../components/row_wrapper";
import api from '../../../api'

function Classes() {
    const apiURL = import.meta.env.VITE_API_URL;
    // const userDataInfo = JSON.parse(localStorage.getItem('data'));
    const [userDataInfo, setUserDataInfo] = useState(() => JSON.parse(localStorage.getItem('data')));


    const [classes, setClasses] = useState([]);
    const [classReload, setClassReload] = useState(false);

    const [classData, setClassData] = useState({
        class_grade: '',
        class_name: '',
        section_name: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setClassData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const getClasses = async (school_id) => {
        try{
            const classes = await fetch(`${apiURL}/api/class/load_s/${school_id}`);
            const data = await classes.json();
            setClasses(data);
        } catch (err) {
            console.error('Error fetching class: ', err);
        }
    }

    useEffect(() => {
        getClasses(userDataInfo?.school?.school_id);
    }, [classReload]);

    classes.sort((a,b) => a.class_grade - b.class_grade)

    const handleSubmit = (event) => {
        event.preventDefault();

        setClassReload(false);

        if (classData.class_name && classData.class_grade) {
            const updatedClassData = {
                ...classData,
                section_name: `${classData.class_grade}${classData.class_name}`,
                school_id: userDataInfo.school.school_id,
            };

            setClassData(updatedClassData);

            console.log('classData',updatedClassData);
            api.post(`${apiURL}/api/class/create`, updatedClassData)
                .then((response) => {
                    console.log(response.data);
                    alert(`Class created succesfully with id ${response.data.class_id}`);
                    setClassReload(true)
                    // window.location.reload();
                })
        }
    };

    return (
        <>
        <RowWrapper>
            <form onSubmit={handleSubmit} className="w-50p flex-column">
                <InputField
                    name="class_grade"
                    labelName="Class Grade"
                    type="number"
                    value={classData.class_grade}
                    onChange={handleInputChange}
                    placeholder="Enter class grade"
                    required
                />

                <InputField
                    name="class_name"
                    labelName="Section"
                    value={classData.class_name}
                    onChange={handleInputChange}
                    placeholder="Enter class name"
                    required
                />

                <PrimaryButton type="submit" className="max-w-100px">
                    Save Class
                </PrimaryButton>
            </form>
            <div className="">
                <Heading6 text={`Classes in ${userDataInfo.school.name}`} />
                <ColumnWrapper>
                    {
                    classes.length > 0 ?
                    classes.map((c) => (
                        <Heading4 text={c.section_name} />
                    ))
                :
                <Heading4 className='color-red100'  text="No classes found" />
                }
                </ColumnWrapper>
            </div>
        </RowWrapper>
        </>
        
    );
}

export default Classes;
