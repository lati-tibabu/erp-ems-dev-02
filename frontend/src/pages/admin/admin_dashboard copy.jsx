import React, { useState } from 'react';
import RowWrapper from '../../components/row_wrapper';
import ColumnWrapper from '../../components/column_wrapper';
import { AiLogo } from '../../components/ems_logo';
import { Heading3,Heading6, Label } from '../../components/Typography';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PrimaryButton } from '../../components/buttons';
import Home from './dashboard-contents/home';
import School from './dashboard-contents/school';
import Users from './dashboard-contents/users';
import Reports from './dashboard-contents/report';
import Profile from './dashboard-contents/profile';
import Settings from './dashboard-contents/setting';
import Help from './dashboard-contents/help';
import Logout from './dashboard-contents/logout';

library.add(fas);


// console.log(visibleNav)
function AdminDashboard() {
const [visibleNav,setVisibleNav] = useState(0);
const [mainContent,setMainContent] = useState(<Home />);

  return (
    <div style={{
      // background:'#F0FBFF'
      background:'#09f4',
      padding: '5px'
      }}>
      {/* Header */}
      <RowWrapper style={{
        background:'#F0FBFF',
        border:'none',
        boxShadow:'0 4px 8px 0 rgba(0, 170, 230, 0.2)',
        borderRadius: '7px '
      }}>
        <AiLogo style={{ width: '80px' }} />
        <RowWrapper style={{ width: '100%',border:'none'}}>
          <RowWrapper style={{ width: '100%',border:'none' }}>
            <Heading3 text="Admin Dashboard" style={{ fontSize: '2rem' }} />
          </RowWrapper>
          <RowWrapper style={{ width: '100%',border:'none'}}>
            <Label text="Welcome to the Admin Dashboard. Here you can manage all the activities related to the EMS." />
          </RowWrapper>
          <RowWrapper style={{
            width: '100%',
            gap: '10px',
            justifyContent: 'end',
            alignItems: 'center',
            border:'none'
          }}>
            <FontAwesomeIcon icon="fa-solid fa-message" color='#0088ff' />
            <FontAwesomeIcon icon="fa-solid fa-bell" />
            <FontAwesomeIcon icon="fa-solid fa-user" style={{
              fontSize: '1.5rem',
              background: '#0088ff',
              padding: '8px',
              borderRadius: '50%',
              color: 'white',
              width: '30px',
              height: '30px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }} />
          </RowWrapper>
        </RowWrapper>
      </RowWrapper>
      {/* Main Content Part */}
      <RowWrapper style={{ gap: '10px ',border:'none' }}>
        <ColumnWrapper style={{
          // width: '15%',
          minHeight: '80vh',
          boxShadow: '3px 3px 5px 0px #0088ff23',
          borderRadius: '10px',
          gap: '20px',
          background: '#fff',
          border: 'none'
        }}>
          <RowWrapper
          style={{
            justifyContent: 'end',
            border: 'none'
            // cursor: 'pointer',
          }}
          >
            <ColumnWrapper 
            onClick={()=>{visibleNav == 0?setVisibleNav(1):setVisibleNav(0)}}
            style={{
              cursor:'pointer',
              border: 'none'
            }}
            >
            <FontAwesomeIcon icon={visibleNav==0?"fa-solid fa-arrow-left":"fa-solid fa-arrow-right"} color='#383861'/>
            </ColumnWrapper>
            
          </RowWrapper>
          <RowWrapper style={{
            gap: '10px',
            justifyContent: 'start',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
            border: 'none',
            // background:'#F0FBFF',
            boxShadow: '3px 3px 5px 0px #0088ff23'
          }}
          
          onClick={()=>{setMainContent(<Home />)}}>
            <FontAwesomeIcon icon="fa-solid fa-house" color='#383861' />
            <Label text={visibleNav==0?'Home':''} style={{ color: '#383861', fontWeight: '700' }} />
          </RowWrapper>
          
          <RowWrapper style={{
            gap: '10px',
            justifyContent: 'start',
            alignItems: 'center',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '5px',
            boxShadow: '3px 3px 5px 0px #0088ff23',
            border:'none'
          }}
          onClick={()=>{setMainContent(<School />)}}>
          
          
            <FontAwesomeIcon icon="fa-solid fa-school" color='#383861' />
            <Label text={visibleNav==0?'Schools':''} style={{ color: '#383861', fontWeight: '700' }} />
          </RowWrapper>

          <RowWrapper style={{
            gap: '10px',
            justifyContent: 'start',
            alignItems: 'center',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '5px',
            boxShadow: '3px 3px 5px 0px #0088ff23',
            border:'none'
          }}
          onClick={() => setMainContent(<Users />)}
          >
            <FontAwesomeIcon icon="fa-solid fa-users" color='#383861' />
            <Label text={visibleNav==0?'Users':''} style={{ color: '#383861', fontWeight: '700' }} />
          </RowWrapper>

          <RowWrapper style={{
            gap: '10px',
            justifyContent: 'start',
            alignItems: 'center',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '5px',
            boxShadow: '3px 3px 5px 0px #0088ff23',
            border:'none'
          }}
          onClick={() => setMainContent(<Reports />)}
          >
            <FontAwesomeIcon icon="fa-solid fa-file-alt" color='#383861' />
            <Label text={visibleNav==0?'Reports':''} style={{ color: '#383861', fontWeight: '700' }} />
          </RowWrapper>

          <RowWrapper style={{
            gap: '10px',
            justifyContent: 'start',
            alignItems: 'center',
            padding: '10px',
            cursor: 'pointer',
            boxShadow: '3px 3px 5px 0px #0088ff23',
            borderRadius: '5px',
            border:'none'
          }}
          onClick={() => setMainContent(<Profile />)}
          >
            <FontAwesomeIcon icon="fa-solid fa-user" color='#383861' />
            <Label text={visibleNav==0?'Profile':''} style={{ color: '#383861', fontWeight: '700' }} />
          </RowWrapper>

          <RowWrapper style={{
            gap: '10px',
            justifyContent: 'start',
            alignItems: 'center',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '5px',
            boxShadow: '3px 3px 5px 0px #0088ff23',
            border:'none',
          }}
          onClick={() => setMainContent(<Settings />)}
          
          >
            <FontAwesomeIcon icon="fa-solid fa-cog" color='#383861' />
            <Label text={visibleNav==0?'Settings':''} style={{ color: '#383861', fontWeight: '700' }} />
          </RowWrapper>

          <RowWrapper style={{
            gap: '10px',
            justifyContent: 'start',
            alignItems: 'center',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '5px',
            boxShadow: '3px 3px 5px 0px #0088ff23',
            border:'none'
          }}
          onClick={() => setMainContent(<Help />)}
          
          >
            <FontAwesomeIcon icon="fa-solid fa-question" color='#383861' />
            <Label text={visibleNav==0?'Help':''} style={{ color: '#383861', fontWeight: '700' }} />
          </RowWrapper>

          <RowWrapper style={{
            gap: '10px',
            justifyContent: 'start',
            alignItems: 'center',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '5px',
            boxShadow: '3px 3px 5px 0px #0088ff23',
            border:'none'
          }}
          onClick={() => setMainContent(<Logout />)}
        
          >
            <FontAwesomeIcon icon="fa-solid fa-sign-out-alt" color='#383861' />
            <Label text={visibleNav==0?'Logout':''} style={{ color: '#383861', fontWeight: '700' }} />
          </RowWrapper>
        </ColumnWrapper>

        <ColumnWrapper style={{
           width: '100%',
           border:'none',
           background: 'white',
           borderRadius: '10px',
           padding: '20px',
           gap: '10px',
          //  background: 'red',
           boxShadow: '3px 3px 5px 0px #0088ff23',
           height: '76.6vh',
           overflowY: 'scroll'
        }}>
          {/* Additional content for the dashboard will go here */}
         {/* <div>Hey</div> */}
         {mainContent}
        </ColumnWrapper>
      </RowWrapper>
    </div>
  );
}

export default AdminDashboard;
