/**
 * Created by v.shulzhytskaya on 9/8/2016.
 */
define(['app'], function (app) {
    'use strict';

    app.controller('userController', ['$scope','userService', 'identityService', function ($scope, userService, identityService) {
        $scope.users = userService.getAllUsers();
    }]);
});