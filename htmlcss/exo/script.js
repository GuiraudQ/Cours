
// function calculer(){

//     let nbr1 = document.querySelector('#nbr1').value;
//     let nbr2 = document.querySelector('#nbr2').value;
//     let resultat = document.querySelector('#resultat');

//     nbr1 = parseInt(nbr1);
//     nbr2 = parseInt(nbr2);

//     console.log(nbr1 + nbr2)
// }


// function exposant(a, b){
//     return a**b
// }


// function calculer(){

//     let nbr1 = document.querySelector('#nbr1').value;
//     let nbr2 = document.querySelector('#nbr2').value;

//     nbr1 = parseInt(nbr1);
//     nbr2 = parseInt(nbr2);

//     console.log(exposant(nbr1, nbr2));
// }

// let vehicule = {
//     "nom" : "clio",
//     "nbrRoue" : 4,
//     "couleur" : "green"
// }
// console.log(vehicule.nom);
// console.log(vehicule.nbrRoue);
// console.log(vehicule.couleur);

// let titre = document.getElementById('titre');
// let state = false;
// function changeColor (){
//     if (state){
//         titre.style.color = 'red';
//         state = !state;
//     } else {
//         titre.style.color = 'black';
//         state = !state;
//     }
// }
// titre.addEventListener('click', changeColor)

// let titre = document.getElementById('titre');
// let invert = Boolean => !Boolean;
// let state = true;
// titre.addEventListener('click', invert(state))
// titre.style.color = (state) ? 'red' : 'black';

// let titre = document.getElementById('titre');
// let state = false;
// titre.addEventListener('click', e => {
//     titre.style.color = (state) ? 'red' : 'black';
//     state = !state;
// })


// let bt = document.querySelector('#bt');
// let zone = document.querySelector('#zone');
// let tva = 1.196;

// bt.addEventListener("click", e => {
//     let nbr1 = document.querySelector('#nbr1').value;
//     let nbr2 = document.querySelector('#nbr2').value;
//     nbr1 = parseInt(nbr1);
//     nbr2 = parseInt(nbr2);
//     zone.innerHTML += 
//     `<p>Le prix taxé de votre produit seras de ${nbr1*tva}</p>
//     <p>Le prix taxé de votre produit en ${nbr2} exemplaire seras de ${nbr1 * tva * nbr2}</p>`;
// })
// let box1 = document.querySelector('#box1');
// let box2 = document.querySelector('#box2');
// let box3 = document.querySelector('#box3');
// let box4 = document.querySelector('#box4');

// let stateBox1 = false;
// let nbClicBox1 = 0;
// let stateBox2 = false;
// let nbClicBox2 = 0;
// let stateBox3 = false;
// let nbClicBox3 = 0;
// let stateBox4 = false;
// let nbClicBox4 = 0;

// setTimeout(function(){box1.style.visibility = 'visible'}, 1000);
// setTimeout(function(){box2.style.visibility = 'visible'}, 2000);
// setTimeout(function(){box3.style.visibility = 'visible'}, 3000);
// setTimeout(function(){box4.style.visibility = 'visible'}, 4000);

// box1.innerHTML = `<p>${nbClicBox1}</p>`
// box2.innerHTML = `<p>${nbClicBox2}</p>`
// box3.innerHTML = `<p>${nbClicBox3}</p>`
// box4.innerHTML = `<p>${nbClicBox4}</p>`

// box1.addEventListener('click', e => {
//     box1.style.background = (stateBox1) ? 'red' : 'green';
//     stateBox1 = !stateBox1;
//     nbClicBox1++;
//     box1.innerHTML = `<p>${nbClicBox1}</p>`
// })
// box2.addEventListener('click', e => {
//     box2.style.background = (stateBox2) ? 'green' : 'red';
//     stateBox2 = !stateBox2;
//     nbClicBox2++;
//     box2.innerHTML = `<p>${nbClicBox2}</p>`
// })
// box3.addEventListener('click', e => {
//     box3.style.background = (stateBox3) ? 'yellow' : 'green';
//     stateBox3 = !stateBox3;
//     nbClicBox3++;
//     box3.innerHTML = `<p>${nbClicBox3}</p>`
// })
// box4.addEventListener('click', e => {
//     box4.style.background = (stateBox4) ? 'blue' : 'red';
//     stateBox4 = !stateBox4;
//     nbClicBox4++;
//     box4.innerHTML = `<p>${nbClicBox4}</p>`
// })
// function changeColor(obj, col1, col2, state){
//     obj.style.background = (state) ? col1 : col2;
//     state = !state;
// }
// box1.addEventListener('click', changeColor(box1, 'red', 'green', stateBox1));

// let box = document.querySelector('.box');
// let test = false;
// console.log(box.style)
// box.addEventListener('click', e => {
//     if (box.style.animationPlayState == ""){
//         box.style.animation = 'iDunno 5s linear infinite alternate';
//         // test = !test;
//     } else if (box.style.animationPlayState == "running"){
//         box.style.animationPlayState = "paused";
//     } else {
//         box.style.animationPlayState = "running";
//     }
// })
// let p1 = document.querySelector('#p1');
// let p2 = document.querySelector('#p2');

// p1.addEventListener('click', e => {
//     p1.classList.toggle('error');
// })
// p1.addEventListener('dblclick', e => {
//     p1.classList.toggle('valid');
// })
// p2.addEventListener('mouseover', e => {
//     p2.classList.add('valid');
// })
// p2.addEventListener('mouseout', e => {
//     p2.classList.remove('valid');
// })

let mail = document.querySelector('#mail');
let password = document.querySelector('#password');
let valider = document.querySelector('#valider');
let zone = document.querySelector('#zone');


let okMail = false;

window.addEventListener('keyup', e => {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (mail.value != "" && mail.value.match(regex)){
        mail.classList.remove('error');
        mail.classList.add('valid')
        okMail = true
    }else if(mail.value != "" ){
        mail.classList.add('error')
    }else {
        mail.classList.remove('valid');
        mail.classList.remove('error');
    }
})
valider.addEventListener('click', e => {
    let carDecimal = /\d/;
    let caracSpeciaux = /[$&@!?]/;
    let test = 0;

    zone.innerHTML = "";
    zone.innerHTML += `<p>Votre mot de passe doit contenir :</p>`;
    if(password.value.length >= 6 && password.value.length <= 8 ){
        zone.innerHTML += `<p style="color : green">Entre 6 et 8 caractere</p>`;
        test++;
    }else {
        zone.innerHTML += `<p style="color : red">Entre 6 et 8 caractere</p>`;
    }
    if(password.value.match(carDecimal)){
        zone.innerHTML += `<p style="color : green">Doit contenir au moin un chiffre</p>`;
        test++;
    }else {
        zone.innerHTML += `<p style="color : red">Doit contenir au moin un chiffre</p>`;
    }
    if(password.value.match(caracSpeciaux)){
        zone.innerHTML += `<p style="color : green">Doit contenir au moin un caractere special</p>`;
        test++;
    }else {
        zone.innerHTML += `<p style="color : red">Doit contenir au moin un caractere special</p>`;
    }
    if (test == 3 && okMail == true){
        console.log('Super');
    }
})