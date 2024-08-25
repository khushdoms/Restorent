import React, { useState } from "react";

const UseStateArray = () => {
  const bioData = [
    {
      id: 0,
      Myname: "Kaushik",
      Age: 31,
    },
    {
      id: 1,
      Myname: "Jinal",
      Age: 28,
    },
    {
      id: 2,
      Myname: "Darshna",
      Age: 29,
    },
  ];

  const [myArray, setmyArray] = useState(bioData);

  const clearBioData = () => {
    setmyArray([]);
  };
  return (
      <div className="card-container">
        <div className="card">
          <br />
          <br />
          <h3> Update Array on button click (useState) </h3>
          <br />
          {myArray.map((curElm) => (
            <h4 className="h1style">
              My name Is {curElm.Myname} & Age is {curElm.Age} Years
            </h4>
          ))}
          <br />
          <button className="btn" onClick={clearBioData}>
            Clear
          </button>
          <br />
          <br />
        </div>
      </div>
  );
};

export default UseStateArray;
