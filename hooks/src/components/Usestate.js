import React, { useState } from "react";
import "./Usestate.css";

function Usestate() {
  const [count, setCount] = useState(0);
  const addnumber = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const removenumber = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="center">
      <p>You click {count} times</p>
      <div className="buttons">
        <button onClick={addnumber}>Count Number</button>
        <br />
        <button onClick={removenumber}>Remove Number</button>
      </div>
    </div>
  );
}

export default Usestate;
