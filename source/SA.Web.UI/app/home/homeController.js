app.controller('homeController', function ($scope, homeService) {

    $scope.surveys = homeService.getSurveys();
    $scope.displaySurvey = function () {
        $scope.template = 'app/survey/survey.html';        
    };
});