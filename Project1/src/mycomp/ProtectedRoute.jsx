// UserContext.jsx
// import React, { createContext, useState } from 'react';

// // Create a user context
// export const UserContext = createContext();

// // UserProvider component
// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     return (
//         <UserContext.Provider value={{ user, setUser }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// ProtectedRoute component
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectedRoute;

