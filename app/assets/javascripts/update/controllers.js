define([], function() {
    'use strict';
    var UpdateCtrl = function($scope, $filter, playRoutes, ngTableParams) {
        
        

        var getTableParams = function(sex){
            return new ngTableParams({
                page: 1,
                count: 50,
                sorting: { complete: 'desc' }
            }, {
                getData: function($defer) {
                    playRoutes.controllers.Player.complete(sex).get().then(function(response) {
                        $defer.resolve(response.data.rows);
                    });
                }
            });
        };
        $scope.disciplines = ["Aktive", "AK35", "AK50", "AK65"];
        $scope.open = function($event, flag) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope[flag] = true;
        };
        $scope.updateItem = function(){
            $scope.firstRound = this.result.firstRound;
            $scope.currentHole = this.result.currentHole;
            $scope.currentResult = this.result.currentResult;
            $scope.currentId = this.result.id;
            $scope.currentPlayer = this.result.firstName + ' ' + this.result.lastName;
        };
        
        $scope.savePlayer = function(){
            playRoutes.controllers.Player.updateScore($scope.currentId, $scope.currentResult, $scope.currentHole,  $scope.firstRound).get().then(function() {
            });
            $scope.tableParams.reload();
            $scope.tableParams2.reload();
            $scope.currentResult = '';
            $scope.currentHole = '';
            $scope.firstRound = '';
            $scope.currentId = '';
            $scope.currentPlayer = '';
        };
        
        
        $scope.tableParams = getTableParams(0);
        $scope.tableParams2 = getTableParams(1);


    };

    UpdateCtrl.$inject = ['$scope', '$filter', 'playRoutes', 'ngTableParams'];

    /**
     * Setup table with content
     */
    return { UpdateCtrl: UpdateCtrl };
});