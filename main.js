const myLibrary = [
    new Book('The Hobbit', 'J.R.R. Tolkien', 295, true),
    new Book('1984', 'George Orwell', 328, false),
    new Book('To Kill a Mockingbird', 'Harper Lee', 281, true),
    new Book('Pride and Prejudice', 'Jane Austen', 279, false)
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.dataset.index = index;

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <button class="${book.read ? 'read' : ''}" onclick="toggleRead(${index})">
                ${book.read ? 'Read' : 'Not Read'}
            </button>
            <button onclick="removeBook(${index})">Remove</button>
        `;

        bookContainer.appendChild(bookCard);
    });
}

function toggleRead(index) {
    const book = myLibrary[index];
    book.read = !book.read;
    displayBooks();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault(); 

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);

    document.getElementById('modal').style.display = 'none';
    document.getElementById('book-form').reset();
});

document.getElementById('new-book-btn').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'flex';
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

displayBooks();


