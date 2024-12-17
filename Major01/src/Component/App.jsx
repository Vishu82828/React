import React,{ useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './Admin';
import Home from './Home';
import SignUpForm from './SignUpForm';
import Movies from './Movies';
import TVShows from './TVShows';
import Categories from './Categories';
import UserProfile from './UserProfile.jsx';
import CustomNavbar from './CustomNavbar.jsx';

 function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpOpen = () => {
    setShowSignUp(true);
  };

  const handleSignUpClose = () => {
    setShowSignUp(false);
  };
  return (
    <Router>
      <CustomNavbar onSignUpOpen={handleSignUpOpen} />
      {showSignUp && <SignUpForm onClose={handleSignUpClose} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TVShows />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
