'use strict';

var app = app || {};

(function(module) {

  let bookView = {};

  bookView.initIndexPage= () => {
    $('.container').hide();
    $('.book-count').show();
    $('.book-view').fadeIn('slow');
    app.Book.all.map(book => $('.book-list').append(book.toHtml()));
  };

  module.bookView = bookView;
}(app));