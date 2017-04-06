angular.module('myapp', ['ui.router', 'templates'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home/content');
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'angular/views/home.html',
    controller: 'homeCtrl'
  })

  .state('home.about', {
    url: '/about',
    templateUrl: 'angular/views/about.html',
    controller: 'aboutCtrl'
  })

  .state('home.content', {
    url: '/content',
    templateUrl: 'angular/views/content.html',
    controller: 'contentCtrl'
  })

});
