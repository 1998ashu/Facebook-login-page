angular.module('MyApp', [])
    .controller('MyController', function () {
        var x = this;

        x.loginData = {};

        x.login = function () {
            console.log('Logging in with:', x.loginData);
        };
    });
