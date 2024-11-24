import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";

function Text() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const [text, setText] = useState("Enter text");

  const submit = ()=>{
    console.log("Submited  " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const submit2 = ()=> {
    console.log("Submited  " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleChange = (event) => {
    console.log("Changed");
    setText(event.target.value);
  };
  return (
    <>
      <div className="container my-5">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text} 
          placeholder = "Example textarea"
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-dark my-2 mx-1" onClick={submit}>
            to Upper Case
        </button>
        <button className="btn btn-dark my-2 mx-1" onClick={submit2}>
            to lower Case
        </button>
      </div>

      <hr/>

      <div className="container my-5">
        <p>You click + {count} Times.</p>
        <button onClick={() => setCount(count + 1)}>Click Me +</button>
        <p>You click {count2} Times.</p>
        <button onClick={() => setCount2(count2 - 1)}>click me -</button>
      </div>
    </>
  );
}

export default Text;
