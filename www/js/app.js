// angular.module is a global place for creating, registering and retrieving Angular modules
// 'directory' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'directory.services' is found in services.js
// 'directory.controllers' is found in controllers.js
angular.module('deals', ['ionic', 'deals.services', 'deals.controllers'])


    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('deals-login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'DealsLoginCtrl'
            })

            .state('invalid-login', {
                url : '/invalidLogin',
                templateUrl: 'templates/invalidLogin.html',
                controller: 'InvalidLoginCtrl'
            })

            .state('user-home', {
                url: '/userHome',
                templateUrl: 'templates/home.html',
                controller: 'DealsHomeCtrl'
            })

            .state('all-deals', {
                url: '/allDeals',
                templateUrl: 'templates/alldeals.html',
                controller: 'AllDealsCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');

    });
