


def selection():


def croiser(individu_parent1, individu_parent2):
	
	taille_parent1 = len(individu_parent1.passages) # Taille du premier individu parent
	taille_parent2 = len(individu_parent2.passages) # Taille du deuxième individu parent

	taille_moyenne1 = round((taille_parent1 / 2), 0)
	taille_moyenne2 = round((taille_parent2 / 2), 0)
	
	# Création des enfants
	enfant1[0:taille_moyenne1] = individu_parent1[0:taille_moyenne1]
	enfant1[taille_moyenne2+1:taille_parent2] = individu_parent2[taille_moyenne2+1:taille_parent2]


	enfant2[0:taille_moyenne2] = individu_parent2[0:taille_moyenne2]
	enfant2[taille_moyenne1+1:taille_parent1] = individu_parent1[taille_moyenne1+1:taille_parent1]
	
	return 0



# Méthode ppermettant, dans un faible pourcentage des cas, de modifier un des déplacements de l'individu
def muter(individu):
	# Par defaut, mutation rate de 5%
	# mais dans le futur, mutation rate qui évolue en fonction du taux de réussite des individus (si taux stagne, augmentation du mutation rate)

	tab_deplacements = [[0, 1], [0, -1], [1, 0], [-1, 0]]
	taux_mutation = random.randint(0, 100)

	if 0 <= taux_mutation <= 5:
		index_random_deplacement = random.randint(1, 4) # Nombre random pour choisir un déplacement parmi les 4 possibles
		index_random_individu = random.randint(1, len(individu.passages)) # Nombre random pour choisir le déplacement qui sera remplacé chez l'individu

		individu.passages[index_random_individu] = tab_deplacements[index_random_deplacement] 


	return individu