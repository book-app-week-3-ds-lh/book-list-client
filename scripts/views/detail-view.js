'use strict';

var app = app || {};

(function(module) {

  let detailView = {};

  detailView.init= () => {
    $('.container').hide();
    $('#detail-view').fadeIn('slow');
    let selected = Book.all.filter(el => el.book_id = ctx.params.book_id);
    $('.one-book').append(selected[0].toHtml());
  };

  module.detailView = detailView;
}(app));