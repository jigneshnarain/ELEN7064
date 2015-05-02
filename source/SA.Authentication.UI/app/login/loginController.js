app.controller('loginController', function ($scope, loginService) {

    $scope.login = function () {
        $scope.message = "";
        var data = "grant_type=password&username=" + $scope.username + "&password=" + $scope.password;
        loginService.post(data).$promise.then(function(response){
        }, function (error) {
            $scope.message = error.data.error_description;
        });
    }

});