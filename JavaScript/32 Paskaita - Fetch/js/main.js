//     JSON
/*syntax:
  JSON - Java Script Object Notation
  JSON raktiniai zodziai yra tarp dvigubu kabuciu.
  JSON ignoruoja/nesaugo metodu.

*/

const object = {
  raktu: 'reiksme',
  tiesa: true,
  skaicius: 123,
  masyvas: [1, 2, 3, 4, 5],
  objektas: {
    hi: 'hello',
    bye: 'goodbye'
  },
  funkcija: function () {
    console.log('labas');
  }
}
const objectAsJSON = JSON.stringify(object);
console.log(objectAsJSON);




//      Fetch
/*syntax:
fetch('url');
.then(response => response.text()) || JSON.parse(response)
.then(data => {
  console.log(data);
*/
/*
  Fetch - skirtas pasiiimti duomenis is nurodyto failo arba url.
*/
//data.txt
{
  const data = fetch('data/data.txt')
    .then(response => response.text())
    .then(data => {
      console.log(data);
      let dataAsArray = data.split('\n');
      console.log(dataAsArray);
      //dataAsArray = dataAsArray.map(item => item.split(' '));
      // console.log(dataAsArray);
      dataAsArray.forEach(line => {
        document.querySelector('#tekstinis').innerHTML += `<p>${line}</p>`;
      });
    });
}

//data.json
{
  fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
      Object.keys(data).forEach(key => {
        document.querySelector('#jsonSimle').innerHTML += `<p>${data[key]}</p>`;
      });
    });
}

//movies.json
{
  fetch('data/movies.json')
    .then(response => response.json())
    .then(data => {
      data.movies.forEach(movie => {
        document.querySelector('#jsonMovies').innerHTML += `
      <div class="movie">
        <h2>${movie.title}</h2>
        <img src="${movie.poster}" alt="${movie.title}">
        <p> Movie length: ${Math.floor(movie.length / 60)}h ${movie.length % 60}min</p>
        <p>Actors: ${movie.actors.join(', ')}</p>
      </div>
      `;
      });
    });
}

//API - Application Programming Interface - programavimo interfeisas


//random user
{
  document.querySelector('#randomUserBtn').addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        document.querySelector('#randomUser').innerHTML = `
    <div class="user">
      <img src="${data.results[0].picture.large}" alt="${data.results[0].name.first}">
      <h2>${data.results[0].name.first} ${data.results[0].name.last}</h2>
      <p>Age: ${data.results[0].dob.age}</p>
      <p>Address: ${data.results[0].location.street.number} ${data.results[0].location.street.name}, ${data.results[0].location.city}, ${data.results[0].location.country}</p>
      <p>Email: ${data.results[0].email}</p>
    </div>
    `;
      });
  });
}

