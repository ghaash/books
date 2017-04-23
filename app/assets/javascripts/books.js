// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

// This is shorthand for $( document ).ready(function() { })

$(document).ready(function(){
  $("a.show_rating").on("click", function(e){
    $.ajax({
      method: "GET"
      url: ,
    }).done(function(data){
      console.log(data)
    });

    e.preventDefault();
  })
})
