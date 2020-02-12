/**Dada la base y la altura de un triangulo calcular el área del triángulo */

let altura;
let base;
let area;

let button=document.getElementById('btnCalcular');

button.addEventListener('click', calcularArea);

function calcularArea(){
    altura= Number(document.getElementById('altura').value);
    base= Number(document.getElementById('base').value);

    area=(base*altura)/2;

    let calculo=document.getElementById('calculo');
    calculo.innerText=area;
}