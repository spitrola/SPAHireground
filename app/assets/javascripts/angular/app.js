angular.module('myapp', ['ui.router', 'templates'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/app/myhobby');
  $stateProvider

  .state('app', {
    url: '/app',
    templateUrl: 'angular/views/app.html',
    controller: 'appCtrl'
  })

  .state('app.about', {
    url: '/about',
    templateUrl: 'angular/views/about.html',
    controller: 'aboutCtrl'
  })

  .state('app.myhobby', {
    url: '/myhobby',
    templateUrl: 'angular/views/myhobby.html',
    controller: 'myhobbyCtrl'
  })

  .state('app.famous', {
    url: '/famous',
    templateUrl: 'angular/views/famous.html',
    controller: 'famousCtrl'
  })

});
