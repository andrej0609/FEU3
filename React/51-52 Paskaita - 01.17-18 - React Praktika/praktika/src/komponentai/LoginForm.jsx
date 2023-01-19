import React, { useState } from "react";

const LoginForm = ({ isLoggedIn, setIsLoggedIn, showRegistration, setShowRegistration }) => {
  const [formData, setFormData] = useState({
    vardas: "",
    el_pastas: "",
    slaptazodis: ""
  });
  const [username, setUsername] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function prisijungti() {
    if (formData.vardas !== "" && formData.slaptazodis !== "") {
      fetch("http://localhost:5000/vartotojai")
        .then(res => res.json())
        .then(response => {
          const user = response.find(
            user => user.name === formData.vardas && user.password === formData.slaptazodis
          );
          if (user) {
            setIsLoggedIn(true);
            setUsername(formData.vardas);
            setShowRegistration(false);
            setShowMessage(false);
          } else {
            setShowMessage(true);
          }
        })
        .catch(error => console.error("Error:", error));
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
      alert("Visi laukai turi būti užpildyti!");
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
          <button type="button" onClick={register}>
            Registruotis
          </button>
        </form>
      ) : (
        <>
          {showMessage && <p className="error-message">Neteisingas vardas arba slaptažodis!</p>}
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
            <button type="button" onClick={prisijungti}>
              Prisijungti
            </button>
            <button type="button" onClick={() => setShowRegistration(true)}>
              Registruotis
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default LoginForm;


