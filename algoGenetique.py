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



def croiser(parent1, parent2):
	# arrondit permettant de savoir si l'on va prendre le 50% au chiffre supérieur ou inférieur en cas de taille impaire d'un des parents
	arrondit = random.randint(1, 2)
	
	
	
	
	return 0



def muter():
	return 0