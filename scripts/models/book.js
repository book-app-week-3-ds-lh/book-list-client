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

  Book.bookCount = () => {
    return Book.all.length;
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
    $.post('http://localhost:3000/api/v1/books', {title: this.title, author: this.author, image_url: this.image_url, isbn: this.isbn, description: this.description})
      .then(data => {
        console.log(data);
        if(callback) callback();
      });
  };

  Book.prototype.deleteRecord = function(ctx, callback) {
    console.log(ctx);
    // debugger;
    $.ajax({
      url: `/http://localhost:3000/api/v1/books/${ctx.params.book_id}`,
      method: 'DELETE'
    })
      .then(console.log)
      .then(callback);
  };

  Book.prototype.updateRecord = book_id => {
    console.log(book_id);
    debugger;
    $.ajax({
      url: `/http://localhost:3000/api/v1/books/${book_id}`,
      method: 'PUT',
      data: {
        title: this.title,
        author: this.author,
        isbn: this.isbn,
        image_url: this.image_url,
        description: this.description,
        book_id: this.book_id
      }
    })
      .then(app.bookView.init)
      .catch(app.errorView.init);
  };

  module.Book = Book;
})(app);