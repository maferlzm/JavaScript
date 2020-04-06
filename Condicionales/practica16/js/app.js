const button = document.getElementById('btnComparar');

button.addEventListener('click', mayorEdad);

function mayorEdad(){
    const edad1 = Number(document.getElementById('edad1').value);
    const edad2 = Number(document.getElementById('edad2').value);

    const printAlert = document.getElementById('comparacion');

    const nombre1 = (document.getElementById('nombre1').value);
    const nombre2 = (document.getElementById('nombre2').value);

    if(edad1>edad2){
        printAlert.innerText=nombre1+ ' es la persona mayor';
    }else{
        printAlert.innerText=nombre2+' es la persona mayor';
    }
}