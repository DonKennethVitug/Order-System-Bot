(function (angular) {
  'use strict';
  var app = angular.module('app');

  app.factory(
    'authFactory',
    [
    '$localStorage',
    '$q',
      function ($localStorage, $q) {
        var service = {
          login: function(user) {
            return $q(function(resolve, reject) {
              $localStorage.orderingToken = user;
              resolve();  
            })
          },
          logout: function() {
            return $q(function(resolve, reject) {
              $localStorage.orderingToken = null;
              resolve();  
            })
          },
          isUserLogged : function() {
            return !!$localStorage.orderingToken;
          }
        };
        return service;
      }
    ]
  );
})(angular)