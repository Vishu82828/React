import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Profile</h1>
      {user ? (
        <div>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
};

export default Profile;
