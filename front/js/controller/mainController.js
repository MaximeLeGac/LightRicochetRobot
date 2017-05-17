angular.module('app.controllers')
.controller('mainController', function($scope, $rootScope, genetique) {

    $scope.mapIndex = 0;

    var size = 8;

    $rootScope.map = $rootScope.generateMap();
    for (var x = 0; x < size; x++) {
        var line = [size];
        for (var y = 0; y < size; y++) {
            var cell = $rootScope.case(x, y)
            cell.murH = (x == 0);
            cell.murB = (x == $rootScope.map.size-1);
            cell.murG = (y == 0);
            cell.murD = (y == $rootScope.map.size-1);
            line[y] = cell;
        }
        $rootScope.map[x] = line;
    }


    $scope.start = function() {
        console.log('start');
        
        $rootScope.map.arrivalX = Math.floor(Math.random() * size);
        $rootScope.map.arrivalY = Math.floor(Math.random() * size);
        var index = (($rootScope.map.size-2)/2);
        while ($rootScope.map.arrivalX == index || $rootScope.map.arrivalX == index+1) {
          $rootScope.map.arrivalX = Math.floor(Math.random() * $rootScope.map.size);
        }
        while ($rootScope.map.arrivalY == index || $rootScope.map.arrivalY == index+1) {
          $rootScope.map.arrivalY = Math.floor(Math.random() * $rootScope.map.size);
        }

        // Genere les coordonnees de depart du robot
        var x = Math.floor(Math.random() * size);
        var y = Math.floor(Math.random() * size);
        var index = (($rootScope.map.size-2)/2);
        while (x == index || x == index+1) {
          x = Math.floor(Math.random() * $rootScope.map.size);
        }

        while (y == index || y == index+1) {
          y = Math.floor(Math.random() * size);
        }
        $rootScope.map.robotList.push($rootScope.robot(x, y));

        $rootScope.map.lineList[0][1].murB = True

        $rootScope.map.lineList[1][0].murD = True
        $rootScope.map.lineList[1][1].murG = True
        $rootScope.map.lineList[1][1].murH = True
        $rootScope.map.lineList[1][4].murD = True
        $rootScope.map.lineList[1][5].murG = True
        $rootScope.map.lineList[1][5].murB = True

        $rootScope.map.lineList[2][3].murD = True
        $rootScope.map.lineList[2][3].murB = True
        $rootScope.map.lineList[2][4].murG = True
        $rootScope.map.lineList[2][4].murB = True
        $rootScope.map.lineList[2][7].murB = True

        $rootScope.map.lineList[3][1].murB = True
        $rootScope.map.lineList[3][2].murD = True
        $rootScope.map.lineList[3][3].murG = True
        $rootScope.map.lineList[3][3].murH = True
        $rootScope.map.lineList[3][4].murD = True
        $rootScope.map.lineList[3][4].murH = True
        $rootScope.map.lineList[3][5].murG = True
        $rootScope.map.lineList[3][7].murH = True

        $rootScope.map.lineList[4][1].murH = True
        $rootScope.map.lineList[4][2].murD = True
        $rootScope.map.lineList[4][3].murG = True
        $rootScope.map.lineList[4][3].murB = True
        $rootScope.map.lineList[4][4].murD = True
        $rootScope.map.lineList[4][4].murB = True
        $rootScope.map.lineList[4][5].murG = True
        $rootScope.map.lineList[4][5].murB = True

        $rootScope.map.lineList[5][0].murD = True
        $rootScope.map.lineList[5][1].murG = True
        $rootScope.map.lineList[5][3].murH = True
        $rootScope.map.lineList[5][4].murH = True
        $rootScope.map.lineList[5][5].murH = True

        $rootScope.map.lineList[6][2].murD = True
        $rootScope.map.lineList[6][3].murG = True
        $rootScope.map.lineList[6][6].murD = True
        $rootScope.map.lineList[6][7].murG = True
        $rootScope.map.lineList[6][7].murB = True

        $rootScope.map.lineList[7][3].murD = True
        $rootScope.map.lineList[7][4].murG = True
        $rootScope.map.lineList[7][7].murH = True
    }

    $scope.getCellClassName = function(cell) {
        var className = "";
        if (cell.murH) {
            className += "border-top ";
        }
        if (cell.murB) {
            className += "border-bottom ";
        }
        if (cell.murG) {
            className += "border-left ";
        }
        if (cell.murD) {
            className += "border-right ";
        }
        return className;
    }

});