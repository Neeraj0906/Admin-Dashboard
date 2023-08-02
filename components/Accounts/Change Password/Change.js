import { Box , InputLabel } from '@mui/material'
import React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { GridViewStreamIcon, GridVisibilityOffIcon } from '@mui/x-data-grid';
export default function Change() {
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
   
    return (
    <div>
          <h3>Change Password</h3>
          <Box
           sx={{
              width: "100%",
              height: "80vh",
              border: "1px solid #efefef",
              backgroundColor: 'white',
              borderRadius: "8px",
              padding: "10px",
                    display: "flex",
              flexDirection:"column",
              }}>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <span>Current Password </span>
          <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <GridVisibilityOffIcon/>:<GridViewStreamIcon/>}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <span>New Password </span>
          <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <GridVisibilityOffIcon/>:<GridViewStreamIcon/>}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
                </FormControl>
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <span>Confirm Password </span>
          <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <GridVisibilityOffIcon/>:<GridViewStreamIcon/>}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          </Box>
    </div>
  )
}
