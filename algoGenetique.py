import RicochetMap

CONST_TAILLE_POPULATION = 10

def createrobot():
	robot = GetRobot("bleu")
	init(robot)


def init(robot):
	for i in range(CONST_TAILLE_POPULATION):
		robot.passages = deplacementRandom()




def deplacementRandom():
	
	return 0


def evaluation():
	return 0



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



def muter():
	# Par defaut, mutation rate de 5%
	# mais dans le futur, mutation rate qui évolue en fonction du taux de réussite des individus (si taux stagne, augmentation du mutation rate)

	taux_mutation = random.randint(0,100)
	if 0 <= taux_mutation <= 5:
		


	return 0