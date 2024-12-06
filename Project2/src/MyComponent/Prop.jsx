import React, { useState, useEffect } from "react";

function Prop(props) {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div>
        <h1>Current Date and Time</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Prop;
