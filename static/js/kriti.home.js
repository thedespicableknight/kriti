'use strict';

// Contains all homepage related functions

angular.module('kriti.home', [])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'static/views/home.html',
          controller: 'HomeCtrl'
        });
    }
  ]);

angular.module('kriti.home')
  .controller('HomeCtrl', ['$scope', 'ItemService',
    function ($scope, ItemService) {
      $scope.items = ItemService.getAllItems().then(function (items) {
        return items;
      });
    }
  ]);
