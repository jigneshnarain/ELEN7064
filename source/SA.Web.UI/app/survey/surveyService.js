app.factory('surveyService', ['$resource', 'ngSettings', function ($resource, ngSettings) {
    return {
        getQuestion: function (surveyId) {
            //retreive from indexeddb
        },
        save: function (response) {
            //check if online publish to server else save to indexeddb
            $resource(ngSettings.apiBaseUri + 'SurveyResponse').save(response);
        }

    }
}]);
