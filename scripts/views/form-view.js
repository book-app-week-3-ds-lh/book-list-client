'use strict';

var app = app || {};

(function(module) {

  let formView = {};

  formView.init= () => {
    $('.container').hide();
    $('#form-view').fadeIn('slow');
    app.Book.all.map(book => $('#new-form').append(book.toHtml()));
  };

  module.formView = formView;
}(app));