let turnOnOff = document.getElementById('turnOnOff');
let lamp = document.getElementById('lamp');

function isLampBroken () {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if(!isLampBroken () ) {
    lamp.src = './imagens/ligada.jpg';
    }
}
function lamOff() {
    if(!isLampBroken () ) {
    lamp.src = './imagens/desligada.jpg';
    }
}
function lamBroken() {
    lamp.src = './imagens/quebrada.jpg';
}

function lampOnOff() {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn ();
        turnOnOff.textContent = 'Desligar';
    } else {
        lamOff ();
        turnOnOff.textContent = 'Ligar'
    }
}

turnOnOff.addEventListener ('click', lampOnOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener('mouseleave', lamOff);
lamp.addEventListener('dblclick', lamBroken);