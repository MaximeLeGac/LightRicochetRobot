# Classe Case
# Représente une case dans la Map avec ses coordonnées et la présence d'obstacle(s)
# à sa position
class Case():

    # ====================================================
    # Méthode d'initialisation
    # x         : Abscisse de la case
    # y         : Ordonnée de la case
    def __init__(self, x =0, y =0):

        # Définit les coordonnées de la case sur la carte
        self.x = x
        self.y = y

        # Indique s'il y a un obstacle sur un bord de la case
        self.murH = False
        self.murB = False
        self.murG = False
        self.murD = False
    # ====================================================

# ====================================================