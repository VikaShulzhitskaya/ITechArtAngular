/**
 * Created by v.shulzhytskaya on 9/12/2016.
 */
define(['app'], function (app) {
    'use strict';

    app.filter('availableUserFilter', function () {
        return function (users, currentUserId) {
            var availableUsers = [];
            users.forEach(function (item) {
                if(item.id != currentUserId){
                    availableUsers.push(item);
                }
            });
            return availableUsers;
        }
    });
});