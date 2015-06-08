'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute', 'chart.js']);

app.config(function ($routeProvider, ChartJsProvider) {

    // Configure all charts
    ChartJsProvider.setOptions({
        colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
        responsive: true
    });

    $routeProvider
        .when('/view1', {
            controller: "barChartController",
            templateUrl: "view1/barChart.html"
        })
        .when('/view2', {
            controller: "radarChartController",
            templateUrl: "view2/radarChart.html"
        })
        .when('/view3', {
            controller: "pieChartController",
            templateUrl: "view3/pieChart.html"
        })
        .otherwise({redirectTo: '/'});
});
