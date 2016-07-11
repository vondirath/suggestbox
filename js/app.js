var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
    })

    // route for individual suggestion page
    .when('/posts/:id', {
        controller: 'PostsController',
        templateUrl: 'views/posts.html'
    })

    // otherwise, go home
    .otherwise({
        redirectTo: '/'
    });
});