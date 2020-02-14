let ancho;
let largo;
let profundidad; 
let precio;
let total;

let metCubicos;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', precioPorMetros);

function precioPorMetros(){
    precio=Number(document.getElementById('precio').value);
    ancho= Number(document.getElementById('ancho').value);
    largo= Number(document.getElementById('largo').value);
    profundidad = Number(document.getElementById('profundidad').value);

    metCubicos= ancho * largo * profundidad; 

    total = precio * metCubicos;

    let calculo= document.getElementById('calculo');
    calculo.innerText=total;

}