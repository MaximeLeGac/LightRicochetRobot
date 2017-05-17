
var CONST_TAILLE_POPULATION = 9
var CONST_NB_GENERATION = 5



function controller(carte){

	//Init de la pop
	var lesIndividus = init(CONST_TAILLE_POPULATION, carte)


	for (var e = 0; e < CONST_NB_GENERATION; e++) {
	    for (var i = 0; i < CONST_NB_GENERATION; i++) {
	    	// Evaluate individual
			lesIndividus[i].note = evaluateMovements(lesIndividus[i], carte)
		}
		// Select individuals
		lucky_individuals = selectionRoulette(lesIndividus)

		// Croisement / muter
	}

}