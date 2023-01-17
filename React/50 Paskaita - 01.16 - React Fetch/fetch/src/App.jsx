import './App.css';
import { useState, useEffect } from 'react';
import Kalnas from './komponentai/Kalnas';

function App() {

  // const data = fetch('http://localhost:5000/kalnai').then(rez => rez.json()).then(rez => console.log(rez));

  const [data, setData] = useState();


  const fetchData = async () => {
    const fetchinamiDuomenys = await fetch('http://localhost:5000/kalnai')
      .then(rez => rez.json());
    setData(fetchinamiDuomenys);
    console.log(fetchinamiDuomenys);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {
        data ? data.map((item) =>
          <Kalnas
            key={item.id}
            kalnas={item}
          />
        ) :
          <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="loading" />
      }
    </>
  );
}

export default App;
