'use strict';

var app = app || {};

(function(module){

$.getJSON('http://localhost:3000/api/v1/books').then( results => console.log(results));

function Book (bookDataObj) {
    this.title = bookDataObj.title;
    this.author = bookDataObj.author;
    this.isbn = bookDataObj.isbn;
    this.image_url = bookDataObj.image_url;
    this.description = bookDataObj.description
}

Book.all = [];

Book.prototype.toHTML = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
};

Book.loadAll = bookData => {
    bookData.sort((a, b) => (a.title) - (b.title));
    Book.all = bookData.map(x => new Book(x));
    return Book.all;
  };

  Book.fetchAll = callback => {
    $.get('/api/v1/books')
      .then(results => {
        Book.loadAll(results);
        callback();
      })
      //on failure needs errorCallback (step 9)
  };

module.Book = Book;
})(app);