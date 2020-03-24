/**Crear una función que reciba un arreglo con palabras,
 *  crear un nuevo arreglo que contenga solo las palabras
 *  que empiezan con una vocal. */

EventListener();

function EventListener() {
    document.getElementById('tamArray').addEventListener('keypress', InitApp);
}

function InitApp(event) {
    if (event.key !== 'Enter') return;
    if (event.target.value == '') return;
    if (isNaN(event.target.value)) return;
    if (event.target.value <= 0) return;

    GenerarElementos(event.target.value);
}

function GenerarElementos(tamArray) {
    const output = document.getElementById('output');

    for (let i = 0; i < tamArray; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'form-group');

        let label = document.createElement('label');
        label.innerText = `Palabra  ${i + 1}`;

        let input = document.createElement('input');
        input.setAttribute('id', `cadena${i}`);
        input.setAttribute('class', 'form-control');

        output.appendChild(div);
        div.appendChild(label);
        div.appendChild(input);
    }

    let button = document.createElement('button');
    button.setAttribute('id', 'btnObtenerPalabra');
    button.setAttribute('class', 'btn btn-outline-success btn-block mt-3');
    button.innerText = 'Obtener las palabras que inicien con alguna vocal';

    let alert = document.createElement('div');
    alert.setAttribute('id', 'alertOriginal');
    alert.setAttribute('class', 'alert alert-success mt-3');

    let alert2 = document.createElement('div');
    alert2.setAttribute('id', 'alertEvaluado');
    alert2.setAttribute('class', 'alert alert-primary mt-3');

    output.appendChild(button);
    output.appendChild(alert);
    output.appendChild(alert2);

    document.getElementById('btnObtenerPalabra').addEventListener('click', EvaluarPalabras);

}

function EvaluarPalabras() {
    let array = Number(document.getElementById('tamArray').value);
    let palabrasIniciales = [];
    let palabrasVocales = [];

    let aux = 0;

    for (let i = 0; i < array; i++) {
        let cadena = document.getElementById(`cadena${i}`).value;
        cadena = cadena.toUpperCase();
        palabrasIniciales[i] = cadena;
        if (cadena.charAt(0) == 'A' || cadena.charAt(0) == 'E' || cadena.charAt(0) == 'I' || cadena.charAt(0) == 'O' || cadena.charAt(0) == 'U') {
            palabrasVocales[aux] = cadena;
            aux++;
        }
    }

   
    console.log('Las palabas iniciales son: ' + palabrasIniciales);
    console.log('Las palabras que inician con vocales son: ' + palabrasVocales);
}