import React, { useState } from 'react';
import "./login.css";
import TextField from "@mui/material/TextField";
import loginimg from "../../assets/images/img1.svg";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { isExpired, decodeToken } from "react-jwt";

export default function Login(props) {
  const [loginData, setLoginData] = useState({});
  const handleChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  };
    const navigate = useNavigate();
  const Login = async () => {
    try {
      const response = await axios.post("http://localhost:8080/Login", loginData);

      var decodedData = decodeToken(response.data);
      localStorage.removeItem("token");
      localStorage.setItem("token", response.data);
      console.log(decodedData);
      // console.log(props.state);
      props.state( response.data);
      navigate("/");
    } catch (error) {
      console.error("Network Error", error);
    }
    // console.log(loginData);
    // navigate("/dashboard");
  };
  return (
    <div>
          <div className='login-container'>
              <div className='input_conatiner'>
                   <TextField
                   required
                   id="outlined-required"
                      label="username"
                    size='small'
            sx={{ width: "240px" }}
            onChange={handleChange}
            name='username'
                  />
                  <br />
                  <br/>
                  <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
                      autoComplete="current-password"
                      size='small'
            sx={{ width: "240px" }}
                        onChange={handleChange}
                  name='password'
                  />
                  <p>Forgot password</p>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                  <br></br>
                  <Button variant="contained" sx={{width:"240px"}} onClick={Login}>login in</Button>
              </div>
              
              <div className='image-conatiner'>
                  <img src={loginimg}></img>
              </div>
      </div>
    </div>
  )
}
