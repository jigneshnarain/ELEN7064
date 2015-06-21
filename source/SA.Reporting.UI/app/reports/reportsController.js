'use strict'
app.controller("reportsController", function ($scope,$filter, reportsService) {

    $scope.surveys = reportsService.getSurveys();

    $scope.getReports = function () {
        $scope.reports = reportsService.getReportsBySurvey($scope.selectedSurvey);
    }

    $scope.getReportData = function () {
        reportsService.getReportDataBySuveryQuestion($scope.selectedReport).$promise.then(function (response) {
            var report = $filter('filter')($scope.reports, { id: $scope.selectedReport })[0];
            $scope.labels = response.labels;
            $scope.data = report.requiresNestedArray ? [response.data] : response.data;
            $scope.type = report.chartType;
        }, function (error) {
        })

    }

});