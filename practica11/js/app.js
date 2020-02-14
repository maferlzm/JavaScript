let precio;
let metros;
let pulgadas;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', cotizarPrecio);

function cotizarPrecio(){
    precio=Number(document.getElementById('precio').value);
    metros=Number(document.getElementById('metros').value);
    
    pulgadas=(metros*39.3701);
    let total= pulgadas*precio;

    let cotizacion = document.getElementById('cotizacion');
    cotizacion.innerText='$' + total;
}