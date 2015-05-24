app.controller('homeController', function ($scope, homeService) {

    $scope.surveys = homeService.getSurveys();

});