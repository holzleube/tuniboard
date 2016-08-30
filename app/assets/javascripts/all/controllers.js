define([], function() {
    'use strict';

    
    
    var AllCtrl = function($scope, $filter, playRoutes, ngTableParams) {
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
        var setValuesOnScope = function(scope, active, ak35, ak50, ak65){
            $scope.showActive = active;
            $scope.showAk35 = ak35;
            $scope.showAk50 = ak50;
            $scope.showAk65 = ak65;
        };
        setValuesOnScope($scope, true, false, false, false);
        $scope.activesLady = getTableParams('Aktive',0);
        $scope.activesMen = getTableParams('Aktive',1);
        $scope.ak35Lady = getTableParams('Ak35',0);
        $scope.ak35Men = getTableParams('Ak35',1);
        $scope.ak50Lady = getTableParams('Ak50',0);
        $scope.ak50Men = getTableParams('Ak50',1);
        $scope.ak65Lady = getTableParams('Ak65',0);
        $scope.ak65Men = getTableParams('Ak65',1);
        var currentIndex = 0;
        var refreshTable =  function(){
            console.log(currentIndex);
            if(currentIndex === 0){
                setValuesOnScope(myScope, true, false, false, false);
                myScope.activesLady.reload();
                myScope.activesMen.reload();
                currentIndex++;
                startTimer();
                return;
            }
            if(currentIndex === 1){
                setValuesOnScope(myScope, false, true, false, false);
                myScope.ak35Lady.reload();
                myScope.ak35Men.reload();
                currentIndex++;
                startTimer();
                return;
            }
            if(currentIndex === 2){
                setValuesOnScope(myScope, false, false, true, false);
                myScope.ak50Lady.reload();
                myScope.ak50Men.reload();
                currentIndex++;
                startTimer();
                return;
            }
            if(currentIndex === 3){
                setValuesOnScope(myScope, false, false, false, true);
                myScope.ak65Lady.reload();
                myScope.ak65Men.reload();
                currentIndex = 0;
                startTimer();
                return;
            }
          };
        var startTimer = function(){
            setTimeout(refreshTable.bind(this), 10000);
        };
        startTimer();
        // Disable weekend selection

        $scope.open = function($event, flag) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope[flag] = true;
        };

       
        $scope.reloadTable = function() {
            $scope.tableParams.reload();
        };

        
    };

    AllCtrl.$inject = ['$scope', '$filter', 'playRoutes', 'ngTableParams'];

    return {AllCtrl: AllCtrl};
});
