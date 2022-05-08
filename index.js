// https://github.com/jsoto007/phase-1-fetch-lab

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const data = fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json))
  return data;
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

renderBooks(fetchBooks())

// document.addEventListener('DOMContentLoaded', function () {
//   fetchBooks();
// });