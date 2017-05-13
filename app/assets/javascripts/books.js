// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

//battle plan from meeting with cernan on 05/11/2017
// add book show via js through the methods he taught, the constructor and the let and this
// add form with the LET formHTML = the formHTML
// watch video

//05/13/2017 battle plan!!! almost done home stretch
//finish show page, figure out why its coming undefined, look at your constructor, its not tying in..?
//^check rails and .forEach
//add create form
//add click event to rendetr form button

$(function(){
  $(".book_index").on("click", function(e){
    $.ajax({
      method: "GET",
      url: '/books'
    }).success(function(json){
  var $renderAllBooks = $("#appcontainer ol")
  $renderAllBooks.html(`<li><strong>Your Book Shelf</strong></li>`)
  json.forEach(function(books){
    $renderAllBooks.append(`<li class="booktitle" id="booklink"><a href="books/${books.id}">${books.title}</a></li>`);
})
booktitleClick()
})
    e.preventDefault();
})
});

function booktitleClick() {
  $(".booktitle").on("click", function(e) {
    e.preventDefault()
    $('#appcontainer ol').html('')
    fetch(`/books`)
    .then(res => res.json())
    .then(book => {
      book.forEach(book => {
      let newBook = new Book(book)
      let bookshowHTML = newBook.formatShow()
      $('#appcontainer ol').append(bookshowHTML)
    })
  })
})
};

$(function(){
  $("a.book_create").on("click", function(e){
    $.ajax({
      method: "GET",
      url: "/books/new"
    }).success(function(data){
      var $renderCreateBook = $("#appcontainer ol")
      $renderCreateBook.html(`<h1>a wild form appears</h1>`)
    })
    e.preventDefault();
  })
});

function Book(book) {
  this.id = book.id
  this.title = book.title
  this.author = book.author
  this.genre = book.genre
  this.description = book.description
  this.page_length = book.page_length
}

Book.prototype.formatIndex = function() {
  let bookindexHTML = `<h1>hiiii</h1>`
}

Book.prototype.formatShow = function() {
  let bookshowHTML = `
  <h1>Title: ${this.title}</h1>
  <h2>Author: ${this.author}</h2>
  <h2>Genre: ${this.genre}</h2>
  <h2>Description: ${this.description}</h2>
  <h2>Pages: ${this.page_length}</h2>
  `
  return bookshowHTML
}

Book.prototype.formatForm = function () {
  let bookformHTML = `
  <form class="new_book" id="new_book" action="/books" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="✓"><input type="hidden" name="authenticity_token" value="u8ZV5pod/iysuzf326lOOKUXHaqKefscK/VZBpfnR9E9x0DEBsgH695dNp7hWY5s13caHbJ7byibsRtleSlosQ==">

  <div class="field">
    <label for="book_title">Title</label>
    <input type="text" name="book[title]" id="book_title">
    <label for="book_author">Author</label>
    <input type="text" name="book[author]" id="book_author">
    <label for="book_genre">Genre</label>
    <input type="text" name="book[genre]" id="book_genre">
    <label for="book_description">Description</label>
    <input type="text" name="book[description]" id="book_description">
    <label for="book_page_length">Page length</label>
    <input type="text" name="book[page_length]" id="book_page_length">


    <label for="book_ratings_attributes_0_stars">Stars</label>
    <input type="text" name="book[ratings_attributes][0][stars]" id="book_ratings_attributes_0_stars">
  </div>

  <div class="actions">
    <input type="submit" name="commit" value="Create Book" data-disable-with="Create Book">
  </div>
</form>
  `
}
