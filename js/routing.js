var destApp = angular.module('destApp', ["ngRoute"])
    .run(function($rootScope) {
    $rootScope.level=0;
    $rootScope.globalLevel=0;
});
   destApp.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/',{
                templateUrl:'game.html'
            })
            .when('/game',{
                templateUrl:'level.html',
                controller: 'destCtrl'
            })
            
            .when('/alphabeth',{
                templateUrl:'alphabeth.html',
                controller: 'alphabethCtrl'
            })
            .when('/levels',{
                templateUrl:'levels.html',
                controller: 'alphabethCtrl'
            })
            .otherwise({
            redirectTo: '/'
        });
        $locationProvider.html5Mode(true);
    });