var shopApp = angular.module("RapidShopApp", [ "ngRoute", "ngSanitize"]);

shopApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/list.html',
        controller: 'ControllerList'
    });

    $routeProvider.otherwise({
        templateUrl: 'pages/error.html'
    });
});
