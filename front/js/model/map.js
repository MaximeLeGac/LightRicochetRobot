// Classe Individu
// Représente un individu qui sera utilisé lors de l'exécution de l'algorithme génétique
angular.module('app.models').factory('map', function () {
    var map = {};
    
	
	// ====================================================
    // Initialisation la grille de la carte
    map.size = 8;
    map.lineList = [map.size][map.size];
    map.arrivalX = 0;
    map.arrivalY = 0;
    map.robotList = [4];
    // ====================================================
    map.new =  function(passage, note) {
        // Méthode d'initialisation
        // passages  : Tableau des déplacements (sous forme [abscisse, ordonnée]) à effectuer par l'individu
        // note      : Note de l'exécution de l'individu
        var passages = passages;
        var note = note;
        // ====================================================
    }

    // ====================================================
    // Definit le point d'arrivee de la carte
    map.initArrival = function() {
        // Initialise les coordonnees du point d'arrivee
        map.arrivalX = Math.floor(Math.random() * map.size);
        map.arrivalY = Math.floor(Math.random() * map.size);

        // Les coordonnées ne peuvent pas tombées dans le carré central
        var index = ((map.size-2)/2);

        while (map.arrivalX == index || map.arrivalX == index+1) {
        	map.arrivalX = Math.floor(Math.random() * map.size);
        }

        while (map.arrivalY == index || map.arrivalY == index+1) {
        	map.arrivalY = Math.floor(Math.random() * map.size);
        }
    }
    // ====================================================


    // ====================================================
    // Methode d'initialisation d'un robot
    map.initRobotList = function() {

        // Genere les coordonnees de depart du robot
        var x = Math.floor(Math.random() * map.size);
        var y = Math.floor(Math.random() * map.size);

        // Les coordonnées ne peuvent pas tombées dans le carré central
        var index = ((map.size-2)/2);

        while (x == index || x == index+1) {
        	x = Math.floor(Math.random() * map.size);
        }

        while (y == index || y == index+1) {
        	y = Math.floor(Math.random() * size);
        }

        // Initialise le robot
        robotList.push(Robot(x, y));
    }
    // ====================================================

    return map;
});



// Classe Map
// Represente une carte
function Map() {
	
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
    var appenLinev = function(line) {
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