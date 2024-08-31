import React, { useState } from "react";
import { Label } from "../../../components/Typography";
import { InputField } from "../../../components/input_field";
import { PrimaryButton } from "../../../components/buttons";
import api from '../../../api'

function Classes() {
    const apiURL = import.meta.env.VITE_API_URL;
    const userDataInfo = JSON.parse(localStorage.getItem('data'));

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

    const handleSubmit = (event) => {
        event.preventDefault();

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
                    // window.location.reload();
                })
        }
    };

    return (
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
    );
}

export default Classes;
