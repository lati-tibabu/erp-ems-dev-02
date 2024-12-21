import React, { useEffect, useState } from "react";
import { Heading2, Heading5, Paragraph } from "../../../components/Typography";
import { SecondaryButton } from "../../../components/buttons";
import { Outlet, useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function Students() {
  const apiURL = import.meta.env.VITE_API_URL;

  const token = localStorage.getItem("jwt");
  const header = { Authorization: `Bearer ${token}` };

  const navigate = useNavigate();


  const userData = JSON.parse(localStorage.getItem("data"));
  const teacherId = userData.teacher.teacher_id;
  const schoolId = userData.school.school_id;


  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [studentsData, setStudentsData] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState('');
  const [selectedClassName, setSelectedClassName] = useState('');

  const getClasses = async (teacherId) => {
    try {
      const response = await fetch(`${apiURL}/api/teacher-class/load_class/${teacherId}/classes`, {
        method: "GET",
        headers: header,
      });
      const data = await response.json();
      setClasses(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClasses(teacherId);
  }, [teacherId]);

  const getStudent = async (classId, schoolId) => {
    try {
      const response = await fetch(`${apiURL}/api/student/load_c/${schoolId}/${classId}`, {
        method: "GET",
        headers: header,
      });
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getStudentsData = async (students) => {
    const dataWithRelations = await Promise.all(
      students.map(async (student) => {
        const userResponse = await fetch(`${apiURL}/api/user/load/${student.user_id}`, {
          method: 'GET',
          headers: header,
        });
        const userData = await userResponse.json();
        return { ...student, user: userData };
      })
    );
    setStudentsData(dataWithRelations);
  };

  useEffect(() => {
    if (selectedClassId) {
      getStudent(selectedClassId, schoolId);
    }
  }, [selectedClassId]);

  useEffect(() => {
    if (students) {
      getStudentsData(students);
    }
  }, [students]);

  studentsData.sort((a, b) => a.user.first_name.localeCompare(b.user.first_name));

  // Export as CSV
  const exportToCSV = () => {
    const worksheet = XLSX.utils.json_to_sheet(studentsData.map((student, index) => ({
      RollNo: index + 1,
      IDNumber: student.id_number,
      StudentName: `${student.user?.first_name} ${student.user?.middle_name} ${student.user?.last_name}`,
      Gender: student.user.gender,
      Grade: student.grade_level,
    })));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    const csvData = XLSX.write(workbook, { bookType: 'csv', type: 'array' });
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, `${userData.school.name}_Class_${selectedClassName}_students.csv`);
  };

  // Export as Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(studentsData.map((student, index) => ({
      RollNo: index + 1,
      IDNumber: student.id_number,
      StudentName: `${student.user.first_name} ${student.user.middle_name} ${student.user.last_name}`,
      Gender: student.user.gender,
      Grade: student.grade_level,
    })));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    const excelData = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelData], { type: 'application/octet-stream' });
    saveAs(blob, `${userData.school.name}_Class_${selectedClassName}_students.xlsx`);
  };

  const handleViewStudent = (student) => {
    navigate('/teacher/students/view', {state: {student}});
  }
  return (
    <div>
      <div>
        <Heading2 text="Students" />
      </div>
      <Paragraph text="List of students in your school you are assigned to" />
      <div className="flex-column gap-20">
        <div className="flex-row gap-20">
          {classes.map((c) => (
            <SecondaryButton
              key={c.class_id}
              onClick={() => {setSelectedClassId(c.class_id); setSelectedClassName(c.section_name)}}
              className={`bw-none font-w-400 ${selectedClassId === c.class_id && "back-color-blue70 color-white"}`}
            >
              {`Class ${c.section_name} Students`}
            </SecondaryButton>
          ))}
        </div>
        {selectedClassId ? (
          <div>
            {students.length > 0 ? (
              <div>
                <div className="list-container flex-row gap-20 align-start">
                  <table
                    style={{
                      borderCollapse: "collapse",
                      border: "1px solid #ddd",
                      borderRadius: "8px",
                    }}
                    className="w-80p"
                  >
                    <thead>
                      <tr
                        style={{
                          backgroundColor: "#007bff",
                          color: "white",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        <th style={{ padding: "10px", textAlign: "left", width: "5%" }}>Roll No</th>
                        <th style={{ padding: "10px", textAlign: "left", width: "15%" }}>ID Number</th>
                        <th style={{ padding: "10px", textAlign: "left", width: "45%" }}>Student Name</th>
                        <th style={{ padding: "10px", textAlign: "left", width: "45%" }}>Gender</th>
                        <th style={{ padding: "10px", textAlign: "left", width: "45%" }}>Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {studentsData.map((student, index) => (
                        <tr 
                          key={student.student_id} 
                          style={{ borderBottom: "1px solid #ddd" }}
                          className="student-row"
                          onClick={() => handleViewStudent(student)}
                          >
                          <td style={{ padding: "10px", textAlign: "left" }}>{index + 1}</td>
                          <td style={{ padding: "10px", textAlign: "left" }}>{student.id_number}</td>
                          <td style={{ padding: "10px", textAlign: "left" }}>
                            {student.user.first_name} {student.user.middle_name} {student.user.last_name}
                          </td>
                          <td style={{ padding: "10px", textAlign: "left" }}>{student.user.gender}</td>
                          <td style={{ padding: "10px", textAlign: "left" }}>{student.grade_level}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Outlet />
                </div>

                <div className="flex-row gap-10" style={{ marginTop: "20px" }}>
                  <SecondaryButton onClick={exportToCSV}>Export to CSV</SecondaryButton>
                  <SecondaryButton onClick={exportToExcel}>Export to Excel</SecondaryButton>
                </div>
              </div>
            ) : (
              <Heading5 text="No students found in this class" />
            )}
          </div>
        ) : (
          <Heading5 text="Select class to view students" />
        )}
      </div>

      <style>
        {
          `
            .student-row {
              cursor: pointer;
              background: white;
              transition: 300ms;
            }

            .student-row:hover {
              background: #f0f0f0;
            }
            .list-container {
              justify-content: stretch;
            }
          `
        }
      </style>
    </div>
  );
}

export default Students;
