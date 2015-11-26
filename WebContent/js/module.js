var shopApp = angular.module("RapidShopApp", [ "ngRoute", "ngSanitize", "infinite-scroll", "ezfb" ]);

shopApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/list.html',
        controller: 'ControllerList'
    });

    $routeProvider.when('/show/:id', {
        templateUrl: 'pages/show.html',
        controller: 'ShowProductController'
    });

    $routeProvider.when('/cart', {
        templateUrl: 'pages/cart.html',
        controller: 'ShopCartController'
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
