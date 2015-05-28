'use strict'
app.factory('offlinePersistanceStrategy', function ($q, $localForage)
{
    return {
        getAll: function (service) {
            var deferred = $q.defer();
            var result = [],
            promise = $localForage.iterate(function (value, key) {
                result.push(value);
            }).then(function (data) {
                deferred.resolve(result);
            }, function error(data) {
                deferred.reject(data);
            });        

            return deferred.promise;
        }
    }
})