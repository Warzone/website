var app = angular.module('Warzone', ['ngRoute', 'angularMoment', 'ngMaterial']);

config = {
    api: {
        url: "https://api.warz.one"
    }
};

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
        .when('/match/:id', {
            templateUrl: 'pages/match.html',
            controller: 'matchController',
            css: ['css/app.css', 'css/navbarDefault.css', 'css/match.css']
        })
        .when('/privacy', {
            templateUrl: 'pages/privacy.html',
            css: ['css/app.css', 'css/navbarDefault.css', 'css/privacy.css']
        })
        .when('/rules', {
            templateUrl: 'pages/rules.html',
            css: ['css/app.css', 'css/navbarDefault.css', 'css/rules.css']
        })
        .when('/:name', {
            templateUrl: 'pages/profile.html',
            controller: 'profileController',
            css: ['css/app.css', 'css/navbarDefault.css', 'css/profile.css']
        })
        .otherwise( {
            redirectTo : '/'
        });

    $locationProvider.html5Mode(true);
}]);



app.controller('profileController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

    console.log('loading player page (' + $routeParams.name + ')');
    $scope.player = null;
    $scope.deaths = [];
    $scope.matches = [];
    $scope.recentMatches = [];
    $scope.loading = true;
    $scope.loadingHide = false;
    $scope.playerFound = false;


    $http.get(config.api.url + '/mc/player/' + $routeParams.name)
        .then(function(response) {
            $scope.loading = false;
            $scope.loadingHide = true;


            $scope.notFound = response.data.notFound;
            $scope.loadingHide = false;
            if ($scope.notFound == true) {
                $scope.loadingHide = false;
                $scope.playerFound = true;
                $scope.playerName = $routeParams.name;
            } else {
                $scope.loadingHide = true;
            }


            $scope.player = response.data.user;
            $scope.deaths = response.data.deaths;

            if ($scope.player.deaths === 0) {
                $scope.player.kdr = $scope.player.kills
            } else {
                $scope.player.kdr = ($scope.player.kills / $scope.player.deaths).toFixed(2)
            }

            if (!$scope.player.wins) {
                $scope.player.wins = 0;
            }

            if (!$scope.player.kills) {
                $scope.player.kills = 0;
            }

            if (!$scope.player.deaths) {
                $scope.player.deaths = 0;
                $scope.player.kdr = $scope.player.kills
            } else {
                $scope.player.kdr = ($scope.player.kills / $scope.player.deaths).toFixed(2)
            }

            if (!$scope.player.losses) {
                $scope.player.losses = 0;
                $scope.player.wr = $scope.player.wins
            } else {
                $scope.player.wr = ($scope.player.wins / $scope.player.losses).toFixed(2)
            }


            $http.get(config.api.url + '/mc/match/latest/' + $routeParams.name)
                
                .then(function(response) {
                    
                    console.log('recent matches data: ' + JSON.stringify(response.data, null, 2));
                    $scope.recentMatches = response.data;
                    console.log('recent matches size: ' + $scope.recentMatches.length)
                })
                
        })

}]);



app.controller('matchController', ['$scope', '$http', '$routeParams', 'moment', function($scope, $http, $routeParams, moment) {
    console.log('loading player page (' + $routeParams.id + ')');
    $scope.routeLength = $routeParams.id.length;
    $scope.matchData = null;
    $scope.loading = true;
    $scope.loadingHide = false; 
    $scope.matchFound = false;
    $scope.matchInvalid = false;

    if ($routeParams.id.length > 24 ) {
        $scope.loadingHide = false;
        $scope.loading = false;
        $scope.matchInvalid = true;
        $scope.matchId = $routeParams.id;
    }


    $http.get(config.api.url + '/mc/match/' + $routeParams.id)
        .then(function (response) {
            $scope.loading = false;
            $scope.loadingHide = true; 

            $scope.notFound = response.data.notFound;
            $scope.loadingHide = false;
            if ($scope.notFound == true ) {
                $scope.loadingHide = false;
                $scope.loading = false;
                $scope.matchFound = true;
                $scope.matchId = $routeParams.id;
            } else {
                $scope.loadingHide = true;
            }

            console.log('match data: ' + JSON.stringify(response.data, null, 2));

            $scope.matchData = response.data;
        })
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
    $scope.loading = true;    
    $http.get(config.api.url + '/mc/death/latest')
        .then(function(response) {
            $scope.deaths = response.data;
            $scope.loading = false;            
            $http.get(config.api.url + '/mc/match/latest')
                .then(function(response) {
                    $scope.loading = false;                    
                    $scope.recentMatches = response.data;
                })
        });


    console.log('landing initialized');
}]);

app.controller('playController', ['$scope', '$http', 'moment', function($scope, $http, moment) {
    console.log('play initialized');
}]);

app.controller('leaderboardController', ['$scope', '$http', 'moment', function($scope, $http, moment) {
    $scope.topPlayers = [];
    $scope.loading = true;

    $scope.updateLeaderboard = function(category) {
        $http.get(config.api.url + '/mc/leaderboard/' + category)
            .then(function(response) {
                $scope.loading = false;
                $scope.topPlayers = response.data;
            })
    };

    $scope.updateLeaderboard("kills");
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

var toMMSS = function (sec_num) {
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return minutes + ':' + seconds;
};



    $('.regular').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    pauseOnHover: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.regular2').slick({
    dots: false,
    fade: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    pauseOnHover: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


