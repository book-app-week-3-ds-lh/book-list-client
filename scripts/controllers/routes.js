'use strict';

if(window.location.pathname !== '/') {
  page.base('/book-list-client');
}

page('/', app.bookView.init);
page('/about', app.aboutView.init);
page('/books/:book_id', ctx => Book.fetchOne(ctx, app.detailView.init));
page('/books/new', app.formView.init);

page();