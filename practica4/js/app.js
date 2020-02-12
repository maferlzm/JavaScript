/** Calcular el área de un círculo dado su radio */

let radio;
const constantePi=3.1416;
let area;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', areaCirculo);

function areaCirculo(){
    radio = Number(document.getElementById('radio').value); 

    // area=constantePi*(radio*radio);
    let radioElevado= Math.pow(radio, 2);
    area = radioElevado*Math.PI;

    let calculo = document.getElementById('calculo');
    calculo.innerText=area;



}