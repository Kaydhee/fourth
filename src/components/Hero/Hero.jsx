import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../../App";
import "./hero.css";
import image1 from "../../assets/header.png";
import image2 from "../../assets/header3.png";

const Hero = () => {
  const { setCartCount } = useContext(AppContext);

  const [count, setCount] = useState(0);

  const [cart, setCart] = useState(localStorage.getItem("item") || []);
  const [item, setItem] = useState("");
  const addItem = () => {
    cart.length === 0
      ? localStorage.setItem("item", JSON.stringify(item))
      : "item";
  };

  const addNew = (newItem) => {
    let cart = JSON.parse(localStorage.getItem("item"));

    // let newItem = {
    //   name: "Daniel",
    //   Age: 20,
    // };
    setCart(newItem);
    cart.push(newItem);

    localStorage.setItem("item", JSON.stringify(cart));

    setItem(cart);
  };

  return (
    <section>
      <div className="container hero__container">
        <nav className="hero__nav">
          <ul className="nav__items">
            <li>WOMEN</li>
            <li>MEN</li>
            <li>CHILDREN</li>
            <li>BLOG</li>
          </ul>
        </nav>

        <div className="hero__contents">
          {/* HERO CONTENTS LEFT */}
          <div className="hero__content-left">
            <div className="image__left">
              <div className="left__top">
                <img src={image1} alt="a woman" />
              </div>

              <div className="left__bottom">
                <img src={image2} alt="a woman" />
              </div>
            </div>

            <div className="image__right">
              <img src={image1} alt="a woman" />
            </div>
          </div>
          {/* END OF HERO CONTENTS LEFT */}

          {/* HERO CONTENTS RIGHT */}
          <div className="hero__content-right">
            <h3>WINTER BROWN JACKET</h3>

            <small>M45657</small>

            <div className="right__inner">
              <b>price</b>
              <span>$35,000</span>
            </div>

            <div className="right__inner">
              <b>Size</b>
              <a>XS</a>
              <a>S</a>
              <a>M</a>
              <a>L</a>
            </div>

            <div className="right__inner">
              <b>Color</b>

              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
            </div>

            <div className="right__inner">
              <b>Quantity</b>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </button>
              <button> {count} </button>
              <button
                onClick={() => {
                  setCount(count >= 1 ? count - 1 : count);
                }}
              >
                -
              </button>
            </div>

            <p>
              A brown winter jacket with a silk leather material, a long strap
              and two pockets made up of a silk fabric 100%. perfect for a
              coffee date, meeting with friends, an important event, etc.
            </p>

            <button
              className="btn right__btn"
              onClick={() => {
                setCartCount((original) => original + 1);
                addItem();
              }}
            >
              Add to cart
            </button>

            <button onClick={addNew}>add here</button>

            <h1>sucessfully added {cart.name} to cart </h1>
          </div>
        </div>
      </div>
      {/* END OF HERO CONTENTS RIGHT */}
    </section>
  );
};

export default Hero;
