/** sqrt [(x2-x1)^2 + (y2-y1)^2 ]*/


let x1;
let x2;
let y1;
let y2;

let dist; 

let button = document.getElementById('btnCalcular');

button.addEventListener('click', calcDistancia);

function calcDistancia(){
    x1 = Number(document.getElementById('x1').value);
    x2 = Number(document.getElementById('x2').value);
    y1 = Number(document.getElementById('y1').value);
    y2 = Number(document.getElementById('y2').value);

    let totX = (x2-x1);
    let totY = (y2-y1);

    let xElevado = Math.pow(totX,2);
    let yElevado = Math.pow(totY,2);

    dist=Math.sqrt(xElevado+yElevado);

    let calculo = document.getElementById('calculo');
    calculo.innerText='La distancia entre el punto A y B es ' + dist;
}
