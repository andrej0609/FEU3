import React, { useState } from "react";

const LoginForm = ({ isLoggedIn, setIsLoggedIn, showRegistration, setShowRegistration }) => {
  const [formData, setFormData] = useState({
    vardas: "",
    el_pastas: "",
    slaptazodis: ""
  });
  const [username, setUsername] = useState("");
  const [setShowMessage] = useState(false);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function prisijungti() {
    if (formData.vardas !== "" && formData.slaptazodis !== "") {
      setUsername(formData.vardas);
      setFormData({ vardas: "", el_pastas: "", slaptazodis: "" });
      setIsLoggedIn(true);
      setShowMessage(true);
    } else {
      alert("Vardas ir Slaptažodis turėtų būti užpildyti!")
    }
  }

  
  function atsijungti() {
    setIsLoggedIn(false);
    setShowRegistration(false);
    setShowMessage(false);
  }

  function register() {
    if (formData.vardas !== "" && formData.el_pastas !== "" && formData.slaptazodis !== "") {
      const data = {
        name: formData.vardas,
        email: formData.el_pastas,
        password: formData.slaptazodis
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
    } else {
      alert("Visi laukai turi būti užpildyti!")
    }
  }

  return (
    <div className="LoginInfo">
      {isLoggedIn ? (
        <>
          <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="User Icon" className="user-icon" />
          <p>Hello, {username}</p>
          <button type="button" onClick={atsijungti}>
            Atsijungti
          </button>
        </>
      ) : showRegistration ? (
        <form>
          <label>
            Vardas:
            <input
              type="text"
              name="vardas"
              placeholder="Vardas"
              value={formData.vardas}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            El. paštas:
            <input
              type="email"
              name="el_pastas"
              placeholder="El. paštas"
              value={formData.el_pastas}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Slaptažodis:
            <input
              type="password"
              name="slaptazodis"
              placeholder="Slaptažodis"
              value={formData.slaptazodis}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Pakartokite slaptažodį:
            <input type="password"
              placeholder="Pakartokite slaptažodi"
              required
            />
          </label>
          <br />
          <button type="button" onClick={register} required>
            Registruotis
          </button>
          <button
            type="button"
            onClick={() => setShowRegistration(false)}
          >Atšaukti
          </button>
        </form>
      ) : (
        <form>
          <label>
            Vardas:
            <input
              type="text"
              name="vardas"
              value={formData.vardas}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Slaptažodis:
            <input
              type="password"
              name="slaptazodis"
              value={formData.slaptazodis}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="button" onClick={prisijungti}>
            Prisijungti
          </button>
          <button
            type="button"
            onClick={() => setShowRegistration(true)}
          >Registruotis
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;