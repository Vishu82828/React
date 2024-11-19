import React from "react";
import { useState } from "react";

function Text() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const [text, setText] = useState("Enter text");

  const submit = ()=>{
    console.log("Submited  " + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleChange = (event) => {
    console.log("Changed");
    setText(event.target.value);
  };
//   function Calculator() {
//     const [firstValue, setFirstValue] = useState(0);
//     const [secondValue, setSecondValue] = useState(0);
//     const [result, setResult] = useState(null);

//     const handleChangeFirst = (event) => {
//       setFirstValue(Number(event.target.value));
//     };

//     const handleChangeSecond = (event) => {
//       setSecondValue(Number(event.target.value));
//     };

//     const handleSubmit = () => {
//       setResult(firstValue + secondValue);
//     };
//  }
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
        <button className="btn btn-dark my-2" onClick={submit}>
            Change State to Upper Case
        </button>
      </div>

      <hr/>

      <div className="container my-5">
        <p>You click + {count} Times.</p>
        <button onClick={() => setCount(count + 1)}>Click Me +</button>
        <p>You click {count2} Times.</p>
        <button onClick={() => setCount2(count2 - 1)}>click me -</button>
      </div>

      {/* <div className="container my-5">
        <h1>Calculator</h1>{" "}
        <input type="number" value={firstValue} onChange={handleChangeFirst} />
        +
        <input
          type="number"
          value={secondValue}
          onChange={handleChangeSecond}
        />
        <br />
        <button className="btn btn-primary my-2" onClick={handleSubmit}>
          Submit
        </button>
        {result !== null && (
          <div className="my-3">
            <h2>Result: {result}</h2>
          </div>
        )}
      </div> */}
    </>
  );
}

export default Text;
