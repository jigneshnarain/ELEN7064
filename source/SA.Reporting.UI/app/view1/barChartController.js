'use strict';

app.controller('barChartController', function ($scope) {
    var randomScalingFactor = function () {
        return Math.round(Math.random() * 100)
    };
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
        [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
        [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
        //[65, 59, 80, 81, 56, 55, 40],
        //[28, 48, 40, 19, 86, 27, 90]
    ];

});
