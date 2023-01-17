import Bg from './images/Bg.jpg';
import Moon from './images/Moon.png';
import Mountain from './images/Mountain.png';
import Road from './images/Road.png';
import React, { useState } from "react";

const Header = () => {
  const [vardas, setVardas] = useState("");
  const [slaptazodis, setSlaptazodis] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  function prisijungti() {
    setVardas("");
    setSlaptazodis("");
    setIsLoggedIn(true);
  }

  function atsijungti() {
    setIsLoggedIn(false);
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="LoginInfo">
          {isLoggedIn ? <button type="button" onClick={atsijungti}>Atsijungti</button> :
            <form>
              <label>
                Vardas:
                <input type="text" value={vardas} onChange={(e) => setVardas(e.target.value)} />
              </label>
              <br />
              <label>
                Slaptažodis:
                <input type="password" value={slaptazodis} onChange={(e) => setSlaptazodis(e.target.value)} />
              </label>
              <br />
              <button type="button" onClick={prisijungti}>Prisijungti</button>
            </form>
          }
        </div>
      </header>
      <section>
        <img src={Bg} alt="bg" />
        <img src={Moon} alt="moon" />
        <img src={Mountain} alt="mountain" />
        <img src={Road} alt="road" />
        <h1 id='text'>Your Travel Guide</h1>
      </section>
    </>
  );
}

export default Header;

