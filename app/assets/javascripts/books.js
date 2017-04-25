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

    // }
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

// $.get(this.href).success(function(json){
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
  $("#rating_stars").on("submit", function(e){
    $.ajax({
      type: ($("input[name='_method']").val() || this.method),
      url: this.action,
      data: data,
      sucess: function(response){
        var $ol = $("div.ratings ol")
        $ol.append(response);
      })
    });
      e.preventDefault();
  })
});
