#!/usr/bin/env python

import Map
import Robot
import Case
import random
import webbrowser

# ====================================================
# Initialise la carte, l'arrivée et appelle le controller pour lancer les déplacements
def init():
    # Demande l'index de la map souhaitée
    index = 1

    # Génère la map
    map = generateMap(index)

    # Gestion de la vue
    f = open('helloworld.html','w')
    message = """
    <html>
        <head></head>
        <body>
            <p>Hello World!</p>
        </body>
    </html>
    """
    f.write(message)
    f.close()
    webbrowser.open_new_tab('helloworld.html')
# ====================================================


# ====================================================
# Méthode de génération de la carte
# index : Inddex de la Map
def generateMap(index):
    
    # Initialise la map
    map = Map()
    
    # Remplit la map de cases
    fillMap(map)

    # Assigne les obstacles correspondant à l amap attendue
    if index == 1:
        # obstacles de la 1ère  map
        setWallsMap1(map)
    elif index == 2:
        # obstacles de la 2e map
        setWallsMap2(map)
    elif index == 3:
        # obstacles de la 3e map
        setWallsMap2(map)
    
    # Génère la position d'arrivée
    map.initArrival()

    # Génère les robots de la map
    map.initRobotList()

    return map
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
# Assigne les murs de la map 1
def setWallsMap1(map):
    map.lineList[0][1].murB = True

    map.lineList[1][0].murD = True
    map.lineList[1][1].murG = True
    map.lineList[1][1].murH = True
    map.lineList[1][4].murD = True
    map.lineList[1][5].murG = True
    map.lineList[1][5].murB = True

    map.lineList[2][3].murD = True
    map.lineList[2][3].murB = True
    map.lineList[2][4].murG = True
    map.lineList[2][4].murB = True
    map.lineList[2][7].murB = True

    map.lineList[3][1].murB = True
    map.lineList[3][2].murD = True
    map.lineList[3][3].murG = True
    map.lineList[3][3].murH = True
    map.lineList[3][4].murD = True
    map.lineList[3][4].murH = True
    map.lineList[3][5].murG = True
    map.lineList[3][7].murH = True
    
    map.lineList[4][1].murH = True
    map.lineList[4][2].murD = True
    map.lineList[4][3].murG = True
    map.lineList[4][3].murB = True
    map.lineList[4][4].murD = True
    map.lineList[4][4].murB = True
    map.lineList[4][5].murG = True
    map.lineList[4][5].murB = True
    
    map.lineList[5][0].murD = True
    map.lineList[5][1].murG = True
    map.lineList[5][3].murH = True
    map.lineList[5][4].murH = True
    map.lineList[5][5].murH = True
    
    map.lineList[6][2].murD = True
    map.lineList[6][3].murG = True
    map.lineList[6][6].murD = True
    map.lineList[6][7].murG = True
    map.lineList[6][7].murB = True
    
    map.lineList[7][3].murD = True
    map.lineList[7][4].murG = True
    map.lineList[7][7].murH = True
# ====================================================


# ====================================================
# Assigne les murs de la map 2
def setWallsMap2(map):
    map.lineList[0][1].murB = True

    map.lineList[1][0].murD = True
    map.lineList[1][1].murG = True
    map.lineList[1][1].murH = True
    map.lineList[1][4].murD = True
    map.lineList[1][5].murG = True
    map.lineList[1][5].murB = True

    map.lineList[2][3].murD = True
    map.lineList[2][3].murB = True
    map.lineList[2][4].murG = True
    map.lineList[2][4].murB = True
    map.lineList[2][7].murB = True

    map.lineList[3][1].murB = True
    map.lineList[3][2].murD = True
    map.lineList[3][3].murG = True
    map.lineList[3][3].murH = True
    map.lineList[3][4].murD = True
    map.lineList[3][4].murH = True
    map.lineList[3][5].murG = True
    map.lineList[3][7].murH = True
    
    map.lineList[4][1].murH = True
    map.lineList[4][2].murD = True
    map.lineList[4][3].murG = True
    map.lineList[4][3].murB = True
    map.lineList[4][4].murD = True
    map.lineList[4][4].murB = True
    map.lineList[4][5].murG = True
    map.lineList[4][5].murB = True
    
    map.lineList[5][0].murD = True
    map.lineList[5][1].murG = True
    map.lineList[5][3].murH = True
    map.lineList[5][4].murH = True
    map.lineList[5][5].murH = True
    
    map.lineList[6][2].murD = True
    map.lineList[6][3].murG = True
    map.lineList[6][6].murD = True
    map.lineList[6][7].murG = True
    map.lineList[6][7].murB = True
    
    map.lineList[7][3].murD = True
    map.lineList[7][4].murG = True
    map.lineList[7][7].murH = True
# ====================================================


# ====================================================
# Assigne les murs de la map 3
def setWallsMap3(map):
    map.lineList[0][1].murB = True

    map.lineList[1][0].murD = True
    map.lineList[1][1].murG = True
    map.lineList[1][1].murH = True
    map.lineList[1][4].murD = True
    map.lineList[1][5].murG = True
    map.lineList[1][5].murB = True

    map.lineList[2][3].murD = True
    map.lineList[2][3].murB = True
    map.lineList[2][4].murG = True
    map.lineList[2][4].murB = True
    map.lineList[2][7].murB = True

    map.lineList[3][1].murB = True
    map.lineList[3][2].murD = True
    map.lineList[3][3].murG = True
    map.lineList[3][3].murH = True
    map.lineList[3][4].murD = True
    map.lineList[3][4].murH = True
    map.lineList[3][5].murG = True
    map.lineList[3][7].murH = True
    
    map.lineList[4][1].murH = True
    map.lineList[4][2].murD = True
    map.lineList[4][3].murG = True
    map.lineList[4][3].murB = True
    map.lineList[4][4].murD = True
    map.lineList[4][4].murB = True
    map.lineList[4][5].murG = True
    map.lineList[4][5].murB = True
    
    map.lineList[5][0].murD = True
    map.lineList[5][1].murG = True
    map.lineList[5][3].murH = True
    map.lineList[5][4].murH = True
    map.lineList[5][5].murH = True
    
    map.lineList[6][2].murD = True
    map.lineList[6][3].murG = True
    map.lineList[6][6].murD = True
    map.lineList[6][7].murG = True
    map.lineList[6][7].murB = True
    
    map.lineList[7][3].murD = True
    map.lineList[7][4].murG = True
    map.lineList[7][7].murH = True
# ====================================================