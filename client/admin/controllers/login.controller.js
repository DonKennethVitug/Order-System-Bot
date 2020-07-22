(function (angular) {
  'use strict';
  var app = angular.module('app');

  app.controller(
    'login.controller',
    [
      '$log',
      '$state',
      'authFactory',
      function($log, $state, authFactory) {
        var lc = {};

        lc.model = {};

        lc.model.login = function(user) {
          console.log(user);
          authFactory.login(user).then(
            function(res) {
              $state.go('dashboard');
            },
            function(err) {
              console.log(err);
            }
          )
        }

        var init = function() {
          $log.debug("login.controller initialize");
        };
        init();

        angular.extend(this, {
          model: lc.model
        });
      }
    ]
  )

})(angular)