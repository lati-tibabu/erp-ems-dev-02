import React, { useState, useEffect } from "react";
import { Heading3, Heading4 } from '../../../components/Typography'
import Skeleton from "../../../components/skeleton";

function MyClass() {
  const apiURL = import.meta.env.VITE_API_URL;

  const token = localStorage.getItem('jwt');
  const header = {'authorization': `Bearer ${token}`};

  const {student} = JSON.parse(localStorage.getItem('data')); 

  const [myClass, setMyClass] = useState({
    class_grade: '',
    class_name: '',
    section_name: '',
  });
  const [loading, setLoading] = useState(true);

  const getMyClass = async (classId) => {
    setLoading(true);
    try {
      const response = await fetch(`${apiURL}/api/class/load/${classId}`, {
        method: 'GET',
        headers: header,
      });
      const data = await response.json();
      setMyClass(data);
    } catch(error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMyClass(student.class_id);
  }, [student]);

  return (
    <>
      <div className='m-20 p-10 br-15px back-color-white'>
        <Heading3 text='My Class' />

        <div className='mt-4'>
          {loading ? (
            <div className="flex-column gap-10">
              <Skeleton width="150px" height="25px" />
              <Skeleton width="120px" height="25px" />
              <Skeleton width="180px" height="25px" />
            </div>
          ) : (
            <>
              <Heading4 text={`Grade: ${myClass.class_grade || 'N/A'}`} />
              <Heading4 text={`Class: ${myClass.class_name || 'N/A'}`} />
              <Heading4 text={`Section: ${myClass.section_name || 'N/A'}`} />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default MyClass;
