
# Classe Case
# Représente une case dans la Map avec ses coordonnées et la présence d'obstacle(s)
# à sa position
class Case():
    def __init__(self, x =0, y =0, murHaut =Flase, murBas =False, murGauche =False, murDroite =False):
        self.x = x
        self.y = y
        self.murHaut = murHaut
        self.murBas = murBas
        self.murGauche = murGauche
        self.murDroite = murDroite


# Classe Robot
# Représente un robot sur la map avec ses coordonnées à un instant T et sa couleur
class Robot ():
    def __init__(self, x =0, y =0, couleur =0):
        self.x = x
        self.y = y
        self.couleur = couleur


# Classe Map
# Représente une carte
class Map():
    def __init__(self, size =0):
        self.lineList = [size][size]
        self.size = size

    def appenLine(self, line):
        self.lineList.append(line)

import Map
import Robot
import Case
import random

# Méthode de génération de la carte
# size  : Taille de la Map
def generateMap(size):
    
    # Initialise la map
    map = Map(size)
    
    # Génère la position d'arrivée
    map.setArrival()

    # Remplit la map de cases

    # Assigne les obstacles

    return map


# Méthode d'initialisatio d'un robot
# size  : Taille de la Map
# color : Couleur du Robot
def initRobot(size, color):

    # Génère les coordonnées de départ du robot
    x = random.randint(0, size)
    y = random.randint(0, size)

    # Initialise le robot
    return Robot(x, y, color)