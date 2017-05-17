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
