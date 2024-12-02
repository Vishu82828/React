import React from 'react';
import '../Styles/Home.css';
import { Navigate, useNavigate} from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h1> Home </h1>
    </>
  )
}

export default Home
