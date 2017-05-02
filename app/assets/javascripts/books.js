// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(function(){
  $("a.book_index").on("click", function(e){

    $.ajax({
      method: "GET",
      url: this.href
    }).success(function(json){
  var $ol = $("div.books ol")
  $ol.html("")
  json.forEach(function(books){
    $ol.append(`<li class="booktitle"> <a href="books/${books.id}">${books.title}</a></li>`);
    })
})
    e.preventDefault();
})
});

//add href to books to get to show page
// change for reviews as well
