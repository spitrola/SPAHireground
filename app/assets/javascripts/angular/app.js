angular.module('myapp', ['ui.router', 'templates'])

.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
  $stateProvider

  .state('home', {
    url: '/home',
    abstract: true,
    templateUrl: 'angular/views/home.html',
    controller: 'homeCtrl'
  })

})

.run(function($rootScope, $state, $stateParams){
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
});
