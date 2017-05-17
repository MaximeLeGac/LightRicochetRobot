
// Prepare tous les deplacements d'un individusCourant
function init(nbPopulation, carte){
    var lesIndividus = [];
    while(nbPopulation > 0){
        // Nombre de coup a jouer pour un individus
        rannbCoup = Math.floor(Math.random() * 20) + 10;

        var lesCoups = [];
        while(rannbCoup > 0) {
            rannbCoup = rannbCoup - 1;
            lesCoup.push(generateMovements(carte));
        }
        individusCourant.passages = lesCoups;
        individusCourant.note = 0;

        lesIndividus.push(individusCourant);
        nbPopulation = nbPopulation - 1;
    }
    return lesIndividus;
} 

// Ici on se deplacement sur la carte
// On gere les collisions, les demis tour etc...
function generateMovements(carte){
    var deplaRandom = deplacementRandom();
    var positionTempo = [];
    var positionCourante = []; //Position du individu x, y
    var stop = 0;
    // Tant que nos position son différente nous continuons a avancer (pour faire la ligne complete)
    while(stop == 0){
        // Si notre position reste la meme alors nous avons taper un mur et on sort de la boucle 
        positionCourante = gestionCollision(positionCourante, deplaRandom, carte)
        if(positionTempo != positionCourante){
            positionTempo = positionCourante
        }else{
            stop = 1
        }
    }
    return deplaRandom
}



// Verifie si mur sur notre deplacement
// positionIndividu : position du individu initial
// deplacement : deplacement qu'il doit produire
// Carte : carte avec les mur
// return position
function gestionCollision(positionIndividu, deplacement, carte){
    // ici gerer la carte pour les collisions
    var tailleCarte = carte.size - 1

    var posX = positionIndividu[0] + deplacement[0];
    var posY = positionIndividu[1] + deplacement[1];
    var caseCourante = carte.lineList[positionIndividu[0]][positionIndividu[1]];

    if(posX >= 0 && posX < tailleCarte && posY >= 0 && posY < tailleCarte){
        // Si on sort pas de la carte par les X et Y
        if(caseCourante.murH == false && deplacement[0] == 0 && deplacement[1] == 1){
            // Si ont prend pas un mur vers le Haut
            positionIndividu[0] = posX;
            positionIndividu[1] = posY;
        }else if(caseCourante.murB == false && deplacement[0] == 0 && deplacement[1] == -1){
            // Si ont prend pas un mur vers le Bas
            positionIndividu[0] = posX;
            positionIndividu[1] = posY;
        }else if(caseCourante.murG == false && deplacement[0] == -1 && deplacement[1] == 0){
            // Si ont prend pas un mur vers la Gauche
            positionIndividu[0] = posX;
            positionIndividu[1] = posY;
        }else if(caseCourante.murD == false && deplacement[0] == 1 && deplacement[1] == 0){
            // Si ont prend pas un mur vers la Droite
            positionIndividu[0] = posX;
            positionIndividu[1] = posY;
        }
    }
    return positionIndividu;
}



// generation random d'un déplacement
// H : Haut
// D : Droite
// G : Gauche
// B : Bas
function deplacementRandom(){
    var ran = Math.floor(Math.random() * 4) + 1;
    if(ran == 1){
        return position[0, 1]   // H
    }else if(ran == 2){
        return position[0, -1]  // B
    }else if(ran == 3){
        return position[1, 0]   // D
    }else if(ran == 4){
        return position[-1, 0]  // G
    }else{
        return position[0, 1]   // H
    }
}



// Note notre individu
// entrée : un individus, la carte
// Sortie : Note de l'individus
function evaluateMovements(individus, carte){
    var note = 1

    // Ici le nombre de coup est multiplier a la note
    var nbcoup = individus.passages.length;
    note = note * nbcoup;

    var lastPositionIndividus = individus.passages[nbcoup-1];
    var xDiff = lastPositionIndividus[0] - carte.arrivalX;
    var yDiff = lastPositionIndividus[1] - carte.arrivalY;

    if(yDiff < 0){
        yDiff = yDiff * (-1);
    }
    if(xDiff < 0){
        xDiff = xDiff * (-1);
    }

    // Verifier si un mur sur la route du dernier coup (si mur alors augmentation de la note)
    // Verifier si un mur sur la route du dernier coup (si mur alors augmentation de la note)
    // Verifier si un mur sur la route du dernier coup (si mur alors augmentation de la note)
    // Verifier si un mur sur la route du dernier coup (si mur alors augmentation de la note)




    //La distance entre le dernier coup jouer et l'arrive est multiplier pour x et y
    note = note * yDiff;
    note = note * xDiff;
    note = (1 / note) * 100;
    return note;
}