'use strict';
app.service('persistenceService', function ($q, offline, onlinePersistanceStrategy, offlinePersistanceStrategy) {
    var self = this;

    function online() {
        self.action = onlinePersistanceStrategy;
        self.persistenceType = 'offline';
    };
     function offline() {
        self.action = offlinePersistanceStrategy;
        self.persistenceType = 'offline';
    };
    
     if (navigator.onLine) {
         online();
     } else {
         offline();
     }

    window.addEventListener('online', function () {
        online();
    });
    window.addEventListener('offline', function () {
        offline();
    });

    return self;
});
