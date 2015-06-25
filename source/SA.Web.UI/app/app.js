var app = angular.module('surveyapp', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $routeProvider
    .when("/", {
     //   controller: "surveyController",
        //  templateUrl: "app/survey/survey.html"
        controller: "surveyController",
        templateUrl: "app/survey/indexedDBCode.html"
    })
     .otherwise({ redirectTo: "/" });
});

app.constant('ngSettings', {
    apiBaseUri: 'http://localhost:32104/api/'
});