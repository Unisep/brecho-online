var shopApp = angular.module("RapidShopApp", [ "ngRoute", "ngSanitize", "infinite-scroll", "ezfb" ]);

shopApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/list.html',
        controller: 'ControllerList'
    });

    $routeProvider.otherwise({
        templateUrl: 'pages/error.html'
    });
}).config(function (ezfbProvider) {
    ezfbProvider.setInitParams({
        appId: '787912147999016',
        version: 'v2.4'
    });
});
