import React from "react";
import Nav from "../nav/Nav";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <header className="header">
      {/* <div className="container header__container"> */}
      <Nav />
      <Hero />
      {/* </div> */}
    </header>
  );
};

export default Header;
