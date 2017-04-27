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

$(function () {
  // Grab the template script
  var theTemplateScript = $("#address-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context={
    "city": "London",
    "street": "Baker Street",
    "number": "221B"
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.content-placeholder').html(theCompiledHtml);
});

// $(function(){
//   $("#rating_stars").on("submit", function(e){
//     url = this.action
//     console.log(url)
//     data =
//     $.ajax({
//       type: ($("input[name='_method']").val() || this.method),
//       url: this.action,
//       data: data,
//       sucess: function(response){
//         var $ol = $("div.ratings ol")
//         $ol.append(response);
//       })
//     });
//       e.preventDefault();
//   })
// });
