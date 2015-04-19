app.controller('loginController', function ($scope, loginService) {

    $scope.login = function () {
        loginService.login($scope.username, $scope.password);
    }

});