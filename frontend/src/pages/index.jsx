import React, { useState } from 'react';
import ColumnWrapper from '../components/column_wrapper';
import RowWrapper from '../components/row_wrapper';
import { AiLogo, AiLogo2, AiLogo3, ProperLogo1, ProperLogo2, ProperLogo4, ProperLogo5, } from '../components/ems_logo';
import { Label, Paragraph, Heading1, Heading2, Heading3, Heading4, Heading5 } from '../components/Typography';
// import { color } from 'chart.js/helpers';
import { PrimaryButton } from "../components/buttons";
import {Link} from 'react-router-dom'
import 'normalize.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.css';
import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';

function Home() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = ()=> {
    theme==='light'?setTheme('dark'):setTheme('light');
  }

  const themeColor = theme==='dark'&&'dark_theme_color'
  
  const quickLinkThemeColor = theme==='dark'?'color-white':'color-gray10';

  const iconThemeColor = theme==='dark'?'color-white':'color-blue90';

  const em_border = 'none';
  const styles = {
    main_container: {
      // background: 'rgba(0,110,129,0.081)',
      minHeight: '100vh',
      border: em_border,
    },
    logo_styles: {
      width: '100px',
      height: '100px',
      border: '2px solid rgba(10, 200, 209, 0.31)'
    },
    logo_and_name: {
      alignItems: 'center',
      border: em_border,
      gap: '20px',
    },
    saas_name_wrapper: {
      gap: '0px',
      border: em_border,
    },
    saas_name_school: {
      background: 'rgb(0, 57, 110)',
      color: 'white',
      border: em_border,
      borderRadius: '4px',
    },
    saas_name_school_text: {
      color: 'white',
    },
    saas_name_stream: {
      border: em_border,
    },
    header_container: {
      // background: 'white',
      borderRadius: '20px',
      gap: '20px',
      alignItems: 'center',
      border: em_border,
      padding: '20px',
    },
    body_container: {
      flex: '5',
      border: em_border,
      flexDirection: 'row',
      display: 'flex',
      gap: '30px',
    },
    side_body_container: {
      width: '20%',
      padding: '20px',
      height: '400px',
      // background: '#f5f5f5',
      border: em_border,
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    main_body_container: {
      width: '80%',
      padding: '20px',
      background: '#ffffff',
      border: em_border,
      display: 'flex',
      flexDirection: 'column',
      gap: '30px',
    },
    footer_container: {
      // background: '#004d99',
      background: '#0000f9',
      color: 'white',
      padding: '10px 20px',
      textAlign: 'center',
      border: em_border,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
    },
    navigation_bar_container: {
      padding: '10px',
      gap: '20px',
      border: em_border,
      display: 'flex',
      flexDirection: 'row',
    },
    navigation_bar_texts_style: {
      fontWeight: 'normal',
      cursor: 'pointer',
      fontSize: '0.9em',
    },
    section_container: {
      marginBottom: '30px',
      // maxWidth: '',
      border: em_border,
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      position: 'relative', // For positioning text over image
    },
    feature_card: {
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '30px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      flex: '1',
    },
    testimonial_card: {
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      textAlign: 'center',
      flex: '1',
    },
    testimonial_quote: {
      fontStyle: 'italic',
    },
    testimonial_author: {
      fontWeight: 'bold',
      marginTop: '10px',
    },
    row_wrapper: {
      display: 'flex',
      flexDirection: 'row',
      gap: '20px',
      flexWrap: 'wrap',
      border: em_border,
    },
    column_wrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      border: em_border,
    },
    button_wrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      border: em_border,
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      border: 'none',
      width: '100%',
      maxWidth: '300px',
      fontSize: '1em',
    },
    header_extras_button_wrapper: {
      gap: '20px',
      justifyContent: 'end',
      border: em_border,  
    },
    main_content_container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      border: em_border,
    },
    navigation_container: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px',
      padding: '0 20px',
      border: em_border,
    },
    pricing_container: {
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    pricing_plan: {
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      flex: '1',
      marginBottom: '20px',
      justifyContent: 'space-between',
      // maxWidth: '300px', // Adjust the max width for a better look
    },
    pricing_plan_header: {
      marginBottom: '10px',
    },
    pricing_plan_price: {
      fontSize: '2em',
      fontWeight: 'bold',
    },
    pricing_plan_features: {
      marginTop: '20px',
      fontSize: '0.9em',
      lineHeight: '1.5',
      border: em_border,
    },
    pricing_plan_feature: {
      marginBottom: '5px',
    },
    pricing_section_container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      alignItems: 'center',
      marginBottom: '40px',
      border: em_border,
    },
    pricing_section_header: {
      textAlign: 'center',
    },
    pricing_plan_wrapper: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      border: em_border,
    },
    pricing_image: {
      width: '100%',
      height: 'auto',
      borderRadius: '8px',
      marginBottom: '20px',
    },
    super_admin_button: {
      backgroundColor: '#33abff',
      textDecoration: 'none',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      border: 'none',
      width: '100%',
      maxWidth: '300px',
      fontSize: '1em',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    super_admin_button_wrapper: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px',
      border: em_border,
    },
    heroImage: {
      // zIndex: '100',
      width: '100%',
      height: '500px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '20px',
      // filter: 'opacity(0.3)', // Fading effect
      // backgroundBlendMode: 'darken '
    },
    heroContent: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      color: 'white', // White text for contrast
      zIndex: 1,
    },
  };


  const handleRegisterClick = () => {
    // Get the pricing section element
    const pricingSection = document.querySelector('.pricing_section_container');

    // Scroll to the pricing section smoothly
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex-row justify-center w-100p back'
      style={{background: theme==='light'?'white': 'rgba(0,10,60)'}}>
      <ColumnWrapper style={styles.main_container} className='flex-column align-center w-98p'>
        {/* Header */}
        <RowWrapper style={styles.header_container} className='w-95p'>
          { theme === 'light'
            ?<ProperLogo5 style={{ height: '70px' }} />
            :<ProperLogo4 style={{ height: '70px' }} />
          }
          <RowWrapper style={styles.navigation_container} className='w-100p flex-row align-center justify-between'>
            <RowWrapper style={styles.navigation_bar_container}>
              <Paragraph style={styles.navigation_bar_texts_style} text='Home' className={`${themeColor}`}/>
              <Paragraph style={styles.navigation_bar_texts_style} text='About Us' className={`${themeColor}`}/>
              <Paragraph style={styles.navigation_bar_texts_style} text='Features' className={`${themeColor}`}/>
              <Paragraph style={styles.navigation_bar_texts_style} text='Register School' className={`${themeColor}`}/>
              <Paragraph style={styles.navigation_bar_texts_style} text='Contact Us' className={`${themeColor}`}/>
            </RowWrapper>

            <div className='flex-column align-center justify-center'>
              {/* <Paragraph text='Theme' className={`${themeColor} font-w-400`}/> */}
              <button 
                onClick={handleThemeChange} 
                className={`color-blue100 font-w-400 bw-1px bs-dashed 
                  ${theme==='dark'?'back-color-gray100-10':'back-color-blue100-10'}
                  flex-row align-center gap-10
                  `}>
                <FontAwesomeIcon icon={theme==='dark'?'fa-solid fa-moon':'fa-solid fa-sun'} />
                {theme}
              </button>
            </div>
            {/* <RowWrapper style={styles.header_extras_button_wrapper}> */}
              {/* <PrimaryButton 
                onClick={handleRegisterClick} 
                style={{
                  backgroundColor: '#007bff',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  border: 'none',
                  width: '100%',
                  maxWidth: '300px',
                  fontSize: '1em',
                }}>
                Register Your School
              </PrimaryButton> */}
            {/* </RowWrapper> */}
          </RowWrapper>
        </RowWrapper>
        
        {/* Hero Section */}    
        <ColumnWrapper style={styles.section_container}>
              {/* <img src="/school-manag.png" alt="School Management" style={styles.heroImage} /> */}
              <div className='w-99p h-500px back-color-gray100 br-30px p-10 flex-row align-center justify-between' 
                style={{
                  backgroundImage: theme === 'light' 
                    ? 'linear-gradient(-135deg, #0f03, #0000ff)' // Light theme gradient
                    : 'linear-gradient(-135deg, #1a1a1a, #000040)', // Dark theme gradient
                }}>                   <div /*style={styles.heroContent}*/ className='flex-column gap-20 w-40p'>
                    <Heading1 className='color-white' text='Welcome to SchoolStream' />
                    <Heading2 className='color-gray10-70' text='Your all-in-one school management system.' />
                    <Paragraph className='color-gray10-80' text='Simplify your school operations and enhance student engagement with our comprehensive suite of features.' />
                  </div>
                  <img src="/educator.svg" alt="" srcset="" className='w-40p' />
              </div>              
        </ColumnWrapper>
        
        {/* Body */}
        <RowWrapper style={styles.body_container}>
          {/* Side Body */}
          <ColumnWrapper style={styles.side_body_container} className = {`${theme==='dark'?'dark_theme_background':'light_theme_background'} p-10 br-30px`} >
            
            <div className='flex-column align-center'>
              <Heading2 text='🔗' />
              <Heading3 text='Quick Links' className = {`${quickLinkThemeColor}`} />
            </div>

            <Link to='/auth/login/student' style={{textDecoration:'none'}} className='flex-row align-center gap-10'>
              <FontAwesomeIcon icon='fa-solid fa-user-graduate' color='white'/>
              <Paragraph text='Student Portal' className = {`${quickLinkThemeColor} font-w-400`} style={{textDecoration:'none'}} />
            </Link>

            <Link to='/auth/login/teacher' style={{textDecoration:'none'}} className='flex-row align-center gap-10'>
              <FontAwesomeIcon icon='fa-solid fa-chalkboard-teacher' color='white'/>
              <Paragraph text='Teacher Login' className = {`${quickLinkThemeColor} font-w-400`} style={{textDecoration:'none'}} />
            </Link>

            <Link to='/auth/login/principal' style={{textDecoration:'none'}} className='flex-row align-center gap-10'>
              <FontAwesomeIcon icon='fa-solid fa-school' color='white'/>
              <Paragraph text='Principal Login' className = {`${quickLinkThemeColor} font-w-400`} style={{textDecoration:'none'}} />
            </Link>

            <Link to='/auth/login/admin' style={{textDecoration:'none'}} className='flex-row align-center gap-10'>
              <FontAwesomeIcon icon='fa-solid fa-user-shield' color='white'/>
              <Paragraph text='Admin Dashboard' className = {`${quickLinkThemeColor} font-w-400`} style={{textDecoration:'none'}} />
            </Link>

            <Link style={{textDecoration:'none'}} className='flex-row align-center gap-10'>
              <FontAwesomeIcon icon='fa-solid fa-headset' color='white'/>
              <Paragraph text='Support' className = {`${quickLinkThemeColor} font-w-400`} style={{textDecoration:'none'}} />
            </Link>

            <Link style={{textDecoration:'none'}} className='flex-row align-center gap-10'>
              <FontAwesomeIcon icon='fa-solid fa-question-circle' color='white'/>
              <Paragraph text='FAQs' className = {`${quickLinkThemeColor} font-w-400`} style={{textDecoration:'none'}} />
            </Link>


          </ColumnWrapper>

          {/* Main Body */}

          <ColumnWrapper style={styles.main_content_container}>
            {/* Features Section */}
            <ColumnWrapper style={styles.section_container}>
              <Heading2 text='Key Features' className = {`${themeColor}`}/>
              <RowWrapper style={styles.row_wrapper}>
                <ColumnWrapper style={styles.feature_card}>
                  {/* <FontAwesomeIcon icon='fa-solid fa-database' className={`${iconThemeColor} font-6xl`}/> */}
                  <div className={`${iconThemeColor} font-3xl`}>🧑‍🎓 📊 📚</div>
                  <div>
                    <Heading4 text='Student Information Management' className = {`${themeColor}`}/>
                    <Paragraph text='Centralize and manage student data, including demographics, attendance, grades, and more.' className = {`${themeColor}`}/>
                  </div>

                </ColumnWrapper>
                <ColumnWrapper style={styles.feature_card}>
                  {/* <FontAwesomeIcon icon='fa-solid fa-check-circle' className={`${iconThemeColor} font-3xl`}/> */}
                  <div className={`${iconThemeColor} font-3xl`}>✅ ⏰ 📅</div>
                  <div>
                    <Heading4 text='Attendance Tracking' className = {`${themeColor}`}/>
                    <Paragraph text='Track student attendance, analyze trends, and generate reports for improved accountability.' className = {`${themeColor}`}/>
                  </div>
                </ColumnWrapper>
              </RowWrapper>
              <RowWrapper style={styles.row_wrapper}>
                <ColumnWrapper style={styles.feature_card}>

                  {/* <FontAwesomeIcon icon='fa-solid fa-chart-bar' className={`${iconThemeColor} font-3xl`}/> */}
                  <div className={`${iconThemeColor} font-3xl`}>🅰️ 📊 📃</div>
                  <div>
                    <Heading4 text='Gradebook and Reporting' className = {`${themeColor}`}/>
                    <Paragraph text='Effortlessly manage grades, generate detailed reports, and provide insightful performance analysis.' className = {`${themeColor}`}/>
                  </div>

                </ColumnWrapper>
                <ColumnWrapper style={styles.feature_card}>

                  {/* <FontAwesomeIcon icon='fa-solid fa-clipboard-list' className={`${iconThemeColor} font-3xl`}/> */}
                  <div className={`${iconThemeColor} font-3xl`}>📝 🌐 ✅</div>
                  <div>
                    <Heading4 text='Online Assignments' className = {`${themeColor}`}/>
                    <Paragraph text='Create, assign, and grade assignments online, fostering student engagement and providing real-time feedback.' className = {`${themeColor}`}/>
                  </div>
                  
                </ColumnWrapper>
              </RowWrapper>
              <RowWrapper style={styles.row_wrapper}>
                <ColumnWrapper style={styles.feature_card}>

                  {/* <FontAwesomeIcon icon='fa-solid fa-envelope' className={`${iconThemeColor} font-3xl`}/> */}
                  <div className={`${iconThemeColor} font-3xl`}>👨‍👩‍👧‍👦 💬 📧</div>
                  <div>
                    <Heading4 text='Parent Communication Portal' className = {`${themeColor}`}/>
                    <Paragraph text='Connect with parents seamlessly through a dedicated portal, enabling communication, information sharing, and collaboration.' className = {`${themeColor}`}/>
                  </div>

                </ColumnWrapper>
              </RowWrapper>
            </ColumnWrapper>

            {/* Benefits Section */}
            <ColumnWrapper style={styles.section_container}>
              <Heading2 text='Why Choose SchoolStream?' className = {`${themeColor}`}/>
              <Paragraph text='SchoolStream empowers educators and administrators to streamline their workflows, enhance student outcomes, and foster a collaborative learning environment.' className = {`${themeColor}`}/>
              <RowWrapper style={styles.row_wrapper}>
                <ColumnWrapper style={{ border: em_border }}>
                  <Heading5 text='Seamless Integration' className = {`${themeColor}`}/>
                  <Paragraph text='Effortlessly integrate with existing school systems and platforms for a unified and streamlined experience.' className = {`${themeColor}`}/>
                </ColumnWrapper>
                <ColumnWrapper style={{ border: em_border }}>
                  <Heading5 text='User-Friendly Interface' className = {`${themeColor}`}/>
                  <Paragraph text='Intuitive design and easy navigation make SchoolStream accessible to users of all technical abilities.' className = {`${themeColor}`}/>
                </ColumnWrapper>
                <ColumnWrapper style={{ border: em_border }}>
                  <Heading5 text='Exceptional Support' className = {`${themeColor}`}/>
                  <Paragraph text='Our dedicated support team is here to assist you every step of the way, ensuring a smooth and successful implementation.' className = {`${themeColor}`}/>
                </ColumnWrapper>
              </RowWrapper>
            </ColumnWrapper>

            {/* Testimonials Section */}
            
            <ColumnWrapper style={styles.section_container}>
              <Heading2 text='What Our Users Say' className = {`${themeColor}`} />
              <RowWrapper style={styles.row_wrapper}>
                <ColumnWrapper style={styles.testimonial_card}>
                  <Paragraph style={styles.testimonial_quote}
                    text='"SchoolStream has revolutionized the way we manage our school. The intuitive interface and robust features have made our daily tasks much more efficient."' className = {`${themeColor}`}/>
                  <Paragraph style={styles.testimonial_author} text='John Smith, Principal, ABC High School' className = {`${themeColor}`}/>
                </ColumnWrapper>
                <ColumnWrapper style={styles.testimonial_card}>
                  <Paragraph style={styles.testimonial_quote}
                    text='"As a teacher, I appreciate the ease with which I can create and grade assignments online. The feedback system helps my students stay engaged and on track."' className = {`${themeColor}`}/>
                  <Paragraph style={styles.testimonial_author} text='Jane Doe, English Teacher, XYZ Elementary School' className = {`${themeColor}`}/>
                </ColumnWrapper>
              </RowWrapper>
            </ColumnWrapper>

            {/* Call to Action */}
            <ColumnWrapper style={styles.section_container}>
              <Paragraph text='Ready to transform your school? Get started with SchoolStream today!' className = {`${themeColor}`}/>
              {/* <RowWrapper style={styles.button_wrapper}>
                <button style={styles.button}>Register Your School</button>
              </RowWrapper> */}
            </ColumnWrapper>


            {/* Pricing Section */}
            <ColumnWrapper className="pricing_section_container" style={styles.pricing_section_container}>
              {/* <Heading2 style={styles.pricing_section_header} text='Pricing' /> */}
              {/* <img src="path/to/your/pricing-image.jpg" alt="Pricing Image" style={styles.pricing_image} /> */}
              <RowWrapper style={styles.pricing_plan_wrapper}>
                
                {/* <ColumnWrapper style={styles.pricing_plan}>
                  <ColumnWrapper style={{border: em_border}}>
                      <Heading3 text='Free' style={styles.pricing_plan_header} />
                      <Paragraph style={styles.pricing_plan_price} text='0 Birr' />
                      <ColumnWrapper style={styles.pricing_plan_features}>
                        <Paragraph style={styles.pricing_plan_feature} text='Limited Features' />
                        <Paragraph style={styles.pricing_plan_feature} text='Basic Student Information' />
                        <Paragraph style={styles.pricing_plan_feature} text='Limited Parent Communication' />
                        <Paragraph style={styles.pricing_plan_feature} text='No Support' />
                      </ColumnWrapper>                  
                  </ColumnWrapper>

                  <PrimaryButton>Start Free</PrimaryButton>
                </ColumnWrapper>

                <ColumnWrapper style={styles.pricing_plan}>
                  <ColumnWrapper style={{border: em_border}}>
                      <Heading3 text='Standard' style={styles.pricing_plan_header} />
                      <Paragraph style={styles.pricing_plan_price} text='500 Birr/Month' />
                      <ColumnWrapper style={styles.pricing_plan_features}>
                        <Paragraph style={styles.pricing_plan_feature} text='All Free Features' />
                        <Paragraph style={styles.pricing_plan_feature} text='Enhanced Student Information' />
                        <Paragraph style={styles.pricing_plan_feature} text='Expanded Parent Communication' />
                        <Paragraph style={styles.pricing_plan_feature} text='Email Support' />
                      </ColumnWrapper>
                  </ColumnWrapper>

                  <PrimaryButton>Choose Standard</PrimaryButton>
                </ColumnWrapper>


                <ColumnWrapper style={styles.pricing_plan}>

                  <ColumnWrapper style={{border: em_border}}>
                      <Heading3 text='Premium' style={styles.pricing_plan_header} />
                      <Paragraph style={styles.pricing_plan_price} text='1,000 Birr/Month' />
                      <ColumnWrapper style={styles.pricing_plan_features}>
                        <Paragraph style={styles.pricing_plan_feature} text='All Standard Features' />
                        <Paragraph style={styles.pricing_plan_feature} text='Advanced Reporting' />
                        <Paragraph style={styles.pricing_plan_feature} text='Customizable Modules' />
                        <Paragraph style={styles.pricing_plan_feature} text='Priority Support' />
                      </ColumnWrapper>
                  </ColumnWrapper>

                  <PrimaryButton>Go Premium</PrimaryButton>
                </ColumnWrapper> */}
              </RowWrapper>
            </ColumnWrapper>
            {/* Super Admin Dashboard Button (for development) */}
            <RowWrapper style={styles.super_admin_button_wrapper}>
              <Link className='gap-10' to="/auth/login" style={styles.super_admin_button}>
                Login
              <FontAwesomeIcon icon="fa-solid fa-arrow-right" style={styles.super_admin_icon} />
              </Link>
            </RowWrapper>
          </ColumnWrapper>
          
        </RowWrapper>
        

        {/* Footer */}
        <div className='w-100p'>
          <RowWrapper 
            style={{
              // background: '#004d99',
              background: '#0000f9',
              color: 'white',
              padding: '10px 20px',
              textAlign: 'center',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px'
            
            }} 
            className=''>
              <ProperLogo4 style={{width: '80px'}}/>
              <Paragraph className='font-xs font-w-400' text='© 2024 SchoolStream. All rights reserved.' style={{ color: 'white' }} />
              <Paragraph className='font-xs font-w-400' text='Contact Us' style={{ color: 'white' }} />
              <Paragraph className='font-xs font-w-400' text='About Us' style={{ color: 'white' }} />
              <Link>
                <Paragraph className='font-xs font-w-400' text='Privacy Policy | Terms of Service' style={{ color: 'white' }} />
              </Link>
          </RowWrapper>
        </div>
        
      </ColumnWrapper>
    </div>
  );
}

export default Home;