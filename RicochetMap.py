
# Classe Case
# Repr�sente une case dans la Map avec ses coordonn�es et la pr�sence d'obstacle(s)
# � sa position
class Case():
    def __init__(self, x =0, y =0, murHaut =Flase, murBas =False, murGauche =False, murDroite =False):
        self.x = x
        self.y = y
        self.murHaut = murHaut
        self.murBas = murBas
        self.murGauche = murGauche
        self.murDroite = murDroite


# Classe Robot
# Repr�sente un robot sur la map avec ses coordonn�es � un instant T et sa couleur
class Robot ():
    def __init__(self, x =0, y =0, couleur =0):
        self.x = x
        self.y = y
        self.couleur = couleur


# Classe Map
# Repr�sente une carte
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

# M�thode de g�n�ration de la carte
# size  : Taille de la Map
def generateMap(size):
    
    # Initialise la map
    map = Map(size)
    
    # G�n�re la position d'arriv�e
    map.setArrival()

    # Remplit la map de cases

    # Assigne les obstacles

    return map


# M�thode d'initialisatio d'un robot
# size  : Taille de la Map
# color : Couleur du Robot
def initRobot(size, color):

    # G�n�re les coordonn�es de d�part du robot
    x = random.randint(0, size)
    y = random.randint(0, size)

    # Initialise le robot
    return Robot(x, y, color)