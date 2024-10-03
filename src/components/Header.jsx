import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="flex">
          <Link to="/">Home</Link>
          <Link to="/scroll">Scroll</Link>
          <Link to="/hover">Hover</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
