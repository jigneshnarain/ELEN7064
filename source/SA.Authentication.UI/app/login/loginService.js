app.factory('loginService', ['$resource', 'ngSettings', function ($resource, ngSettings) {
    return{
        login: function(username, password){
            return true;
        }
    }
}]);
