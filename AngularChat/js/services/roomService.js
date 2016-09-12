/**
 * Created by v.shulzhytskaya on 9/12/2016.
 */

define(['app'], function (app) {
    'use strict';

    function Message(sender, text) {
        this.sender = sender;
        this.text = text;
        this.date = new Date();
    }

    function Room(id, roomName) {
        this.id = id;
        this.name = roomName;
        this.messages = [];
        this.users = [];
        this.notifications = [];
        this.getMembersString = function(){
            return this.users.map(function (elem) {
            return elem.name;
        }).join(', ');
        };

        this.addUser = function (user) {
            this.users.push(user);
            this.notifications.push(new Notification(user));
        };

        this.removeUser = function (user) {
            var index;
            this.notifications.forEach(function (item) {
                if(item.user == user){
                    index = this.notifications.indexOf(item);

                    this.notifications.splice(index, 1);
                }
            });
            index = this.users.indexOf(user);
            this.users.splice(index, 1);

        };

        this.addMessage = function (sender, message) {
            this.messages.push(new Message(sender, message));
            this.notifications.forEach(function (item) {
                if(item.user.name != sender){
                    item.addNotification();
                }
            });
        };

        this.readMessage = function (user) {
            this.notifications.forEach(function (item) {
                if(item.user == user){
                    item.removeNotification();
                }
            })
        };

        this.getNotification = function (userId) {
            for (var i = 0; i < this.notifications.length; i += 1){
                if(this.notifications[i].user.id == userId){
                    return this.notifications[i].countOfNotification;
                }
            }
        }
    }

    function Notification(user) {
        this.user = user;
        this.countOfNotification = 0;
        
        this.addNotification = function () {
            this.countOfNotification ++;
        };

        this.removeNotification = function () {
            this.countOfNotification = 0;
        }
    }



    function roomService() {
        this.rooms = [];
        this.createNewRoom = function(roomName, users){
            var room = new Room(this.rooms.length + 1, roomName);
            users.forEach(function (item) {
                room.addUser(item);
            });
            this.rooms.push(room);
        };

        this.getAvailableRoomByCurrentId = function (id) {
            var availableRooms = [];
            this.rooms.forEach(function (room) {
                for (var i = 0; i < room.users.length; i += 1){
                    if(room.users[i].id == id){
                        availableRooms.push(room);
                        break;
                    }
                }
            });
            return availableRooms;
        };

        this.getRoomById = function (id) {
            for (var i = 0; i < this.rooms.length; i += 1){
                if(this.rooms[i].id == id){
                    return this.rooms[i];
                }
            }
        };
        
        this.removeUserFromRoom = function (room, user) {
            room.removeUser(user);
        }
    }


    app.service('roomService', roomService);
});