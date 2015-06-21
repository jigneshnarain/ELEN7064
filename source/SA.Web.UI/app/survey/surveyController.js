app.controller('surveyController', function ($scope, surveyService, $localForage, uuid2) {
    $scope.selectedOptions = [];
    $scope.response = { id: uuid2.newuuid(), surveyDataId: $scope.$parent.$parent.selectedSurvey, startDateTime: new Date().toLocaleString() };

    angular.forEach($scope.$parent.$parent.surveys, function (value, key) {
        if ($scope.$parent.$parent.selectedSurvey == value.id)
            $scope.questions = value.questions;
    });

    $scope.surveySubmitted = false;
    $scope.toggleSelection = function (questionOptionId, index) {

        if ($scope.selectedOptions[index] === undefined)
            $scope.selectedOptions[index] = [];

        var idx = $scope.selectedOptions[index].map(function (x) { return x.surveyQuestionOptionId; }).indexOf(questionOptionId);

        if (idx > -1) {
            $scope.selectedOptions[index].splice(idx, 1);
        }
        else {
            $scope.selectedOptions[index].push({ surveyQuestionOptionId: questionOptionId });
        }
    };


    $scope.submit = function (response) {
        $scope.response.endDateTime = new Date().toLocaleString();
        $scope.response.suveryResponseDetails = [].concat.apply([], $scope.selectedOptions);

        surveyService.save($scope.response).then(function (success) {
            $scope.surveySubmitted = true;
            $scope.questions = [];
        }, function(error){
        });
    };

    $scope.captureAnother = function () {
        $scope.surveySubmitted = false;
        $scope.selectedOptions = [];
        $scope.response = { surveyDataId: $scope.$parent.$parent.selectedSurvey, startDateTime: new Date().toLocaleString() };
        $scope.questions = $scope.$parent.$parent.surveys[0].questions;
    }
    $scope.selecteNewSurvey = function () {
        $scope.surveySubmitted = false;
        $scope.selectedOptions = [];
        $scope.$parent.$parent.reset();
    }
});