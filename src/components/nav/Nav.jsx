import React from "react";
import "./nav.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container nav__container">
        <div className="language__option">
          <small>Language</small>

          <select name="language" id="language">
            <option>English</option>
            <option>Ibibio</option>
            <option>Yoruba</option>
            <option>Igbo</option>
            <option>Hausa</option>
          </select>
        </div>

        {/* Hamburger/close icon for mobile */}
        <AiOutlineMenu className="open__icon" />
        <AiOutlineClose className="close__icon" />

        <div className="logo">
          <h2>four-th</h2>
        </div>

        <ul className="nav__items">
          <li className="search">
            <AiOutlineSearch />
            <input type="text" placeholder="Search" />
          </li>

          <li>
            <AiOutlineUser />
          </li>

          <li>
            <AiOutlineHeart />
          </li>

          <li className="cart">
            <AiOutlineShoppingCart />
            <span>0</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
