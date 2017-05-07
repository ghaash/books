// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(function(){
  $("a.book_index").on("click", function(e){
    $.ajax({
      method: "GET",
      url: this.href
    }).success(function(json){
  var $ol = $(".books ol")
  $ol.html("<li><strong>Your Book Shelf</strong></li>")
  json.forEach(function(books){
    $ol.append(`<li class="booktitle"><a class="booklink" href="books/${books.id}">${books.title}</a></li>`);
    })
})
    e.preventDefault();
})
});
//
// $(function(){
//   $("a.book_index").on("click", function(e){
//     $.ajax({
//       method: "GET",
//       url: this.href
//     }).success(function(json){
//   var $ol = $("div.booksshow ol")
//   $ol.html("<li><strong>Your Book Shelf</strong></li>")
//   json.forEach(function(books){
//     $ol.append(`<li class="booktitle">
//         <a class="booklink" href="${books.id}">${books.title}</a>
//       </li>`);
//     })
// })
//     e.preventDefault();
// })
// });
