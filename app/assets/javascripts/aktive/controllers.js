define([], function() {
    'use strict';
    var PlayerCtrl = function($scope, $filter, playRoutes, ngTableParams) {
        $scope.players = [];
        $scope.player = '';


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
            count: 10,
            sorting: { id: 'desc' }
        }, {
            total: 0,
            getData: function($defer) {
                playRoutes.controllers.Player.players().get().then(function(response) {
                    $defer.resolve(response.data.rows);
                });
            }
        });

        $scope.reloadTable = function() {
            $scope.tableParams.reload();
        };

    };

    PlayerCtrl.$inject = ['$scope', '$filter', 'playRoutes', 'ngTableParams'];

    return { PlayerCtrl: PlayerCtrl };
});