var app = angular.module('TeamGG', ['ngRoute', 'angularMoment']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    console.log('route provider');
    $routeProvider.
        when('/', {
            templateUrl: 'pages/landing.html',
            controller: 'landingController',
            css: ['css/app.css', 'css/navbarDefault.css', 'css/landing.css']
        })
        .when('/play', {
            templateUrl: 'pages/play.html',
            controller: 'playController',
            css: ['css/app.css', 'css/navbarDefault.css', 'css/play.css']
        })
        .when('/leaderboard', {
            templateUrl: 'pages/leaderboard.html',
            controller: 'leaderboardController',
            css: ['css/app.css', 'css/navbarDefault.css', 'css/leaderboard.css']
        })
        .otherwise( {
            redirectTo : '/'
        });

    $locationProvider.html5Mode(true);
}]);

// determines which navbar template to load.
app.controller('navbarController', function($scope, $location) {
    $scope.$on('$locationChangeSuccess', function() {
        var path = $location.path();

        switch(path) {
            case '/upcoming':
                $scope.templateUrl = 'templates/navbar/navbarDefault.html';
                break;
            default:
                $scope.templateUrl = 'templates/navbar/navbarDefault.html';
        }  
    })
});

app.controller('landingController', ['$scope', '$http', 'moment', function($scope, $http, moment) {
    console.log('landing initialized');
}]);

app.controller('playController', ['$scope', '$http', 'moment', function($scope, $http, moment) {
    console.log('play initialized');
}]);

app.controller('leaderboardController', ['$scope', '$http', 'moment', function($scope, $http, moment) {
    console.log('leaderboard initialized');
}]);

/**
 * Dynamically load CSS
 */
app.directive('head', ['$rootScope','$compile',
    function($rootScope, $compile){
        return {
            restrict: 'E',
            link: function(scope, elem){
                var html = '<link rel="stylesheet" ng-repeat="(routeCtrl, cssUrl) in routeStyles" ng-href="{{cssUrl}}" />';
                elem.append($compile(html)(scope));
                scope.routeStyles = {};
                $rootScope.$on('$routeChangeStart', function (e, next, current) {
                    if(current && current.$$route && current.$$route.css){
                        if(!angular.isArray(current.$$route.css)){
                            current.$$route.css = [current.$$route.css];
                        }
                        angular.forEach(current.$$route.css, function(sheet){
                            delete scope.routeStyles[sheet];
                        });
                    }
                    if(next && next.$$route && next.$$route.css){
                        if(!angular.isArray(next.$$route.css)){
                            next.$$route.css = [next.$$route.css];
                        }
                        angular.forEach(next.$$route.css, function(sheet){
                            scope.routeStyles[sheet] = sheet;
                        });
                    }
                });
            }
        };
    }
]);