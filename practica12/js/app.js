let A;
let B;
let C;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', calculoHipotenusa);

function calculoHipotenusa(){
    A = Number(document.getElementById('A').value);
    B = Number(document.getElementById('B').value);

    let A2=Math.pow(A,2);
    let B2=Math.pow(B,2);

    C=Math.sqrt(A2+B2);

    let hipotenusa = document.getElementById('hipotenusa');
    hipotenusa.innerText='El valor de la hipotenusa es: ' + C;

}