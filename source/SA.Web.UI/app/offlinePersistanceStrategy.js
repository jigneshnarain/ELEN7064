'use strict'
app.factory('offlinePersistanceStrategy', function ($q, $localForage)
{
    $localForage.createInstance({
        name: 'survey'
    });


    return {
        getAll: function (service) {
            var deferred = $q.defer();
            var result = [],
                instance = $localForage.instance(service),
            promise = instance.iterate(function (value, key) {
                result.push(value);
            }).then(function (data) {
                deferred.resolve(result);
            }, function error(data) {
                deferred.reject(data);
            });        

            return deferred.promise;
        },
        getCountByInstance: function (service) {            
            var instance = $localForage.instance(service);
            return instance.length();
        },
        deleteByInstance: function (service, key) {
            var instance = $localForage.instance(service);
            return instance.removeItem(key);
        },
        save: function (service, data) {
            var instance = $localForage.instance(service);
            return instance.setItem(data.id, data);
        }
    }
})