angular.module('app.algo').factory('genetique', function ($rootScope) {
    var genetique = {}

    genetique.test = function(){
    	var size = 10;
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
    }
 
    genetique.controlAlgo = function(carte){
    	var CONST_TAILLE_POPULATION = 10;
    	var CONST_NB_GENERATION = 5;

		//Init de la population d'individus
		var lesIndividus = this.init(CONST_TAILLE_POPULATION, carte)

		for (var e = 0; e < CONST_NB_GENERATION; e++) {
			console.log("generation " , e);
		    for (var i = 0; i < CONST_TAILLE_POPULATION; i++) {
		    	// Evaluate individual
				lesIndividus[i].note = this.evaluateMovements(lesIndividus[i], carte)
			}
			// Select individuals
			lucky_individuals = this.selectionRoulette(lesIndividus);

			// Croisement / muter

			var new_generation = [];
			for (var i = 0; i < CONST_TAILLE_POPULATION; i++) {
				if(i % 2 == 0){
		        	// Call to the crossbreeding who will create the next generation
		        	this.croiser(lesIndividus[lucky_individuals[i]], lesIndividus[lucky_individuals[i+1]], new_generation)
		    	}
			}
			lesIndividus = new_generation; 
		}

		// Selection de l'individus qui la plus grosse note
		var idIndividusChoice = 0;
		var noteMax = 0;
		for(var u = 0; u < lesIndividus.length; u++){
			if(lesIndividus[u].note > noteMax){
				noteMax = lesIndividus[u].note;
				idIndividusChoice = u;
			}
		}
		// ont retourne la liste de deplacement de l'individus
		return lesIndividus[idIndividusChoice].passages;
    }

	// Prepare tous les deplacements d'un individusCourant
    genetique.init = function(nbPopulation, carte) {
		var lesIndividus = [];


	    while(nbPopulation > 0){
	        // Nombre de coup a jouer pour un individus
	        rannbCoup = Math.floor(Math.random() * 20) + 10;

	        var lesCoups = [];
	        while(rannbCoup > 0) {
	            rannbCoup = rannbCoup - 1;

	            lesCoups.push(this.gestionMovements(carte));
	        }

			var individusCourant = $rootScope.individu(lesCoups, 0);
	        lesIndividus.push(individusCourant);
	        nbPopulation = nbPopulation - 1;
	    }
	    return lesIndividus;
    }

	// Ici on se deplacement sur la carte
	// On gere les collisions, les demis tour etc...
    genetique.gestionMovements = function(carte){
    	var deplaRandom = this.deplacementRandom();
	    var positionTempo = [];
	    var positionCourante = []; //Position du individu x, y
	    var stop = 0;
	    // Tant que nos position son différente nous continuons a avancer (pour faire la ligne complete)
	    while(stop == 0){
	        // Si notre position reste la meme alors nous avons taper un mur et on sort de la boucle 
	        positionCourante = this.gestionCollision([carte.robotList[0].x, carte.robotList[0].y], deplaRandom, carte)
	        if(positionTempo[0] != positionCourante[0] && positionTempo[1] != positionCourante[1]){
	            positionTempo = positionCourante;
	        }else{
	            stop = 1
	        }
	    }
	    return deplaRandom;
    }

	// Verifie si mur sur notre deplacement
	// positionIndividu : position du individu initial
	// deplacement : deplacement qu'il doit produire
	// Carte : carte avec les mur
	// return position
	genetique.gestionCollision = function(positionIndividu, deplacement, carte){
		// ici gerer la carte pour les collisions
	    var tailleCarte = carte.size - 1;

	    var posX = positionIndividu[0] + deplacement[0];
	    var posY = positionIndividu[1] + deplacement[1];
	    var caseCourante = carte.lineList[positionIndividu[0]][positionIndividu[1]];

	    if(posX >= 0 && posX < tailleCarte && posY >= 0 && posY < tailleCarte){
	        // Si on sort pas de la carte par les X et Y
	        if(caseCourante.murH == false && deplacement[0] == 0 && deplacement[1] == 1){
	            // Si ont prend pas un mur vers le Haut
	            positionIndividu[0] = posX;
	            positionIndividu[1] = posY;
	        }else if(caseCourante.murB == false && deplacement[0] == 0 && deplacement[1] == -1){
	            // Si ont prend pas un mur vers le Bas
	            positionIndividu[0] = posX;
	            positionIndividu[1] = posY;
	        }else if(caseCourante.murG == false && deplacement[0] == -1 && deplacement[1] == 0){
	            // Si ont prend pas un mur vers la Gauche
	            positionIndividu[0] = posX;
	            positionIndividu[1] = posY;
	        }else if(caseCourante.murD == false && deplacement[0] == 1 && deplacement[1] == 0){
	            // Si ont prend pas un mur vers la Droite
	            positionIndividu[0] = posX;
	            positionIndividu[1] = posY;
	        }
	    }
	    return positionIndividu;
	}

	// generation random d'un déplacement
	// H : Haut
	// D : Droite
	// G : Gauche
	// B : Bas
	genetique.deplacementRandom = function(){
	    var ran = Math.floor(Math.random() * 4) + 1;
	    if(ran == 1){
	        return [0, 1]   // H
	    }else if(ran == 2){
	        return [0, -1]  // B
	    }else if(ran == 3){
	        return [1, 0]   // D
	    }else if(ran == 4){
	        return [-1, 0]  // G
	    }else{
	        return [0, 1]   // H
	    }
	}

	// Méthode ppermettant, dans un faible pourcentage des cas, de modifier un des déplacements de l'individu
	genetique.muter = function(individu) {
	    // Par defaut, mutation rate de 5%
	    // mais dans le futur, mutation rate qui évolue en fonction du taux de réussite des individus (si taux stagne, augmentation du mutation rate)
	    var tab_deplacements = [[0, 1], [0, -1], [1, 0], [-1, 0]];
	    var taux_mutation = Math.floor(Math.random() * 100);
	    if (0 <= taux_mutation && taux_mutation <= 5) {
	        index_random_deplacement = Math.floor(Math.random() * 3); // Nombre random pour choisir un déplacement parmi les 4 possibles
	    	index_random_individu = Math.floor(Math.random() * individu.passages.length); // Nombre random pour choisir le déplacement qui sera remplacé chez l'individu

	        individu.passages[index_random_individu] = tab_deplacements[index_random_deplacement];
	    }
	    return individu;
	}


	// Méthode permettant de croiser les déplacements de 2 individus parents pour créer 2 individus enfants
	genetique.croiser = function(individu_parent1, individu_parent2, nouveaux_individus) {
		// Taille du premier individu parent
	    var taille_parent1 = individu_parent1.passages.length;
	    // Taille du deuxieme individu parent
	    var taille_parent2 = individu_parent2.passages.length;

	    // Hauteur à laquelle on va découper les passages des parents

	    if(taille_parent1 < taille_parent2){
	    	var hauteur_croisement = Math.floor(Math.random() * taille_parent1) + 1; 
	    }else{
	    	var hauteur_croisement = Math.floor(Math.random() * taille_parent2) + 1; 
	    }

	    

	    var bebe_1 = $rootScope.individu([],0);
	    var bebe_2 = $rootScope.individu([],0);
		
		
	    // Creation of the first half of each child based on the first half of each parents
	    for (var i = 0; i < hauteur_croisement; i++) {
	        bebe_1.passages.push(individu_parent1.passages[i]);
	        bebe_2.passages.push(individu_parent2.passages[i]);
	    }
	    // Creation of the second half of each child based on the second half of each parents
	    for (var i = hauteur_croisement; i < taille_parent2; i++) {
	        bebe_1.passages.push(individu_parent2.passages[i]);
	    }
	    for (var i = hauteur_croisement; i < taille_parent1; i++) {
	        bebe_2.passages.push(individu_parent1.passages[i]);
	    }
	    // Call to the mutation function on each child
	    this.muter(bebe_1);
	    this.muter(bebe_2);

	    nouveaux_individus.push(bebe_1);
	    nouveaux_individus.push(bebe_2);

	    /*console.log("bebe")
	    console.log(bebe_1.passages);
	    console.log(bebe_2.passages);

	    console.log("         ");
	    console.log(hauteur_croisement);
	    console.log("         ");
	    console.log(individu_parent1.passages);
	    console.log(individu_parent2.passages);*/

	    return nouveaux_individus;
	}


	genetique.selectionRoulette = function(population){
	    // Génération d'un Offset maximum avec 1/4 de la totalité des notes
	    var maxOffset = 1;
	    var totalNote = 0;

	    for (var k = 0; k < population.length; k++) {
	        note = population[k].note;

	        if(note > maxOffset){
	            totalNote = totalNote + note;
	        }

	        maxOffset = Math.round(totalNote/4,0);
	    }

	    // Maintenant nous randomisons afin de créer l'offset
	    var offset = Math.random(1, maxOffset);

	    var tempo = 0;
	    var couple = "";
	    var nbPop = 0;
	    var offsetFin = 0;
	    var taille = population.length;

	    while (nbPop < taille) {
	    	for (var x = 0; x < taille; x++) {
	            if (nbPop < taille) {
	                note = population[x].note;
	                tempo = tempo + note;

	                if (tempo >= offset) {
	                    if (couple != "") {
	                        couple = couple + "_" + x;
	                        nbPop = nbPop + 1;
	        
	                    } else {
	                        couple = x.toString();
	                        nbPop = nbPop + 1;
	        
	                    }

	                    offset = offset + offset;
	                }

	                if (x == (taille-1)) {
	                    offset = 0-(tempo - offset);
	                }
	            }
	    	}
	    }
	    var maSelection = couple.split("_");
	    return maSelection;
	}


	// Note notre individu
	// entrée : un individu, la carte
	// Sortie : Note de l'individu
	genetique.evaluateMovements = function(individu, carte){
	    var note = 1

	    // Ici le nombre de coup est multiplier a la note
	    var nbCoups = individu.passages.length;

	    var nbCoupsGagnant = this.checkThisWin(individu, carte);

	    // Si l'individu arrive au point final, on multiplie la note par le nombre de coups
	    if (nbCoupsGagnant > 0) note *= nbCoupsGagnant;

	    var lastPositionIndividus = individu.passages[nbCoups-1];
	    var xDiff = lastPositionIndividus[0] - carte.arrivalX;
	    var yDiff = lastPositionIndividus[1] - carte.arrivalY;

	    if(yDiff < 0){
	        yDiff = yDiff * (-1);
	    }
	    if(xDiff < 0){
	        xDiff = xDiff * (-1);
	    }

	    // Verifier si un mur sur la route du dernier coup (si mur alors augmentation de la note)
	    // Verifier si un mur sur la route du dernier coup (si mur alors augmentation de la note)
	    // Verifier si un mur sur la route du dernier coup (si mur alors augmentation de la note)
	    // Verifier si un mur sur la route du dernier coup (si mur alors augmentation de la note)




	    //La distance entre le dernier coup jouer et l'arrive est multiplier pour x et y
	    note *= yDiff;
	    note *= xDiff;

	    note = (1 / note) * 100;

	    return note;
	}

	genetique.checkThisWin = function(individu, carte) {
		var nb_coups_gagnant = 0;
		// coordonnées de départ du robot
		var posX = carte.robotList[0].x;
		var posY = carte.robotList[0].y;
		// coordonnées du point d'arrivée 
		var finalX = carte.arrivalX;
		var finalY = carte.arrivalY;
		// Compteur des déplacements
		var cpt = 0;


		//console.log(individu.passages);
		while (nb_coups_gagnant == 0 && cpt < individu.passages.length) {
			// Appel à la méthode gestionCollision qui va nous renvoyer la position du robot après déplacement
			
			/*
			console.log(cpt);
			console.log(individu.passages.length);
			console.log(individu.passages[cpt]);
			*/
			
			posCourante = this.gestionCollision([posX, posY], individu.passages[cpt], carte);

			// On incrémente le compteur de coups
			cpt++;

			// Si l'on se trouve sur la case d'arrivée
			if (posCourante[0] == finalX && posCourante[1] == finalY) nb_coups_gagnant += cpt;

		}

		return nb_coups_gagnant;
	}

    return genetique;
});