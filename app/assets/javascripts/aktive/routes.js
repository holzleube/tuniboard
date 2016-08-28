/**
* Configure routes of reports module.
*/
define(['angular', './controllers', 'common', 'ui-bootstrap', 'ng-table'], function(angular, controllers) {
    'use strict';

    var mod = angular.module('aktive.routes', ['common', 'ui.bootstrap', 'ngTable']);
    console.log("inside route.js");
    mod.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/aktive', {
            templateUrl: '/assets/javascripts/aktive/aktive.html',
            controller: controllers.PlayerCtrl
    });
    }]);
});
