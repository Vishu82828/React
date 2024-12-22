import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Email from '@mui/icons-material/Email';
import Lock from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import { getData, addData } from '../API/User';
import { toast } from 'react-toastify';


function SingIn() {
  const GetUserData = async () => {
    const response = await getData();
    console.log(response.data)
  }
  useEffect(()=>{
    GetUserData();
  },[])
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          backgroundColor: '#fff',
          borderRadius: 2,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            }
          />
        </FormControl>

        <FormControl variant="standard" fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            startAdornment={
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            }
          />
        </FormControl>

        <Button variant="contained" color="primary" type="submit" fullWidth>
          Log In
        </Button>
      </Box>
    </Box>
  );
}

export default SingIn;
