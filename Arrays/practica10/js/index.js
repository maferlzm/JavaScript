/**Llenar con una palabra un arreglo y regresar 
 * un arreglo que muestre el primero, pero invertido. */

EventListener();

function EventListener() {
    document.getElementById('arrayP').addEventListener('keypress', InitApp);
}

function InitApp() {
    if (event.key !== 'Enter') return;
    if (event.target.value == '') return;

    arrayInvertido(event.target.value);
}

function arrayInvertido(stringArray) {
    let palabra = [];
    palabra = stringArray.split('');
    let palabraInvertida = palabra.reverse().join('').toString();

    console.log(palabraInvertida);

    const output = document.getElementById('output');
    const div = document.createElement('div');
    div.setAttribute('class', 'alert alert-success mt-3');
    div.innerText = palabraInvertida;

    output.appendChild(div);

}