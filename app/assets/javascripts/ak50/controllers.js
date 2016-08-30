define([], function() {
    'use strict';
    var AK50Ctrl = function($scope, $filter, playRoutes, ngTableParams) {


        $scope.open = function($event, flag) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope[flag] = true;
        };

        /**
         * Setup table with content
         */
        $scope.tableParams = new ngTableParams({
            page: 1,
            count: 20,
            sorting: { complete: 'desc' }
        }, {
            getData: function($defer) {
                playRoutes.controllers.Player.players('ak50',0).get().then(function(response) {
                    $defer.resolve(response.data.rows);
                });
            }
        });
        
        $scope.tableParams2 = new ngTableParams({
            page: 1,
            count: 20,
            sorting: { complete: 'desc' }
        }, {
            getData: function($defer) {
                playRoutes.controllers.Player.players('ak50',1).get().then(function(response) {
                    $defer.resolve(response.data.rows);
                });
            }
        });

        $scope.reloadTable = function() {
            $scope.tableParams.reload();
        };


    };

    AK50Ctrl.$inject = ['$scope', '$filter', 'playRoutes', 'ngTableParams'];

    return { AK50Ctrl: AK50Ctrl };
});