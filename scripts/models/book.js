'use strict';

var app = app || {};

(function(module){

  // let API_URL = 'https://lh-ds-booklist.herokuapp.com';

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
    $.get('http://localhost:3000/api/v1/books')

      .then(results => {
        Book.loadAll(results);
        callback();
      })
      .catch(app.errorView.init);
  };

  Book.fetchOne = (ctx, callback) => {
    $.get(`http://localhost:3000/api/v1/books/${ctx.params.book_id}`)
      .then(results => {
        Book.loadAll(results);
        callback(ctx);
      })
      .catch(app.errorView.init);
  }

  Book.prototype.insertRecord = function(callback) {
    console.log('sup');
    $.post('http://localhost:3000/api/v1/books', {title: this.title, author: this.author, image_url: this.image_url, isbn: this.isbn, description: this.description})
      .then(data => {
        console.log(data);
        if(callback) callback();
      });
      debugger;
  };

  module.Book = Book;
})(app);