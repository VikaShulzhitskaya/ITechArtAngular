/**
 * Created by v.shulzhytskaya on 9/12/2016.
 */
define(['app'], function (app) {
    'use strict';

    app.filter('availableUserFilter', function () {
        return function (users, notAvailableUserIds) {
            var availableUsers = [];
            users.forEach(function (item) {
                if(notAvailableUserIds.indexOf(item.id) == -1){
                    availableUsers.push(item);
                }
            });
            return availableUsers;
        }
    });
});