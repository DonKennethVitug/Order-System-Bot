(function (angular) {
  'use strict';
  var app = angular.module('app');

  app.factory(
    'apiService',
    [
      '$log',
      '$http',
      function($log, $http) {
        var apiService = {};   

        apiService.getCurrentOrders = function() {
          return $http({
            url: "http://192.168.19.50/latest/ordering-system-admin/server/admin_api/getCurrentOrders",
            method: "POST"
          });
        }

        apiService.getStores = function() {
          return $http({
            url: "192.168.19.50/latest/ordering-system-admin/server/admin_api/getStores",
            method: "POST"
          });
        }

        return apiService;
      }
    ]
  );
})(angular)