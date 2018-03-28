'use strict';

var app = app || {};

(function(module) {

  let detailView = {};

  detailView.init= () => {
    $('.container').hide();
    $('#book-count').show();
    $('#detail-view').fadeIn('slow');
    let selected = Book.all.filter(el => el.book_id = ctx.params.book_id);
    $('.one-book').append(selected[0].toHtml());
  };

  module.bookView = detailView;
}(app));