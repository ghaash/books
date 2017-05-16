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

$(() => {
  bindClickHandlers()
})

const bindClickHandlers = () => {
  $('.book_index').on('click', e => {
    e.preventDefault()
    history.pushState(null, null, "books")
    getBooks()

  })

  $(document).on('click', ".booktitle", function(e) {
    e.preventDefault()
    $('#appcontainer').html('')
    let id = $(this).attr('data-id')
    fetch(`/books/${id}.json`)
    .then(res => res.json())
    .then(book => {
      let newBook = new Book(book)

      let bookHtml = newBook.formatShow()

      $('#appcontainer').append(bookHtml)
    })
  })

  $(document).on('click', 'next-book', function() {
    let id = $(this).attr('data-id')
    fetch(`books/${id}/next`)
  })
}

  // $(document).on('click', '.new_book', function(e){
  //   e.preventDefault()
  //   alert("Hiiiiii")
  //   // add fetch?
  // })

$(document).on('submit', '.new_book', function(e) {
   e.preventDefault()
  $.ajax({
    type: this.method,
    url: this.action,
    data: $(this).serialize(),
    success: function(response){

      //       var $renderCreateBook = $("#appcontainer ol")
      //       $renderCreateBook.html(`<h1>a wild form appears</h1>`)

      // $("#book_title").val("");
      var $renderForm = $("#appcontainer ol")
      $renderForm.append(response);
    }
  })
})

// $(function(){
//   $(".new_book").on("submit", function(e){
//     $.ajax({
//       type: this.method,
//       url: this.action,
//       data: $(this).serialize();, // either JSON or querystring serializing
//       success: function(response){
//         $("#book_title", "#book_author", "#book_genre", "#book_description", "#book_page_length", "#book_ratings_attributes_0_stars").val("");
//         var $ol = $("appcontainer ol")
//         $ol.append(response);
//       }
//     });
//     e.preventDefault();
//   })
// });

const getBooks = () => {
  fetch(`/books.json`)
    .then(res => res.json())
    .then(books => {
       $('#appcontainer').html('')
       books.forEach(book => {
         let newBook = new Book(book)

         let bookHtml = newBook.formatIndex()

         $('#appcontainer').append(bookHtml)
       })
    })
}

// // $(function(){
// //   $(".book_index").on("click", function(e){
// //     $.ajax({
// //       method: "GET",
// //       url: '/books'
// //     }).success(function(json){
// //       //refactor later using not var
// //       // let newBook = Book(book)
// //       // let bookindexHTML = newBook.formatIndex()
// //       // $('#appcontainer ol').append(bookindexHTML)
// //   var $renderAllBooks = $("#appcontainer ol")
// //   $renderAllBooks.html(`<li><strong>Your Book Shelf</strong></li>`)
// //   json.forEach(function(books){
// //     // let newBook = new Book(books)
// //     // let bookindexHTML = newBook.formatIndex()
// //     // $('#appcontainer ol').append(bookindexHTML)
// //   $renderAllBooks.append(`<li class="booktitle" id="booklink"><a href="books/${books.id}" data-id="${books.id}">${books.title}</a></li>`);
// // })
// // booktitleClick()
// // })
// //     e.preventDefault();
// // })
// // });
//
// $(function(){
//   $(".book_index").on("click", function(e){
//     e.preventDefault()
//     fetch(`/books`)
//     .then(res => res.json())
//     then(book = {
//       book.forEach(book => {
//         let newBook = new Book(book)
//         let bookindexHTML = newBook.formatIndex()
//           $(`#appcontainer ol`).append(bookindexHTML)
//       })
//     })
//   })
// })
//
// // function booktitleClick() {
//   // $(".booktitle").on("click", function(e) {
//   $(document).on("click", ".booktitle", function(e){
//     e.preventDefault()
//     $('#appcontainer ol').html('')
//     // need a let book = something for it to pass in fetch
//     // let id = $(this).attr('data-id')
//     // fetch(`/books/${id}.json`)
//     fetch(`/books`)
//     .then(res => res.json())
//     .then(book => {
//       book.forEach(book => {
//       let newBook = new Book(book)
//       let bookshowHTML = newBook.formatShow()
//       $('#appcontainer ol').append(bookshowHTML)
//     })
//   })
// })
// };
//
// $(function(){
//   $("a.book_create").on("click", function(e){
//     $.ajax({
//       method: "GET",
//       url: "/books/new"
//     }).success(function(data){
//       var $renderCreateBook = $("#appcontainer ol")
//       $renderCreateBook.html(`<h1>a wild form appears</h1>`)
//     })
//     e.preventDefault();
//   })
// });

// $(function(){
//   $(".new_book").on("submit", function(e){
//     $.ajax({
//       type: this.method,
//       url: this.action,
//       data: $(this).serialize();, // either JSON or querystring serializing
//       success: function(response){
//         $("#book_title", "#book_author", "#book_genre", "#book_description", "#book_page_length", "#book_ratings_attributes_0_stars").val("");
//         var $ol = $("appcontainer ol")
//         $ol.append(response);
//       }
//     });
//     e.preventDefault();
//   })
// });

function Book(book) {
  this.id = book.id
  this.title = book.title
  this.author = book.author
  this.genre = book.genre
  this.description = book.description
  this.page_length = book.page_length
  this.ratings = book.ratings
}

Book.prototype.formatIndex = function() {
  let bookHtml = `
  <li>
  <a href="books/${this.id}" data-id="${this.id}"  class="booktitle">${this.title}</a>
  </li>`
  return bookHtml
}

Book.prototype.formatShow = function() {
  let bookHtml = `
  <li><strong><h1>Your Book Shelf</h1></strong></li>
  <h2>Title: ${this.title}</h2>
  <h3>Author: ${this.author}</h3>
  <h3>Genre: ${this.genre}</h3>
  <h3>Description: ${this.description}</h3>
  <h3>Pages: ${this.page_length}</h3>
  <h3>Ratings: ${this.ratings}</h3>
  `
  return bookHtml
}

// <button class="next-book">Next</button>

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
