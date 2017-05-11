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
    $renderAllBooks.append(`<li class="booktitle" id="booklink"><a href="books/${books.id}">${books.title}</a></li>`);
})
booktitleClick()
})
    e.preventDefault();
})
});

//would document.getElementById("#booklink") work here?
function booktitleClick() {
$(".booktitle").on("click", function(e){
  $.get()
  var $renderForm = $("#appcontainer ol")
  $renderForm.html(`the book show appears!`) // needs to render a form, js erb? but like ewwwwwwww, no it didn't work not without remote: true
  e.preventDefault();
});
}

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
