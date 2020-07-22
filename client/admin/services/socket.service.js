(function (angular) {
  'use strict';
  var app = angular.module('app');

  app.factory(
    'socket',
    [
      '$log',
      '$window',
      'socketFactory',
      function($log, $window, socketFactory) {
        var rtsocket = socketFactory({url:'http://localhost:9999/chat'});
        rtsocket.responders={};
        rtsocket.sender = function(oMessage) {
          rtsocket.send("hello");
        };
        rtsocket.init = function() {
          $log.log('rtsocket.init');
        };
        return rtsocket;
      }
    ]
  );
})(angular)