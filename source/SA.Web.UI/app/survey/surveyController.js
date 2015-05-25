﻿app.controller('surveyController', function ($scope, surveyService) {
    $scope.selectedOptions = [];
    $scope.response = { surveyDataId : $scope.$parent.$parent.selectedSurvey, startDateTime: new Date()};
    $scope.questions = $scope.$parent.$parent.surveys[0].questions;//surveyService.getQuestion($scope.$parent.$parent.selectedSurvey);

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
        $scope.response.endDateTime = new Date();
        $scope.response.suveryResponseDetails = [].concat.apply([], $scope.selectedOptions);
        surveyService.save($scope.response);
    };
});