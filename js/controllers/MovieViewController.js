//var baseUrl = "http://image.tmdb.org/t/p/w500"


app.controller("MovieViewController",["$scope", "movies", function($scope,movies){
movies.success(function(data){
	//console.log("asdfasdfasdfasdfasdfasdf");
	$scope.myMovies = data.results;
	console.log($scope.myMovies);
	$scope.baseUrl = "http://image.tmdb.org/t/p/w500";
$scope.posterPath = new Array($scope.myMovies.length);
for(var i = 0; i < $scope.myMovies.length; i++){
$scope.posterPath[i] = $scope.baseUrl+$scope.myMovies[i].poster_path;
//console.log($scope.posterPath[i]);
}

	});

}]);

