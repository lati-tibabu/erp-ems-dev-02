import React from 'react';
import ColumnWrapper from '../components/column_wrapper';
import RowWrapper from '../components/row_wrapper';
import { AiLogo, AiLogo2, AiLogo3 } from '../components/ems_logo';
import { Label, Paragraph, Heading1, Heading2, Heading3, Heading4, Heading5 } from '../components/Typography';
// import { color } from 'chart.js/helpers';
import { PrimaryButton } from "../components/buttons";
import {Link} from 'react-router-dom'
import 'normalize.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Home() {
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
      background: 'white',
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
      background: '#f5f5f5',
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
      background: '#004d99',
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
      // maxWidth: '100vh',
      border: em_border,
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    },
    feature_card: {
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
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
    <>
      <ColumnWrapper style={styles.main_container}>
        {/* Header */}
        <RowWrapper style={styles.header_container}>
          
          {/* <RowWrapper style={styles.logo_and_name}>
            <RowWrapper style={styles.saas_name_wrapper}>
              <RowWrapper style={styles.saas_name_school}>
                <Heading3 text='School' style={styles.saas_name_school_text} />
              </RowWrapper>
              <RowWrapper style={styles.saas_name_stream}>
                <Heading3 text='Stream' />
              </RowWrapper>
            </RowWrapper>
          </RowWrapper> */}

          <AiLogo2 style={{ width: '50px', height: '50px' }} />
          <RowWrapper style={styles.navigation_container}>
            <RowWrapper style={styles.navigation_bar_container}>
              <Paragraph style={styles.navigation_bar_texts_style} text='Home' />
              <Paragraph style={styles.navigation_bar_texts_style} text='About Us' />
              <Paragraph style={styles.navigation_bar_texts_style} text='Features' />
              <Paragraph style={styles.navigation_bar_texts_style} text='Register School' />
              <Paragraph style={styles.navigation_bar_texts_style} text='Contact Us' />
            </RowWrapper>
            <RowWrapper style={styles.header_extras_button_wrapper}>
              <PrimaryButton 
                onClick={handleRegisterClick} 
                style={{
                  // backgroundColor: '#007bff',
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
              </PrimaryButton>
            </RowWrapper>
          </RowWrapper>
        </RowWrapper>

        {/* Body */}
        <RowWrapper style={styles.body_container}>
          {/* Side Body */}
          <ColumnWrapper style={styles.side_body_container}>
            <Heading3 text='Quick Links' />
            <Paragraph text='Student Portal' />
            <Paragraph text='Teacher Login' />
            <Paragraph text='Admin Dashboard' />
            <Paragraph text='Support' />
            <Paragraph text='FAQs' />
          </ColumnWrapper>

          {/* Main Body */}
          <ColumnWrapper style={styles.main_content_container}>
            {/* Hero Section */}
            <ColumnWrapper style={styles.section_container}>
              <Heading1 text='Welcome to SchoolStream' />
              <Heading2 text='Your all-in-one school management system.' />
              <Paragraph text='SchoolStream is your all-in-one school management system designed to make administration seamless and efficient.' />
              <Paragraph text='Simplify your school operations and enhance student engagement with our comprehensive suite of features.' />
            </ColumnWrapper>

            {/* Features Section */}
            <ColumnWrapper style={styles.section_container}>
              <Heading2 text='Key Features' />
              <RowWrapper style={styles.row_wrapper}>
                <ColumnWrapper style={styles.feature_card}>
                  <Heading4 text='Student Information Management' />
                  <Paragraph text='Centralize and manage student data, including demographics, attendance, grades, and more.' />
                </ColumnWrapper>
                <ColumnWrapper style={styles.feature_card}>
                  <Heading4 text='Attendance Tracking' />
                  <Paragraph text='Track student attendance, analyze trends, and generate reports for improved accountability.' />
                </ColumnWrapper>
              </RowWrapper>
              <RowWrapper style={styles.row_wrapper}>
                <ColumnWrapper style={styles.feature_card}>
                  <Heading4 text='Gradebook and Reporting' />
                  <Paragraph text='Effortlessly manage grades, generate detailed reports, and provide insightful performance analysis.' />
                </ColumnWrapper>
                <ColumnWrapper style={styles.feature_card}>
                  <Heading4 text='Online Assignments' />
                  <Paragraph text='Create, assign, and grade assignments online, fostering student engagement and providing real-time feedback.' />
                </ColumnWrapper>
              </RowWrapper>
              <RowWrapper style={styles.row_wrapper}>
                <ColumnWrapper style={styles.feature_card}>
                  <Heading4 text='Parent Communication Portal' />
                  <Paragraph text='Connect with parents seamlessly through a dedicated portal, enabling communication, information sharing, and collaboration.' />
                </ColumnWrapper>
              </RowWrapper>
            </ColumnWrapper>

            {/* Benefits Section */}
            <ColumnWrapper style={styles.section_container}>
              <Heading2 text='Why Choose SchoolStream?' />
              <Paragraph text='SchoolStream empowers educators and administrators to streamline their workflows, enhance student outcomes, and foster a collaborative learning environment.' />
              <RowWrapper style={styles.row_wrapper}>
                <ColumnWrapper style={{ border: em_border }}>
                  <Heading5 text='Seamless Integration' />
                  <Paragraph text='Effortlessly integrate with existing school systems and platforms for a unified and streamlined experience.' />
                </ColumnWrapper>
                <ColumnWrapper style={{ border: em_border }}>
                  <Heading5 text='User-Friendly Interface' />
                  <Paragraph text='Intuitive design and easy navigation make SchoolStream accessible to users of all technical abilities.' />
                </ColumnWrapper>
                <ColumnWrapper style={{ border: em_border }}>
                  <Heading5 text='Exceptional Support' />
                  <Paragraph text='Our dedicated support team is here to assist you every step of the way, ensuring a smooth and successful implementation.' />
                </ColumnWrapper>
              </RowWrapper>
            </ColumnWrapper>

            {/* Testimonials Section */}
            <ColumnWrapper style={styles.section_container}>
              <Heading2 text='What Our Users Say' />
              <RowWrapper style={styles.row_wrapper}>
                <ColumnWrapper style={styles.testimonial_card}>
                  <Paragraph style={styles.testimonial_quote}
                    text='"SchoolStream has revolutionized the way we manage our school. The intuitive interface and robust features have made our daily tasks much more efficient."' />
                  <Paragraph style={styles.testimonial_author} text='John Smith, Principal, ABC High School' />
                </ColumnWrapper>
                <ColumnWrapper style={styles.testimonial_card}>
                  <Paragraph style={styles.testimonial_quote}
                    text='"As a teacher, I appreciate the ease with which I can create and grade assignments online. The feedback system helps my students stay engaged and on track."' />
                  <Paragraph style={styles.testimonial_author} text='Jane Doe, English Teacher, XYZ Elementary School' />
                </ColumnWrapper>
              </RowWrapper>
            </ColumnWrapper>

            {/* Call to Action */}
            <ColumnWrapper style={styles.section_container}>
              <Paragraph text='Ready to transform your school? Get started with SchoolStream today!' />
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
        <RowWrapper style={styles.footer_container}>
          <Paragraph text='© 2024 SchoolStream. All rights reserved.' style={{ color: 'white' }} />
          <Paragraph text='Contact Us' style={{ color: 'white' }} />
          <Paragraph text='About Us' style={{ color: 'white' }} />
          <Paragraph text='Privacy Policy | Terms of Service' style={{ color: 'white' }} />
        </RowWrapper>
      </ColumnWrapper>
    </>
  );
}

export default Home;