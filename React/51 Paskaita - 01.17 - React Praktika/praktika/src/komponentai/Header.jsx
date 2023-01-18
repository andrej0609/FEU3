import React from "react";
import NavBar from "./NavBar";
import LoginForm from "./LoginForm";
import { useState } from "react";
import Bg from './images/Bg.jpg';
import Moon from './images/Moon.png';
import Mountain from './images/Mountain.png';
import Road from './images/Road.png';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  return (
    <>
      <header>
        <NavBar />
        <LoginForm
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          showRegistration={showRegistration}
          setShowRegistration={setShowRegistration}
        />
      </header>
      <section>
        <img src={Bg} alt="bg" id="bg" />
        <img src={Moon} alt="moon" id="moon" />
        <img src={Mountain} alt="mountain" id="mountain" />
        <img src={Road} alt="road" id="road" />
        <h1 id='text'>Your Travel Guide</h1>
      </section>
    </>
  );
};

export default Header;