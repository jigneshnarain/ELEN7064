app.factory('surveyService', function (persistenceService) {
    return {
        save: function (response) {
            //check if online publish to server else save to indexeddb
            return persistenceService.action().save('surveyResponse', response);// $resource(ngSettings.apiBaseUri + 'SurveyResponse').save(response);
        }

    }
});
