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

            authenticate: false,

            resolve: {
              loadCSS: [
                function() {
                  return angular.element(document.querySelector("body")).addClass("hold-transition skin-blue sidebar-mini");
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
              'sidebar@': {
                templateUrl: 'views/sidebar.html',
                controller: 'sidebar.controller',
                controllerAs: 'sc'
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