var app = angular.module('surveyapp', ['ngRoute', 'ngResource','checklist-model']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $routeProvider
    .when("/", {
        controller: "homeController",
        templateUrl: "app/home/home.html"
    })
     .otherwise({ redirectTo: "/" });
});

app.constant('ngSettings', {
    apiBaseUri: 'http://localhost:32104/api/'
});