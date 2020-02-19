const button = document.getElementById('btnDescuento');

button.addEventListener('click', descProducto);

function descProducto(){
    const precio = Number(document.getElementById('precio').value);
    const clave = Number(document.getElementById('clave').value);
    const nombre = document.getElementById('nombre').value;

    const divAlert = document.getElementById('descuento');

    if(clave==01 || clave==1){
        let desc = precio * 0.10;
        let precNuevo = precio - desc;
        divAlert.innerText = 'Producto: '+ nombre + '\n' + 'Clave: ' + clave +
        '\n' + 'Precio original: ' + precio + '\n' + 'Precio con descuento: ' + precNuevo;
    }else if(clave == 02 || clave == 2 ){
        let desc = precio * 0.20;
        let precNuevo = precio - desc;
        divAlert.innerText = 'Producto: '+ nombre + '\n' + 'Clave: ' + clave +
        '\n' + 'Precio original: ' + precio + '\n' + 'Precio con descuento: ' + precNuevo;
    }else if(clave != 1 && clave != 01 && clave != 2 && clave != 02  ){
        divAlert.innerText = 'Clave inválida';
    }



}