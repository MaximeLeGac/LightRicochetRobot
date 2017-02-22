# Classe Individu
# Représente un individu qui sera utilisé lors de l'exécution de l'algorithme génétique
class Individu ():

    # Méthode d'initialisation
    # passages  : Tableau des déplacements (sous forme [abscisse, ordonnée]) à effectuer par l'individu
    # note      : Note de l'exécution de l'individu
    def __init__(self, passages =[0], note =0):
        self.passages = passages
        self.note = note

