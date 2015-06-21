'use strict'
app.controller('synchronisationController', function ($scope, $timeout, offline, synchronisationService) {
    
    $scope.hasStoredDataToSync = false;
    $scope.synchronisingData = false;

    $scope.sync = function () {
        synchronisationService.getAll().then(function (data) {
            $scope.synchronisingData = true;           
            synchronisationService.save(data).then(function () {
                $scope.synchronisingData = false;
                $scope.hasStoredDataToSync = false;
            })            
        });
    }
    
    function online() {
        synchronisationService.check().then(function (count) {
            $scope.hasStoredDataToSync = count > 0;
        })
    }


    offline.on('confirmed-up', online);
    offline.on('confirmed-down', function () {
        $scope.hasStoredDataToSync = false;
    });

    
})