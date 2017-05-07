// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(function(){
  $("a.book_index").on("click", function(e){
    $.ajax({
      method: "GET",
      url: this.href
    }).success(function(json){
  var $renderBooks = $(".books ol")
  $renderBooks.html(`<li><strong>Your Book Shelf</strong></li>`)
  json.forEach(function(books){
    $renderBooks.append(`<li class="booktitle"><a class="booklink" href="books/${books.id}">${books.title}</a></li>`);
    })
})
    e.preventDefault();
})
});

// $(function(){
//   $("a.booklink").on("click", function(e){
//     $.ajax({
//       method: "GET",
//       url: this.href
//     }).success(function(json){
//       var
//     })
//   })
//
// })
