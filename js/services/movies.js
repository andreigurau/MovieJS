app.factory('movies', ['$http', function($http) {
	console.log("Will it Work?");
  return $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed')
         .success(function(data) {
         	console.log("It Worked!");
           return data;
         })
         .error(function(data) {
         	console.log("It didn't work");
           return data;
         });
}]);