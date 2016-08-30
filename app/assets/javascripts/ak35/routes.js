/**
* Configure routes of reports module.
*/
define(['angular', './controllers', 'common', 'ui-bootstrap', 'ng-table'], function(angular, controllers) {
    'use strict';

    var mod = angular.module('ak35.routes', ['common', 'ui.bootstrap', 'ngTable']);
    console.log("inside route.js");
    mod.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/ak35', {
            templateUrl: '/assets/javascripts/ak35/ak35.html',
            controller: controllers.AK35Ctrl
    });
    }]);
});
