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