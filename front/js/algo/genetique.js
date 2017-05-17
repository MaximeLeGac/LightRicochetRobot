angular.module('app.algo').factory('genetique', function ($rootScope) {
    var genetique = {}



    genetique.controlAlgo = function(carte){

		//Init de la pop
		var lesIndividus = init(CONST_TAILLE_POPULATION, carte)
		for (var e = 0; e < CONST_NB_GENERATION; e++) {
		    for (var i = 0; i < CONST_TAILLE_POPULATION; i++) {
		    	// Evaluate individual
				lesIndividus[i].note = evaluateMovements(lesIndividus[i], carte)
			}
			// Select individuals
			lucky_individuals = selectionRoulette(lesIndividus)

			// Croisement / muter
			var new_generation = []
			for (var i = 0; i < CONST_TAILLE_POPULATION; i++) {
				if(i % 2 == 0){
		        	// Call to the crossbreeding who will create the next generation
		        	croiser(lucky_individuals[i], lucky_individuals[i+1], new_generation)
		    	}
			}
			lesIndividus = new_generation; 
		}
    }

	// Prepare tous les deplacements d'un individusCourant
    genetique.init = function (nbPop, carte) {
		var lesIndividus = [];
	    while(nbPopulation > 0){
	        // Nombre de coup a jouer pour un individus
	        rannbCoup = Math.floor(Math.random() * 20) + 10;

	        var lesCoups = [];
	        while(rannbCoup > 0) {
	            rannbCoup = rannbCoup - 1;
	            lesCoup.push(generateMovements(carte));
	        }
	        individusCourant.passages = lesCoups;
	        individusCourant.note = 0;
	        lesIndividus.push(individusCourant);
	        nbPopulation = nbPopulation - 1;
	    }
	    return lesIndividus;
    }

	// Ici on se deplacement sur la carte
	// On gere les collisions, les demis tour etc...
    genetique.generateMovements = function(carte){
    	var deplaRandom = deplacementRandom();
	    var positionTempo = [];
	    var positionCourante = []; //Position du individu x, y
	    var stop = 0;
	    // Tant que nos position son différente nous continuons a avancer (pour faire la ligne complete)
	    while(stop == 0){
	        // Si notre position reste la meme alors nous avons taper un mur et on sort de la boucle 
	        positionCourante = gestionCollision(positionCourante, deplaRandom, carte)
	        if(positionTempo != positionCourante){
	            positionTempo = positionCourante
	        }else{
	            stop = 1
	        }
	    }
	    return deplaRandom
    }

	// Verifie si mur sur notre deplacement
	// positionIndividu : position du individu initial
	// deplacement : deplacement qu'il doit produire
	// Carte : carte avec les mur
	// return position
	genetique.gestionCollision = function(positionIndividu, deplacement, carte){
		// ici gerer la carte pour les collisions
	    var tailleCarte = carte.size - 1

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
	        return position[0, 1]   // H
	    }else if(ran == 2){
	        return position[0, -1]  // B
	    }else if(ran == 3){
	        return position[1, 0]   // D
	    }else if(ran == 4){
	        return position[-1, 0]  // G
	    }else{
	        return position[0, 1]   // H
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

	        individu.passages[index_random_individu] = tab_deplacements[index_random_deplacement] ;
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
	    var hauteur_croisement = Math.floor(Math.random() * taille_parent1) + 1; 

	    var bebe_1 = [];
	    var bebe_2 = [];

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
	    muter(bebe_1);
	    muter(bebe_2);

	    nouveaux_individus.push(bebe_1);
	    nouveaux_individus.push(bebe_2);

	    return nouveaux_individus;
	}

	genetique.selectionRoulette = function(population){
	    // Génération d'un Offset maximum avec 1/4 de la totalité des notes
	    var maxOffset = 1;
	    var totalNote = 0;

	    for (var k = 0; k < population.length; k++) {
	        note = population[k].note;

	        if(float(note) > maxOffset){
	            totalNote = totalNote + float(note);
	        }

	        maxOffset = int(Math.round(totalNote/4,0));
	    }

	    // Maintenant nous randomisons afin de créer l'offset
	    var offset = random.randint(1, maxOffset);

	    var tempo = 0;
	    var couple = "";
	    var nbPop = 0;
	    var offsetFin = 0;
	    var taille = len(population);

	    while (nbPop < taille) {

	        for (var x = 0; x < taille; x++) {
	            if (nbPop < taille) {
	                note = population[k].note;
	                tempo = tempo + float(note);

	                if (tempo >= offset) {
	                    if (couple != "") {
	                        couple = couple + "_" + str(x);
	                        nbPop = nbPop + 1;
	                    } else {
	                        couple = str(x);
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
	    var couples = [];
	    var maSelection = couple.split("_");

	    for (var i = 0; i < maSelection.length; i++) {
	        var select = int(maSelection[i])
	        couples.push(select)
	    }
	    return couples;
	}

	// Note notre individu
	// entrée : un individus, la carte
	// Sortie : Note de l'individus
	genetique.evaluateMovements = function(individus, carte){
	    var note = 1

	    // Ici le nombre de coup est multiplier a la note
	    var nbcoup = individus.passages.length;
	    note = note * nbcoup;

	    var lastPositionIndividus = individus.passages[nbcoup-1];
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
	    note = note * yDiff;
	    note = note * xDiff;
	    note = (1 / note) * 100;
	    return note;
	}

    return genetique;
});