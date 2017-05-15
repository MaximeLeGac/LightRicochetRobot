# Classe Case
# Représente une case dans la Map avec ses coordonnées et la présence d'obstacle(s)
# à sa position
class Case():

    # ====================================================
    # Méthode d'initialisation
    # x         : Abscisse de la case
    # y         : Ordonnée de la case
    # murHaut   : Indique s'il y a un obstacle sur le bord haut
    # murBas    : Indique s'il y a un obstacle sur le bord bas
    # murGauche : Indique s'il y a un obstacle sur le bord gauche
    # murDroite : Indique s'il y a un obstacle sur le bord droite
    def __init__(self, x =0, y =0, murHaut =False, murBas =False, murGauche =False, murDroite =False):

        # Définit les coordonnées de la case sur la carte
        self.x = x
        self.y = y

        # Indique s'il y a un obstacle sur un bord de la case
        self.murHaut = murHaut
        self.murBas = murBas
        self.murGauche = murGauche
        self.murDroite = murDroite
    # ====================================================

# ====================================================