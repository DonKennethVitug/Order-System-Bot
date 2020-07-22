(function (angular) {
  'use strict';
  var app = angular.module('app');

  app.controller(
    'sidebar.controller',
    [
      '$log',
      'stateService',
      function($log, stateService) {
        var sc = {};

        sc.model = [];

        sc.model.menu = {
          dashboard: false,
          orders: false,
          map: false
        }

        for(var key in sc.model.menu) {
          var currentState = stateService.get();
          if(key == currentState) {
            sc.model.menu[key] = true;
          }
        }

        var init = function() {
          $log.debug("sidebar.controller initialize");
        };
        init();

        angular.extend(this, {
          model: sc.model
        });
      }
    ]
  )

})(angular)