import React, { useState } from "react";

function LogOn(props) {
  const [vardas, setVardas] = useState("");
  const [slaptazodis, setSlaptazodis] = useState("");

  function prisijungti() {
    props.prijungti();
    setVardas("");
    setSlaptazodis("");
  }

  return (
    <div className="LoginInfo">
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
    </div>
  );
}

export default LogOn;
