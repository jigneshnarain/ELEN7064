var app = angular.module('surveyapp', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $routeProvider
    .when("/viewname", {
        controller: "controller",
        templateUrl: "path to html page"
    })
     .otherwise({ redirectTo: "/" });
});

app.constant('ngSettings', {
    apiBaseUri: 'http://localhost:46781/api/'
});