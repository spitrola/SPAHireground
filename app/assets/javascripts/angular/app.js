angular.module('myapp', ['ui.router', 'templates'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'angular/views/home.html',
    controller: 'homeCtrl'
  })

});
