// Start code HERE !

// setPos(100,300);
// setLineWidth(10);
// faceRight();

// D-11
// changeColor(color.blue);
// forward(177);
// backward(150);
// right(90);
// forward(100);
// left(180-90);
// forward(50);
// faceleft();
// arcLeft(50,90);
// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 3; j++) {
//     forward(100);
//     left(180-60);
//   }
//   forward(100);
// }

// D-12
// let longueur = 100 ;
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 3; j++) {
//     forward(longueur);
//     left(180-60);
//   }
//   forward(longueur);
//   longueur -= 20;
// }

// D-13
// let longueur = 20;
// for (let i = 0; i < 6; i++) {
//   for (let j = 0; j < 4; j++) {
//     forward(longueur);
//     left(180-60);
//   }
//   left(180-240);
//   longueur += 20;
// }

// D-14
// let rayon = 20;
// for (let i = 0; i < 8; i++) {
//     down();
//     arcRight(rayon,180)
//     up();
//     forward(20);
//     rayon = rayon*1.5;
// }


// D-15
// left(45);
// for (let j = 0; j < 2; j++) {
//     let blabla = 20;
//     for (let i = 0; i < 4; i++) {
//         forward(blabla);
//         right(90);
//         forward(blabla);
//         left(90);
//         blabla *= 1.5;
//     }
//     right(180);
// }


//D-16
// changeColor(color.green);
// forward(240);
// right(90+45);
// forward(100);
// left(45);
// for (let i = 0; i < 3; i++) {
//     forward(100);
//     right(90);
// }
// left(90+45);
// forward(100);
// right(45);
// let rayon = 120
// changeColor(color.yellow);
// for (let i = 0; i < 6; i++) {
//     up ()
//     forward(20)
//     if (i%2 == 0){
//         down();        
//     }
//     arcRight(rayon,180)
//     rayon += 50;
// }


// E-8
// function triangle(taille){
//     for (let i = 0; i < 3; i++) {
//         forward(taille);
//         left(180-60)
//     }
// }
// function doubleTriangle(grandTaille, petitTaille){
//     triangle(grandTaille);
//     right(60);
//     triangle(petitTaille)
//     left(60)
// }
// changeColor(color.red);
// doubleTriangle(100,50)
// forward(100);
// changeColor(color.blue);
// doubleTriangle(100,50)
// forward(100);
// right(90)
// changeColor(color.yellow);
// doubleTriangle(100,50)
// forward(100);

let test = document.getElementById('myDrawing');
let xMousePos = 0;
let yMousePos = 0;
let rayon = 50;
let tour = 0;



test.addEventListener('click', function() {
    document.onmousemove = function(e){
        xMousePos = e.clientX;
        yMousePos = e.clientY-80;
    };
            
    setPos(xMousePos,yMousePos-rayon);
    faceRight();
    setLineWidth(5);

    for (let i = 0; i < 4 i++) {
        forward(rayon);
        right(180);
        forward(rayon);
        right(90);
        
    }
    // if (tour%2 == 0){
    //     arcRight(rayon,360);
    //     tour++;
    // }else {
    //     croix()
    //     tour ++
    // }
})