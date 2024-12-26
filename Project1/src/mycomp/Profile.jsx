import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../mystyle/Profile.css';
import data from '../assets/userService.json';

const Profile = () => {
  const { email } = useParams();
  const [profileUser, setProfileUser] = useState(null);

  useEffect(() => {
    const user = data.users.find(u => u.email === email);
    setProfileUser(user);
  }, [email]);

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      {profileUser ? (
        <div className="profile-details">
          <img src={profileUser.image} alt="User Avatar" className="profile-avatar" />
          <p><strong>First Name:</strong> {profileUser.firstName}</p>
          <p><strong>Last Name:</strong> {profileUser.lastName}</p>
          <p><strong>Email:</strong> {profileUser.email}</p>
        </div>
      ) : (
        <p className="profile-message">Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
