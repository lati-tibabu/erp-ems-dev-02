import React from "react";
import { Heading3,Paragraph,Label } from "../../../components/Typography";
import { SecondaryButton } from "../../../components/buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Home() {
  return ( 
    <div>
      {/* <Heading3 text='Home' /> */}
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
          </div>
        </div>
        <div id="overview2" className="p-10 back-color-white br-5px w-100p h-100p shadow-xl">Overview Pages</div>
        <div id="overview3" className="p-10 back-color-white br-5px w-100p h-100p shadow-xl">Overview Pages</div>
      </div>
    </div> 
  );
}

export default Home;
