import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 
import { PrimaryButton } from "../../components/buttons";
import { CenterColumn } from "../../components/center";
import ColumnWrapper from "../../components/column_wrapper";
import { InputField } from "../../components/input_field";
import RowWrapper from "../../components/row_wrapper";
import { Heading1, Label, Heading2 } from "../../components/Typography";
import axios from 'axios';
import { login } from '../../store';

import { useDispatch } from 'react-redux';


function Login() {

  // defining dispatch from redux

  const dispatch = useDispatch();
  
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevData) => ({
      ...prevData,
      [name]:value
    }))
  }

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      console.log(userData);
      const response = await axios.post('http://localhost:3060/api/user/login', userData)
      const { token } = response.data;

      if (response.status === 200){
        localStorage.setItem('jwt', token)

        // console.log(token);
        // console.log(response.data);
        // console.log(response.data.user.role);
        
        dispatch(login({username: response.data.user.username, role: response.data.user.role, token:token}))

        // navigate('/admin/home', {state: {username: userData.username}})
        navigate('/admin/home');  

      } else {
        alert('Login Failed, read console message')
        console.log(response.message);
      }
    } catch (error){
      console.error('Error: ', error);
      if (error.response) {
        console.error('Error details: ', error.response.data);
        alert(error.response.data.message) 
      }
      if (error.response && error.response.status === 500) {
        // alert("An internal server error occurred. Please try again later.");
        console.log("An internal server error occurred. Please try again later.");
      } else {
        // alert("An error occurred while submitting the form. Please check your input and try again.");
        console.log("An error occurred while submitting the form. Please check your input and try again.");
      }
    }
  }
  
  return (
    <div>
        <RowWrapper style={styles.outside_wrapper}>
          <ColumnWrapper style={styles.column_with_shadow}>
            <CenterColumn style={{ width: '70%', padding: '30px', justifyContent:'center',alignItems:'center' }}>
              <Heading1 
                text="EMS" 
                style={styles.heading1_style} />
              <Heading2 text="Login" />
              <Label text="Admin Login Portal" />
              <form onSubmit={handleSubmit}>
                <InputField 
                  placeholder="Enter Username" 
                  labelName="Username" 
                  type="text"
                  name='username'
                  value = {userData.username}
                  onChange = {handleChange}
                  />
                <InputField 
                  placeholder="Enter Password" 
                  labelName="Password" 
                  type="password"
                  name='password'
                  value={userData.password}
                  onChange={handleChange}
                  />
                <PrimaryButton style={{ width: '50%', marginTop: '20px' }}>Login</PrimaryButton>
              </form>
              {/* <Label text="Forgot Password?" /> */}
              <Link style={styles.link_style} to={'/auth/create_user'}>Create New User</Link>
            </CenterColumn>
          </ColumnWrapper>
        </RowWrapper>
    </div>
  );
}

const styles = {
  column_with_shadow: {
    width: '30%', 
    height:'70%',
    borderRadius: '30px',
    boxShadow: '0 0 5px rgba(0, 100, 130, 0.21)',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none'
  },
  outside_wrapper: { 
    height: '95vh',
    gap: '20px', 
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
    background: 'rgba(0,190,212,0.02)',
  },
  heading1_style: {
    fontSize: '3rem', 
    fontWeight: '800'
  },
  link_style: {
    color: 'blue',
    textDecoration: 'none',
    fontSize: '0.8rem',
    // background: 'red'
  }

}

export default Login;
