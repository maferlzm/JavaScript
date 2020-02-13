let correctas;
let incorrectas;
let blanco;


let button = document.getElementById('btnPuntaje');

button.addEventListener('click', calcPuntaje);

function calcPuntaje(){
    correctas= Number(document.getElementById('correctas').value);
    incorrectas= Number(document.getElementById('incorrectas').value);
    blanco= Number(document.getElementById('blanco').value);


    let totCorrectas= correctas*4;
    let totIncorrectas= incorrectas*(-1);
    let totBlanco=blanco*0;
    
    let puntajeFinal = totCorrectas + totIncorrectas + totBlanco;

    let puntaje = document.getElementById('puntaje');
    puntaje.innerText=puntajeFinal;
    
}