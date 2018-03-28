'use strict';

var app = app || {};
// $.getJSON('http://localhost:3000/api/v1/books').then( results => console.log(results));

(function(module){

  let API_URL = 'https://lh-ds-booklist.herokuapp.com';

  function Book(bookDataObj) {
    Object.keys(bookDataObj).forEach(key => {
      this[key] = bookDataObj[key];
    }, this);
  }

  Book.all = [];

  Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
  };

  Book.loadAll = bookData => {
    bookData.sort((a, b) => (a.title) - (b.title));
    Book.all = bookData.map(x => new Book(x));
    return Book.all;
  };

  Book.fetchAll = callback => {
    $.getJSON(`${API_URL}/api/v1/books`)
      .then(results => {
        Book.loadAll(results);
        callback();
      })
      .catch(app.errorView.initErrorPage);
  };

  module.Book = Book;
})(app);