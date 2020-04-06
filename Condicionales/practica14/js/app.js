const button = document.getElementById('btnComparar');

button.addEventListener('click', compararNumeros);

function compararNumeros(){
    let numero1 = Number(document.getElementById('numero1').value);
    let numero2 = Number(document.getElementById('numero2').value);

    const DivAlert = document.getElementById('numeroM');
    if(numero1>numero2){
        
        DivAlert.innerText='El número mayor es:  ' + numero1;
        
    }else{
        
        DivAlert.innerText='El número mayor es:  ' + numero2;
        
    }
}