/**
 * Manages all sub-modules so other RequireJS modules only have to import the package.
 */
define(['angular', './routes', './controllers'], function(angular, routes, controllers) {
    'use strict';

    console.log("inside main.js");
    var mod = angular.module('aktive', ['ngRoute', 'aktive.routes']);
    mod.controller('PlayerCtrl', controllers.PlayerCtrl);

    return mod;
});
