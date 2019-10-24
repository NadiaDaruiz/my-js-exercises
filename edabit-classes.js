// #1. Book Shelf
/* Create a Book constructor that has two properties :

- Title
- Author

and two methods:

- A getter for title that returns: "Title: " + the instance title.
- A getter for the author that returns: "Author: " + the instance author.
and instantiate this constructor by creating 3 new books:

- Pride and Prejudice - Jane Austen (PP)
- Hamlet - William Shakespeare (H)
- War and Peace - Leo Tolstoy (WP)

Name the new object instances PP, H, and WP, respectively.

For instance, if I instantiated the following book using this Book constructor function:

Harry Potter - J.K. Rowling (HP) */

class Book {
  constructor(author, title) {
    this.author = author;
    this.title = title;
  }

  getTitle() {
    return "Title: " + this.title;
  }

  getAuthor() {
    return "Author: " + this.author;
  }
}

const PP = new Book("Jane Austen", "Pride and Prejudice");
const H = new Book("William Shakespeare", "Hamlet");
const WP = new Book("Leon Tolstoy", "War and Peace");
const HP = new Book("J.K Rowling", "Harry Potter");

console.log(PP);
console.log(WP);
console.log(H);
console.log(HP);
