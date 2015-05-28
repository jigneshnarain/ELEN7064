'use strict';
var app = angular.module('surveyapp', ['ngRoute', 'ngResource', 'LocalForageModule']);

app.config(function ($routeProvider, $locationProvider, $localForageProvider, $provide) {
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $routeProvider
    .when("/", {
        controller: "homeController",
        templateUrl: "app/home/home.html"
    })
     .otherwise({ redirectTo: "/" });

    $localForageProvider.config({
        name: 'SurveyData'        
    });

    //$localForageProvider.config({
    //    name: 'SurveyResponses'
    //});

    window.Offline.options = {
        checkOnLoad: false
    }

    $provide.constant('offline', window.Offline);
});

app.constant('ngSettings', {
    apiBaseUri: 'http://localhost:32104/api/'
});