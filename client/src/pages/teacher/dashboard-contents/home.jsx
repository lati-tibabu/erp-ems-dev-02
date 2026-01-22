import React, { useEffect, useState } from "react";
import { Heading3, Heading4, Paragraph } from "../../../components/Typography";
import Skeleton from "../../../components/skeleton";

function Home() {
  const token = localStorage.getItem("jwt");
  const header = { "Authorization": `Bearer ${token}` };

  const userData = JSON.parse(localStorage.getItem("data"));
  const teacherId = userData.teacher.teacher_id;
  const apiURL = import.meta.env.VITE_API_URL;

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCourses = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiURL}/api/teacher-course/load_course/${teacherId}/courses`, {
        method: "GET",
        headers: header,
      });
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);
  
  return (
  <div>
    <div className="flex-column justify-center align-center p-20 back-color-white shadow-xs br-10px mb-10">
      <Heading3 text={userData.school.name} />
    </div>
    <div className="flex-row p-20 back-color-white shadow-xs br-10px justify-between">
      <div>
        <Heading4 text='Assigned Courses' />
        <div className="mt-10">
          {loading ? (
            <div className="flex-column gap-10">
              <Skeleton width="200px" height="20px" />
              <Skeleton width="220px" height="20px" />
              <Skeleton width="180px" height="20px" />
            </div>
          ) : courses.length > 0 ? (
            courses.map((course) => (
              <div key={course.course_id} className="flex-row gap-10 mb-10 align-center">
                <Paragraph text={`${course.course_name} - Grade ${course.course_grade}`} />
                <Paragraph text='Active' className='flex-row p-5 align-center justify-center bw-1px bs-solid bc-green80 br-5px back-color-green80-10 font-xs' />
              </div>
            ))
          ) : (
            <Paragraph text="No courses assigned yet." />
          )}
        </div>
      </div>

      <div>
        <div className="flex-column p-10 align-start bw-1px bs-solid bc-gray80 br-5px back-color-gray80-10">
          <Paragraph text={`Academic Year: ${new Date().getFullYear()}/${new Date().getFullYear() + 1}`} />
          <Paragraph text={`Month: ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date())}`} />
          <Paragraph text="Status: Online" />
        </div>
      </div>

    </div>
  </div>
);
}

export default Home;
