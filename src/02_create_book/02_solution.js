// Code your solution here
/* eslint-disable no-unused-vars, no-prototype-builtins */
function createBook(id, title, author, price) {
  const book = Object.create(createBook.prototype);

  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];

  return book;
}

createBook.prototype = {
  getInfo: function () {
    return this.title + ' by ' + this.author;
  },
  getPrice: function () {
    return this.price;
  },
  addRating: function (stars) {
    this.rating.push(stars);
  },
  getRating: function () {
    if (this.rating.length === 0) {
      return 'No ratings yet.';
    }

    const sum = this.rating.reduce((total, stars) => total + stars.length, 0);
    const average = sum / this.rating.length;
    return average.toFixed(1);
  },
};
