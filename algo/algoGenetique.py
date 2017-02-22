import RicochetMap
import random

import algoGenetiqueMax
import algoGenetiqueNico

CONST_TAILLE_POPULATION = 9


def init(individu, carte):
	# NIcoo
	for i in range(CONST_TAILLE_POPULATION):
		tailleUnePopulation = random.randint(0, 15)

		for u in range(tailleUnePopulation)
			individu.passages[u] = gestionDeplacement(carte)

	# Max
	# ...

