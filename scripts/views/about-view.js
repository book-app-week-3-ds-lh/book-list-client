'use strict';

var app = app || {};

(function(module) {

  let aboutView = {};

  aboutView.init = () => {
    $('.container').hide();
    $('#book-count').show();
    $('#about-view').fadeIn('slow');
  };

  module.bookView = aboutView;
}(app));