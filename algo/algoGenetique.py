

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
			print(lesIndividus[i])

		# Select individuals
		lucky_individuals = selectionRoulette(lesIndividus)

		#Croisement / muter
