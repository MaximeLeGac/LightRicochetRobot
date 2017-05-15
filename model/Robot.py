# Classe Robot
# Représente un robot sur la map avec ses coordonnées à un instant T et sa couleur
class Robot():

    # ====================================================
    # Méthode d'initialisation
    def __init__(self, x =0, y =0, couleur =0):
        
        # Définit la position du robot sur la carte
        self.x = x
        self.y = y

        # Initialise la couleur du robot
        self.couleur = couleur

        # Initialise la liste des directions prises par le robot
        # H = Haut
        # B = Bas
        # G = Gauche
        # D = Droite
        self.passages = [0]
    # ====================================================