const button = document.getElementById('btnDescuento');

button.addEventListener('click', descCompra);

function descCompra(){
    const compra = Number(document.getElementById('compra').value); 

    const divAlert = document.getElementById('descuento');
    if (compra > 1000){
        let descuento = compra * 0.20;
        let totalDesc = compra - descuento;

        divAlert.innerText = 'Total a pagar: $'+totalDesc;

    }else {
        divAlert.innerText = 'Total a pagar: $'+compra;
    }

}