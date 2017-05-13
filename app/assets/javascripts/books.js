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

function Book(book) {
  this.id = book.id
  this.title = book.title
  this.author = book.author
  this.genre = book.genre
  this.description = book.description
  this.page_length = book.page_length
  this.ratings = book.ratings.stars
}

Book.prototype.formatShow = function() {
  let bookshowHTML = `
<h1>${this.title}</h1>
<h2>${this.author}</h2>
<h2>${this.genre}</h2>
<h2>${this.description}</h2>
<h2>${this.page_length}</h2>
<h2>${this.ratings}</h2>
`
}

//post.prototype.

// let Form =

// what is const

// try pushstate

//try this
// */
// function textareaFunction(){
// var r = document.createElement('span');
// var y = document.createElement("TEXTAREA");
// var g = document.createElement("IMG");
// y.setAttribute("cols", "17");
// y.setAttribute("placeholder", "message..");
// g.setAttribute("src", "delete.png");
// increment();
// y.setAttribute("Name", "textelement_" + i);
// r.appendChild(y);
// g.setAttribute("onclick", "removeElement('myForm','id_" + i + "')");
// r.appendChild(g);
// r.setAttribute("id", "id_" + i);
// document.getElementById("myForm").appendChild(r);
// }
// /*
