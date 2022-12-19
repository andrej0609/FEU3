//3.1

/*
let task1 = document.querySelector('#task1');

for (let i = 0; i < data.filmai.length; i++) {
  let movie = data.filmai[i];
  let card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <h1 class="card-title">${movie.pavadinimas}</h1>
    <p class="card-IMDB">IMDB ${movie.IMDB}</p>
    <p class="card-actors">${movie.aktoriai}</p>
    <p class="card-producer">${movie.rezisierius}</p>
    <p class="card-tipe">${movie.tipas}</p>
    <p class="card-Duration">Trukme ${movie.trukme} min</p>
    <img src="${movie.paveiksliukas}" class="card-img" alt="...">
    <div class="card-body">
      <p class="card-text">${movie.aprasymas}</p>
     
  `;
  task1.appendChild(card);
}
*/

//3.2

let task2 = document.querySelector('#task2');
let button = document.createElement('button');
button.classList.add('btn-primary');
button.innerHTML = 'Generate all movies';
task2.appendChild(button);

button.addEventListener('click', function () {
  let task1 = document.querySelector('#task1');
  for (let i = 0; i < data.filmai.length; i++) {
    let movie = data.filmai[i];
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card-container">
      <h1 class="card-title">${movie.pavadinimas}</h1>
      <p class="card-IMDB">IMDB: ${movie.IMDB}</p>
      <p class="card-actors">${movie.aktoriai}</p>
      <p class="card-producer">${movie.rezisierius}</p>
      <p class="card-tipe">${movie.tipas}</p>
      <p class="card-Duration">Trukme: ${movie.trukme} min</p>
      <img src="${movie.paveiksliukas}" class="card-img" alt="...">
      <div>
        <p class="card-text">${movie.aprasymas}</p>
      </div>
    `;
    task1.appendChild(card);
  }
  button.style.display = 'none';
}
);

//3.3

let task3 = document.querySelector('#task3'); 
let form = document.createElement('form');
form.classList.add('form');
form.innerHTML = `
  <div class="form-group">
    <label for="Type">Select movie type</label>
    <select class="form-control" id="Type">
      <option>Active</option>
      <option>Comedy</option>
      <option>Horror</option>
      <option>Sci-Fi</option>
      <option>Thriller</option>
      <option>Western</option>
    </select>
  </div>
  <button type="submit" class="btn-primary">Find movie</button>
`;
task3.appendChild(form);










