angular.module('app').run(function($rootScope) {

  // Classe Map
  // Represente une carte
  $rootScope.map = function() {
    // ====================================================
    // Initialisation la grille de la carte
    var size = 8;
    var lineList = [size][size];
    var arrivalX = 0;
    var arrivalY = 0;
    var robotList = [4];
    // ====================================================


    // ====================================================
    // Ajoute une ligne
    // Methode helper pour inserer les cases
    // line  : La nouvelle ligne a ajouter
    var appendLine = function(line) {
      // On ajoute pas de nouvelles lignes si la grille est pleine
      if (line.length = size-1 && lineList.length < size-1) lineList.push(line);
    }
    // ====================================================


    // ====================================================
    // Definit le point d'arrivee de la carte
    var initArrival = function() {
      // Initialise les coordonnees du point d'arrivee
      arrivalX = Math.floor(Math.random() * size);
      arrivalY = Math.floor(Math.random() * size);

      // Les coordonnées ne peuvent pas tombées dans le carré central
      var index = ((size-2)/2);

      while (arrivalX == index || arrivalX == index+1) {
        arrivalX = Math.floor(Math.random() * size);
      }

      while (arrivalY == index || arrivalY == index+1) {
        arrivalY = Math.floor(Math.random() * size);
      }
    }
    // ====================================================


    // ====================================================
    // Methode d'initialisation d'un robot
    var initRobotList = function() {

      // Genere les coordonnees de depart du robot
      var x = Math.floor(Math.random() * size);
      var y = Math.floor(Math.random() * size);

      // Les coordonnées ne peuvent pas tombées dans le carré central
      var index = ((size-2)/2);

      while (x == index || x == index+1) {
        x = Math.floor(Math.random() * size);
      }

      while (y == index || y == index+1) {
        y = Math.floor(Math.random() * size);
      }

      // Initialise le robot
      robotList.push(Robot(x, y));
    }
    // ====================================================
  }

  // Classe Robot
  // Représente un robot sur la map avec ses coordonnées à un instant T et sa couleur
  $rootScope.robot = function(x, y) {
    // Définit la position du robot sur la carte
    var x = x;
    var y = y;

    // Initialise la liste des directions prises par le robot
    var passages = [];
  }

  // Classe Case
  // Représente une case dans la Map avec ses coordonnées et la présence d'obstacle(s)
  // à sa position
  $rootScope.case = function(x, y) {
    // ====================================================
    // Méthode d'initialisation
    // x         : Abscisse de la case
    // y         : Ordonnée de la case
    var x = x;
    var y = y;

    // Indique s'il y a un obstacle sur un bord de la case
    var murH = false;
    var murB = false;
    var murG = false;
    var murD = false;
    // ====================================================
  }

  // Classe Individu
  // Représente un individu qui sera utilisé lors de l'exécution de l'algorithme génétique
  $rootScope.individu = function(passage, note) {
    // Méthode d'initialisation
    // passages  : Tableau des déplacements (sous forme [abscisse, ordonnée]) à effectuer par l'individu
    // note      : Note de l'exécution de l'individu
    var passages = passages;
    var note = note;
    // ====================================================
  }

});