(function (angular) {
  'use strict';
  var app = angular.module('app');

  app.controller(
    'dashboard.controller',
    [
      '$log',
      function($log) {
        var hc = {};

        hc.model = [];

        var init = function() {
          $log.debug("dashboard.controller initialize");
        };
        init();

        angular.extend(this, {
          model: hc.model
        });
      }
    ]
  )

})(angular)