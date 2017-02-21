import RicochetMap
import random

CONST_TAILLE_POPULATION = 9


def createrobot():
	robot = GetRobot("bleu")
	carte = getCarte()

	init(robot, carte)


def init(robot, carte):
	for i in range(CONST_TAILLE_POPULATION):
		tailleUnePopulation = random.randint(0, 15)
		for u in range(tailleUnePopulation)
			robot.passages[u] = gestionDeplacement(carte)
			

			 

# Ici on se deplacement sur la carte
# On gere les collisions, les demis tour etc...
def gestionDeplacement(carte):
	deplaRandom = deplacementRandom()
	positionTempo = []
	positionCourante = [] #Position du robot x, y
	stop = 0
	# Tant que nos position son différente nous continuons a avancer (pour faire la ligne complete)
	while stop == 0:
		# Si notre position reste la meme alors nous avons taper un mur et on sort de la boucle 
 		positionCourante = gestionCollision(positionCourante, deplaRandom, carte)
 		if(positionTempo != positionCourante):
 			positionTempo = positionCourante
 		else:
 			stop = 1

 	# ici on finit par return la lettre correspondant au deplacement 
 	if(deplaRandom[0] == 0 and deplacementRandom[1] == 1):
    	return "H"
    elif(deplaRandom[0] == 0 and deplacementRandom[1] == -1):
    	return "B"
    elif(deplaRandom[0] == 1 and deplacementRandom[1] == 0):
    	return "D"
    elif(deplaRandom[0] == -1 and deplacementRandom[1] == 0):
		return "G"
 	else:
    	return "Error"


############################################""Penser a faire les colission robot
############################################""Penser a faire les colission robot
############################################""Penser a faire les colission robot

# Verifie si mur sur notre deplacement
# positionRobot : position du robot initial
# deplacement : deplacement qu'il doit produire
# Carte : carte avec les mur
# return position
def gestionCollision(positionRobot, deplacement, carte):
	# ici gerer la carte pour les collisions
	tailleCarte = len(carte) - 1

	# Pour la carte on prend la case 0
	if(positionRobot[0] >= 0 and positionRobot[0] < tailleCarte):
		positionRobot[0] = positionRobot[0] + deplacement[0]
	elif(positionRobot[1] >= 0 and positionRobot[1] < tailleCarte):
		positionRobot[1] = positionRobot[1] + deplacement[1]
	else:
		# rien on renvoi donc les meme valeurs (sa veut dire qu'on sort de la carte)

############################################""Penser a faire les colission MUR
############################################""Penser a faire les colission MUR
############################################""Penser a faire les colission MUR
############################################""Penser a faire les colission MUR
############################################""Penser a faire les colission MUR

	return positionRobot




# generation random d'un déplacement
# H : Haut
# D : Droite
# G : Gauche
# B : Bas
def deplacementRandom():
    ran = random.randint(1, 4)
    if(ran == 1):
    	return position[0, 1] 	# H
    elif(ran == 2):
    	return position[0, -1] 	# B
    elif(ran == 3):
    	return position[1, 0] 	# D
	elif(ran == 4):
		return position[-1, 0] 	# G
	else:
    	return position[0, 1] 	# H

   


def evaluation():
	return 0



def croiser():
	return 0



def muter():
	return 0