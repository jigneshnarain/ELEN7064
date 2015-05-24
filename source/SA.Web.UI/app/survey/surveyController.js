app.controller('surveyController', function ($scope, surveyService) {
    $scope.selectedOption = [];
    $scope.questions = $scope.$parent.$parent.surveys[0].questions;//surveyService.getQuestion($scope.$parent.$parent.selectedSurvey);

    $scope.appendId = function (id, index) {
        $scope.selectedOption[index]["id"] = id;
    }
    $scope.toggleSelection = function (questionOption, index) {

        //if($scope.selectedOption != undefined)
        //    index = $scope.selectedOption.indexOf(questionOption.id);

        if (index > -1) {
            $scope.selectedOption.splice(index, 1);
        }
        else {
            $scope.selectedOption.splice(index, 0, { id: questionOption.id });
        }

    };
    $scope.submit = function (response) {

    };
});