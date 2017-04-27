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

const Book = function() {
  const setAttributes = (attributes) => {
    this.title = attributes.title;
    this.author = attributes.author;
    this.genre = attributes.genre;
    this.description = attributes.description;
    this.page_length = attributes.page_length;
  };

$(function () {
  // Grab the template script
  var theTemplateScript = $("#book-shelf").html();

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
  $('.book-shelf-placeholder').html(theCompiledHtml);
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
