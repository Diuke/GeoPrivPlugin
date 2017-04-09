'use strict';

/**
 * @ngdoc overview
 * @name iEmotions20App
 * @description
 * # iEmotions20App
 *
 * Main module of the application.
 */
angular
  .module('iEmotionsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'soundsController',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
