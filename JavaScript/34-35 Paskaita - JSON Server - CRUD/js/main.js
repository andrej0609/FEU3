
const books = document.querySelector('#books');
const addBookForm = document.querySelector('#addBookForm');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const image = document.querySelector('#image');

const url = 'http://localhost:3000/books';

// GET
const getBooks = () => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      books.innerHTML = data.map(book => `
        <div class="book">
          <img src="${book.image}" alt="${book.title}">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <p>${book.year}</p>
          <button class="btnDelete" data-id="${book.id}">Delete</button>
          <button class="btnEdit" data-id="${book.id}">Edit</button>
          <button class="btnMoreInfo" data-id="${book.id}">More info</button>
        </div>
      `).join('');
    });
};

// POST
const addBook = (e) => {
  e.preventDefault();

  const book = {
    title: title.value,
    author: author.value,
    year: year.value,
    image: image.value
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      getBooks();
    });

  addBookForm.reset();
};

// DELETE
const deleteBook = (id) => {
  fetch(`${url}/${id}`, {
    method: 'DELETE'
  })
};

// edit book and update info
const editBook = (id) => {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
      books.innerHTML = `
        <div class="book">
          <img src="${data.image}" alt="${data.title}">
          <h3>${data.title}</h3>
          <p>${data.author}</p>
          <p>${data.year}</p>
          <form id="editBookForm">
            <input type="text" id="editTitle" value="${data.title}">
            <input type="text" id="editAuthor" value="${data.author}">
            <input type="text" id="editYear" value="${data.year}">
            <input type="text" id="editImage" value="${data.image}">
            <button class="btnUpdate" data-id="${data.id}">Update</button>
          </form>
        </div>
      `;
    });
};

// update book info
books.addEventListener('click', (e) => {
  if (e.target.classList.contains('btnUpdate')) {
    const editTitle = document.querySelector('#editTitle');
    const editAuthor = document.querySelector('#editAuthor');
    const editYear = document.querySelector('#editYear');
    const editImage = document.querySelector('#editImage');

    const book = {
      title: editTitle.value,
      author: editAuthor.value,
      year: editYear.value,
      image: editImage.value
    };

    fetch(`${url}/${e.target.dataset.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        getBooks();
      });
  }
});


// More info
const moreInfo = (id) => {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
      books.innerHTML = `
        <div class="book">
          <img src="${data.image}" alt="${data.title}">
          <h3>${data.title}</h3>
          <p>${data.author}</p>
          <p>${data.year}</p>
          <p>${data.description}</p>
          <p>Price:${data.price}</p>
          <p>Language: ${data.language}</p>
          <p>Pages: ${data.pages}</p>
          <p>${data.publisher}</p>
          <button class="btnBack">Back</button>
        </div>
      `;
    });
};

getBooks();
// Event listeners

addBookForm.addEventListener('submit', addBook);

books.addEventListener('click', (e) => {
  if (e.target.classList.contains('btnDelete')) {
    deleteBook(e.target.dataset.id);
  }

  if (e.target.classList.contains('btnEdit')) {
    editBook(e.target.dataset.id);
  }

  if (e.target.classList.contains('btnMoreInfo')) {
    moreInfo(e.target.dataset.id);
  }

  if (e.target.classList.contains('btnBack')) {
    getBooks();
  }
});
