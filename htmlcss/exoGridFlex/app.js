let message = document.getElementById('message');
let newMessage = document.getElementById('newMessage');
let sendBtn = document.getElementById('sendBtn');

let tour = 1;

window.addEventListener('keydown', (e) => {
    if (e.key == 'Enter'){
        envoyer()
    }
});

function envoyer(){
    if (tour%2 == 0){
        message.innerHTML += `<div> </div>`;
        message.innerHTML += `<p>${newMessage.value}</p>`;
    }else {
        message.innerHTML += `<p>${newMessage.value}</p>`;
        message.innerHTML += `<div> </div>`;
    }
    newMessage.value = '';
    tour++
}