const books = document.querySelector('#books');
const addCourseForm = document.querySelector('#addCourseForm');
const title = document.querySelector('#title');
const topic = document.querySelector('#topic');
const duration = document.querySelector('#duration');
const image = document.querySelector('#image');

const url = 'http://localhost:3000/books';


const getBooks = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      books.innerHTML = '';
      data.forEach((book) => {
        books.innerHTML += `
                <div class="card">
                  <img src="${book.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.topic}</p>
                    <p class="card-text">${book.duration}</p>
                    <button class="btn btn-danger" onclick="deleteBook(${book.id})">Delete</button>
                    <button class="btn btn-warning" onclick="editBook(${book.id})">Edit</button>
                  </div>
                </div>
              `;
      });
    });
};



const addBook = (e) => {
  e.preventDefault();
  const book = {
    title: title.value,
    topic: topic.value,
    duration: duration.value,
    image: image.value,
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      getBooks();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

const deleteBook = (id) => {
  fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      getBooks();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

//edit book and update info
const editBook = (id) => {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      books.innerHTML = `
        <div class="book">
          <img src="${data.image}" alt="${data.title}">
          <h3>${data.title}</h3>
          <p>${data.topic}</p>
          <p>${data.duration}</p>
          <form id="editBookForm">
            <input type="text" id="editTitle" value="${data.title}">
            <input type="text" id="editTopic" value="${data.topic}">
            <input type="text" id="editDuration" value="${data.duration}">
            <input type="text" id="editImage" value="${data.image}">
            <button class="btnUpdate" data-id="${data.id}">Update</button>
          </form>
        </div>
      `;
    });
};

const updateBook = (e) => {
  e.preventDefault();
  const id = e.target.dataset.id;
  const book = {
    title: document.querySelector('#editTitle').value,
    topic: document.querySelector('#editTopic').value,
    duration: document.querySelector('#editDuration').value,
    image: document.querySelector('#editImage').value,
  };

  fetch(`${url}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      getBooks();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

addCourseForm.addEventListener('submit', addBook);
books.addEventListener('click', (e) => {
  if (e.target.classList.contains('btnUpdate')) {
    updateBook(e);
  }
});

getBooks();

