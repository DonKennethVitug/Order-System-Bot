(function (angular) {
  'use strict';
  var app = angular.module('app');

  app.controller(
    'orders.controller',
    [
      '$log',
      'apiService',
      'socket',
      'SoundService',
      function($log, apiService, socket, SoundService) {
        var oc = {};

        oc.model = [];

        apiService.getCurrentOrders().then(
          function(res) {
            console.log(res.data);
            oc.model.currentOrders = res.data;
          },
          function(err) {
            console.log(err);
          }
        )

        socket.init();
        socket.setHandler(
          'open',
          function(e) {
            console.log('open');
            console.dir(e);
            var oMessage = {command:'connect', message:'test'};
            socket.sender(oMessage);
          }
        );
        socket.setHandler(
          'message',
          function(e) {
            var message = e.data;
            console.log(message);
            if(message == "new order") {
              apiService.getCurrentOrders().then(
                function(res) {
                  console.log(res.data);
                  oc.model.currentOrders = res.data;
                  SoundService.getSound("notif").start();
                },
                function(err) {
                  console.log(err);
                }
              )
            }
          }
        );
        socket.setHandler(
          'close',
          function(e) {
            console.log('socket closed');
            console.dir(e);
          }
        );

        var init = function() {
          $log.debug("orders.controller initialize");
        };
        init();

        angular.extend(this, {
          model: oc.model
        });
      }
    ]
  )

})(angular)