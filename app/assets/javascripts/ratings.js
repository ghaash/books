// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(function(){
  $("a.rating_index").on("click", function(e){
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
  $("#rating_stars").on("submit", function(e){

    $.ajax({
      type: ($("input[name='_method']").val() || this.method),
      url: this.action,
      data: $(this).serialize();, // either JSON or querystring serializing
      success: function(response){
        $("#rating_stars").val("");
        var $ol = $("div.ratings ol")
        $ol.append(response);
      }
    });
    e.preventDefault();
  })
});
