import { Box, Button, InputLabel } from '@mui/material'
import React from 'react';
import "./edit.css";
import "../../../Utility/Interceptors/Reqinterceptor";
import axios from "axios";
export default function Edit(props) {
  const removeDp = () => {
    axios.post("http://localhost:8080/removedp").then((res) => {
      console.log(res);
      localStorage.removeItem("token");
      localStorage.setItem("token", res.data.token);
      window.location.reload();
     });
  }
  // console.log(props);
  return (
    <div>
      <Box sx={{ 
              width: "100%",
              height: "80vh",
              border: "1px solid #efefef",
              backgroundColor: 'white',
              borderRadius: "8px",
              padding: "10px",
            //   display:"flex"
          }}>
              <div style={{display:"flex"}}>
              <div className='display-picture' >
            <img src={props.state.avatar}
              style={{ height: "100px", width: "100px" }}></img></div>
              <div style={{marginTop:"25px"}}>
            
          </div>
          <button className='action-img'>Change Avatar</button>
              <button className='action-img uncolored' onClick={removeDp}>Remove</button>
            
            </div>
              <div className='form-container'>
                <div className='field-container'>

                  <InputLabel className='input-label'>Name</InputLabel>
                  <input type='text' className='edit-fields'></input>
                  <InputLabel className='input-label'>UserName</InputLabel>
                  <input type='text' className='edit-fields'></input>                           
                  </div>
                <div className='field-container'>
                  <InputLabel className='input-label'>Email</InputLabel>
                  <input type='text' className='edit-fields'></input>
                  <InputLabel className='input-label'>DOB</InputLabel>
                  <input type='text' className='edit-fields'></input>
                  </div>
                  <div className='field-container'>
                  <InputLabel className='input-label'>Phone Number</InputLabel>
                  <input type='text' className='edit-fields'></input>
                  <InputLabel className='input-label'>City</InputLabel>
                  <input type='text' className='edit-fields'></input>
                </div>
              </div>
              <button className='action-img save'>Save Changes</button>
          </Box>
    </div>
  )
}
