app.factory('homeService', function (persistenceService) {
    return {
        getSurveys: function () {
            return persistenceService.action().getAll('survey') 
        }
    }
});
