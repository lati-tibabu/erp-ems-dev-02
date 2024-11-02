import React, { useEffect, useState } from 'react';

import { login } from '../../../store';
import Calendar from 'react-calendar';
import { Heading3, Heading4 ,Paragraph,Label } from "../../../components/Typography";
import { SecondaryButton } from "../../../components/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import '../../../styles/calendar_style.css';
import { useDispatch } from 'react-redux';
function Home() {

  const apiURL = import.meta.env.VITE_API_URL;

  const token = localStorage.getItem('jwt');
  const header = {'authorization' : `Bearer ${token}`};
    
  const uname = localStorage.getItem('username');
  const userData = JSON.parse(localStorage.getItem('data'));

  console.log(userData);

  // const [userData, setUserData] = useState({user: {},principal: {}, school: {}})

  // const getUserInfo = async (u) => {
  //   try {
  //     const response = await fetch(`${apiURL}/api/user/loadu/${u}`, {
  //       method: 'GET',
  //       headers: header,
  //     })
  //     const data = await response.json();
  //     // setUserData({user: data});
  //     // setUserData(prev => ({...prev, user: data}));

  //     try{
  //       const response2 = await fetch(`${apiURL}/api/principal/loadu/${data.user_id}`, {
  //         method: 'GET',
  //         headers: header,
  //       });

  //       const data2 = await response2.json();
  //       // setUserData(prev => ({...prev, principal: data2}));
  //       try{
  //         const response3 = await fetch(`${apiURL}/api/school/load/${data2.school_id}`, {
  //           method: 'GET',
  //           headers: header,
  //         });
  //         const data3 = await response3.json();
  //         // setUserData(prev => ({...prev, school: data3}));
  //         // console.log('new data');
  //         setUserData({user: data, principal: data2, school: data3})
  //       } catch(err3) {
  //         console.error('Error getting school info', err3)
  //       }
  //     } catch (err2){
  //       console.error('Error getting principal info', err2);
  //     }
  //   } catch(err) {
  //     console.error("Error getting user information", err);
  //   }
  // }

  // useEffect(()=>{
  //   getUserInfo(uname)
  // },[uname]);

  // // console.log('Data',userData.school.name);
  // console.log(userData);

  return ( 
    <div>
      {/* <Heading3 text='Home' /> */}
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
              <Heading3 text='1300' />
            </div>
            <div id="data-overview1" className="p-10 flex-grow-1 min-w-100px back-color-orange100-10 br-5px bw-1px bs-solid bc-orange100-40 w-100p h-100p shadow-lg">
              <Label text='Teachers' className="font-w-400" />
              <Heading3 text='33' />
            </div>
            <div id="data-overview1" className="p-10 flex-grow-1 min-w-100px back-color-green100-10 br-5px bw-1px bs-solid bc-green100-40 w-100p h-100p shadow-lg">
              <Label text='Departments' className="font-w-400" />
              <Heading3 text='14' />
            </div>
            <div id="data-overview1" className="p-10 flex-grow-1 min-w-100px back-color-purple100-10 br-5px bw-1px bs-solid bc-purple100-40 w-100p h-100p shadow-lg">
              <Label text='Clubs' className="font-w-400" />
              <Heading3 text='20' />
            </div>
          
          </div>
          <div id="data-overview2" className="flex-row gap-10 p-5">
            <div id="quick-actions">
              <Label text='Quick Actions' />
              <div id="actions" className="flex-column gap-5">
                <SecondaryButton className='font-w-400 font-sm back-color-blueGreen100-10 bc-blueGreen100 color-blueGreen100 flex-row gap-10' > <FontAwesomeIcon icon='fa-solid fa-plus'/>Add Student</SecondaryButton>
                <SecondaryButton className='font-w-400 font-sm back-color-blueGreen100-10 bc-blueGreen100 color-blueGreen100 flex-row gap-10' > <FontAwesomeIcon icon='fa-solid fa-plus'/>Add Deparment</SecondaryButton>
                <SecondaryButton className='font-w-400 font-sm back-color-blueGreen100-10 bc-blueGreen100 color-blueGreen100 flex-row gap-10' > <FontAwesomeIcon icon='fa-solid fa-plus'/>Add Club</SecondaryButton>
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
