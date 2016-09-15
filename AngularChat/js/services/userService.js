/**
 * Created by v.shulzhytskaya on 9/8/2016.
 */

define(['app'], function (app) {
    'use strict';

    function UserService() {
        this.users = [];

        this.getAllUsers = function () {
            return this.users;
        };

        this.addUser = function (id, name) {

            var user = {
                id : id,
                name : name
            };
            this.users.push(user);
        };

        this.getUserNameById = function (id) {
            for (var i = 0; i < this.users.length; i += 1){
                if(this.users[i].id == id)
                    return this.users[i].name;
            }
        };
        
        this.getUserById = function (id) {
            for (var i = 0; i < this.users.length; i += 1){
                if(this.users[i].id == id)
                    return this.users[i];
            }
        };
    }

    app.service('userService', UserService);
});