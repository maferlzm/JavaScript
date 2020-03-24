/**Crear una función que reciba un arreglo tamaño n
 *  con números aleatorios y devuelva un nuevo arreglo 
 * con solo los números pares. deberá presentar ambos 
 * arreglos en pantalla. */


EventListener();

function EventListener() {
    document.getElementById('tamanoArray').addEventListener('keypress', InitApp);
}

function InitApp(event) {
    if (event.key !== 'Enter') return;
    if (event.target.value == '') return;
    if (isNaN(event.target.value)) return;
    if (event.target.value <= 0) return;

    fillArrays(event.target.value);
}

function fillArrays(tamArray) {
    let array = [];
    let arrayPairs = [];
 
    for (let i = 0; i < tamArray; i++) {
        let nRand = Math.floor(Math.random() * (1000 - 1)) + 1;
        array.push(nRand);
        if (nRand % 2 == 0) {
            arrayPairs.push(nRand);
        }
    }

    MostrarValores(array, arrayPairs);
}

function MostrarValores(array, arrayPairs) {
    const output = document.getElementById('output');
    const div = document.createElement('div');
    div.setAttribute('class', 'alert alert-success mt-3');
    const div2 = document.createElement('div')
    div2.setAttribute('class', 'alert alert-primary mt-3');
    div.innerText = `Números aleatorios: [${array}]`;
    div2.innerText = `Números aleatorios pares: [${arrayPairs}]`;

    output.appendChild(div);
    output.appendChild(div2);
}