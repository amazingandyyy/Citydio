'use strict';

var app = angular.module('CitydioApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl',
      resolve: {

        }
    })
    .state('start', {
      url: '/start',
      templateUrl: '/html/start.html',
      controller: 'startCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
