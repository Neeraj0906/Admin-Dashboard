import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import "./accounts.css";
import React from 'react'
import Edit from './Edit Profile/Edit';
import Change from './Change Password/Change';
import { isExpired, decodeToken } from "react-jwt";
import { useEffect, useState } from 'react'

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
export default function Accounts(props) {
  console.log(props);
  const [value, setValue] = React.useState(0);
  var [decodedData, setFullData] = useState(); 
  useEffect(() => {
    var token = localStorage.getItem("token");
    setFullData(decodeToken(token));
    console.log(decodedData);
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='box'>
      {decodedData!=null &&(
      /* <Box sx={{
        width: 600,
              height: 350,
              marginRight:"auto",
              marginLeft: "auto",
              marginTop:"15%",
              backgroundColor: 'white',
        borderRadius:"8px",
        '&:hover': {
          backgroundColor: 'white',
          opacity: [0.9, 0.8, 0.7],
        },
      }}><div className='myinput'>
          <TextField required
          id="filled-required"
          label="First Name"
                  variant="filled"
                  className='myinput'
              ></TextField>
              <TextField required
          id="filled-required"
          label="last Name"
                  variant="filled"
                  className='myinput'
              ></TextField>
              <TextField required
          id="filled-required"
          label="email"
                  variant="filled"
                  className='myinput'
                  ></TextField>
              
              <Button variant="contained" disableElevation >
                Update!
                  </Button>
                </div>  
      </Box> */
       <Box
        sx={{
          width: "95%",
          margin: "0 auto",
          marginTop:"20px", 
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          height: "100vh"
        }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Edit profile" {...a11yProps(0)} />
        <Tab label="Change Password" {...a11yProps(1)} />
        
      </Tabs>
      <TabPanel value={value} index={0} style={{width:"80%"}}>
          <Edit state={decodedData} />
      </TabPanel>
      <TabPanel value={value} index={1} style={{width:"80%"}}>
        <Change/>
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
      </Box>
      )}
    </div>
  )
}
