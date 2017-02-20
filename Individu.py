# Classe Individu
# Représente un individu qui sera utilisé lors de l'exécution de l'algorithme génétique
class Individu ():

    # Méthode d'initialisation
    # passages  : Séquence "chromosome" de l'individu
    # note      : Note de l'exécution de l'individu
    def __init__(self, passages =[0], note =0):
        self.passages = passages
        self.note = note

        