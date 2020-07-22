(function (angular) {
  'use strict';
  var app = angular.module(
    'app',
    [
      'ui.router',
      'ngStorage',
      'ngFormValidation',
      'bd.sockjs',
      'oc.lazyLoad',
      'mcwebb.sound'
    ]
  ).config(
    [
      '$logProvider',
      function($logProvider) {
        $logProvider.debugEnabled(true);
      }
    ]
  ).run(
    [
      '$log',
      '$rootScope',
      'loader',
      'authFactory',
      '$state',
      '$localStorage',
      'socket',
      'stateService',
      'SoundService',
      function($log, $rootScope, loader, authFactory, $state, $localStorage, socket, stateService, SoundService) {
        $log.debug("app Initialize");
        loader.stop();
        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
          stateService.set(toState.name);
          if (toState.authenticate && authFactory.isUserLogged()===false) {
            $rootScope.$broadcast("addhidden");
            $state.go('login');
            event.preventDefault();
          }
        });

        SoundService.loadSound({
          name: 'notif',
          src: './assets/audio/notif.mp3'
        });

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
            // $log.log(message);
            // var channel=message.channel;
            // var command=message.command;
            // var data=message.data;
            // console.log(channel, command, data);
            // console.log(socket.responders);
            //socket.responders[channel][command](data);
          }
        );
        socket.setHandler(
          'close',
          function(e) {
            console.log('socket closed');
            console.dir(e);
          }
        );

      }
    ]
  )
})(angular);