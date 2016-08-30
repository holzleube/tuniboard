/**
* Configure routes of reports module.
*/
define(['angular', './controllers', 'common', 'ui-bootstrap', 'ng-table'], function(angular, controllers) {
    'use strict';

    var mod = angular.module('ak50.routes', ['common', 'ui.bootstrap', 'ngTable']);
    console.log("inside route.js");
    mod.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/ak50', {
            templateUrl: '/assets/javascripts/ak50/ak50.html',
            controller: controllers.AK50Ctrl
    });
    }]);
});
