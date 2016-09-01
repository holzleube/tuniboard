define([], function() {
    'use strict';
    var AK65Ctrl = function($scope, $filter, playRoutes, ngTableParams) {
        var myScope = $scope;

        var getTableParams = function(discipline, sex){
            return new ngTableParams({
                page: 1,
                count: 50,
                sorting: { complete: 'desc' }
            }, {
                getData: function($defer) {
                    playRoutes.controllers.Player.players(discipline,sex).get().then(function(response) {
                        $defer.resolve(response.data.rows);
                    });
                }
            });
        };
        $scope.open = function($event, flag) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope[flag] = true;
        };
        
        var refreshTable =  function(){
                myScope.reloadTable();
                startTimer();
                return;
        };

        /**
         * Setup table with content
         */
        $scope.tableParams = getTableParams('AK65', 0);
        
        $scope.tableParams2 = getTableParams('AK65', 1);

        var startTimer = function(){
            setTimeout(refreshTable.bind(this), 10000);
        };
        startTimer();
        
        $scope.reloadTable = function() {
            $scope.tableParams.reload();
            $scope.tableParams2.reload();
        };


    };

    AK65Ctrl.$inject = ['$scope', '$filter', 'playRoutes', 'ngTableParams'];

    return { AK65Ctrl: AK65Ctrl };
});