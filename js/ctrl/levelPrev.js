destApp.controller('levelPrev', function($scope, $http, $rootScope) {
	$http.get('js/ctrl/alphabet.json').success(function(data){
		$scope.previewLetters = data[$rootScope.globalLevel].preview;
	});
});