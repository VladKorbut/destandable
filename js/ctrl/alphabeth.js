destApp.controller('alphabethCtrl', function($scope, $http, $rootScope) {
	$scope.alphabeth="абвгдежзиклмнопрстуфхцчшщьъэюя";
    $scope.alphabeth=$scope.alphabeth.split('');
    $scope.setLevel = function (number) {
    	$rootScope.globalLevel = number-1;
    	$rootScope.level = 0;
    }
});