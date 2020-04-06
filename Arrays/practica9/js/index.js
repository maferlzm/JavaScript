/**Rellene un array con los números primos comprendidos 
 * entre 1 y 1000 y los muestre en pantalla en orden
 *  descendente. */


EventListener();

function EventListener() {
    document.addEventListener('DOMContentLoaded', fillArray);
    document.getElementById('btnInit').addEventListener('click', crearArray);
}

let primosArray = [];

function fillArray() {
    for (let i = 0; i <= 1000; i++) {
        let bandera = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                bandera = false;
                break;
            }
        }
        if (bandera) {
            primosArray.push(i);
        }
    }

    console.log(primosArray);
}


function crearArray() {
    let descendente = primosArray.reverse();

    const listGroup = document.getElementById('listaArreglo');

    for (let i = 0; i <descendente.length ; i++) {
        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item');
        li.innerText = descendente[i];
        listGroup.appendChild(li);
    }

}