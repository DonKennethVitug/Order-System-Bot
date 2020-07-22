(function (angular) {

  'use strict';

  var app = angular.module('app');

  app.config(

    [

      '$stateProvider',

      '$urlRouterProvider',

      function($stateProvider, $urlRouterProvider) {

        var states = [

          {

            name: 'login',

            url: '/login',

            authenticate: false,

            resolve: {
              loadCSS: [
                function() {
                  return angular.element(document.querySelector("body")).addClass("hold-transition login-page");
                }
              ]
            },

            views: {

              'login@': {

                templateUrl: 'views/login.html',

                controller: 'login.controller',

                controllerAs: 'lc'

              }

            }

          }

        ]

        for (var i=0; i<states.length; i++) {

          $stateProvider.state(states[i]);

        }

      }

    ]

  )

}(angular))