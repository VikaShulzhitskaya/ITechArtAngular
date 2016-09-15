/**
 * Created by v.shulzhytskaya on 9/12/2016.
 */
define(['app'], function (app) {
    'use strict';

    app.controller('roomController', ['$scope', 'roomService', 'identityService', 'userService', function ($scope, roomService, identityService, userService) {

        $scope.currentId = identityService.getIdentityId();
        $scope.selectedRoom = null;

        $scope.createRoom = function (newRoomName, userArray) {
            if(!userArray)
                userArray = [];
            var id = identityService.getIdentityId();
            var user = userService.getUserById(id);
            userArray.push(user);
            roomService.createNewRoom(newRoomName, userArray);
            $scope.showCreateRoomForm = false;
        };
        
        $scope.availableRooms = function(){
            return roomService.getAvailableRoomByCurrentId($scope.currentId);
        };
        
        $scope.users = userService.getAllUsers();
        
        $scope.unsubscribeFromRoom = function (room) {
            var user = userService.getUserById($scope.currentId);
            roomService.removeUserFromRoom(room, user);
        };
        
        $scope.selectRoom = function (room) {
            var user = userService.getUserById($scope.currentId);
            $scope.selectedRoom = room;
            $scope.selectedRoom.readMessage(user);
        };

        $scope.newMessageText = {text: ''};

        $scope.sendMessage = function (text) {
            var sender = userService.getUserById($scope.currentId);
            $scope.selectedRoom.addMessage(sender, text);
            $scope.newMessageText.text = '';
        };
        
        $scope.getMembers = function (room) {
            return roomService.getMembersStringInRoom(room);
        };
        
        $scope.getNotifications = function (room) {
            return roomService.getNotificationsInRoom(room, $scope.currentId);
        };

        $scope.showAddMembersForm = {condition: false};
        
        $scope.addMembersToRoom = function (room, addedMembers) {
            roomService.addMembersToRoom(room, addedMembers);
            $scope.showAddMembersForm.condition = false;
        }

    }]);
});