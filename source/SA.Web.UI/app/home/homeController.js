app.controller('homeController', function ($scope, homeService) {

    $scope.surveys = homeService.getSurveys();
    //$scope.selectedSurvey = '';

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