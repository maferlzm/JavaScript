/**Desarrolle una solución que lea 10 números por teclado,
 *  5 para un array y 5 para otro array distinto. Mostrar 
 * los 10 números en pantalla mediante un tercer array. */

EventListener();

const output = document.getElementById('output');

function EventListener() {
    document.getElementById('btnDosArraysEnUno').addEventListener('click', DosArraysEnUno);
}


function EliminarElementos() {
    while (output.firstChild) {
        output.firstChild.remove();
    }
}
function DosArraysEnUno() {
    EliminarElementos();

    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    for (let i = 0; i < 10; i++) {
        const divCol = document.createElement('div');
        divCol.setAttribute('class', 'col-12');

        const divFG = document.createElement('div');
        divFG.setAttribute('class', 'form-group');

        const label = document.createElement('label');
        label.innerText = `Ingrese el numero: `;

        const input = document.createElement('input');
        input.setAttribute('class', 'form-control');
        input.setAttribute('type', 'number');
        input.setAttribute('id', `Input${i}`);

        row.appendChild(divCol);
        divCol.appendChild(divFG);
        divFG.appendChild(label);
        divFG.appendChild(input);
    }
    output.appendChild(row);

    const buttonConcatenado = document.createElement('button');
    buttonConcatenado.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    buttonConcatenado.setAttribute('id', 'btnResultado');
    buttonConcatenado.innerText = 'Llenar arrays';
    row.appendChild(buttonConcatenado);

    document.getElementById('btnResultado').addEventListener('click', GenerarArrays);
}

function GenerarArrays() {
    const inputNumero = document.getElementsByTagName('input');
    let arrayConcatenado = [];
    for (let i = 0; i < inputNumero.length; i++) {
        arrayConcatenado.push(inputNumero[i].value);
    }
    let arrayUno = [];
    let arrayDos = [];
    arrayUno = arrayConcatenado.splice(0, (arrayConcatenado.length / 2));
    arrayDos = arrayConcatenado.splice(0, (arrayConcatenado.length));

    let arrayTres = arrayUno.concat(arrayDos);
    EliminarElementos();

    const row = document.createElement('div');
    row.setAttribute('class', 'row');
    const divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');

    const div3 = document.createElement('div');
    div3.setAttribute('class', 'alert alert-success mt-3');
    div3.innerText = arrayTres.toString();

    output.appendChild(row);
    row.appendChild(divCol);
    divCol.appendChild(div3);
}
    