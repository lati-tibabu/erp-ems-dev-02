import { Label, Heading4 } from "../../../../../../components/Typography";
import ColumnWrapper from "../../../../../../components/column_wrapper";
import RowWrapper from "../../../../../../components/row_wrapper";
import { HorizontalLine } from "../../../../../../components/line_separator";
import { InputField } from "../../../../../../components/input_field";
import { PrimaryButton } from "../../../../../../components/buttons";
import { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { CheckboxWrapper } from "../../../../../../components/wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CreateTeacherSpecific(props) {
  const apiURL = import.meta.env.VITE_API_URL;

  const token = localStorage.getItem("jwt");
  const header = { authorization: `Bearer ${token}` };

  const { user_id } = useParams();

  const userID = { user_id: user_id };
  const [schoolID, setSchoolID] = useState({ school_id: "" });
  const [departmentID, setDepartmentID] = useState({ department_id: "" });
  const [salaryRange, setSalaryRange] = useState({ salary: "" });
  const [teacherType, setTeacherType] = useState({ teacher_type: "" });
  const [isClassroomTeacher, setIsClassroomTeacher] = useState({
    is_classroom_teacher: false,
  });
  const [additionalFields, setAdditionalFields] = useState(false);

  const [teacherData, setTeacherData] = useState({});

  const [schools, setSchools] = useState([]);

  const navigate = useNavigate();

  const salaryRanges = [
    { value: "0-20000", label: "0 - 20,000" },
    { value: "20001-40000", label: "20,001 - 40,000" },
    { value: "40001-60000", label: "40,001 - 60,000" },
    { value: "60001-80000", label: "60,001 - 80,000" },
    { value: "80001-100000", label: "80,001 - 100,000" },
    { value: "100001-120000", label: "100,001 - 120,000" },
    { value: "120001-140000", label: "120,001 - 140,000" },
    { value: "140001-160000", label: "140,001 - 160,000" },
    { value: "160001-180000", label: "160,001 - 180,000" },
    { value: "180001-200000", label: "180,001 - 200,000" },
    { value: "200001+", label: "200,001 and above" },
  ];

  const getSchools = async () => {
    try {
      const response = await fetch(`${apiURL}/api/school/load`, {
        method: "GET",
        headers: header,
      });
      const data = await response.json();
      setSchools(data);
    } catch (error) {
      console.error("Error fetching schools:", error);
    }
  };

  useEffect(() => {
    getSchools();
  }, []);

  const handleTeacherChange = (event) => {
    const { name, value } = event.target;
    setTeacherData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const combinedData = {
        ...teacherData,
        ...departmentID,
        ...userID,
        ...schoolID,
        ...salaryRange,
        ...teacherType,
        // is_classroom_teacher: isClassroomTeacher,
        // school_id,
      };
      const response = await axios.post(
        `${apiURL}/api/teacher/create`,
        combinedData,
        {
          headers: header,
        }
      );

      if (response.status === 201) {
        alert(
          `Teacher created succesfully with id ${response.data.teacher_id}`
        );
        console.log("Teacher created succesfully", response);
        if (
          window.confirm(
            "The user(teacher) does not have a contand do you want to add one for it?"
          )
        ) {
          navigate(
            "/admin/users/overview/teacher/create/contact/" +
              response.data.user_id
          );
        } else {
          navigate("/admin/users/overview/teacher/list");
        }
      } else {
        alert("Error Adding Teacher");
        console.log("Error Adding Teacher");
      }
      // console.log(combinedData);
    } catch (error) {
      console.error("Error: ", error);
      if (error.response) {
        console.error("Error details:", error.response.data);
      }
      if (error.response && error.response.status === 500) {
        alert("An internal server error occurred. Please try again later.");
      } else {
        alert(
          "An error occurred while submitting the form. Please check your input and try again."
        );
      }
    }
  };

  const handleIsClassroomTeacher = (e) => {
    const isChecked = e.value.checked;
    isChecked && setIsClassroomTeacher(true);
  };

  return (
    <>
      <Label text="Enter teacher's specific information" />

      <HorizontalLine
        style={{ background: "rgb(0, 57, 110)", height: "2px" }}
      />

      <form onSubmit={handleSubmit}>
        <ColumnWrapper className="bw-none">
          <Label text="Teacher type" />
          <Select
            placeholder="Select Teacher type"
            options={[
              { value: "main", label: "Main" },
              { value: "vice", label: "Vice" },
            ]}
            onChange={(e) =>
              setTeacherType((prevState) => ({
                ...prevState,
                teacher_type: e.value,
              }))
            }
          />
        </ColumnWrapper>

        <ColumnWrapper className="bw-none">
          <Label text="Choose the Teacher's School" required />
          <Select
            placeholder="Select School"
            required
            options={schools.map((school) => ({
              value: school.school_id,
              label: school.name,
            }))}
            onChange={(e) =>
              setSchoolID((prevState) => ({ ...prevState, school_id: e.value }))
            }
          />
        </ColumnWrapper>

        <InputField
          labelName="Specialization"
          required
          type="text"
          name="specialization"
          value={teacherData.specialization}
          onChange={handleTeacherChange}
          placeholder="Enter the teacher's specialization"
        />

        <InputField
          labelName="Hire Date"
          type="date"
          name="hire_date"
          value={teacherData.hire_date}
          onChange={handleTeacherChange}
          placeholder="Enter the teacher's hire date"
        />

        <InputField
          labelName="Position"
          type="text"
          name="position"
          value={teacherData.position}
          onChange={handleTeacherChange}
          placeholder="Enter the teacher's position"
        />

        <ColumnWrapper className="bw-none">
          <Label text="Department" />
          <Select
            placeholder="Select teacher's department"
            options={[
              { value: 1, label: "English" },
              { value: 2, label: "Math" },
              { value: 3, label: "Afaan Oromoo" },
              { value: 4, label: "Physics" },
            ]}
            onChange={(e) =>
              setDepartmentID((prev) => ({ ...prev, department_id: e.value }))
            }
          />
        </ColumnWrapper>

        <InputField
          labelName="Employee Number"
          type="text"
          name="employee_number"
          value={teacherData.employee_number}
          onChange={handleTeacherChange}
          placeholder="Enter the teacher's employee number"
        />

        <InputField
          labelName="Office Location"
          type="text"
          name="office_location"
          value={teacherData.office_location}
          onChange={handleTeacherChange}
          placeholder="Enter the teacher's office location"
        />

        <ColumnWrapper style={{ border: "none" }}>
          <Label text="Salary Range" />
          <Select
            placeholder="Select the salary range"
            options={salaryRanges.map((range) => ({
              value: range.value,
              label: range.label,
            }))}
            onChange={(e) =>
              setSalaryRange((prevState) => ({ ...prevState, salary: e.value }))
            }
          />
        </ColumnWrapper>

        <InputField
          labelName="Contract Type"
          type="text"
          name="contract_type"
          value={teacherData.contract_type}
          onChange={handleTeacherChange}
          placeholder="Enter contract type"
        />

        <InputField
          labelName="Joining Date"
          type="date"
          name="joining_date"
          value={teacherData.joining_date}
          onChange={handleTeacherChange}
          placeholder="Enter joining date"
        />

        <InputField
          labelName="Last Evaluation Date"
          type="date"
          name="last_evaluation_date"
          value={teacherData.last_evaluation_date}
          onChange={handleTeacherChange}
          placeholder="Enter last evaluation date"
        />

        <CheckboxWrapper wrapperName="Is Classroom Teacher">
          <InputField
            // labelName="Is Classroom Teacher (Check the box if so)"
            type="checkbox"
            name="is_classroom_teacher"
            checked={teacherData.is_classroom_teacher}
            // onChange={e => this.handleIsClassroomTeacher(e)}
            onChange={(e) =>
              handleTeacherChange({
                target: { name: e.target.name, value: e.target.checked },
              })
            } // READ THIS CODE IT IS NOT CLEAR FOR YOU LATI
          />
        </CheckboxWrapper>
        <InputField
          labelName="Access Level"
          type="text"
          name="access_level"
          value={teacherData.access_level}
          onChange={handleTeacherChange}
          placeholder="Enter access level"
        />

        <InputField
          labelName="Education Level"
          type="text"
          name="education_level"
          value={teacherData.education_level}
          onChange={handleTeacherChange}
          placeholder="Enter education level"
        />

        <InputField
          labelName="Years of Experience"
          type="number"
          name="years_of_experience"
          value={teacherData.years_of_experience}
          onChange={handleTeacherChange}
          placeholder="Enter years of experience"
        />
        <ColumnWrapper className="bw-none">
          <RowWrapper className="bw-none justify-between align-center">
            <Heading4 text="Additional Fields" />
            <FontAwesomeIcon
              icon={`fa-solid fa-chevron-${additionalFields ? "up" : "down"}`}
              onClick={(e) => setAdditionalFields(!additionalFields)}
              style={{ cursor: "pointer" }}
            />
          </RowWrapper>

          <ColumnWrapper
            style={{ display: `${additionalFields ? "flex" : "none"}` }}
          >
            <InputField
              labelName="Qualification"
              type="text"
              name="qualification"
              value={teacherData.qualification}
              onChange={handleTeacherChange}
              placeholder="Enter the teacher's qualification"
            />

            <ColumnWrapper className="bw-none">
              <Label text="Status" />
              <Select
                placeholder="Select teacher's status"
                options={[
                  { values: "active", label: "Active" },
                  { values: "inactive", label: "Inactive" },
                ]}
              />
            </ColumnWrapper>

            <InputField
              labelName="Photo URL"
              type="text"
              name="photo_url"
              value={teacherData.photo_url}
              onChange={handleTeacherChange}
              placeholder="Paste the photo url"
            />

            <InputField
              labelName="Professional Development"
              type="text"
              name="professional_development"
              value={teacherData.professional_development}
              onChange={handleTeacherChange}
              placeholder="Enter professional development"
            />
            <InputField
              labelName="Teaching Schedule"
              type="text"
              name="teaching_schedule"
              value={teacherData.teaching_schedule}
              onChange={handleTeacherChange}
              placeholder="Enter teaching schedule"
            />

            <InputField
              labelName="Additional Roles"
              type="text"
              name="additional_roles"
              value={teacherData.additional_roles}
              onChange={handleTeacherChange}
              placeholder="Enter additional roles"
            />
          </ColumnWrapper>
        </ColumnWrapper>

        <RowWrapper className="justify-end bw-none">
          <PrimaryButton style={{ width: "100px", fontWeight: "normal" }}>
            Create
          </PrimaryButton>
        </RowWrapper>
      </form>
    </>
  );
}

export default CreateTeacherSpecific;
