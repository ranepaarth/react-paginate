import React from "react";
import { NavLink } from "react-router-dom";
import Theme1 from "./Theme/Theme1";
import Theme2 from "./Theme/Theme2";
const Header = () => {
  return (
    <header className="h-[10vh] min-w-full flex justify-center items-center gap-5 ">
      <span className="cursor-pointer">
        <NavLink to="/theme1">
        Theme1
        </NavLink>
      </span>
      <span className="cursor-pointer">
        <NavLink to="/theme2" >
        Theme2
        </NavLink>
      </span>
    </header>
  );
};

export default Header;
