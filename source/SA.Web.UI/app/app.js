'use strict';
var app = angular.module('surveyapp', ['ngRoute', 'ngResource', 'LocalForageModule','angularUUID2', 'angular-loading-bar']);

app.config(function ($routeProvider, $locationProvider, $localForageProvider, cfpLoadingBarProvider) {
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

    cfpLoadingBarProvider.includeSpinner = false;


    window.Offline.options = {
        checks: { xhr: { url: 'http://localhost:32104/api/connection' } }
    };

    window.Offline.check();
});
app.constant('offline', window.Offline);
app.constant('_', window._);
app.constant('ngSettings', {
    apiBaseUri: 'http://localhost:32104/api/'
});