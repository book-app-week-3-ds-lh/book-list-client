'use strict';

var app = app || {};

(function(module) {

  let detailView = {};

  detailView.init= (ctx) => {
    $('.container').hide();
    let template = Handlebars.compile($('#detail-view-template').text());
    let selected = app.Book.all.filter(el => el.book_id = ctx.params.book_id);
    console.log(selected);
    selected.forEach(x => $('.one-book').append(template(x)));
    $('#detail-view').fadeIn('slow');
  };

  module.detailView = detailView;
}(app));