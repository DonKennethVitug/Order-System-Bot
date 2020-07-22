(function (angular) {
  'use strict';
  var app = angular.module('app');
  app.config(
    [
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("orders");
        var states = [
          {
            name: 'dashboard',
            url: '/dashboard',
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
                templateUrl: 'views/dashboard.html',
                controller: 'dashboard.controller',
                controllerAs: 'dc'
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