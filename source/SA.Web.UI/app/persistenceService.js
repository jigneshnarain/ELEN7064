'use strict';
app.service('persistenceService', function ($q, offline, onlinePersistanceStrategy, offlinePersistanceStrategy) {
     
    var self = this;

    self.action = onlinePersistanceStrategy;
    offline.on("confirmed-up", function () {
        self.action = onlinePersistanceStrategy;
    });


    offline.on("confirmed-down", function () {
        self.action = offlinePersistanceStrategy;
    });

    return self;
});
