angular.module('myapp', [])
.controller('homeCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);
