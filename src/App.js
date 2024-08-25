import React from "react";
import RuleHook from "./component/RuleHook";
import UseStateArray from "./component/UseStateArray";
import UseStateObject from "./component/UseStateObject";
import Restorent from "./component/Basics/Restorent";
const App = () => {
  return (
    <>
      <Restorent />
      <section className="main-card--cointainer">
        <RuleHook />
        <UseStateArray />
        <UseStateObject />
      </section>
    </>
  );
};
export default App;
