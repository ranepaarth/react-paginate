import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[10vh] min-w-full flex justify-center items-center gap-5 bg-teal-100 shadow-lg font-Montserrat tracking-widest p-5">
      <span className="cursor-pointer ml-6">
        <NavLink to="/theme1">
        Theme1
        </NavLink>
      </span>
      <span className="cursor-pointer ml-6">
        <NavLink to="/theme2" >
        Theme2
        </NavLink>
      </span>
    </header>
  );
};

export default Header;
