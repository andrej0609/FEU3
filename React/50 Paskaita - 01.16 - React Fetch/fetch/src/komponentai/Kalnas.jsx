const Kalnas = ({ kalnas: item }) => {
  return (
    <div>
      <h1>{item.pavadinimas}</h1>
      <p>Randasi: {item.lokacija}</p>
      <p>Aukštis: {item.aukstis}</p>
      <p>{item.arEsuIvykes ? 'Esu' : 'Nesu'}</p>
    </div>
  )
}

export default Kalnas