import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <h1 className="logo">ReactFeactureCollections</h1>
        <div className="left">
          <h4>Home</h4>
          <h4>Blog</h4>
          <h4>Community</h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
