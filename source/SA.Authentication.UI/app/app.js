var app = angular.module('authenticationapp', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
    $routeProvider
    .when("/", {
        controller: "loginController",
        templateUrl: "app/login/login.html"
    })
     .otherwise({ redirectTo: "/" });
});

app.constant('ngSettings', {
    serviceBase: 'http://localhost:7639'
});