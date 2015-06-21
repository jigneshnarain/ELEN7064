'use strict'
app.service('synchronisationService', function ($q, offlinePersistanceStrategy, onlinePersistanceStrategy) {

    return {
        check: function () {
            return offlinePersistanceStrategy.getCountByInstance('surveyResponse');
        },
        getAll: function () {
            return offlinePersistanceStrategy.getAll('surveyResponse');
        },
        save: function (data) {
            var requests = [];
            angular.forEach(data, function (value, key) {
                var deferred = $q.defer();
                requests.push(deferred);
                onlinePersistanceStrategy.save('surveyResponse', value).then(function (value) {
                    deferred.resolve(offlinePersistanceStrategy.deleteByInstance('surveyResponse', value.id));
                }, deferred.reject);
            });


            return $q.all(requests);
        }
    }
});