/**
 * Created by v.shulzhytskaya on 9/9/2016.
 */

require.config({
    paths:{
        'angular' : '../node_modules/angular/angular',
        'ui.router' : '../node_modules/angular-ui-router/release/angular-ui-router'
    },
    shim: {
        angular: {
            exports : 'angular'
        },
        'ui.router' : ['angular']
    }
});

require(['app', 'services', 'controllers'], function (app) {
    app.init();
});