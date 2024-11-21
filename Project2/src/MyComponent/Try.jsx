import React from 'react'

function Try() {
    const arr=[1,2,3,4,5,6,7]
    const arr1=[
        {
            id:1,
            name:'John',
            age:25,
            img1:'{image1}',
        }
    ]
  return (
    <div className='container'>
      {
        arr.map((e) => (
          <p>{e}</p>
        ))
      }
      {
        arr1.map((e) => (
            <>
            <h3>{e.id}</h3>
            <h1>{e.name}</h1>
            <p>{e.age}</p>
            <img src={e.img1} alt="image" /> 
            </>
        ))
      }
    </div>
  )
}

export default Try
