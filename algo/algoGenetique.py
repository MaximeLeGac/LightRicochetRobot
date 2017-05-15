import RicochetMap
import random

import algoGenetiqueMax
import algoGenetiqueNico

CONST_TAILLE_POPULATION = 9
CONST_NB_GENERATION = 5


def init(individu, carte):
	
	#Init de la pop

	for e in range(CONST_NB_GENERATION):
		for i in range(CONST_TAILLE_POPULATION):

			#on évalue un individus
			evaluateMovements()

			#Selection 

			#Croisement

			#Muter