let arriba = [
    'arriba01.png',
    'arriba02.png',
    'arriba03.png',
    'arriba04.png',
    'arriba05.png',
    'arriba06.png',
    'arriba07.png'
    
];

let medio = [
    'medio01.png',
    'medio02.png',
    'medio03.png',
    'medio04.png',
    'medio05.png',
    'medio06.png',
    'medio07.png'
];

let abajo = [
    'abajo01.png',
    'abajo02.png',
    'abajo03.png',
    'abajo04.png',
    'abajo05.png',
    'abajo06.png',
    'abajo07.png'
    
];


let n_arriba = 0;
let n_medio = 0;
let n_abajo = 0;


function arribas() {
    if (n_arriba <arriba.length - 1) {
        n_arriba++;
    } else {
        n_arriba = 0;
    }
    document.getElementById('pelo').style.backgroundImage = "url('img/" + arriba[n_arriba] + "')";
}


function medios() {
    if (n_medio <medio.length - 1) {
        n_medio++;
    } else {
        n_medio = 0;
    }
    document.getElementById('ojos').style.backgroundImage = "url('img/" + medio[n_medio] + "')";

}

function abajos() {
    if (n_abajo <abajo.length - 1) {
        n_abajo++;
    } else {
        n_abajo = 0;
    }
    document.getElementById('boca').style.backgroundImage = "url('img/" + abajo[n_abajo] + "')";
    console.log("img/" + abajo[0]);
}

function aleatorio() {
    document.getElementById('pelo').style.backgroundImage = "url('img/" + arriba[random(0, arriba.length - 1)] + "')";
    document.getElementById('ojos').style.backgroundImage = "url('img/" + medio[random(0, medio.length - 1)] + "')";
    document.getElementById('boca').style.backgroundImage = "url('img/" + abajo[random(0, abajo.length - 1)] + "')";
}



function color() {
    let mitono = document.getElementById('tono').value;
    document.getElementById('cabeza').style.filter = "hue-rotate(" + mitono + "deg)";
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




aleatorio();

