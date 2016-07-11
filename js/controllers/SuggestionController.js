app.controller('SuggestionController', ['$scope','suggestions', '$routeParams', function ($scope, suggestions, $routeParams) {

    $scope.post = suggestions.posts[$routeParams.id];
    
    $scope.comments = [];
    
    $scope.addComment = function ( ) {
            $scope.posts.comments.push({
                body: [],
                upvotes: 0,
            });
            };  
    $scope.upVote = function (comment) {
            $scope.posts[comment].upvotes += 1;
            };
}]);