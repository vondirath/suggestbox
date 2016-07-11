var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
    })

    // route for individual suggestion page
    .when('/suggestion/:id', {
        controller: 'SuggestionController',
        templateUrl: 'views/suggestion.html'
    })

    // otherwise, go home
    .otherwise({
        redirectTo: '/'
    });
});