import React,{useState} from 'react';

const Spred = () => {
    let arr1=[1,2,3,4,5]
    let arr2=[6,7,8,9,10]
    let arr3=[...arr1,...arr2]
    console.log(arr3)
    const [user, setUser] = useState({name:"",age:0});

    const handleInput=(e)=> {
        const {name, value} = e.target;
        setUser({...user,[name]:value})
    }
  return (
    <div>
      <h1>Spread Operator</h1>
      <input type="text" 
      name='name'
      placeholder='Name'
      value={user.name}
      onChange={handleInput}
      />
      <input type="int" 
      name='age'
      placeholder='Age'
      value={user.age}
      onChange={handleInput}
      />
      <h1>Name = {user.name}</h1>
      <h1>Age = {user.age}</h1>
    </div>
  )
}

export default Spred
