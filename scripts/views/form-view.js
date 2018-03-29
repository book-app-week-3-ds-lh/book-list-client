'use strict';

var app = app || {};

(function(module) {

  let formView = {};

  formView.init= () => {
    $('.container').hide();
    $('#form-view').fadeIn('slow');

    $('#form-view').on('submit', formView.submit);
  };

  formView.submit = event => {
    console.log('things')
    event.preventDefault();
    let book = new app.Book({
      title: $('#book-title').val(),
      author: $('#book-author').val(),
      image_url: $('#book-image-url').val(),
      isbn: $('#book-isbn').val(),
      description: $('#book-description').val()
    });

    book.insertRecord();
  }

  module.formView = formView;
}(app));