app.factory('homeService', ['$resource',  'ngSettings', function ($resource, ngSettings) {  
    return {
        getSurveys: function () {
           return $resource(ngSettings.apiBaseUri + 'survey').query();
        }
    }
}]);
