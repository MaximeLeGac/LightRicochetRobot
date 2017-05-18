angular.module('app').run(function($rootScope) {

  var mapSize = 8;

  // Classe Map
  // Represente une carte
  $rootScope.generateMap = function() {
    var map = {
      size : mapSize,
      lineList : [mapSize],
      arrivalX : -1,
      arrivalY : -1,
      robotList : [4]
    }
    for (var x = 0; x < map.size; x++) {
        var line = [map.size];
        for (var y = 0; y < map.size; y++) {
            var cell = $rootScope.case(x, y)
            cell.murH = (x == 0);
            cell.murB = (x == map.size-1);
            cell.murG = (y == 0);
            cell.murD = (y == map.size-1);
            line[y] = cell;
        }
        map.lineList[x] = line;
    }
    return map;
  }

  // Classe Robot
  // Représente un robot sur la map avec ses coordonnées à un instant T et sa couleur
  $rootScope.robot = function(x, y) {
    return {
      x : x,
      y : y
    }
  }

  // Classe Case
  // Représente une case dans la Map avec ses coordonnées et la présence d'obstacle(s)
  // à sa position
  $rootScope.case = function(x, y) {
    return {
      x : x,
      y : y,
      murH : false,
      murB : false,
      murG : false,
      murD : false,
      hasNoWall : function () {
        return !this.murH && !this.murB && !this.murG && !this.murD;
      }
    }
  }

  // Classe Individu
  // Représente un individu qui sera utilisé lors de l'exécution de l'algorithme génétique
  $rootScope.individu = function(passages, note) {
    return {
      passages : passages,
      note : note
    }
  }

});