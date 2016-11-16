destApp.controller('alphabethCtrl', function($scope, $http, $rootScope) {
    $scope.setLevel = function (number) {
    	$rootScope.globalLevel = number-1;
    }
});