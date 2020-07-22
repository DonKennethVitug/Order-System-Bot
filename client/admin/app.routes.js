(function (angular) {
  'use strict';
  var app = angular.module('app');
  app.config(
    [
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("dashboard");
        var states = [
          {
            name: 'dashboard',
            url: '/dashboard',
            authenticate: true,
            resolve: {
              loadCSS: [
                function() {
                  return angular.element(document.querySelector("body")).addClass("hold-transition skin-blue sidebar-mini");
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