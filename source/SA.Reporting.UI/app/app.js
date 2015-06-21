var app = angular.module('surveyreportingapp', ['ngRoute', 'ngResource', "chart.js", 'angular-loading-bar']);

app.config(function ($routeProvider, $locationProvider, cfpLoadingBarProvider) {
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
    $routeProvider
    .when("/", {
        controller: "reportsController",
        templateUrl: "app/reports/reports.html"
    })
     .otherwise({ redirectTo: "/" });

    cfpLoadingBarProvider.includeSpinner = false;
});

app.constant('ngSettings', {
    apiBaseUri: 'http://localhost:32104/api/'
});