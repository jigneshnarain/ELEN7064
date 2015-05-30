'use strict';
app.factory('onlinePersistanceStrategy', function ($resource, ngSettings) {
    return {
        getAll: function (service) {
            return $resource(ngSettings.apiBaseUri + service).query().$promise;
        },
        save: function (service, data) {
            return $resource(ngSettings.apiBaseUri + service).save(data).$promise;
        }
    }

})