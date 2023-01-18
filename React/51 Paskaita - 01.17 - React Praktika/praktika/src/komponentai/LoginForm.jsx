import React, { useState } from "react";

const LoginForm = ({ isLoggedIn, setIsLoggedIn, showRegistration, setShowRegistration }) => {
  const [vardas, setVardas] = useState("");
  const [el_pastas, setEl_pastas] = useState("");
  const [slaptazodis, setSlaptazodis] = useState("");

  function prisijungti() {
    setVardas("");
    setSlaptazodis("");
    setIsLoggedIn(true);
  }

  function atsijungti() {
    setIsLoggedIn(false);
    setShowRegistration(false);
  }

  function register() {
    const data = {
      name: vardas,
      email: el_pastas,
      password: slaptazodis
    };

    fetch("http://localhost:5000/vartotojai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(response => {
        console.log("Success:", JSON.stringify(response));
        setShowRegistration(false);
      })
      .catch(error => console.error("Error:", error));
  }

  return (
    <div className="LoginInfo">
      {isLoggedIn ? (
        <button type="button" onClick={atsijungti}>
          Atsijungti
        </button>
      ) : showRegistration ? (
        <form>
          <label>
            Vardas:
            <input
              type="text"
              placeholder="Vardas"
              value={vardas}
              onChange={e => setVardas(e.target.value)}
            />
          </label>
          <br />
          <label>
            El. paštas:
            <input
              type="email"
              placeholder="El. paštas"
              value={el_pastas}
              onChange={e => setEl_pastas(e.target.value)}
            />
          </label>
          <br />
          <label>
            Slaptažodis:
            <input
              type="password"
              placeholder="Slaptažodis"
              value={slaptazodis}
              onChange={e => setSlaptazodis(e.target.value)}
            />
          </label>
          <br />
          <label>
            Pakartokite slaptažodį:
            <input type="password" placeholder="Pakartokite slaptažodį" />
          </label>
          <br />
          <button type="button" onClick={register}>
            Registruotis
          </button>
          <button
            type="button"
            onClick={() => setShowRegistration(false)}
          >
            Atšaukti
          </button>
        </form>
      ) : (
        <form>
          <label>
            Vardas:
            <input
              type="text"
              value={vardas}
              onChange={e => setVardas(e.target.value)}
            />
          </label>
          <br />
          <label>
            Slaptažodis:
            <input
              type="password"
              value={slaptazodis}
              onChange={e => setSlaptazodis(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={prisijungti}>
            Prisijungti
          </button>
          <button
            type="button"
            onClick={() => setShowRegistration(true)}
          >
            Registruotis
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;