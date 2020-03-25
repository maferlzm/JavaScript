/**Dado un array de números de 5 posiciones con los
 *  siguientes valores {0,1,2,3,4,5,6,7,8,9}, guardar
 *  los valores de este array en otro array distinto,
 *  pero con los valores invertidos, es decir, que el
 *  segundo array deberá tener los valores
 *  {9,8,7,6,5,4,3,2,1,0}. */

EventListener();

let array = [];
let invertido = [];

function EventListener() {
document.getElementById('btnInvertir').addEventListener('click', InvertirCadena);
}

function InvertirCadena() {
for (let i = 0; i < 10; i++) {
    array[i] = i;
}

const output = document.getElementById('output');
let alert = document.createElement('div');

alert.setAttribute('class', 'alert alert-success');
alert.innerText = array.toString();
invertido = array.reverse();

let alert2 = document.createElement('div');

alert2.setAttribute('class', 'alert alert-success');
alert2.innerText = invertido.toString();
output.appendChild(alert);
output.appendChild(alert2);
console.log(array);

console.log(invertido);
}