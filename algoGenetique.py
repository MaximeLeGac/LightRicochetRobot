import RicochetMap
import random

CONST_TAILLE_POPULATION = 9


def createrobot():

	carte = getCarte()
	individu = Individu()

	init(individu, carte)



def init(individu, carte):
	for i in range(CONST_TAILLE_POPULATION):
		tailleUnePopulation = random.randint(0, 15)
		for u in range(tailleUnePopulation)
			individu.passages[u] = gestionDeplacement(carte)
			


			 

# Ici on se deplacement sur la carte
# On gere les collisions, les demis tour etc...
def gestionDeplacement(carte):
	deplaRandom = deplacementRandom()
	positionTempo = []
	positionCourante = [] #Position du individu x, y
	stop = 0
	# Tant que nos position son différente nous continuons a avancer (pour faire la ligne complete)
	while stop == 0:
		# Si notre position reste la meme alors nous avons taper un mur et on sort de la boucle 
 		positionCourante = gestionCollision(positionCourante, deplaRandom, carte)
 		if(positionTempo != positionCourante):
 			positionTempo = positionCourante
 		else:
 			stop = 1
 	return deplaRandom


############################################""Penser a faire les colission individu
############################################""Penser a faire les colission individu
############################################""Penser a faire les colission individu

# Verifie si mur sur notre deplacement
# positionIndividu : position du individu initial
# deplacement : deplacement qu'il doit produire
# Carte : carte avec les mur
# return position
def gestionCollision(positionIndividu, deplacement, carte):
	# ici gerer la carte pour les collisions
	tailleCarte = len(carte) - 1

	# Pour la carte on prend la case 0
	if(positionIndividu[0] >= 0 and positionIndividu[0] < tailleCarte):
		positionIndividu[0] = positionIndividu[0] + deplacement[0]
	elif(positionIndividu[1] >= 0 and positionIndividu[1] < tailleCarte):
		positionIndividu[1] = positionIndividu[1] + deplacement[1]
	else:
		# rien on renvoi donc les meme valeurs (sa veut dire qu'on sort de la carte)

############################################""Penser a faire les colission MUR
############################################""Penser a faire les colission MUR
############################################""Penser a faire les colission MUR
############################################""Penser a faire les colission MUR
############################################""Penser a faire les colission MUR

	return positionIndividu




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

   

# Note notre population 
# entrée : liste des deplacements
# Sortie : Note du population
def evaluation(populations):
	

	return 0


### pour max
def selectionElite():
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