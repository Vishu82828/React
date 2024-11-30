import React,{useState,useEffect} from 'react';
import "../MyCss/Comp4.css";
export const Comp4 = () => {
    const [initial,final]=useState([])
    useEffect(()=>{
        const myfunc=async()=>{
            const data=await fetch("https://fakestoreapi.com/products")
            const res=await data.json();
            final(res);

        }
        myfunc();
    },[])

    const add_cart=(price)=>{
        alert(price)
    }
    const remove_cart=(price)=>{
        alert("remove")
    }

  return (
    <>
    <h1 className='heading'>Fakestore json data</h1>
    <table>
        <tr>
            <th>title</th>
            <th>Description</th>
            <th>Price</th>
            <th>image</th>
            <th>rating</th>
            <th>Action</th>
        </tr>
        
        {
        initial.map((prod)=>(
            <>
            <tr>
            <td>{prod.title}</td>
            <td>{prod.description}</td>
            <td>RS {prod.price}</td>
            <td>
                <img src={prod.image} alt="img" className='img' />
            </td>
            <td>
                {prod.rating.rate}
            </td>
            <td>
                <button onClick={()=>(add_cart(prod.price))}>add</button>
                <button onClick={remove_cart}>remove</button>
            </td>
            </tr>
            <hr />
            </>
        ))
    }

       
    </table>

  
    </>
  )
}
export default Comp4;