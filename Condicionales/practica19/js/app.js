const button = document.getElementById('btnComparar');

button.addEventListener('click', compararEdad);

function compararEdad(){
    const edad1 = Number(document.getElementById('edad1').value);
    const edad2 = Number(document.getElementById('edad2').value);

    const divAlert = document.getElementById('edades');
    
    if (edad1 > edad2){
        let dif = edad1 - edad2;
        divAlert.innerText = 'Edad del hermano mayor: ' + edad1 + '\n' + 
        'Años de diferencia entre los hermanos: ' + dif;
    }else {
        let dif = edad2 - edad1;
        divAlert.innerText = 'Edad del hermano mayor: ' + edad2 + '\n' + 
        'Años de diferencia entre los hermanos: ' + dif;
    }
}