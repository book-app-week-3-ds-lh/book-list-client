'use strict';

page('/', app.bookView.init);
page('/about', app.aboutView.init);
page('/books/:book_id', ctx => Book.fetchOne(ctx, app.detailView.init));
page('/books/new', app.formView.init);

page();