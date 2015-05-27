var app = angular.module('surveyreportingapp', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
    $routeProvider
    .when("/surveryReportsView", {
        controller: "surveyReportscontroller",
        templateUrl: "path to html page"
    })
     .otherwise({ redirectTo: "app/login/login.html" });
});

app.constant('ngSettings', {
    apiBaseUri: 'http://localhost:32104/api/'
});