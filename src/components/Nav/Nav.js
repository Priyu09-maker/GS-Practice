import React from "react";
import "./Nav.css";
import HamBurgerDrawer from '../HamBurgerDrawer/HamBurgerDrawer'
const Nav = ({setCategory}) => {
  return (
    <div className="nav">
      <div className="nav-icon"><HamBurgerDrawer setCategory={setCategory}/></div>
      <div className="logo">
        Google News
        </div>
    </div>
  );
};

export default Nav;
