import React, { useState } from 'react';

function Forma() {
  const [mountainData, setMountainData] = useState({
    pavadinimas: '',
    img: '',
    lokacija: '',
    aukstis: '',
    arEsuIveikes: false
  });

  const handleChange = (event) => {
    setMountainData({
      ...mountainData,
      [event.target.name]: event.target.value
    });
  }

  const handleCheckboxChange = (event) => {
    setMountainData({
      ...mountainData,
      [event.target.name]: event.target.checked
    });
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const response = fetch('http://localhost:5000/kalnai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(mountainData)
    });
    console.log(response);

  }

  return (
    <>
      <h1>Add your visited/not visited mountain</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pavadinimas">Pavadinimas</label>
        <input
          type="text"
          name="pavadinimas"
          id="pavadinimas"
          value={mountainData.pavadinimas}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="img">Nuotrauka</label>
        <input
          type="text"
          name="img"
          id="img"
          value={mountainData.img}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="lokacija">Lokacija</label>
        <input
          type="text"
          name="lokacija"
          id="lokacija"
          value={mountainData.lokacija}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="aukstis">Aukštis metrais</label>
        <input
          type="number"
          name="aukstis"
          id="aukstis"
          value={mountainData.aukstis}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="arEsuIveikes">Ar esu įveikęs?</label>
        <input
          type="checkbox"
          name="arEsuIveikes"
          id="arEsuIveikes"
          checked={mountainData.arEsuIveikes}
          onChange={handleCheckboxChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Forma;