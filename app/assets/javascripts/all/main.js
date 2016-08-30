/**
 * Manages all sub-modules so other RequireJS modules only have to import the package.
 */
define(['angular', './routes', './controllers'], function(angular, routes, controllers) {
    'use strict';

    var mod = angular.module('all', ['ngRoute', 'all.routes']);

    mod.controller('AllCtrl', controllers.ReportCtrl);

    return mod;
});
