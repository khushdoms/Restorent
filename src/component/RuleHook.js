// 1. write inside component/function
// 2. Component name must be PascalCase

import React, { useState } from "react";

const RuleHook = () => {
  const [Name, setName] = useState("Kaushik Domadiya");
  const changeName = () => {
    Name === "Kaushik Domadiya"
      ? setName("I am Kaushik Domadiya Wordpress/React development")
      : setName("Kaushik Domadiya");
  };

  return (
    
      <div className="card-container">
        <div className="card">
          <br />
          <br />
          <h3> Update Name/Heading on button click (useState) </h3>
          <br />
          <p> {Name} </p>
          <br />
          <button type="button" className="btn" onClick={changeName}>
            Click Me Please
          </button>
          <br />
          <br />
        </div>
      </div>
  );
};
export default RuleHook;
