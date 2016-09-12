/**
 * Created by v.shulzhytskaya on 9/8/2016.
 */
/*(function () {
    'use strict';
    
    var app = angular.module('chat');
    
    app.controller('userController', ['$scope','userService', function ($scope, userService) {
        $scope.users = userService.getAllUsers();
    }]);
})();*/


define(['app'], function (app) {
    'use strict';

    app.controller('userController', ['$scope','userService', 'identityService', function ($scope, userService, identityService) {
        $scope.users = userService.getAllUsers();
    }]);
});