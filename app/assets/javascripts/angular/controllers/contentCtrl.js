angular.module('myapp')
.controller('contentCtrl', function($scope){
  $scope.punches = [
    {title: 'Jab', image:'jab.png'},
    {title: 'Cross', image:'cross.png'},
    {title: 'Left Hook', image:'left_hook.jpg'},
    {title: 'Right Hook', image:'right_hook.png'},
    {title: 'Left Uppercut', image:'left_uppercut.png'},
    {title: 'Right Uppercut', image:'right_uppercut.png'}
  ];
});