'use strict';
var app = angular.module('surveyapp', ['ngRoute', 'ngResource', 'LocalForageModule','angularUUID2']);

app.config(function ($routeProvider, $locationProvider, $localForageProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $routeProvider
    .when("/", {
        controller: "homeController",
        templateUrl: "app/home/home.html"
    })
     .otherwise({ redirectTo: "/" });

    $localForageProvider.config({
        name: 'surveyResponse' 
    });
});

app.constant('ngSettings', {
    apiBaseUri: 'http://localhost:32104/api/'
});