import React from 'react';
import { Heading3 } from '../components/Typography'; // Ensure this path is correct

const LogoAndName = () => {
  const em_border = 'none';

  const styles = {
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
  };

  return (
    <div style={styles.logo_and_name}>
      <div style={styles.saas_name_wrapper}>
        <div style={styles.saas_name_school}>
          <Heading3 text='School' style={styles.saas_name_school_text} />
        </div>
        <div style={styles.saas_name_stream}>
          <Heading3 text='Stream' />
        </div>
      </div>
    </div>
  );
};

export default LogoAndName;
