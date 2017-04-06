angular.module('myapp', ['ui.router', 'templates'])

  .config(['$stateProvider','$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: 'angular/views/home.html',
        controller: 'homeCtrl'
      });

    $urlRouterProvider.otherwise('home');
  }]);
