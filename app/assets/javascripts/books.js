// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

// This is shorthand for $( document ).ready(function() { })

$(function(){
  $("a.display_rating").on("click", function(e){
    $.ajax({
      method: "GET",
      url: this.href
    }).success(function(json){
  var $ol = $("div.ratings ol")
  $ol.html("")
  json.forEach(function(ratings){
    $ol.append("<li>" + ratings.stars + "</li>");
    })
})
    e.preventDefault();
})
});

$(function(){
  $("a.book-index").on("click", function(e){
    alert('book index clicked')
    $.ajax({
      method: "GET",
      url: "/books"
    })
    .success(function(json){
      var $ol = $("div.book-index-insert ol")
      $ol.html("")
      json.forEach(function(index){
      $ol.append("<li>" + ratings.stars + "</li>");
    })
  })
  e.preventDefault();
  })
});
