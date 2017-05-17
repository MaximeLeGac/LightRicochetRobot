angular.module('app').run(function($rootScope) {

  var mapSize = 8;

  // Classe Map
  // Represente une carte
  $rootScope.generateMap = function() {
    return {
      size : mapSize,
      lineList : [mapSize][mapSize],
      arrivalX : 0,
      arrivalY : 0,
      robotList : [4]
    }
  }

  // Classe Robot
  // Représente un robot sur la map avec ses coordonnées à un instant T et sa couleur
  $rootScope.robot = function(x, y) {
    return {
      x : x,
      y : y,
      passages : []
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
      murD : false
    }
  }

  // Classe Individu
  // Représente un individu qui sera utilisé lors de l'exécution de l'algorithme génétique
  $rootScope.individu = function(passage, note) {
    return {
      passages : passages,
      note : note,
      nb_deplacements_gagnant : 0
    }
  }

});