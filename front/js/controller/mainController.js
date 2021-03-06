angular.module('app.controllers')
.controller('mainController', function($scope, $rootScope, genetique) {
    var colors = ['blue', 'yellow', 'green', 'red'];
        
    // Initialisation de la map
    $rootScope.map = $rootScope.generateMap();

    // Gère la lancement d'une partie
    $scope.start = function() {
        $('.bg-finish').removeClass('bg-finish');
        $('.bg-blue').removeClass('bg-blue');
        
        // Regénère la map en cas de lancement d'un nouvelle partie
        $rootScope.map = $rootScope.generateMap();

        // Initialisation de la map avec choix random
        var mapIndex = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        if (mapIndex == 1) {
            initMap1($rootScope.map);
        }
        else if (mapIndex == 2) {
            initMap2($rootScope.map);
        }
        else if (mapIndex == 3) {
            initMap3($rootScope.map);
        }

        // Définit la case d'arrivée
        $rootScope.map.arrivalX = Math.floor(Math.random() * $rootScope.map.size);
        $rootScope.map.arrivalY = Math.floor(Math.random() * $rootScope.map.size);

        // Vérification que les coordonnées d'arrivée ne tombent pas dans le carré central
        // sinon on définit une nouvelle arrivée
        var index = (($rootScope.map.size-2)/2);
        while ($rootScope.map.arrivalX == index || $rootScope.map.arrivalX == index+1) {
          $rootScope.map.arrivalX = Math.floor(Math.random() * $rootScope.map.size);
        }
        while ($rootScope.map.arrivalY == index || $rootScope.map.arrivalY == index+1) {
          $rootScope.map.arrivalY = Math.floor(Math.random() * $rootScope.map.size);
        }

        // Vérification que l'arrivée est bien à côté d'un mur
        while ($rootScope.map.lineList[$rootScope.map.arrivalX][$rootScope.map.arrivalY].hasNoWall()) {
            $rootScope.map.arrivalX = Math.floor(Math.random() * $rootScope.map.size);
            $rootScope.map.arrivalY = Math.floor(Math.random() * $rootScope.map.size);
            var index = (($rootScope.map.size-2)/2);
            while ($rootScope.map.arrivalX == index || $rootScope.map.arrivalX == index+1) {
            $rootScope.map.arrivalX = Math.floor(Math.random() * $rootScope.map.size);
            }
            while ($rootScope.map.arrivalY == index || $rootScope.map.arrivalY == index+1) {
            $rootScope.map.arrivalY = Math.floor(Math.random() * $rootScope.map.size);
            }
        }

        // Définit la case de départ du robot
        var x = Math.floor(Math.random() * $rootScope.map.size);
        var y = Math.floor(Math.random() * $rootScope.map.size);

        // Vérification que le robot ne commence pas dans le carré central
        var index = (($rootScope.map.size-2)/2);
        while (x == index || x == index+1) {
          x = Math.floor(Math.random() * $rootScope.map.size);
        }
        while (y == index || y == index+1) {
          y = Math.floor(Math.random() * $rootScope.map.size);
        }
        $rootScope.map.robotList[0] = $rootScope.robot(x, y);

        // Affichage des robots
        $rootScope.map.robotList.forEach(function (robot, index) {
            var td = $('table')[0].children[0].children[robot.x].children[robot.y];
            td.className += ' bg-' + colors[index];
        });

        // Appel l'algo avec la map
        var moveList = genetique.controlAlgo($rootScope.map);
        moveList.forEach(function(move) {
            setTimeout(function() {
                handleMove($rootScope.map, move);
            }, 1000);
        });
    }

    // Initialise les murs de la map 1
    function initMap1(map) {
        // carré central
        map.lineList[2][3].murB = true
        map.lineList[2][4].murB = true
        map.lineList[3][2].murD = true
        map.lineList[3][3].murH = true
        map.lineList[3][3].murG = true
        map.lineList[3][4].murD = true
        map.lineList[3][4].murH = true
        map.lineList[3][5].murG = true
        map.lineList[4][2].murD = true
        map.lineList[4][3].murG = true
        map.lineList[4][3].murB = true
        map.lineList[4][4].murD = true
        map.lineList[4][4].murB = true
        map.lineList[4][5].murG = true
        map.lineList[5][3].murH = true
        map.lineList[5][4].murH = true

        // murs de la map
        map.lineList[0][1].murB = true
        map.lineList[1][0].murD = true
        map.lineList[1][1].murG = true
        map.lineList[1][1].murH = true
        map.lineList[1][4].murD = true
        map.lineList[1][5].murG = true
        map.lineList[1][5].murB = true
        map.lineList[2][3].murD = true
        map.lineList[2][4].murG = true
        map.lineList[2][5].murH = true
        map.lineList[2][7].murB = true
        map.lineList[3][1].murB = true
        map.lineList[3][7].murH = true
        map.lineList[4][1].murH = true
        map.lineList[4][5].murB = true
        map.lineList[5][0].murD = true
        map.lineList[5][1].murG = true
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

    // Initialise les murs de la map 2
    function initMap2(map) {
        // carré central
        map.lineList[2][3].murB = true
        map.lineList[2][4].murB = true
        map.lineList[3][2].murD = true
        map.lineList[3][3].murG = true
        map.lineList[3][3].murH = true
        map.lineList[3][4].murD = true
        map.lineList[3][4].murH = true
        map.lineList[3][5].murG = true
        map.lineList[4][2].murD = true
        map.lineList[4][3].murG = true
        map.lineList[4][3].murB = true
        map.lineList[4][4].murD = true
        map.lineList[4][4].murB = true
        map.lineList[4][5].murG = true
        map.lineList[5][3].murH = true
        map.lineList[5][4].murH = true

        // murs de la map
        map.lineList[0][0].murB = true
        map.lineList[0][1].murD = true
        map.lineList[0][2].murG = true
        map.lineList[0][4].murB = true
        map.lineList[1][0].murH = true
        map.lineList[1][4].murH = true
        map.lineList[1][4].murD = true
        map.lineList[1][5].murG = true
        map.lineList[2][0].murD = true
        map.lineList[2][1].murG = true
        map.lineList[2][7].murB = true
        map.lineList[3][2].murB = true
        map.lineList[3][7].murH = true
        map.lineList[4][2].murH = true
        map.lineList[5][2].murB = true
        map.lineList[5][2].murD = true
        map.lineList[5][3].murG = true
        map.lineList[5][5].murB = true
        map.lineList[5][6].murD = true
        map.lineList[5][7].murG = true
        map.lineList[6][0].murD = true
        map.lineList[6][1].murG = true
        map.lineList[6][1].murB = true
        map.lineList[6][2].murH = true
        map.lineList[6][5].murH = true
        map.lineList[7][1].murH = true
        map.lineList[7][4].murD = true
        map.lineList[7][5].murG = true
    }

    // Initialise les murs de la map 3
    function initMap3(map) {
        // carré central
        map.lineList[2][3].murB = true
        map.lineList[2][4].murB = true
        map.lineList[3][2].murD = true
        map.lineList[3][3].murG = true
        map.lineList[3][3].murH = true
        map.lineList[3][4].murD = true
        map.lineList[3][4].murH = true
        map.lineList[3][5].murG = true
        map.lineList[4][2].murD = true
        map.lineList[4][3].murG = true
        map.lineList[4][3].murB = true
        map.lineList[4][4].murD = true
        map.lineList[4][4].murB = true
        map.lineList[4][5].murG = true
        map.lineList[5][3].murH = true
        map.lineList[5][4].murH = true

        // murs de la map
        map.lineList[0][0].murD = true
        map.lineList[0][1].murG = true
        map.lineList[1][3].murB = true
        map.lineList[1][6].murD = true
        map.lineList[1][7].murG = true
        map.lineList[2][2].murD = true
        map.lineList[2][3].murG = true
        map.lineList[2][3].murH = true
        map.lineList[2][7].murB = true
        map.lineList[3][7].murH = true
        map.lineList[4][0].murB = true
        map.lineList[5][0].murH = true
        map.lineList[5][2].murB = true
        map.lineList[5][2].murD = true
        map.lineList[5][3].murG = true
        map.lineList[6][2].murH = true
        map.lineList[6][6].murB = true
        map.lineList[6][6].murD = true
        map.lineList[6][7].murG = true
        map.lineList[7][0].murD = true
        map.lineList[7][1].murG = true
        map.lineList[7][6].murH = true
    }

    // Gère l'affichage des murs d'une map
    $scope.getCellClassName = function(cell) {
        var className = "";
        if (cell.murH) {
            className += " border-top";
        }
        if (cell.murB) {
            className += " border-bottom";
        }
        if (cell.murG) {
            className += " border-left";
        }
        if (cell.murD) {
            className += " border-right";
        }

        // Affichage de l'arrivée
        if (cell.x == $rootScope.map.arrivalX && cell.y == $rootScope.map.arrivalY) {
            className += " bg-finish";
        }

        return className;
    }

    // Gère le déplacement du robot
    function handleMove(map, move) {
        var robot = map.robotList[0];
        var cell = map.lineList[robot.x][robot.y];

        // mouvement vertical
        if (move[0] == 0) {
            // mouvement haut
            if (move[1] == 1) {
                while (!cell.murH) {
                    moveRobot(robot, -move[1], -move[0], cell, map);
                    cell = map.lineList[robot.x][robot.y];
                }
            }
            // mouvement base
            else if (move[1] == -1) {
                while (!cell.murB) {
                    moveRobot(robot, -move[1], -move[0], cell, map);
                    cell = map.lineList[robot.x][robot.y];
                }
            }
        }
        // mouvement horizontal
        else if (move[1] == 0) {
            // mouvement gauche
            if (move[0] == -1) {
                while (!cell.murG) {
                    moveRobot(robot, move[1], move[0], cell, map);
                    cell = map.lineList[robot.x][robot.y];
                }
            }
            // mouvement droite
            else if (move[0] == 1) {
                while (!cell.murD) {
                    moveRobot(robot, move[1], move[0], cell, map);
                    cell = map.lineList[robot.x][robot.y];
                }
            }
        }
    }

    // Gère l'affichage du déplacement du robot
    function moveRobot(robot, x, y, cell, map) {
        robot.x += x;
        robot.y += y;
        var td = $('table')[0].children[0].children[robot.x].children[robot.y];
        td.className += ' bg-' + colors[0];
    }
});