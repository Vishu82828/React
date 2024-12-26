import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Email from '@mui/icons-material/Email';
import Lock from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { getData, adminData } from '../API/User'; // Make sure to adjust the import path as needed

function SignIn() {
  const navigate = useNavigate();

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

    // Validate input fields
    if (!formData.email || !formData.password) {
      toast.error('Please fill in both fields');
      return;
    }

    try {
      // Get existing users from API
      const usersResponse = await getData();
      const users = usersResponse.data;
      const matchUser = users.find((user) => user.email === formData.email && user.password === formData.password);

      // Get all admins from API
      const adminsResponse = await adminData();
      const admins = adminsResponse.data;
      const matchAdmin = admins.find((admin) => admin.email === formData.email && admin.password === formData.password);

      if (matchUser) {
        localStorage.setItem('currentUser', JSON.stringify(matchUser));
        navigate(`/profile/${matchUser.email}`);
        toast.success(`Welcome, ${matchUser.firstName}`);
      } else if (matchAdmin) {
        localStorage.setItem('currentUser', JSON.stringify(matchAdmin));
        navigate('/dashboard');
        toast.success('Welcome Admin');
      } else {
        toast.error('Invalid email or password');
      }
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
