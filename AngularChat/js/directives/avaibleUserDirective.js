/**
 * Created by v.shulzhytskaya on 9/13/2016.
 */
define(['app'], function (app) {
    'use strict';
    
    var controller = ['$scope', 'roomService', 'identityService', function($scope, roomService, identityService) {
        $scope.getNotAvailableUsers = function () {
            var notAvailable = [];
            if ($scope.room){
                notAvailable = $scope.getFilterArray($scope.room);
            }
            else {
                var id = identityService.getIdentityId();
                notAvailable.push(id);
            }
            return notAvailable;
        };
        
        $scope.getFilterArray = function (room) {
            var userIdsInRoom = roomService.getUserIdsInRoom(room);
            return userIdsInRoom;
        };
        
    }];

    app.directive('availableUser',function () {
        return{
            restrict : 'E',
            scope: {
                labelName : '@',
                selectedArray : '=',
                users : '=',
                room : '='
            },
            controller : controller,
            templateUrl : 'js/directives/availableUserTemplate.html'
        };
    });


});

// <available-user label-name="Choose added members:" selected-array="addUserArray"></available-user>

// <available-user label-name="Choose members:" selected-array="userArray"></available-user>