import React from "react";
import { Heading3, Heading4, Heading5, Heading6, Paragraph } from "../../../components/Typography";

function Home() {
  const token = localStorage.getItem("jwt");
  const header = { "Authorization": `Bearer ${token}` };

  const userData = JSON.parse(localStorage.getItem("data"));

  return (
    <div>
      <div className="flex-column justify-center align-center p-20 back-color-white shadow-xs br-10px mb-10">
        <Heading3 text={userData.school.name} />
      </div>
      <div className="flex-row p-20 back-color-white shadow-xs br-10px justify-between">
        <div className="flex-row bw-2px bs-solid bc-gray80 p-10 br-10px">
          <div>
            <img src={userData.user.profile_photo} alt="" className="w-200px h-200px" />
          </div>
          <div>
            <Heading4 text='Profile' />
            <div>
              <div className="flex-row gap-5 p-10 align-center">
                <Heading6 text='Full Name: ' />
                <Heading6 text={`${userData.user.first_name} ${userData.user.middle_name} ${userData.user.last_name}`} className='font-w-100'/>
              </div>
              <div className="flex-row gap-5 p-10 align-center">
                <Heading6 text='Gender: ' />
                <Heading6 text={userData.user.gender} className='font-w-100'/>
              </div>
              <div className="flex-row gap-5 p-10 align-center">
                <Heading6 text='Date of Birth: ' />
                <Heading6 text={userData.user.date_of_birth} className='font-w-100'/>
              </div>
              <div className="flex-row gap-5 p-10 align-center">
                <Heading6 text='ID Number: ' />
                <Heading6 text={userData.student.id_number} className='font-w-100'/>
              </div>
              <div className="flex-row gap-5 p-10 align-center">
                <Heading6 text='Class: '/>
                <Paragraph text={`Class ${userData.class.class_grade} Section ${userData.class.class_name}`} className='font-w-100'/>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex-column p-10 align-start bw-1px bs-solid bc-gray80 br-5px back-color-gray80-10">
            <Paragraph text="Academic Year: 2023/2024" />
            <Paragraph text="Month: Fulbaana (September)" />
            <Paragraph text="Week: 1st" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
