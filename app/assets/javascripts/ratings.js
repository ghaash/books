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
  $ol.html("<li><strong>Your Ratings</strong></li>")
  json.forEach(function(ratings){
    $ol.append(`
      <li class="ratingtitle"><a href="ratings/${ratings.id}">${ratings.stars}</a></li>`);
    })
})
    e.preventDefault();
})
});

$(function(){
  $("a.display_rating").on("click", function(e){
    $.ajax({
      method: "GET",
      url: "/ratings" //needs to book/1/ratings, not ratings.all
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

//jquery toggle, to turn on off

// $(function(){
//   $("#rating_stars").on("submit", function(e){
//     $.ajax({
//       type: POST,
//       url: this.action,
//       data: $(this).serialize();, // either JSON or querystring serializing
//       success: function(response){
//         $("#rating_stars").val("");
//         var $ol = $("div.ratingsform ol")
//         $ol.append(response);
//       }
//     });
//     e.preventDefault();
//   })
// });
