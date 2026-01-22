import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Heading3, Heading4, Paragraph, Label } from "../../../components/Typography";
import { SecondaryButton } from "../../../components/buttons";
import Skeleton from "../../../components/skeleton";
import '../../../styles/calendar_style.css';

function Home() {

  const apiURL = import.meta.env.VITE_API_URL;

  const token = localStorage.getItem('jwt');
  const header = {'authorization' : `Bearer ${token}`};
    
  const uname = localStorage.getItem('username');
  const userData = JSON.parse(localStorage.getItem('data'));
  const schoolId = userData?.school?.school_id;

  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchCounts = async () => {
    setLoading(true);
    try {
      const [studentRes, teacherRes] = await Promise.all([
        fetch(`${apiURL}/api/student/load_s/${schoolId}`, { headers: header }),
        fetch(`${apiURL}/api/teacher/load_s/${schoolId}`, { headers: header }),
      ]);
      const studentData = await studentRes.json();
      const teacherData = await teacherRes.json();
      
      setStudentCount(studentData.length || 0);
      setTeacherCount(teacherData.length || 0);
    } catch (error) {
      console.error('Error fetching dashboard counts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (schoolId) {
      fetchCounts();
    }
  }, [schoolId]);

  return (
    <div>
      <div id="0Row" className="flex-row gap-20 p-10 back-color-green10-10 mb-10 br-15px shadow-sm bw-1px bs-solid bc-green50-50 justify-center align-center">
        <img src={userData?.school?.school_logo} alt={(userData?.school?.name)} className='w-40px h-40px p-10' />
        <Heading4 text = { userData?.school?.name || 'School Name' } />
      </div>
      <div id="1stRow" className="flex-row gap-20">
        <div id="overview1" className="p-10 back-color-white br-5px w-100p h-100p shadow-xl">
          <Paragraph text='Data Overview' />
          <div id="data-overview" className="flex-row gap-5 p-5">
            <div id="data-overview1" className="p-10 flex-grow-1 min-w-100px back-color-red100-10 br-5px bw-1px bs-solid bc-red100-40 w-100p h-100p shadow-lg">
              <Label text='Students' className="font-w-400" />
              {loading ? <Skeleton width="50px" height="30px" /> : <Heading3 text={studentCount.toString()} />}
            </div>
            <div id="data-overview1" className="p-10 flex-grow-1 min-w-100px back-color-orange100-10 br-5px bw-1px bs-solid bc-orange100-40 w-100p h-100p shadow-lg">
              <Label text='Teachers' className="font-w-400" />
              {loading ? <Skeleton width="50px" height="30px" /> : <Heading3 text={teacherCount.toString()} />}
            </div>
          </div>
          <div id="data-overview2" className="flex-row gap-10 p-5">
            <div id="quick-actions">
              <Label text='Quick Actions' />
              <div id="actions" className="flex-column gap-5">
                <SecondaryButton className='font-w-400 font-sm back-color-blueGreen100-10 bc-blueGreen100 color-blueGreen100 flex-row gap-10' > <FontAwesomeIcon icon='fa-solid fa-plus'/>Add Student</SecondaryButton>
              </div>
            </div>
            <div id="calendar">
              <Calendar />
            </div>
          </div>
        </div>
        <div id="overview2" className="p-10 back-color-white br-5px w-100p h-100p shadow-xl">Overview Pages</div>
        <div id="overview3" className="p-10 back-color-white br-5px w-100p h-100p shadow-xl">Overview Pages</div>
      </div>
    </div> 
  );
}

export default Home;
