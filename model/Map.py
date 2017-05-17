# Classe Map
# ReprÃ©sente une carte
class Map:

    # ====================================================
    # MÃ©thode d'initialisation
    # size  : Taille de la Map
    def __init__(self):

        # Initialisation la grille de la carte
        self.size = 8
        self.lineList = [self.size][self.size]
        self.arrivalX = 0
        self.arrivalY = 0
        self.robotList = [4]
    # ====================================================


    # ====================================================
    # Ajoute une ligne
    # MÃ©thode helper pour insÃ©rer les cases
    # line  : La nouvelle ligne Ã  ajouter
    def appenLine(self, line):

        # On ajoute pas de nouvelles lignes si la grille est pleine
        if (line.__le__ == self.size - 1 and self.lineList.__le__ < self.size - 1):
            self.lineList.append(line)
    # ====================================================


    # ====================================================
    # DÃ©finit le point d'arrivÃ©e de la carte
    def initArrival(self):

        # Initialise les coordonnÃ©es du point d'arrivÃ©e
        self.arrivalX = random.randint(0, self.size)
        self.arrivalY = random.randint(0, self.size)

        # Les coordonnées ne peuvent pas tombées dans le carré central
        index = ((self.size-2)/2)
        while self.arrivalX == index or self.arrivalX == index+1:
            self.arrivalX = random.randint(0, self.size)

        while self.arrivalY == index or self.arrivalY == index+1:
            self.arrivalY = random.randint(0, self.size)
    # ====================================================


    # ====================================================
    # MÃ©thode d'initialisation d'un robot
    def initRobotList(self):

        # GÃ©nÃ¨re les coordonnÃ©es de dÃ©part du robot
        x = random.randint(0, self.size)
        y = random.randint(0, self.size)

        # Les coordonnées ne peuvent pas tombées dans le carré central
        index = ((self.size-2)/2)
        while x == index or x == index+1:
            x = random.randint(0, self.size)

        while y == index or y == index+1:
            y = random.randint(0, self.size)

        # Initialise le robot
        self.robotList.append(Robot(x, y))
    # ====================================================

# ====================================================