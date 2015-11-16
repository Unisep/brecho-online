shopApp.controller('LoginController', function($scope, ezfb, $window, $location) {
    $scope.user = JSON.parse(localStorage.getItem("user") === null ? "{}" : localStorage.getItem("user"));

    updateLoginStatus(updateApiMe);

    $scope.login = function () {
        ezfb.login(function (res) {
            if (res.authResponse) {
                ezfb.api('/me?fields=id,name,picture',  function(response) {
                    localStorage.setItem("user", JSON.stringify(response));
                });
                updateLoginStatus(updateApiMe);
            }
        }, { scope: 'email' });
    };

    $scope.logout = function () {
        ezfb.logout(function () {
            updateLoginStatus(updateApiMe);
        });
    };

    function updateLoginStatus (more) {
        ezfb.getLoginStatus(function (res) {
            $scope.loginStatus = res;

            (more || angular.noop)();
        });
    }

    function updateApiMe () {
        ezfb.api('/me?fields=id,name,picture', function (res) {
            $scope.user = $scope.user = JSON.parse(localStorage.getItem("user"));
        });
    }
});
