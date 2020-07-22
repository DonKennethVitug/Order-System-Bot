(function (angular) {
  'use strict';
  var app = angular.module('app');

  app.factory(
    'stateService',
    [
      '$log',
      function($log) {
        var stateService = {};

        stateService.currentState = "";

        stateService.set = function(state) {
          stateService.currentState = state;
        }

        stateService.get = function() {
          return stateService.currentState;
        }

        return stateService;
      }
    ]
  );
})(angular)