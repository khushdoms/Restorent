import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import Menucard from "./Menucard";
import Navbar from "./Navbar";


const uniqueList = [ ...new Set(
  Menu.map( (curElem,index) => {
    return curElem.category;
  }), 
),"All",];
const Restorent = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setmenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if( category === "All"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <Menucard menuData={menuData} />
    </>
  );
};

export default Restorent;
