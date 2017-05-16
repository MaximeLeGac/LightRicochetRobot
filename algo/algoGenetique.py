

import sys
sys.path.insert(0, '../view')

import RicochetMap
import random

import algoGenetiqueMax
import algoGenetiqueNico




CONST_TAILLE_POPULATION = 9
CONST_NB_GENERATION = 5




def controller(carte):

	#Init de la pop
	lesIndividus = init(CONST_TAILLE_POPULATION, carte)

	for e in range(CONST_NB_GENERATION):
		for i in range(CONST_TAILLE_POPULATION):
			# Evaluate individual
			lesIndividus[i].note = evaluateMovements(lesIndividus[i], carte)


		# Select individuals
		lucky_individuals = selectionRoulette(lesIndividus)

		#Croisement / muter
		new_generation = []

	    for i in range(0, len(CONST_TAILLE_POPULATION), 2):
	        # Call to the crossbreeding who will create the next generation
	        croiser(lucky_individuals[i], lucky_individuals[i+1], new_generation)
