// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

// This is shorthand for $( document ).ready(function() { })

$(function(){
  $("a.show_rating").on("click", function(e){
// low level ajax html
//     $.ajax({
//       method: "GET",
//       url: this.href
//     }).success(function(response){
// $("div.ratings").html(response)
//     }).error(function(notNeeded){
//       alert("we broke!!!!")
//     });
// jquery get
// $.get(this.href).success(function(response){
//   $("div.ratings").html(response)
// })

$.get(this.href).success(function(json){
  var $ol = $("div.ratings ol")
  $ol.html("")

  json.forEach(function(ratings){
    $ol.append("<li>" + ratings.stars + "</li>");
    })
})
    e.preventDefault();
})
})
