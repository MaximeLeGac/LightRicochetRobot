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
    def __init__(self, x =0, y =0, couleur =0, passages =[0]):
        self.x = x
        self.y = y
        self.couleur = couleur
        self.passages = passages


# Classe Map
# Représente une carte
class Map():
    def __init__(self, size =0):
        self.lineList = [size][size]
        self.size = size

    def appenLine(self, line):
        self.lineList.append(line)


# Méthode de génération de la carte
def generateMap(size):
    map = Map(8)
    # Générer la position de départ du robot
    # Générer la position d'arrivée
    # Remplir la map de cases
    # Assigner les obstacles
    return map
