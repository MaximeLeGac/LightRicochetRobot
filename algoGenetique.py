import RicochetMap
import random

CONST_TAILLE_POPULATION = 9


def createrobot():
	robot = GetRobot("bleu")
	carte = getCarte()

	init(robot, carte)


def init(robot):
	for i in range(CONST_TAILLE_POPULATION):
		for u in range()
			robot.passages[u] = deplacementRandom()




# generation random d'un déplacement
# H : Haut
# D : Droite
# G : Gauche
# B : Bas
def deplacementRandom():
    ran = random.randint(1, 4)
    if(ran == 1):
    	return "H"
    elif(ran == 2):
    	return "B"
    elif(ran == 3):
    	return "D"
	elif(ran == 4):
		return "G"
	else:
		return "H"

   


def evaluation():
	return 0



def croiser():
	return 0



def muter():
	return 0