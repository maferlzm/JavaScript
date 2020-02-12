/**Cálculo de precio pintura */

let pintura;
let metros;
let precio;

let button=document.getElementById('btnCotizar');

button.addEventListener('click', multiplicacion);

function multiplicacion(){
    pintura= Number(document.getElementById('ipNumero1').value);
    metros= Number(document.getElementById('ipNumero2').value);

    precio=pintura*metros;

    let cotizacion=document.getElementById('cotizacion');
    cotizacion.innerText = precio;
}