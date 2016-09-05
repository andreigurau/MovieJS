var app = angular.module("MovieApp",['ngRoute']);

/*var request = new XMLHttpRequest();
console.log("HelloWorld");
request.open('GET', 'https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed', false);

//request.setRequestHeader('a07e22bc18f5cb106bfe4cc1f83ad8ed', '');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();
var json = JSON.parse(request.responseText);
console.log(json);
console.log(json.results[0]);
*/

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/movies', { 
      controller: 'MovieViewController', 
      templateUrl: 'views/movies.html' 
    }) 
    .when('/movies/:movieId', { 
      controller: 'MovieController', 
      templateUrl: 'views/movieId.html' 
    })           
    .otherwise({ 
      redirectTo: '/movies' 
    }); 
});


/*
var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    var lastName = $('#last').val();
    var emailEntry = $('#email').val();
    var passwordEntry = $('#password').val();
    if(firstName === "") {
      $(".first-name-error").text("Error: First name not found");
    }
    if(lastName === "")
    {
      $(".last-name-error").text("Error: Last name not found");
    }
    if(emailEntry === "")
    {
      $(".email-error").text("Error: Email not found");
    }
    if(passwordEntry === "")
    {
      $(".password-error").text("Error: Password not found");
    }
    else if(passwordEntry.length <= 7)
    {
      $(".password-error").text("Error: Password too short");
    }

    return false;
  })
}
*/
//$(document).ready(main);