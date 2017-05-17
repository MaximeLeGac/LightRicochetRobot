
var CONST_TAILLE_POPULATION = 9
var CONST_NB_GENERATION = 5



function controller(carte){

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
	    

	}

}