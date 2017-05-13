// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

//battle plan from meeting with cernan on 05/11/2017
// add book show via js through the methods he taught, the constructor and the let and this
// add form with the LET formHTML = the formHTML
// watch video

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
  $(document).on('click', ".booktitle", function(e) {
    e.preventDefault()
    $('#appcontainer').html('')
    let id = $(this).attr('data-id')
    fetch(`/books`)
    .then(res => res.json())
    .then(book => {
      let newBook = new Book(book)

      let bookshowHTML = newBook.formatShow()

      $('#appcontainer').append(bookshowHTML)
    })
  })
};
//
// function booktitleClick() {
// $(".booktitle").on("click", function(e){
//   // e.preventDefault()
//   //     $('#app-container').html('hiiiii')
//   //     // let id = $(this).attr('data-id')
//   //     // fetch(`/books/${id}.json`)
//   //     // .then(response => response.json())
//   //     // .then(book => {
//   //       let newBook = new Book(book)
//   //
//   //       let bookshowHTML = newBook.formatShow()
//   //
//   //       $('#app-container').append(bookshowHTML)
//   var $renderForm = $("#appcontainer ol")
//   $renderForm.html(`the book show appears!`) // needs to render a form, js erb? but like ewwwwwwww, no it didn't work not without remote: true
//   e.preventDefault();
// // })
// // })
// })
// };
// // };

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
//

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
  let bookshowHTML = `<h1>${this.title}</h1>
  <h2>${this.author}</h2>
  <h2>${this.genre}</h2>
  <h2>${this.description}</h2>
  <h2>${this.page_length}</h2>
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

//
// //post.prototype.
//
// // let Form =
//
// // what is const
//
// // try pushstate
//
// //try this
// // */
// // function textareaFunction(){
// // var r = document.createElement('span');
// // var y = document.createElement("TEXTAREA");
// // var g = document.createElement("IMG");
// // y.setAttribute("cols", "17");
// // y.setAttribute("placeholder", "message..");
// // g.setAttribute("src", "delete.png");
// // increment();
// // y.setAttribute("Name", "textelement_" + i);
// // r.appendChild(y);
// // g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
// // r.appendChild(g);
// // r.setAttribute("id", "id_" + i);
// // document.getElementById("myForm").appendChild(r);
// // }
// // /*
