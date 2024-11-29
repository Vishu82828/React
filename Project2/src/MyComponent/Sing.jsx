// import React from 'react'
import '../MyCss/Sing.css';
import React,{useState, useEffect} from 'react';

const Sing = () => {
    const [data, setData] = useState({fname: "",lname:"",pass1:"",email:"",phone:""})

    const handleInputChange = (e) => {
        // setData({...data,[e.target.name]:e.target.value})
        const {name, value}=e.target;
        setData({...data,[name]:value})
    }
  return (
    <>
      <h1>Sing Up Page</h1>
      <label htmlFor="fname">
        First Name : <input type="text" name='fname' value={data.fname} onChange={handleInputChange}/>
      </label><br />
      <label htmlFor="lname">
        Last Name : <input type="text" name='lname' value={data.lname} onChange={handleInputChange}/>
      </label><br />
      <label htmlFor="pass1">
        Password : <input type="password" name='pass1' value={data.pass1} onChange={handleInputChange}/>
      </label><br />
      <label htmlFor="email">
        Email : <input type="email" name='email' value={data.email} onChange={handleInputChange} />
      </label><br />
      <label htmlFor="phone">
        Phone : <input type="number" name='phone' value={data.phone} onChange={handleInputChange}/>
      </label>
      <button onClick={()=>{console.log(data)}}>Register</button>
    </>
  )
}

export default Sing
