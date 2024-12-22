import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Email from '@mui/icons-material/Email';
import Lock from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import { getData } from '../API/User';
import { toast } from 'react-toastify';
import { UserContext } from './UserContext';
import { useNavigate, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function SignIn() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const GetUserData = async () => {
    try {
      const response = await getData();
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    GetUserData();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    // Validate input fields
    if (!formData.email || !formData.password) {
      toast.error('Please fill in both fields');
      return;
    }

    try {
      const response = await getData();
      const data = response.data;
      console.log('Fetched data:', data);
      
      const matchEmail = data.find((e) => e.email === formData.email);
      if (!matchEmail) {
        toast.error('Email not found');
        return;
      }

      if (matchEmail.password !== formData.password) {
        toast.error('Invalid password');
        return;
      }

      toast.success(`Welcome, ${matchEmail.firstName}`);
      setUser(matchEmail);
      navigate('/profile');
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Error during login!');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
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
          Sign In
        </Button>

        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            Don't have an account?{' '}
            <Link to="/sign-up" style={{ color: '#1976d2', textDecoration: 'none', cursor: 'pointer' }}>
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SignIn;
