import React, { useState } from "react";
import "./Home.scss";
import Logo from "../../images/logo.svg";
import HeroImg from "../../images/illustration-working.svg";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <section className="home">
      <div className="mobileNav">
        <img src={Logo} alt="logo" />
        <div className="menuIcons" onClick={()=> setShowMenu(!showMenu)}>
          {showMenu ? (
            <img 
              src="https://img.icons8.com/ios-filled/100/9e9aa7/delete-sign--v1.png"
              alt="delete-sign--v1"
            />
          ) : (
            <img 
              src="https://img.icons8.com/ios-filled/100/9e9aa7/menu--v1.png"
              alt="menu--v1"
            />
          )}
        </div>
      </div>
      <nav className={showMenu ? 'show' : ''}>
        <div className="left">
          <img src={Logo} alt="logo" />
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>

        <div className="right">
          <button className="btn">Login</button>
          <button className="primaryBtn">Sign Up</button>
        </div>
      </nav>

      <main className="hero">
        <div className="left">
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="primaryBtn">Get Started</button>
        </div>

        <div className="right">
          <img src={HeroImg} alt="" className="heroImg" />
        </div>
      </main>
    </section>
  );
};

export default Home;
