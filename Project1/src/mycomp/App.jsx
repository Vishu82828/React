import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Movies from './Movies';
import TvShows from './TvShows';
import MyList from './MyList';
import Profile from './Profile';
import Dashboard from './Dashboard';
import SignUp from './SignUp';
import SignIn from './SignIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/*" element={<ProtectedRoute><Movies /></ProtectedRoute>} />
        <Route path="/movies" element={<ProtectedRoute><Movies /></ProtectedRoute>} />
        <Route path="/tv-shows" element={<ProtectedRoute><TvShows /></ProtectedRoute>} />
        <Route path="/my-list" element={<ProtectedRoute><MyList /></ProtectedRoute>} />
        <Route path="/profile/:email" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
