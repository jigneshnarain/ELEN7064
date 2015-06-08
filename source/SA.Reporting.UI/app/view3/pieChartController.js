'use strict';

app.controller('pieChartController', function ($scope) {
    // var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

    $scope.labels = ["Less than Once a year", "At least once a year", "Once a year", "Twice a Year", "3 to 6 times a  year", "At least once every 2 weeks"];
    $scope.data = [30, 40, 50, 70, 55, 80];
});
