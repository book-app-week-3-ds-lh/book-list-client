'use strict';

var app = app || {};

(function(module) {

  let updateView = {};

  updateView.init= (ctx) => {
    console.log("first step", ctx);
    debugger;
    $('.container').hide();
    $('#update-view').empty();
    let template = Handlebars.compile($('#update-view-template').text());
    let selected = app.Book.all.filter(el => el.book_id = ctx.params.book_id);
    selected.forEach(x => $('#update-view').append(template(x)));
    $('#update-view').fadeIn('slow');
    $('#update-button').on('submit', updateView.update);
  };

  updateView.update = event => {
    console.log('hit update')
    event.preventDefault();
    let book = new app.Book({
      title: $('#book-title').val(),
      author: $('#book-author').val(),
      image_url: $('#book-image-url').val(),
      isbn: $('#book-isbn').val(),
      description: $('#book-description').val()
    });

    book.updateRecord(book_id);
  }

  module.updateView = updateView;
}(app));