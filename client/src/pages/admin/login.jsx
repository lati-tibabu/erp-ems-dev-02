import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "../../components/buttons";
import { CenterColumn } from "../../components/center";
import ColumnWrapper from "../../components/column_wrapper";
import { InputField } from "../../components/input_field";
import RowWrapper from "../../components/row_wrapper";
import { Heading1, Label, Heading2 } from "../../components/Typography";
import axios from "axios";
import { login } from "../../store";
import "../../styles/login.css";
import amalie_loading from "/amalie-steiness.gif";

import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const apiURL = import.meta.env.VITE_API_URL;

  // defining dispatch from redux

  const dispatch = useDispatch();

  const [role, setRole] = useState("");
  const [content, setContent] = useState("");
  const [roleCorrect, setRoleCorrect] = useState(true);
  const [loggingIn, setLoggingIn] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    !loggingIn && setLoggingIn(true);
    // setLoggingIn(true);
    try {
      console.log(userData);
      const response = await axios.post(`${apiURL}/api/user/login`, userData);
      const { token } = response.data;

      if (response.status === 200) {
        localStorage.setItem("jwt", token);
        localStorage.setItem("jwt_expiration", Date.now() + 1000 * 60 * 60);

        // console.log(token);
        // console.log(response.data);
        // console.log(response.data.user.role);

        const userRole = response.data.user.role;

        try {
          const response2 = await fetch(`${apiURL}/api/role/load/${userRole}`);
          const data = await response2.json();
          // console.log(data);
          if (data.role_name === "Admin") {
            setRoleCorrect(true);
            dispatch(
              login({
                username: response.data.user.username,
                role: response.data.user.role,
                token: token,
              })
            );
            navigate("/admin/home");
            // dispatch(login({username: response.data.user.username, role: response.data.user.role, token:token}))
          } else {
            // alert(`Invalid Role you are ${(data.role_name)} bro, what the heck are you doing here`);
            setRole(data.role_name);
            setContent(
              `Access Denied: Your role is '${data.role_name}', which does not have permission to access this section. Please contact your administrator if you believe this is an error.`
            );
            setRoleCorrect(false);

            console.log("Invalid Role");
          }
        } catch (error) {
          console.error("Error fetching role:", error);
        }
      } else {
        alert("Login Failed, read console message");
        console.log(response.message);
      }
    } catch (error) {
      console.error("Error: ", error);
      if (error.response) {
        console.error("Error details: ", error.response.data);
        alert(error.response.data.message);
      }
      if (error.response && error.response.status === 500) {
        // alert("An internal server error occurred. Please try again later.");
        console.log(
          "An internal server error occurred. Please try again later."
        );
      } else {
        // alert("An error occurred while submitting the form. Please check your input and try again.");
        console.log(
          "An error occurred while submitting the form. Please check your input and try again."
        );
      }
    }
  };

  return roleCorrect ? (
    <div>
      <RowWrapper style={styles.outside_wrapper}>
        {/* <ColumnWrapper style={styles.column_with_shadow} className=""> */}
        <ColumnWrapper className="p-10 br-11p bc-blue10 back-color-gray10-10 shadow-md">
          <CenterColumn
            style={{
              width: "70%",
              padding: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Heading1 text="EMS" style={styles.heading1_style} />
            <Heading2 text="Login" />
            <Label text="Admin Login Portal" />
            <form onSubmit={handleSubmit}>
              <InputField
                placeholder="Enter Username"
                labelName="Username"
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
              />
              <InputField
                placeholder="Enter Password"
                labelName="Password"
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />

              {!loggingIn ? (
                <PrimaryButton className="w-50p mt-20px">Login</PrimaryButton>
              ) : (
                <div className="font-xs flex-row align-center w-50p mt-20px">
                  <img
                    className="p-0 w-30px h-30px"
                    style={{ filter: "invert(100%)", mixBlendMode: "darken" }}
                    src={amalie_loading}
                  />
                  Logging in...
                </div>
              )}
            </form>
            {/* <Label text="Forgot Password?" /> */}
            {/* <Link style={styles.link_style} to={'/auth/create_user'}>Create New User</Link> */}
          </CenterColumn>
        </ColumnWrapper>
      </RowWrapper>
    </div>
  ) : (
    <>
      <div style={{ filter: "blur(4px)" }}>
        <RowWrapper style={styles.outside_wrapper}>
          <ColumnWrapper
            style={styles.column_with_shadow}
            className="column_with_shadow"
          >
            <CenterColumn
              style={{
                width: "70%",
                padding: "30px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Heading1 text="EMS" style={styles.heading1_style} />
              <Heading2 text="Login" />
              <Label text="Admin Login Portal" />
              <form onSubmit={handleSubmit}>
                <InputField
                  placeholder="Enter Username"
                  labelName="Username"
                  type="text"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                />
                <InputField
                  placeholder="Enter Password"
                  labelName="Password"
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
                <PrimaryButton style={{ width: "50%", marginTop: "20px" }}>
                  Login
                </PrimaryButton>
              </form>
              {/* <Label text="Forgot Password?" /> */}
              {/* <Link style={styles.link_style} to={'/auth/create_user'}>Create New User</Link> */}
            </CenterColumn>
          </ColumnWrapper>
        </RowWrapper>
      </div>

      <div
        style={{ position: "absolute", top: "0" }}
        className="flex-column w-100s h-100s back-color-gray100-80 justify-center align-center"
      >
        <div className="flex-column align-center gap-30 color-red100 w-30p p-20 bw-2px bc-black br-10px back-color-white">
          <div className="flex-row justify-between w-100p">
            <span className="font-2xl color-red100 font-w-900">Wrong Role</span>
            <FontAwesomeIcon
              style={{ cursor: "pointer", color: "black" }}
              icon="fa-solid fa-times"
              onClick={() => {
                setRoleCorrect(true);
                navigate("/auth/login");
              }}
            />
          </div>
          <img
            src="https://img.freepik.com/free-vector/bad-idea-concept-illustration_114360-8061.jpg"
            alt=""
            className="w-60p"
          />
          <div className="color-black">{content}</div>
        </div>
      </div>
    </>
  );
}

const styles = {
  column_with_shadow: {
    width: "30%",
    // height:'70%',
    borderRadius: "30px",
    boxShadow: "0 0 5px rgba(0, 100, 130, 0.21)",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
  },

  outside_wrapper: {
    // height: '95vh',
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    // background: "rgba(0,190,212,0.02)",
  },

  heading1_style: {
    fontSize: "3rem",
    fontWeight: "800",
  },

  link_style: {
    color: "blue",
    textDecoration: "none",
    fontSize: "0.8rem",
  },
};

export default Login;
