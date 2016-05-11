'use strict';

var app = angular.module('CitydioApp');

app.controller('homeCtrl', function() {
    console.log('homeCtrl');
});
app.controller('startCtrl', function($q, $http, $scope, $timeout, pitneyBowes) {
    var initializing = true
    console.log('startCtrl');
    $scope.loading = false;
    $scope.coordinate = {};
    $scope.geoFindMe = () => {
        $scope.loading = true;
        navigator.geolocation.getCurrentPosition((position) => {
            $scope.loading = false;
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            $scope.$apply(function() {
                $scope.coordinate.latitude = latitude;
                $scope.coordinate.longitude = longitude;
            });
            console.log(typeof latitude);
            if(position){
                console.log('make the pitneyBowes request');
                console.log(latitude, longitude);
                pitneyBowes.getAddress(latitude, longitude)
            }
            testing
            // pitneyBowes.getAddress(latitude,longitude);
        })
    }
});
