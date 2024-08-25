import React from 'react';

import ColumnWrapper from '../../../components/column_wrapper';
import { Heading3,Heading6, Label } from '../../../components/Typography';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SecondaryButton } from '../../../components/buttons';
import RowWrapper from '../../../components/row_wrapper';
import {useNavigate} from 'react-router-dom';
import '../../../styles/admin-dashboard/admin-dashboard-home.css';

library.add(fas);

function Home() {

  const navigate = useNavigate();

  const handleAddSchool = () => {

    // console.log('adding school button');
    navigate('/admin/school/add');
  }

  const handleAddPrincipal = () => {
    navigate('/admin/users/overview/principal/create/user')
  }
  const styles = {
    adding_button: {
        gap: '10px',
        justifyContent: 'start',
        alignItems: 'center',
        // padding: '10px',
        cursor: 'pointer',
        borderRadius: '5px',
        border: 'none',
        // width: '160px',
        fontWeight: 'lighter',
        fontSize: '0.8rem',
    },
    adding_button_text: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
    data_overview_card_style: { 
      width: '20%',
      height: '100px',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '3px 3px 5px 0px #0088ff23',
      borderRadius: '10px',
      background: '#0088ff',
      gap: '20px'
    },
    data_overview_card_container_styles: {
      gap: '10px',
      justifyContent: 'space-around',
      alignItems: 'center',
      // padding: '10px',
      borderRadius: '5px',
      background: 'white',
      padding: '40px 20px',
      border: 'none',
    },
    quick_action_container_style: {
      gap: '10px',
      justifyContent: 'center',
      alignItems: 'stretch',
      padding: '10px',
      cursor: 'pointer',
      borderRadius: '5px',
      // background: 'red',
      border: 'none',

    },
    main_content_part_two: {
      background: 'white',
      border: 'none',
      justifyContent: 'space-between',
      marginTop: '20px',
      padding: '10px',
      borderRadius: '20px',
    },
    quick_action_button_container_card_style:{
      background: 'rgba(49,182,255,0.07)',
      alignItems: 'center',
      borderRadius: '23px',
      padding: '10px',
    }
  }
  return (
    <div>
          <Heading3 text='Data Overview'/>

          <Label text='The followings are the overview of the entire data' />

          <RowWrapper
          style={styles.data_overview_card_container_styles}>

            {
              [
                {background: '#0088ff', number: '390', text: 'Schools'},
                {background: '#f09281', number: '1200+', text: 'Students'},
                {background: '#2E8B57', number: '500+', text: 'Teachers'},
                {background: '#DAA520', number: '200+', text: 'Parents'},
              ].map((cardinfo) => (
                <ColumnWrapper style={{background: cardinfo.background}} className='data_overview_card_style'>
                    <Heading3 text={cardinfo.number} style={{ color: 'white',fontWeight:'bold' }} />
                    <Label text={cardinfo.text} style={{ color: 'white',fontWeight:'bold' }} />
                </ColumnWrapper>
              ))
            }

          </RowWrapper>
          <RowWrapper style={styles.main_content_part_two}>
            <ColumnWrapper style={styles.quick_action_button_container_card_style}>
            <Heading6 text="Quick Actions"/>
              <ColumnWrapper style={styles.quick_action_container_style}>
                
                <SecondaryButton onClick={handleAddSchool}>
                    <RowWrapper style={styles.adding_button}>
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                        Add School
                    </RowWrapper>
                </SecondaryButton>

                <SecondaryButton onClick={handleAddPrincipal}>
                    <RowWrapper style={styles.adding_button}>
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                        Add Principal
                    </RowWrapper>
                </SecondaryButton>

              </ColumnWrapper>
            </ColumnWrapper>
            
            <ColumnWrapper>
            <Heading6 text="Recent Activities"/>
            <Label text="Recent Activities"/>
            <Label text="Recent Activities"/>
            {/* <Label text={localStorage.getItem('username')} /> */}
            </ColumnWrapper>
          </RowWrapper>
        </div> 
  )
}

export default Home