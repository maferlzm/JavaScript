const button = document.getElementById('btnDescuento');

button.addEventListener('click', descTraje);

function descTraje(){
    const precio = Number(document.getElementById('precio').value);

    const divAlert = document.getElementById('descuento');

    
    if(precio>3600){
        let desc = precio * 0.16;
        const precioNuevo = precio - desc;
        

        divAlert.innerText = 'Precio sin descuento: ' + precio + '\n' +
        'Precio con descuento: ' + precioNuevo;
    }else if(precio<=3600){
        let desc = precio * 0.07;
        const precioNuevo = precio - desc;

        divAlert.innerText = 'Precio sin descuento: ' + precio + '\n' +
        'Precio con descuento: ' + precioNuevo;
    }
}