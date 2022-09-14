
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Exo 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let nbr = [10,9,5,4,2];

// function moyenne(note){
//     let cpt = 0;
//     for (let i = 0; i < note.length; i++) {
//         cpt += note[i];
//     }
//     return cpt/note.length;
// }

// function mention(note){
//     if (note >= 15){
//         return 'Tres bien'
//     } else if (note >= 10){
//         return 'Assez bien'
//     }
//     else {
//         return 'Refus'
//     }
// }

// console.log(mention(moyenne(nbr)));

// let voiture = {
//     "nbChevaux": 500,
//     "vitesseMax": 450,
//     "faiblesse": ["accélération","adhérence"]
// };

// voiture.pilote = {
//     "pilote": "quentin",
//     "copilote": "Théo"
// };


// console.log(voiture.pilote.pilote);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Exo 5~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let i = 0;
// let tab = []

// while (i<10){
//     i++;
//     tab.push("#");
//     console.log(tab);
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Exo 6 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function moyenne(note){
//     let cpt = 0;
//     for (let i = 0; i < note.length; i++) {
//         cpt += note[i];
//     }
//     return cpt/note.length;
// }

// console.log(moyenne([10,8,5,3]));

// function plus(tab){
//     for (let i = 0; i < tab.length; i++) {
//         for (let j = 0; j < tab[i].length; j++) {
//             tab[i][j]++;
//         }
//     }
//     return tab
// }
// console.log(plus([[10,10],[2,2],[3,3]]));

// const titre = document.getElementById('titre');
// const txt = document.getElementsByTagName('p');
// const newtext = document.createTextNode("blabla");
// const uneDiv = document.createElement ('div');

// document.body.insertBefore(txt[0], titre);
// document.body.appendChild(titre);
// document.body.appendChild(newtext);
// document.body.replaceChild(newtext, txt[0]);
// document.body.insertBefore(uneDiv, titre);
// uneDiv.appendChild(newtext);

// let uneDiv = `<div></div>`
// const maDiv = document.body.innerHTML = uneDiv;




// function ajoutTexte (pseudo, texte){
//     const artiste = maDiv.createElement(`<p>pseudo</p>`);
// }
// ajoutTexte("JOSé", "AZERTYUIOP");

// const mesH1 = document.getElementsByTagName('h1');
// mesH1[0].style.color = "red";
// mesH1[0].style.fontFamily = "impact";
// mesH1[0].style.boxShadow = "2px 2px 20px orange";

// window.addEventListener("click", e => {

// });

// const titre = document.getElementById('titre');

// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const btn3 = document.getElementById('btn3');

// btn1.addEventListener("click", () => {
//     titre.classList.add("maCouleur")
// });
// btn2.addEventListener("click", () => {
//     titre.classList.remove("maCouleur")
// });
// btn3.addEventListener("click", () => {
//     titre.classList.toggle("maCouleur")
// });
// window.addEventListener("keypress", e => {
//     console.log(e);
// }); 

const titre = document.getElementById('titre');

window.addEventListener("mouseout", e => {
    titre.style.display = "block";
}); 