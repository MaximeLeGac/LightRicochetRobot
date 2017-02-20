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
    def __init__(self, x =0, y =0, couleur =0, passages =[0]):
        self.x = x
        self.y = y
        self.couleur = couleur
        self.passages = passages


# Classe Map
# Repr�sente une carte
class Map():
    def __init__(self, size =0):
        self.lineList = [size][size]
        self.size = size

    def appenLine(self, line):
        self.lineList.append(line)


# M�thode de g�n�ration de la carte
def generateMap(size):
    map = Map(8)
    # G�n�rer la position de d�part du robot
    # G�n�rer la position d'arriv�e
    # Remplir la map de cases
    # Assigner les obstacles
    return map
