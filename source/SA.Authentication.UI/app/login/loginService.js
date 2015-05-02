app.factory('loginService', ['$resource', '$q', 'ngSettings', function ($resource, $q, ngSettings) {
    var resource = $resource(ngSettings.serviceBase + '/token', {}, {
        post: {
            method: "POST",
            isArray: false,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
        },
    });
    return resource;
}]);
