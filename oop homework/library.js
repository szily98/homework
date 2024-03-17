/*1. Book Management: One can create instances of Book and FictionBook. 
Each book should have a title, author, and ISBN. 
Fiction Book should inherit from Book and include an additional genre.*/

class Book {
  constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
  }
};

class FictionBook extends Book {
  constructor(title, author, isbn, genre) {
      super(title, author, isbn);
      this.genre = genre;
  }

  displayInfo() {
      super.displayInfo();
      console.log(`Genre: ${this.genre}`);
  }
}
/*2. Library Operations: The system should allow us to create instances of Library. 
One can add both regular and fiction books to the Library. The library should keep track of added books.*/

class Library {
  constructor() {
      this.books = [];
  }

  addBook(book) {
      this.books.push(book);
      console.log(`Book "${book.title}" added to the library.`);
  }

  displayBooks() {
      console.log("Books in the library:");
      this.books.forEach(book => {
          if (book instanceof Book) {
              book.displayInfo();
              console.log("-----------------------------");
          }
      });
  }
}


/*4. Library Member Interaction: The system should allow us to create instances of Library Member. 
Each library member should have a name and a list of borrowed books. 
Library members should be able to borrow books from the library.*/


class LibraryMember {
  constructor(name) {
      this.name = name;
      this.borrowedBooks = [];
  }

  borrowBook(library, bookTitle) {
    let foundBook = library.books.find(book => book.title === bookTitle);
    if (foundBook) {
        this.borrowedBooks.push(foundBook);
        console.log(`"${foundBook.title}" borrowed by ${this.name}.`);
    } else {
        console.log(`"${bookTitle}" is not available in the library at the moment.`);
    }
}

displayBorrowedBooks() {
    console.log(`${this.name} has borrowed the following books:`);
    this.borrowedBooks.forEach(book => {
        console.log(`- ${book.title}`);
    });
}
};

/*5. Borrowing Books: The system should display the contents of books borrowed by a library member. 
The library should be able to keep track of books borrowed by library members.*/

let library = new Library();

let book1 = new Book("Rebecca", "Daphne du Maurier", "0380730405");
let book2 = new Book(
  "Mindez csupan szinjatek",
  "Lovasz Szilard",
  "9786155665257"
);
let fictionBook1 = new FictionBook(
  "Looking for Alaska",
  "John Green",
  "0061120081",
  "Young Adult"
);

library.addBook(book1);
library.addBook(fictionBook1);

let member1 = new LibraryMember("Rebecca Black");
member1.borrowBook(library, "Rebecca");
member1.borrowBook(library, "Looking for Alaska");

let member2 = new LibraryMember("Justin White");
member1.borrowBook(library, "Mindez csupan szinjatek");
member1.borrowBook(library, "Looking for Alaska");

member1.displayBorrowedBooks();
member2.displayBorrowedBooks();
