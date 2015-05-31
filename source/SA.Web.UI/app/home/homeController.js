app.controller('homeController', function ($scope, homeService, $localForage, offline, _) {

    $scope.surveys = [];


    var getData = function () {
        homeService.getSurveys().then(function (response) {
            $scope.surveys = response;
            if (offline.state === 'up') {
                angular.forEach(response, function (value, key) {
                    $localForage.instance('survey').setItem(value.id, value);
                });
            }
        });
    };

        var lazyGetData = _.debounce(getData, 2000);

    //    offline.on('confirmed-down', lazyGetData);
    //    offline.on('confirmed-up', lazyGetData);

        lazyGetData();

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