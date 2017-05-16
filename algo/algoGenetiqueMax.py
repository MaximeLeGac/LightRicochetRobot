import random


def selectionRoulette(population):

    # Génération d'un Offset maximum avec 1/4 de la totalité des notes
    maxOffset = 1
    totalNote = 0
    for k in range(len(population)):
        note = population[k].note
        if(float(note) > maxOffset):
            totalNote = totalNote + float(note)

        maxOffset = int(round(totalNote/4,0))

    # Maintenant nous randomisons afin de créer l'offset
    offset = random.randint(1, maxOffset)

    tempo = 0
    couple = ""
    nbPop = 0
    offsetFin = 0
    # I love potatoes
    taille = len(population)
    while nbPop < taille:

        for x in range(0, taille):
            if(nbPop < taille):
                note = population[k].note
                tempo = tempo + float(note)
                if(tempo >= offset):
                    if(couple != ""):
                        couple = couple + "_" + str(x)
                        nbPop = nbPop + 1
                    else:
                        couple = str(x)
                        nbPop = nbPop + 1

                    offset = offset + offset
                if(x == (taille-1)):
                    offset = 0-(tempo - offset)

    couples = []
    maSelection = couple.split("_")
    for i in range(0, len(maSelection)):
        select = int(maSelection[i])
        couples.append(select)

    return couples




# Méthode permettant de croiser les déplacements de 2 individus parents pour créer 2 individus enfants
def croiser(individu_parent1, individu_parent2, nouveaux_individus):

    taille_parent1 = len(individu_parent1.passages) # Taille du premier individu parent
    taille_parent2 = len(individu_parent2.passages) # Taille du deuxiÃ¨me individu parent

    ############################################
    # Création des enfants

    hauteur_croisement = random.randint(1,6) # Hauteur à laquelle on va découper les passages des parents

    bebe_1 = []
    bebe_2 = []

    # Creation of the first half of each child based on the first half of each parents
    for i in range(crossing_height):
        bebe_1.passages.append(individu_parent1.passages[i])
        bebe_2.passages.append(individu_parent2.passages[i])

    # Creation of the second half of each child based on the second half of each parents
    for i in range(crossing_height, taille_parent2):
        bebe_1.passages.append(individu_parent2.passages[i])

    for i in range(crossing_height, taille_parent1):
        bebe_2.passages.append(individu_parent1.passages[i])

    # Call to the mutation function on each child
    muter(bebe_1)
    muter(bebe_2)

    nouveaux_individus.append(bebe_1)
    nouveaux_individus.append(bebe_2)

    return nouveaux_individus




# Méthode ppermettant, dans un faible pourcentage des cas, de modifier un des déplacements de l'individu
def muter(individu):
    # Par defaut, mutation rate de 5%
    # mais dans le futur, mutation rate qui évolue en fonction du taux de réussite des individus (si taux stagne, augmentation du mutation rate)

    tab_deplacements = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    taux_mutation = random.randint(0, 100)

    if 0 <= taux_mutation <= 5:
        index_random_deplacement = random.randint(1, 4) # Nombre random pour choisir un déplacement parmi les 4 possibles
        index_random_individu = random.randint(1, len(individu.passages)) # Nombre random pour choisir le déplacement qui sera remplacé chez l'individu

        individu.passages[index_random_individu] = tab_deplacements[index_random_deplacement]

    return individu

