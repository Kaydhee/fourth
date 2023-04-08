import React from "react";
import { useState } from "react";
import "./hero.css";
import image1 from "../../assets/header.png";
import image2 from "../../assets/header3.png";

const Hero = () => {
  const [count, setCount] = useState(0);

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

            <button className="btn right__btn">Add to cart</button>
          </div>
        </div>
      </div>
      {/* END OF HERO CONTENTS RIGHT */}
    </section>
  );
};

export default Hero;
