/**
 * Created by F3694941 on 2015/06/06.
 */

'use strict';

app.controller('radarChartController', function ($scope) {
    $scope.labels = ["Time to travel", "Transport Expense", "Lack of Service at local clinic", "Cleanliness ", "Lack Of Nursing Staff", "Lack of Doctors", "Other"];
    $scope.data = [
        [65, 59, 90, 81, 56, 55, 40],
        [28, 48, 40, 19, 96, 27, 100]
    ];


});

