'use strict';

var app = angular.module('CitydioApp');


app.service('pitneyBowes', function($http) {

    this.getAddress = (latitude, longitude) => {
        return $http({
            method: 'GET',
            url: `/api/getaddress/${latitude}/${longitude}`
        });
    }
    this.getDemographics = (latitude, longitude) => {
        return $http({
            method: 'GET',
            url: `/api/getdemographics/${latitude}/${longitude}`
        });
    }
});
