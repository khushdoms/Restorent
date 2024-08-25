import React, { useState } from "react";

const UseStateObject = () => {
  const kdObject = {
    Name: "Kaushik",
    Age: "31",
    Degree: "BE",
    Profession: "Software Developer",
    Country: "India",
    Hobby: "Reading",
    FavoriteColor: "Blue",
    MaritalStatus: "Single",
  };

  const [myObject, setmyObject] = useState(kdObject);

  const updateObjectData = () => {
    if (myObject.Name === "darshi") {
      setmyObject({ ...myObject, Name: "Kaushik" });
    } else {
      setmyObject({ ...myObject, Name: "darshi" });
    }
  };

  return (
      <div className="card-container">
        <div className="card">
          <br />
          <br />
          <h3> Update Object on button click (useState) </h3>
          <br />
          <h4>
            Name : {myObject.Name} & Age : {myObject.Age} & Degree :{" "}
            {myObject.Degree} & Country : {myObject.Country} & Hobby :{" "}
            {myObject.Hobby} & Profession : {myObject.Profession} &
            MaritalStatus : {myObject.MaritalStatus}
          </h4>
          <br />
          <button className="btn" onClick={updateObjectData}>
            Update
          </button>
          <br />
          <br />
        </div>
      </div>
  );
};

export default UseStateObject;
