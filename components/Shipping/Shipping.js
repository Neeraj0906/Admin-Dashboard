import React from 'react'
import { Box, InputLabel } from '@mui/material'
export default function Shipping() {
  return (
    <div>
      <Box sx={{
              width: "100%",
              height: "100%",
              border: "1px solid #efefef",
              backgroundColor: 'white',
              borderRadius: "8px",
              padding: "10px"
          }}
          ><h3>Shipping</h3>
              <InputLabel ><span style={{color:"red"}}>*</span>Width</InputLabel>
              <input type="number" className='product-input' placeholder='width'></input>
              <InputLabel ><span style={{color:"red"}}>*</span>Height</InputLabel>
              <input type="number" className='product-input' placeholder='height'></input>
              <InputLabel ><span style={{color:"red"}}>*</span>Weight</InputLabel>
              <input type="number" className='product-input' placeholder='weight'></input>
              <InputLabel ><span style={{ color: "red" }}>*</span>Shipping Fees</InputLabel>
                            <input type="number" className='product-input' placeholder='$'></input>


          </Box>
    </div>
  )
}
