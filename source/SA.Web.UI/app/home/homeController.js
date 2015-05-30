app.controller('homeController', function ($scope, homeService, $localForage) {

    $scope.surveys = [];



        homeService.getSurveys().then(function (response) {
            $scope.surveys = response;
            if (navigator.onLine) {
                angular.forEach(response, function (value, key) {
                    $localForage.instance('survey').setItem(value.id, value);
                });
            }
            });

    $scope.displaySurvey = function () {
        $scope.template = 'app/survey/survey.html';
        $scope.hideSelection = true;
    };

    $scope.reset = function () {
        $scope.selectedSurvey = null;
        $scope.template = null;
        $scope.hideSelection = false;
    }
    
});