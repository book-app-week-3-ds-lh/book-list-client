'use strict';

if(window.location.pathname !== '/') {
  page.base('/book-list-client');
}

page('/', ctx => app.Book.fetchAll(app.bookView.init));
// page('/about', app.aboutView.init);
page('/books/new', ctx => app.formView.init(ctx));
page('/books/updateView/:book_id', ctx => app.Book.fetchOne(ctx, app.updateView.init));
page('/books/:book_id', ctx => app.Book.fetchOne(ctx, app.detailView.init));


page();