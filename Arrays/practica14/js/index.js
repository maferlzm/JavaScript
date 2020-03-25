/**Suponga que tiene un arreglo de 30 posiciones
 *  llenado de forma aleatoria con números enteros
 *  entre 100 y 300, desarrolle una solución que 
 * recorra dicho arreglo y separe en un segundo 
 * arreglo los números impares, al final imprima ambos 
 * arreglos */

EventListener();

function EventListener() {
    document.getElementById('btnRandImpar').addEventListener('click', InitApp);
}

function InitApp() {
    let arrayRandom = [];
    let arrayImpar = [];

    for (let i = 0; i < 30; i++) {
        let numeroAleatorio = (Math.floor(Math.random() * (301 - 100)) + 100);
        arrayRandom.push(numeroAleatorio);
        if (numeroAleatorio % 2 !== 0) arrayImpar.push(numeroAleatorio);
    }
    console.log(arrayRandom);
    console.log(arrayImpar);

    
}

