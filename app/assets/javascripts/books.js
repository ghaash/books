// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(function(){
  $(".book_index").on("click", function(e){
    $.ajax({
      method: "GET",
      url: this.href
    }).success(function(json){
  var $renderAllBooks = $("#appcontainer ol")
  $renderAllBooks.html(`<li><strong>Your Book Shelf</strong></li>`)
  json.forEach(function(books){
    $renderAllBooks.append(`<li class="booktitle"><a class="booklink" href="books/${books.id}">${books.title}</a></li>`);
  })
})
    e.preventDefault();
})
});

$(".book_create").on("click", function(e){
  alert("you clicked me successfully")
  e.preventDefault();
})

$(function(){
  $("a.book_create").on("click", function(e){
    $.ajax({
      method: "GET",
      url: this.href
    }).success(function(json){
      var $renderCreateBook = $("#appcontainer ol")
      $renderCreateBook.html("fff")
    })
  })
})

// $(".booklink").on("click", function(e){
//   alert("you clicked me successfully")
//   e.preventDefault();
// });

// $(function(){
//   $("a.booklink").on("click", function(e){
//     $.ajax({
//       method: "GET",
//       url: this.href // probably wrong
//     }).success(function(json){
//       var $renderOneBook = $("#appcontainer ol")
//       $renderOneBook.html("fff")
//       json.forEach(function(books){
//         $renderOneBook.replaceAll(`<li class="booktitle"><a class="booklink" href="books/${books.id}">${books.title}</a></li>`);
//       })
//     })
//     e.preventDefault();
//   })
// });

//built function to render a new book
