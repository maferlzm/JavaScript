let dias;
let hotelP;
let comidaP;

let button = document.getElementById('btnCalcular');

button.addEventListener('click', viaticosTotales);

function viaticosTotales(){
    dias = Number(document.getElementById('diasH').value);
    hotelP = Number(document.getElementById('precioH').value);
    comidaP = Number(document.getElementById('gastosC').value);

    let totalHotel = dias * hotelP;
    let totalComida = dias * comidaP;

    let totalV = totalHotel + totalComida + 100;

    let calculo = document.getElementById('viatico');
    calculo.innerText='$' + totalV + ' incluye $100 de base';
}