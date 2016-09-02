/**
 * Manages all sub-modules so other RequireJS modules only have to import the package.
 */
define(['angular', './routes', './controllers'], function(angular, routes, controllers) {
    'use strict';

    var mod = angular.module('update', ['ngRoute', 'update.routes']);
    mod.controller('UpdateCtrl', controllers.UpdateCtrl);

    return mod;
});
