/**
 * Created by v.shulzhytskaya on 9/12/2016.
 */
define(['app'], function (app) {
    'use strict';

    app.controller('roomController', ['$scope', 'roomService', 'identityService', 'userService', function ($scope, roomService, identityService, userService) {

        $scope.currentId = identityService.getIdentityId();

        $scope.createRoom = function (newRoomName, userArray) {
            var id = identityService.getIdentityId();
            var user = userService.getUserById(id);
            userArray.push(user);
            roomService.createNewRoom(newRoomName, userArray);
            $scope.showCreateRoomForm = false;
            
        };
        
        $scope.availableRooms = function(){
            return roomService.getAvailableRoomByCurrentId($scope.currentId);
        };
        
        $scope.notifyInfo = function (roomId) {
            roomService.getNewNotificationCountByUserId(roomId, $scope.currentId);
        };
        
        $scope.users = userService.getAllUsers();
        
        $scope.unsubscribeFromRoom = function (room) {
            var user = userService.getUserById($scope.currentId);
            roomService.removeUserFromRoom(room, user);
        }

    }]);
});