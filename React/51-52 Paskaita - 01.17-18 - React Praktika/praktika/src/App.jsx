import './App.css';
import Header from './komponentai/Header';
import Forma from './komponentai/Forma';
import Footer from './komponentai/Footer';
import React, { useState, useEffect } from 'react';
import Kalnas from './komponentai/Kalnas';


const App = () => {
  const [kalnas, setKalnas] = useState(null);

  const fetchData = async () => {
    const fetchinamiDuomenys = await fetch('http://localhost:5000/kalnai')
      .then(res => res.json());
    console.log(fetchinamiDuomenys);
    setKalnas(fetchinamiDuomenys);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Forma />
      <div className='korteles'>
        {
          kalnas ?
            kalnas.map((kalnas) =>
              <Kalnas
                key={kalnas.id}
                kalnas={kalnas}
              />
            ) :
            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" />
        }
      </div>
      <Footer />
    </>
  );
}

export default App;