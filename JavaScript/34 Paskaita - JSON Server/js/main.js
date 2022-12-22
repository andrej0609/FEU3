// Gauname knygų sąrašo elementą
const books = document.querySelector('#books');

// Gauname formos elementą, skirtą pridėti knygą
const addBookForm = document.querySelector('#addBookForm');

// Gauname formos laukelius, skirtus įvesti knygos informaciją
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const image = document.querySelector('#image');

// Nustatome API URL
const url = 'http://localhost:3000/books';

// Gauname visų knygų sąrašą
const getBooks = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Išvalome knygų sąrašo elementą
      books.innerHTML = '';

      // Iteruojame per knygas ir pridedame jas prie knygų sąrašo elemento
      data.forEach((book) => {
        books.innerHTML += `
                <div class="card">
                  <img src="${book.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.author}</p>
                    <p class="card-text">${book.year}</p>
                    <button class="btn btn-danger" onclick="deleteBook(${book.id})">Ištrinti</button>
                    <button class="btn btn-warning" onclick="editBook(${book.id})">Redaguoti</button>
                  </div>
                </div>
              `;
      });
    });
};

// Pridedame naują knygą
const addBook = (e) => {
  // Nutraukiame standartinį formos siuntimą
  e.preventDefault();

  // Sukuriame knygos objektą iš formos laukelių reikšmių
  const book = {
    title: title.value,
    author: author.value,
    year: year.value,
    image: image.value,
  };

  // Siunčiame POST užklausą API, kad pridėtume naują knygą
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Atnaujiname knygų sąrašą
      getBooks();
    });
};

// Ištriname knygą
const deleteBook = (id) => {
  // Siunčiame DELETE užklausą API, kad ištrintume knygą pagal ID
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Atnaujiname knygų sąrašą
      getBooks();
    });
};

// Redaguojame knygą
const editBook = (id) => {
  // Siunčiame GET užklausą API, kad gautume knygos informaciją pagal ID
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      // Atnaujiname formos laukelių reikšmes su gauta knygos informacija
      title.value = data.title;
      author.value = data.author;
      year.value = data.year;
      image.value = data.image;

      // Atnaujiname formos HTML, kad galėtume redaguoti knygą
      addBookForm.innerHTML = `
              <div class="form
                <label for="title">Pavadinimas</label>
                <input type="text" name="title" id="title" class="form-control" value="${data.title}" required>
              </div>
              <div class="form
                <label for="author">Autorius</label>
                <input type="text" name="author" id="author" class="form-control" value="${data.author}" required>
              </div>
              <div class="form
                <label for="year">Metai</label>
                <input type="text" name="year" id="year" class="form-control" value="${data.year}" required>
              </div>
              <div class="form
                <label for="image">Nuotrauka</label>
                <input type="text" name="image" id="image" class="form-control" value="${data.image}" required>
              </div>
              <button type="submit" class="btnAddBook" onclick="updateBook(${data.id})">Atnaujinti knygą</button>
            `;
    });
};

// Atnaujiname knygą
const updateBook = (id) => {
  // Sukuriame knygos objektą iš formos laukelių reikšmių
  const book = {
    title: title.value,
    author: author.value,
    year: year.value,
    image: image.value,
  };

  // Siunčiame PUT užklausą API, kad atnaujintume knygą pagal ID
  fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Atnaujiname knygų sąrašą
      getBooks();
    });
};

// Gauname visų knygų sąrašą prisijungus
getBooks();

// Pridedame event listener formai, kad galėtume pridėti knygą
addBookForm.addEventListener('submit', addBook);
