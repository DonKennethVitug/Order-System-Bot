(function (angular) {
  'use strict';
  var app = angular.module('app');

  app.controller(
    'header.controller',
    [
      '$log',
      'authFactory',
      '$state',
      function($log, authFactory, $state) {
        var hc = {};

        hc.model = [];

        hc.model.signout = function() {
          authFactory.logout().then(
            function(res) {
              $state.go('login');
            },
            function(err) {
              console.log(err);
            }
          )
        }

        var init = function() {
          $log.debug("header.controller initialize");
        };
        init();

        angular.extend(this, {
          model: hc.model
        });
      }
    ]
  )

})(angular)