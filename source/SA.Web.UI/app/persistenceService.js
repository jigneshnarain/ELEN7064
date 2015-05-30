'use strict';
app.service('persistenceService', function ($q, onlinePersistanceStrategy, offlinePersistanceStrategy) {
     
    return {
        action: function()
        {
            return navigator.onLine ? onlinePersistanceStrategy : offlinePersistanceStrategy;
        }
    }
});
