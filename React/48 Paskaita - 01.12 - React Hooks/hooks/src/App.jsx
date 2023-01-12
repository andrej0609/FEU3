import './App.css';
import React, { useState, useEffect } from 'react';
import SmallText from './components/SmallText';

const App = () => {
  //const geraNuotaika = useState(true)[0];
  //count setGeraNuotaika = useState(true)[1];
  const [geraNuotaika, setGeraNuotaika] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const handleGeraNuotaika = () => {
    setGeraNuotaika(!geraNuotaika);
  }

  useEffect(() => {
    console.log('Keičiasi paspaudimų skaičius');
  }, [clickCount]);


  return (
    <>
      <h1>Labas rytas</h1>
      <button onClick={handleGeraNuotaika}>Nuotaikos reguliatorius</button>
      <p>Šendien yra kažkoks {geraNuotaika ? 'gražus' : 'bjaurus'} rytas.</p>
      {!geraNuotaika &&
        <SmallText
          text='Eik namo ir ne gadink sau nuotaikos ☺☻♂'
          clickCount={clickCount}
          setClickCount={setClickCount}
        />
      }
    </>
  );
}

export default App;
