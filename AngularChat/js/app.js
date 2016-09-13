/**
 * Created by v.shulzhytskaya on 9/8/2016.
 */
define(['angular', 'ui.router'], function (angular, uirouter) {
    'use strict';

    var app = angular.module('chat', ['ui.router']);

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        var loginState = {
            name: 'login',
            url: '/login',
            templateUrl: './partials/login.html',
            authenticate: false
        }

        var chatState = {
            name: 'chat',
            url: '/chat',
            templateUrl: './partials/chat.html',
            authenticate: true
        }

        //$urlRouterProvider.otherwise('/login');

        $stateProvider.state(loginState);
        $stateProvider.state(chatState);
    }]);


    app.run(['$rootScope', '$state', 'identityService',function ($rootScope, $state, identityService) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromSate, fromParams) {
            if(toState.authenticate && !identityService.isAuthenticated()){
                $state.transitionTo('login');
                event.preventDefault();
            }
        });
    }]);

    app.init = function () {
        angular.bootstrap(document, ['chat'])
    };

    return app;
});