/**
 * Created by v.shulzhytskaya on 9/9/2016.
 */

define(['app'], function (app) {
    'use strict';

    app.controller('identityController', ['$scope','$state', 'identityService', 'userService', function ($scope,$state, identityService, userService) {

        $scope.loginInput = '';
        $scope.password = '';
        $scope.showName = '';

        $scope.register = function () {
            var registerResult = identityService.registerIdentity($scope.loginInput, $scope.password);
            if(registerResult != false){
                userService.addUser(registerResult, $scope.showName);
                $scope.login();
            }
            else {
                alert('User with this login already exist!!');
                $scope.loginInput = '';
                $scope.password = '';
            }
        };

        $scope.login = function () {
            var checkIdentity = identityService.checkRight($scope.loginInput, $scope.password);
            if(checkIdentity == false){
                alert('Incorrect login and/or password!');
            }
            $scope.loginInput = '';
            $scope.password = '';
            $scope.showName = '';
            $state.transitionTo('chat');
        };

        $scope.logout = function () {
            identityService.resetIdentity();
            $state.transitionTo('login');
        };
        
        $scope.getName = function () {
            var id = identityService.getIdentityId();
            var name = userService.getUserNameById(id);
            $scope.showName = name;
            return name;
        }

    }]);
});