# Classe Map
# Représente une carte
class Map():

    # ====================================================
    # Méthode d'initialisation
    # size  : Taille de la Map
    def __init__(self, size =0):

        # Initialisation la grille de la carte
        self.lineList = [size][size]
        self.size = size
        self.arrivalX = 0
        self.arrivalY = 0
    # ====================================================


    # ====================================================
    # Ajoute une ligne
    # Méthode helper pour insérer les cases
    # line  : La nouvelle ligne à ajouter
    def appenLine(self, line):

        # On ajoute pas de nouvelles lignes si la grille est pleine
        if (line.__le__ == self.size - 1 && self.lineList.__le__ < self.size - 1):
            self.lineList.append(line)
    # ====================================================


    # ====================================================
    # Définit le point d'arrivée de la carte
    def initArrival(self):

        # Initialise les coordonnées du point d'arrivée
        self.arrivalX = random.randint(0, self.size)
        self.arrivalY = random.randint(0, self.size)
    # ====================================================


    # ====================================================
    # Méthode d'initialisation d'un robot
    def initRobotList(self):

        # Génère les coordonnées de départ du robot
        x = random.randint(0, self.size)
        y = random.randint(0, self.size)

        # Initialise le robot
        self.robotList.append(Robot(x, y))
    # ====================================================
    
# ====================================================