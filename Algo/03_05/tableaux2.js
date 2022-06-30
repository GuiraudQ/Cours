let tab = [15,1,6,5,7,63,5,2,4,2,684,35];
// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function lastElem(tab){
    console.log(tab[tab.length-1]);
}
// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function lastElem2(tab){
    return tab[tab.length-1];
}
// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function minElem(tab){
    let nbrMin = tab[0];
    for (let i = 1; i < tab.length; i++) {
        if (tab[i] < nbrMin){
            nbrMin = tab[i]
        }        
    }
    return nbrMin;
}

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function maxElem(tab){
    let nbrMax = tab[0];
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > nbrMax){
            nbrMax = tab[i]
        }        
    }
    return nbrMax;
}
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.
function maxElem2(tab){
    let nbrMax = tab[0];
    let nbrMax2 = nbrMax;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > nbrMax){
            nbrMax2 = nbrMax;
            nbrMax = tab[i]
        }       
    }
    return nbrMax2;
}
console.log(maxElem2(tab));
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function compteNum(tab,n){
    let cpt = 0;
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] == n){
            cpt++
        }       
    }
    return cpt;
}
// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function numExist(tab,n){

    for (let i = 0; i < tab.length; i++) {
        if (tab[i] == n){
            return true;
        }else {
            return false;
        }
    }

}
// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?
function numExist2(tab,n){
    if(tab.length > n){
        return true;
    }else{
        return false;
    }
}
// Créer un tableau qui contient [1,2,3,...,7777].
function createTab(longueur){
    let maTab = []
    for (let i = 0; i < longueur; i++) {
        maTab.push(i+1);        
    }
    return maTab
}
// Créer un tableau qui contient [10,20,30,...,77770].
function createTabDix(longueur){
    let maTab = []
    for (let i = 0; i < longueur; i++) {
        maTab.push((i+1)*10);        
    }
    return maTab
}
let tabDix = createTabDix(7777);
// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tabCinq = [];
for (let i = 0; i < tabDix.length; i++) {
    tabCinq.push(tabDix[i]/2);    
}
console.log(tabCinq)
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]
function trier(tab){
    for (let i = 0; i < tab.length; i++) {
        let nbrMax = tab[0];
        let nbrMax2 = nbrMax;
        for (let i = 0; i < tab.length; i++) {
            if (tab[i] > nbrMax){
                nbrMax2 = nbrMax;
                nbrMax = tab[i]
            }       
        }
        return nbrMax2;
    }
}
console.log(tabCinq)

// Le but est de trier un tableau nous-même (il faut mettre les éléments du plus petit au plus grand). Pour cela, on va procéder en plusieurs étapes :

// Étape 1 : écrire une fonction qui reçoit un tableau et un numéro de case (i). Son but est d'échanger les valeurs des cases i et i+1 si celles-ci ne sont pas dans le bon ordre.

// Étape 2 : écrire une fonction qui reçoit un tableau et qui applique l'étape 1 sur toutes les cases successives (cases 0/1, cases 1/2, cases 2/3, ..., cases avant-dernière/dernière).

// Étape 3 : écrire une fonction qui reçoit un tableau et qui le trie en appelant la fonction 2 autant de fois qu'il y a d'éléments dans le tableau.

// Note : on peut visualiser cet algorithme sur cette image <https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/211162/a9b17b54-b6dd-1602-be04-6fc125676b7a.gif>.
