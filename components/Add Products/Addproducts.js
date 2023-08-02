import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./addproducts.css";
import General from '../General/General';
import Shipping from '../Shipping/Shipping';
export default function Addproducts() {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
          <h2>Add new products</h2>
          <div>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="General" value="1" />
                        <Tab label="shipping" value="2" />
                    </TabList>
                    </Box>
                    <TabPanel value="1"> <General/></TabPanel>
                    <TabPanel value="2"> <Shipping/></TabPanel>
                </TabContext>
                </Box>
          </div>
    </div>
  )
}
