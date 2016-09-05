app.controller("MovieController",["$scope", 'movies','$routeParams', function($scope, movies, $routeParams){


movies.success(function(data){
$scope.movie = data.results[$routeParams.movieId];
console.log($scope.movie);
$scope.posterUrl = "http://image.tmdb.org/t/p/w500" + $scope.movie.poster_path;

var request = new XMLHttpRequest();
var id = $scope.movie.id;
request.open('GET', 'http://api.themoviedb.org/3/movie/' + id+ '/reviews?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed', false);


request.send();
var json = JSON.parse(request.responseText);
console.log(json);

$scope.reviews = json.results;
console.log($scope.reviews);
if($scope.reviews.length == 0){
	//$scope.reviews[0] = {
	//	content: ="No reviews were found for this movie.";
	//	author: = "";
	//};
	
}
});


}]);