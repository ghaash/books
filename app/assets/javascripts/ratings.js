// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

// built function to create and render new rating

$(function(){
  $("a.rating_index").on("click", function(e){
    $.ajax({
      method: "GET",
      url: this.href
    }).success(function(json){
  var $ol = $("div.ratings ol")
  $ol.html("<li><strong>Your Ratings</strong></li>")
  json.forEach(function(ratings){
  $ol.append(`<li class="ratingtitle"><a href="ratings/${ratings.id}">${ratings.stars}</a></li>`);
    })
})
    e.preventDefault();
})
});

$(function(){
  $("a.display_rating").on("click", function(e){
    $.ajax({
      method: "GET",
      url: this.href //needs to book/1/ratings, not ratings.all
    }).success(function(json){
  var $ol = $("div.ratings ol")
  $ol.html("")
  json.forEach(function(ratings){
    $ol.append(`<li class="ratingsinsert">${ratings.stars}</li>`);
    })
})
    e.preventDefault();
})
});

$(function(){
  $("#new_rating").on("submit", function(e){
    $.ajax({
      method: "POST",
      url: this.action,
      dataType: "json",
      data: $(this).serialize(), // either JSON or querystring serializing // $(this).serialize();
      success: function(data){
        $("#rating_stars").val("");
        var $ol = $("div.ratingsform ol")
        $ol.append(data);
      }
    });
    e.preventDefault();
  })
});
