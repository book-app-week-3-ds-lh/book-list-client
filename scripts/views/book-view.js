'use strict';

var app = app || {};

(function(module) {

  let bookView = {};

  bookView.init = () => {
    $('.container').hide();
    // $('.book-list').empty();
    $('#book-view').fadeIn('slow');
    console.log(app.Book.all);
    // debugger;
    app.Book.all.map(book => $('.book-list').append(book.toHtml()));
    $('#book-count .totalBooks').text(app.Book.bookCount());
  };

  module.bookView = bookView;
}(app));