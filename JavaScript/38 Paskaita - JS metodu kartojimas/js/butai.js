const butoNumeris = 27;
const butoAukstas = butoNumeris % 27 === 0 ? 9 : Math.ceil((butoNumeris % 27) / 3);

class Butas {
  constructor(butoNumeris, bendrasPlotas, kambariuSkaicius, pardavimoKaina, telefonoNumeris) {
    this.butoNumeris = butoNumeris;
    this.bendrasPlotas = bendrasPlotas;
    this.kambariuSkaicius = kambariuSkaicius;
    this.pardavimoKaina = pardavimoKaina;
    this.telefonoNumeris = telefonoNumeris;
  }
}

const url = 'http://localhost:3000/butai';
const butai = [];

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach(butas => {
      butai.push(new Butas(butas.butoNumeris, butas.bendrasPlotas, butas.kambariuSkaicius, butas.pardavimoKaina, butas.telefonoNumeris));
    });
  });

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const kambariuSkaicius = formData.get('kambariuSkaicius');
  const aukstoNumerisNuo = formData.get('aukstoNumerisNuo');
  const aukstoNumerisIki = formData.get('aukstoNumerisIki');
  const kainaIki = formData.get('kainaIki');
  const filteredButai = butai.filter(butas => {
    return butas.kambariuSkaicius == kambariuSkaicius && butas.butoNumeris >= aukstoNumerisNuo && butas.butoNumeris <= aukstoNumerisIki && butas.pardavimoKaina <= kainaIki;
  });
  console.log(filteredButai);
});
