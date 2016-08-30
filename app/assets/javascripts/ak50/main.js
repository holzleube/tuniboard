/**
 * Manages all sub-modules so other RequireJS modules only have to import the package.
 */
define(['angular', './routes', './controllers'], function(angular, routes, controllers) {
    'use strict';

    var mod = angular.module('ak50', ['ngRoute', 'ak50.routes']);
    mod.controller('AK50Ctrl', controllers.AK35Ctrl);

    return mod;
});
