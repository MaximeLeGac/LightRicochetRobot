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