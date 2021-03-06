/**
* Configure routes of reports module.
*/
define(['angular', './controllers', 'common', 'ui-bootstrap', 'ng-table'], function(angular, controllers) {
    'use strict';

    var mod = angular.module('all.routes', ['common', 'ui.bootstrap', 'ngTable']);

    mod.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/all', {
            templateUrl: '/assets/javascripts/all/all.html',
            controller: controllers.AllCtrl
        }).when('/', {
            templateUrl: '/assets/javascripts/all/all.html',
            controller: controllers.AllCtrl
        });
    }]);
});
