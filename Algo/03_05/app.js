// exercice 1
console.log('Exercice 1');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 50; i++) {
    console.log('bonjour')
}

// exercice 2
console.log('Exercice 2');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 10; i++) {
    if(i%2 == 0){
        console.log('A');
    }else {
        console.log('B')
    }
}

// exercice 3
console.log('Exercice 3');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 1; i < 10; i++) {
    if(i%5 == 0){
        console.log('B');
    }else {
        console.log('A')
    }
}

// exercice 4
console.log('Exercice 4');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// exercice 5
console.log('Exercice 5');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 10; i++) {
    console.log(i+3);
}

// exercice 6
console.log('Exercice 6');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 10; i++) {
    console.log(i%4);
}

// exercice 7
console.log('Exercice 7');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 10; i++) {
    if (i==5 || i==6 || i==7){
        console.log('A');
    }else {
        console.log(i);
    }
}

// exercice 8
console.log('Exercice 8');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 10; i++) {
    if (i%3 == 0){
        console.log(100+i);
    }else {
        console.log(i);
    }
}

// exercice 9
console.log('Exercice 9');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 10; i++) {
    if (i%3 == 0){
        console.log(i);
    }else if(i%3 == 1) {
        console.log(100+i);
    }else {
        console.log(200+i)
    }
}

// exercice 10
console.log('Exercice 10');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {

        console.log(j+1,i+1);
    }
}

// exercice 11
console.log('Exercice 11');
console.log('----------------------------------------------------------------------');
console.log(' ');


for (let i = 0; i < 6; i++) {
    for (let j = i; j < 6; j++) {
        console.log(j+1,i+1);
    }

}

// exercice 12
console.log('Exercice 12');
console.log('----------------------------------------------------------------------');
console.log(' ');


let cpt=0
for (let i = 0; i < 20; i++) {
    for (let j = i; j < 20; j++) {
        cpt++
    }

}
console.log(cpt);

// exercice 13
console.log('Exercice 13');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 10; i++) {
    console.log('1 x',i , '=', i);
}

// exercice 14
console.log('Exercice 14');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 10; i++) {
    console.log('2 x',i , '=', i*2);
}

// exercice 15
console.log('Exercice 15');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(j+ ' x '+ i+ ' = '+ i*j);
    }
}

// exercice 16
console.log('Exercice 16');
console.log('----------------------------------------------------------------------');
console.log(' ');

let cpt2 = 0;
for (let i = 0; i <= 100; i++) {
    cpt2 += i;
    console.log(cpt2,i);
}

// exercice 17
console.log('Exercice 17');
console.log('----------------------------------------------------------------------');
console.log(' ');

let cpt3 = 0;
for (let i = 0; i <= 302253; i = (i+1)+cpt3) {
    cpt3++
}
console.log(cpt3);

// exercice 18
console.log('Exercice 18');
console.log('----------------------------------------------------------------------');
console.log(' ');

let n1 = 0;
let n2 = 1;
let somme = 0;
for (let i = 1; i < 10; i++) {
    somme = n1 + n2;
    n1 = n2;
    n2 = somme;
    console.log(n2);
}

// exercice 19
console.log('Exercice 19');
console.log('----------------------------------------------------------------------');
console.log(' ');

let cpt4 = 0;
for (let i = 1234; i < 5678; i++) {
    if (i%3 == 0 || i%7){
        cpt4++
    }
}
console.log(cpt4);

// exercice 20
console.log('Exercice 20');
console.log('----------------------------------------------------------------------');
console.log(' ');

let etoile = "";
for (let i = 0; i < 5; i++) {
    etoile += '*';
    console.log(etoile);
}

// exercice 21
console.log('Exercice 21');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 5; i++) {
    let etoile = "";
    for (let j = 0; j < 4-i; j++){
        etoile += " ";
    }
    for (let j = 0; j <= i; j++) {
        etoile += "*";        
    }
    console.log(etoile);
}

// exercice 22
console.log('Exercice 22');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 5; i++) {
    let etoile = "";
    for (let j = 0; j < 4-i; j++){
        etoile += " ";
    }
    for (let j = 0; j <= i+i; j++) {
        etoile += "*";        
    }
    for (let j = 0; j < 4-i; j++){
        etoile += " ";
    }
    console.log(etoile);
}

// exercice 23
console.log('Exercice 23');
console.log('----------------------------------------------------------------------');
console.log(' ');

for (let i = 0; i < 10; i++) {
    let etoile = "";
    for (let j = 0; j < 4-i; j++){
        etoile += " ";
    }
    for (let j = 0; j <= i+i; j++) {
        etoile += "*";        
    }
    for (let j = 0; j < 4-i; j++){
        etoile += " ";
    }
    console.log(etoile);
}