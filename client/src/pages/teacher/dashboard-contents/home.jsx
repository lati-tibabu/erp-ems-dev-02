import React from "react";
import { Heading3, Heading4, Paragraph } from "../../../components/Typography";

function Home() {
  const token = localStorage.getItem("jwt");
  const header = { "Authorization": `Bearer ${token}` };

  const userData = JSON.parse(localStorage.getItem("data"));
  // console.log(userData);
  
  return (
  <div>
    <div className="flex-column justify-center align-center p-20 back-color-white shadow-xs br-10px mb-10">
      <Heading3 text={userData.school.name} />
    </div>
    <div className="flex-row p-20 back-color-white shadow-xs br-10px justify-between">
      <div>
        <Heading4 text='Up Coming Classes' />
        <div>
          <div className="flex-row gap-10 mb-10 align-center">
            <Paragraph text='Class 1 B -  Grade 1 English' />
            <Paragraph text='8:30AM' className='flex-row p-5 align-center justify-center bw-1px bs-solid bc-orange80 br-5px back-color-orange80-10' />
          </div>
          <div className="flex-row gap-10 mb-10 align-center">
            <Paragraph text='Class 2 B -  Grade 2 English' />
            <Paragraph text='8:30AM' className='flex-row p-5 align-center justify-center bw-1px bs-solid bc-orange80 br-5px back-color-orange80-10' />
          </div>
          <div className="flex-row gap-10 mb-10 align-center">
            <Paragraph text='Class 3 B -  Grade 3 English' />
            <Paragraph text='8:30AM' className='flex-row p-5 align-center justify-center bw-1px bs-solid bc-orange80 br-5px back-color-orange80-10' />
          </div>
          <div className="flex-row gap-10 mb-10 align-center">
            <Paragraph text='Class 4 B -  Grade 4 English' />
            <Paragraph text='8:30AM' className='flex-row p-5 align-center justify-center bw-1px bs-solid bc-orange80 br-5px back-color-orange80-10' />
          </div>
        </div>
      </div>

      <div>
        <div className="flex-column p-10 align-start bw-1px bs-solid bc-gray80 br-5px back-color-gray80-10">
          <Paragraph text="Academic Year: 2017/2024-25" />
          <Paragraph text="Month: Fulbaana (September)" />
          <Paragraph text="Week: 1st" />
        </div>
      </div>

    </div>
  </div>
  
);

}

export default Home;
