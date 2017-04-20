# Ici on se deplacement sur la carte
# On gere les collisions, les demis tour etc...
def generateMovements(carte):
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
	if(positionIndividu[0] >= 0 and positionIndividu[0] < tailleCarte):	#x
		positionIndividu[0] = positionIndividu[0] + deplacement[0]
	elif(positionIndividu[1] >= 0 and positionIndividu[1] < tailleCarte): #y
		positionIndividu[1] = positionIndividu[1] + deplacement[1]
	else:

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

   

# Note notre individu 
# entrée : un individus
# Sortie : Note de l'indidus
def evaluateMovements(individus):

	return 0