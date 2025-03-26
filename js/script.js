const bookContainer = document.getElementById('book-container');

// JSON file URL from your GitHub repo
const jsonURL = 'https://jeels1512.github.io/Assignment04-JS/data.json';

fetch(jsonURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch JSON data');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');

      bookCard.innerHTML = `
        <img src="${book.cover}" alt="${book.title}" />
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Price:</strong> ${book.price}</p>
        <p>${book.description}</p>
      `;

      bookContainer.appendChild(bookCard);
    });
  })
  .catch(error => {
    console.error(error);
    bookContainer.innerHTML = "<p>Failed to load books. Please try again later.</p>";
  });
