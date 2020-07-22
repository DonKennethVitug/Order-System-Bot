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

            name: 'orders',

            url: '/orders',

            authenticate: true,

            resolve: {
              loadCSS: [
                function() {
                  return angular.element(document.querySelector("body")).addClass("hold-transition skin-blue");
                }
              ]
            },

            views: {
              'content@': {
                templateUrl: 'views/orders.html',
                controller: 'orders.controller',
                controllerAs: 'oc'
              },
              'header@': {
                templateUrl: 'views/header.html',
                controller: 'header.controller',
                controllerAs: 'hc'
              },
              'footer@': {
                templateUrl: 'views/footer.html'
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