angular.module('myapp')
	.controller('famousCtrl', function($scope){
		$scope.boxers = [
			{name: 'Muhammad Ali', image:'m_ali.jpeg'},
			{name: 'Mike Tyson', image:'m_tyson.jpg'},
			{name: 'Joe Louis', image:'j_louis.jpg'},
			{name: 'Joe Frazier', image:'j_frazier.jpg'},
			{name: 'Floyd Mayweather', image:'f_may.jpg'},
			{name: 'Rocky Marciano', image:'rocky_m.jpg'}
		];
	});
