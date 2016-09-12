/**
 * Created by v.shulzhytskaya on 9/8/2016.
 */

define(['app'], function (app) {
    'use strict';

    function UserService() {
        var users = [];

        this.getAllUsers = function () {
            return angular.copy(users);
        };

        this.addUser = function (id, name) {

            var user = {
                id : id,
                name : name
            };
            users.push(user);
        };

        this.getUserNameById = function (id) {
            for (var i = 0; i < users.length; i += 1){
                if(users[i].id == id)
                    return users[i].name;
            }
        }
    }

    
    app.service('userService', UserService);
});