function selectionRoulette(population){
    // Génération d'un Offset maximum avec 1/4 de la totalité des notes
    var maxOffset = 1;
    var totalNote = 0;

    for (var k = 0; k < population.length; k++) {
        note = population[k].note;

        if(float(note) > maxOffset){
            totalNote = totalNote + float(note);
        }

        maxOffset = int(Math.round(totalNote/4,0));
    }

    // Maintenant nous randomisons afin de créer l'offset
    var offset = random.randint(1, maxOffset);

    var tempo = 0;
    var couple = "";
    var nbPop = 0;
    var offsetFin = 0;
    var taille = len(population);

    while (nbPop < taille) {

        for (var x = 0; x < taille; x++) {
            if (nbPop < taille) {
                note = population[k].note;
                tempo = tempo + float(note);

                if (tempo >= offset) {
                    if (couple != "") {
                        couple = couple + "_" + str(x);
                        nbPop = nbPop + 1;
                    } else {
                        couple = str(x);
                        nbPop = nbPop + 1;
                    }

                    offset = offset + offset;
                }

                if (x == (taille-1)) {
                    offset = 0-(tempo - offset);
                }
            }
    }

    var couples = [];
    var maSelection = couple.split("_");

    for (var i = 0; i < maSelection.length; i++) {
        var select = int(maSelection[i])
        couples.push(select)

    return couples;
}

// Méthode permettant de croiser les déplacements de 2 individus parents pour créer 2 individus enfants
function croiser(individu_parent1, individu_parent2, nouveaux_individus) {

    // Taille du premier individu parent
    var taille_parent1 = individu_parent1.passages.length;
    // Taille du deuxieme individu parent
    var taille_parent2 = individu_parent2.passages.length;

    // Hauteur à laquelle on va découper les passages des parents
    var hauteur_croisement = Math.floor(Math.random() * taille_parent1) + 1; 

    var bebe_1 = [];
    var bebe_2 = [];

    // Creation of the first half of each child based on the first half of each parents
    for (var i = 0; i < hauteur_croisement; i++) {
        bebe_1.passages.push(individu_parent1.passages[i]);
        bebe_2.passages.push(individu_parent2.passages[i]);

    // Creation of the second half of each child based on the second half of each parents
    for (var i = hauteur_croisement; i < taille_parent2; i++) {
        bebe_1.passages.push(individu_parent2.passages[i]);

    for (var i = hauteur_croisement; i < taille_parent1; i++) {
        bebe_2.passages.push(individu_parent1.passages[i]);

    // Call to the mutation function on each child
    muter(bebe_1);
    muter(bebe_2);

    nouveaux_individus.push(bebe_1);
    nouveaux_individus.push(bebe_2);

    return nouveaux_individus;
}

// Méthode ppermettant, dans un faible pourcentage des cas, de modifier un des déplacements de l'individu
function muter(individu) {
    // Par defaut, mutation rate de 5%
    // mais dans le futur, mutation rate qui évolue en fonction du taux de réussite des individus (si taux stagne, augmentation du mutation rate)

    var tab_deplacements = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    var taux_mutation = Math.floor(Math.random() * 100);

    if (0 <= taux_mutation && taux_mutation <= 5) {
        index_random_deplacement = Math.floor(Math.random() * 3); // Nombre random pour choisir un déplacement parmi les 4 possibles
        index_random_individu = Math.floor(Math.random() * individu.passages.length); // Nombre random pour choisir le déplacement qui sera remplacé chez l'individu

        individu.passages[index_random_individu] = tab_deplacements[index_random_deplacement] ;
    }

    return individu;
}
