'use strict';
app.factory('onlinePersistanceStrategy', function ($resource, ngSettings) {
    return {
        getAll: function (service) {
            return $resource(ngSettings.apiBaseUri + service).query().$promise;
        }
    }

})