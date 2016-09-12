/**
 * Created by v.shulzhytskaya on 9/9/2016.
 */

define(['app'], function (app) {
    'use strict';

    function Identity(id, login, password) {
        this.id = id;
        this.login = login;
        this.password = password;
    }

    function IdentityService() {
        var identities = [];
        var registerId = null;

        this.registerIdentity = function (login, password) {
            for (var i = 0; i < identities.length; i += 1){
                if(identities[i].login == login){
                    return false;
                }
            }
            var newIdentity = new Identity(identities.length + 1, login, password);
            identities.push(newIdentity);
            return newIdentity.id;
        };

        this.checkRight = function (login, password) {
            for (var i = 0; i < identities.length; i += 1){
                if((identities[i].login == login) && (identities[i].password == password)){
                    registerId = identities[i].id;
                    return identities[i].id;
                }
            }
            return false;
        };
        
        this.isAuthenticated = function () {
            if(registerId)
                return true;
            return false;
        };

        this.getIdentityId = function () {
            return registerId;
        };

        this.resetIdentity = function () {
            registerId = null;
        }

    }

    
    app.service('identityService', IdentityService);
});