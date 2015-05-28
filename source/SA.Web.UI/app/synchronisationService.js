'use strict'
app.service('synchronisationService', function (offlinePersistanceStrategy, onlinePersistanceStrategy) {

    function synchronisationData() {

    }

    window.addEventListener('online', function () {
        online();
    });
})