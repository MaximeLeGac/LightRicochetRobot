#!/usr/bin/env python

import Map
import Robot
import Case
import random

# ====================================================
# Méthode de génération de la carte
# index : Inddex de la Map
def generateMap(index):
    if index == 1:
        return generateMap1()
    elif index == 2:
        return generateMap2()
    elif index == 3:
        return generateMap3()
# ====================================================


# ====================================================
# Méthode de génération de la carte 1
def generateMap1():
    
    # Initialise la map
    map = Map(8)

    # Remplit la map de cases
    for x in xrange(size):
        line = [size]
        for y in xrange(size):
            line[y] = Case(x, y)
        map.appendLine(line)
    
    # Génère la position d'arrivée
    map.setArrival()

    # Assigne les obstacles

    return map
# ====================================================


# ====================================================
# Définit le point d'arrivée de la carte
def setArrival(map):

    # Initialise les coordonnées du point d'arrivée
    map.arrivalX = random.randint(0, self.size)
    map.arrivalY = random.randint(0, self.size)
# ====================================================


# ====================================================
# Remplit une map
def fillMap(map):
    for x in xrange(map.size):
        line = [map.size]
        for y in xrange(map.size):
            line[y] = Case(x, y)
        map.appendLine(line)
# ====================================================


# ====================================================
# Méthode d'initialisation d'un robot
# size  : Taille de la Map
# color : Couleur du Robot
def initRobot(size, color):

    # Génère les coordonnées de départ du robot
    x = random.randint(0, size)
    y = random.randint(0, size)

    # Initialise le robot
    return Robot(x, y, color)
# ====================================================