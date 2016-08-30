/**
 * Manages all sub-modules so other RequireJS modules only have to import the package.
 */
define(['angular', './routes', './controllers'], function(angular, routes, controllers) {
    'use strict';

    var mod = angular.module('ak65', ['ngRoute', 'ak65.routes']);
    mod.controller('AK65Ctrl', controllers.AK65Ctrl);

    return mod;
});
