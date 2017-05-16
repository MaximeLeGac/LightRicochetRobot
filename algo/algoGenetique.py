#import RicochetMap
import random

import algoGenetiqueMax
import algoGenetiqueNico




CONST_TAILLE_POPULATION = 9
CONST_NB_GENERATION = 5




def controller(carte):

	#Init de la pop
	init(CONST_TAILLE_POPULATION, carte)

	for e in range(CONST_NB_GENERATION):
		for i in range(CONST_TAILLE_POPULATION):

			#on Ã©value un individus
			evaluateMovements(individus, carte)

			#Selection

			#Croisement

			#Muter