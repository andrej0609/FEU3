import React, { useState, useEffect } from 'react';
import Kalnas from './Kalnas';

function Data() {
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
    <div>
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
  );
}

export default Data;