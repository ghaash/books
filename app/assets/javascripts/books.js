// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(function(){
  $("a.book_index").on("click", function(e){
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

$(function(){
  $("a.booklink").on("click", function(e){
    $.ajax({
      method: "GET",
      url: this.href
    }).success(function(json){
      var $renderOneBook = $(".inner ol")
      $renderOneBook.html("")
      json.forEach(function(books){
        debugger
        $renderOneBook.replaceAll(`<li class="booktitle"><a class="booklink" href="books/${books.id}">${books.title}</a></li>`);
      })
    })
    e.preventDefault();
  })
});

//built function to render a new book
