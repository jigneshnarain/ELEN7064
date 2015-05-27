app.controller('homeController', function ($scope, homeService, $localForage) {

    $scope.surveys = [];

    $localForage.length().then(function(count){
        if ( count > 0) {
            $localForage.iterate(function (value, key) {
                return value;
            }).then(function (data) {
                $scope.surveys.push(data);
            });
        }
        else {
            homeService.getSurveys().$promise.then(function (response) {
                $scope.surveys = response;
                angular.forEach(response, function (value, key) {
                    $localForage.setItem(value.id, value);
                });

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