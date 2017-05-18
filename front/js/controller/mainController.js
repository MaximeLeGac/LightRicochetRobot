angular.module('app.controllers')
.controller('mainController', function($scope, $rootScope, genetique) {

    $scope.mapIndex = 1;
    var colors = ['blue', 'yellow', 'greeb', 'red']

    // Définit l'initialisation de la map
    $rootScope.map = $rootScope.generateMap();
    for (var x = 0; x < $rootScope.map.size; x++) {
        var line = [$rootScope.map.size];
        for (var y = 0; y < $rootScope.map.size; y++) {
            var cell = $rootScope.case(x, y)
            cell.murH = (x == 0);
            cell.murB = (x == $rootScope.map.size-1);
            cell.murG = (y == 0);
            cell.murD = (y == $rootScope.map.size-1);
            line[y] = cell;
        }
        $rootScope.map.lineList[x] = line;
    }

    // Gère la lancement d'une partie
    $scope.start = function() {

        // Définit la case d'arrivée
        $rootScope.map.arrivalX = 2;
        $rootScope.map.arrivalY = 7;
        /*$rootScope.map.arrivalX = Math.floor(Math.random() * $rootScope.map.size);
        $rootScope.map.arrivalY = Math.floor(Math.random() * $rootScope.map.size);
        var index = (($rootScope.map.size-2)/2);
        while ($rootScope.map.arrivalX == index || $rootScope.map.arrivalX == index+1) {
          $rootScope.map.arrivalX = Math.floor(Math.random() * $rootScope.map.size);
        }
        while ($rootScope.map.arrivalY == index || $rootScope.map.arrivalY == index+1) {
          $rootScope.map.arrivalY = Math.floor(Math.random() * $rootScope.map.size);
        }*/

        // Définit la case de départ du robot
        /*var x = Math.floor(Math.random() * $rootScope.map.size);
        var y = Math.floor(Math.random() * $rootScope.map.size);
        var index = (($rootScope.map.size-2)/2);
        while (x == index || x == index+1) {
          x = Math.floor(Math.random() * $rootScope.map.size);
        }
        while (y == index || y == index+1) {
          y = Math.floor(Math.random() * $rootScope.map.size);
        }
        $rootScope.map.robotList[0] = $rootScope.robot(x, y);*/
        $rootScope.map.robotList[0] = $rootScope.robot(4, 7);

        // Lance l'initialisation de la map demandée
        if ($scope.mapIndex == 1) {
            initMap1($rootScope.map);
        }
        else if ($scope.mapIndex == 2) {
            initMap2($rootScope.map);
        }
        else if ($scope.mapIndex == 3) {
            initMap3($rootScope.map);
        }

        // Appel l'algo avec la map
        //var moveList = genetique.controlAlgo($rootScope.map);
        handleMove($rootScope.map, [[0, -1], [-1, 0], [0, -1], [1, 0]]);
    }

    // Initialise la map 1
    function initMap1(map) {
        map.lineList[0][1].murB = true

        map.lineList[1][0].murD = true
        map.lineList[1][1].murG = true
        map.lineList[1][1].murH = true
        map.lineList[1][4].murD = true
        map.lineList[1][5].murG = true
        map.lineList[1][5].murB = true

        map.lineList[2][3].murD = true
        map.lineList[2][3].murB = true
        map.lineList[2][4].murG = true
        map.lineList[2][4].murB = true
        map.lineList[2][5].murH = true
        map.lineList[2][7].murB = true

        map.lineList[3][1].murB = true
        map.lineList[3][2].murD = true
        map.lineList[3][3].murG = true
        map.lineList[3][3].murH = true
        map.lineList[3][4].murD = true
        map.lineList[3][4].murH = true
        map.lineList[3][5].murG = true
        map.lineList[3][7].murH = true

        map.lineList[4][1].murH = true
        map.lineList[4][2].murD = true
        map.lineList[4][3].murG = true
        map.lineList[4][3].murB = true
        map.lineList[4][4].murD = true
        map.lineList[4][4].murB = true
        map.lineList[4][5].murG = true
        map.lineList[4][5].murB = true

        map.lineList[5][0].murD = true
        map.lineList[5][1].murG = true
        map.lineList[5][3].murH = true
        map.lineList[5][4].murH = true
        map.lineList[5][5].murH = true

        map.lineList[6][2].murD = true
        map.lineList[6][3].murG = true
        map.lineList[6][6].murD = true
        map.lineList[6][7].murG = true
        map.lineList[6][7].murB = true

        map.lineList[7][3].murD = true
        map.lineList[7][4].murG = true
        map.lineList[7][7].murH = true
    }

    // Initialise la map 2
    function initMap2(map) {
        map.lineList[0][1].murB = true

        map.lineList[1][0].murD = true
        map.lineList[1][1].murG = true
        map.lineList[1][1].murH = true
        map.lineList[1][4].murD = true
        map.lineList[1][5].murG = true
        map.lineList[1][5].murB = true

        map.lineList[2][3].murD = true
        map.lineList[2][3].murB = true
        map.lineList[2][4].murG = true
        map.lineList[2][4].murB = true
        map.lineList[2][5].murH = true
        map.lineList[2][7].murB = true

        map.lineList[3][1].murB = true
        map.lineList[3][2].murD = true
        map.lineList[3][3].murG = true
        map.lineList[3][3].murH = true
        map.lineList[3][4].murD = true
        map.lineList[3][4].murH = true
        map.lineList[3][5].murG = true
        map.lineList[3][7].murH = true

        map.lineList[4][1].murH = true
        map.lineList[4][2].murD = true
        map.lineList[4][3].murG = true
        map.lineList[4][3].murB = true
        map.lineList[4][4].murD = true
        map.lineList[4][4].murB = true
        map.lineList[4][5].murG = true
        map.lineList[4][5].murB = true

        map.lineList[5][0].murD = true
        map.lineList[5][1].murG = true
        map.lineList[5][3].murH = true
        map.lineList[5][4].murH = true
        map.lineList[5][5].murH = true

        map.lineList[6][2].murD = true
        map.lineList[6][3].murG = true
        map.lineList[6][6].murD = true
        map.lineList[6][7].murG = true
        map.lineList[6][7].murB = true

        map.lineList[7][3].murD = true
        map.lineList[7][4].murG = true
        map.lineList[7][7].murH = true
    }

    // Initialise la map 3
    function initMap3(map) {
        map.lineList[0][1].murB = true

        map.lineList[1][0].murD = true
        map.lineList[1][1].murG = true
        map.lineList[1][1].murH = true
        map.lineList[1][4].murD = true
        map.lineList[1][5].murG = true
        map.lineList[1][5].murB = true

        map.lineList[2][3].murD = true
        map.lineList[2][3].murB = true
        map.lineList[2][4].murG = true
        map.lineList[2][4].murB = true
        map.lineList[2][5].murH = true
        map.lineList[2][7].murB = true

        map.lineList[3][1].murB = true
        map.lineList[3][2].murD = true
        map.lineList[3][3].murG = true
        map.lineList[3][3].murH = true
        map.lineList[3][4].murD = true
        map.lineList[3][4].murH = true
        map.lineList[3][5].murG = true
        map.lineList[3][7].murH = true

        map.lineList[4][1].murH = true
        map.lineList[4][2].murD = true
        map.lineList[4][3].murG = true
        map.lineList[4][3].murB = true
        map.lineList[4][4].murD = true
        map.lineList[4][4].murB = true
        map.lineList[4][5].murG = true
        map.lineList[4][5].murB = true

        map.lineList[5][0].murD = true
        map.lineList[5][1].murG = true
        map.lineList[5][3].murH = true
        map.lineList[5][4].murH = true
        map.lineList[5][5].murH = true

        map.lineList[6][2].murD = true
        map.lineList[6][3].murG = true
        map.lineList[6][6].murD = true
        map.lineList[6][7].murG = true
        map.lineList[6][7].murB = true

        map.lineList[7][3].murD = true
        map.lineList[7][4].murG = true
        map.lineList[7][7].murH = true
    }

    // Permet de gérer l'affichage des murs d'un map
    $scope.getCellClassName = function(cell) {
        var className = "";

        // Affichage des murs
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

        // Affichage des robots
        $rootScope.map.robotList.forEach(function (robot, index) {
            if (robot.x == cell.x && robot.y == cell.y) {
                className += 'bg-' + colors[index];
            }
        });

        // Affichage de l'arrivée
        if ($rootScope.map.arrivalX == cell.x && $rootScope.map.arrivalY == cell.y) {
            className += 'bg-finish';
        }

        return className;
    }

    function handleMove(map, moveList) {
        moveList.forEach(function(move) {

        });
    }

});