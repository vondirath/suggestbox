app.controller('PostsController', ['$scope', '$routeParams', 'suggestions', function ($scope, $routeParams, suggestions) {

    $scope.post = suggestions.posts[$routeParams.id];
    $scope.comments = [];
    $scope.addComment = function (comments) {
            $scope.posts.comments.push({
                body: [],
                upvotes: 0,
            });
            }
    $scope.upVote = function (comment) {
            $scope.posts[comment].upvotes += 1;
            };
}]);