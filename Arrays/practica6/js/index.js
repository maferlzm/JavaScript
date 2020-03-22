/**Llenar dos arreglos (A+B) de manera aleatoria: 
 * a. Realizar C=A+B
 * b. Realizar C=B-A
 * c. Realizar C=B*A
 * El usuario podrá elegir que opción de C desea ver 
 * en pantalla, también podrá ver el vector A y B para 
 * comprobar los resultados, el rango de los números 
 * aleatorios para los Vectores será de [-100 a 100], 
 * la longitud de los Vectores es la misma, por lo tanto, 
 * solo se solicitará una vez. */

EventListener();

let arrayUno = [];
let arrayDos = [];

function EventListener(){
    document.getElementById('tamArray').addEventListener('keypress', InitApp);
}

function InitApp(event){

    //VALIDACIONES 

    if (event.key!='Enter') return; // tecleo de un salto de línea o enter
    if (event.target.value=='')return; //espacio en blanco 
    if(isNaN(event.target.value)) return; //comprobación de si es número o no 
    if(event.target.value <=0) return;

    llenarArray(event.target.value);
}
5579 0900 3552 9024
function llenarArray(tamArray){
    let sumaArrayUno =0;
    let sumaArrayDos =0;

    // var aleatorio = Math.round(Math.random()*10); ejemplo 

    for (let x=0; x <tamArray; x++){

        let numRand = Math.floor(Math.random()*(101+100))-100;


        arrayUno.push(numRand);
        sumaArrayUno += arrayUno[i];
        numRand = Math.floor(Math.random() * (101 + 100)) - 100;
        arrayDos.push(numRand);
        sumaArrayDos += arrayDos[i];

    }
    opcionesUsuario();
}

function opcionesUsuario(){
    const output = document.getElementById('output');
   
    //menú de opciones

    let option = document.createElement('select');
    option.setAttribute('class', 'form-control');
    option.setAttribute('id', 'opOption');

    let operacion = document.createElement('option');
    operacion.setAttribute('value', ' ');
    let txt = document.createTextNode('Seleccione la operacion deseada');
    operacion.appendChild(txt);

    let suma = document.createElement('option');
    suma.setAttribute('value', 'suma');
    let txt1 = document.createTextNode('C = A + B');
    suma.appendChild(txt1);

    let resta = document.createElement('option');
    resta.setAttribute('value', 'resta');
    let txt2 = document.createTextNode('C = B - A');
    resta.appendChild(txt2);

    let multiplicacion = document.createElement('option');
    multiplicacion.setAttribute('value', 'multiplicacion');
    let txt3 = document.createTextNode('C = A * B');
    multiplicacion.appendChild(txt3);

    let primerA = document.createElement('div');
    primerA.setAttribute('class', 'alert alert-success mt-3');
    primerA.innerText = `Primer array ${arrayUno}`;

    let segundoA = document.createElement('div');
    segundoA.setAttribute('class', 'alert alert-success mt-3');
    segundoA.innerText = `Segundo array ${arrayDos}`;

    let resultado = document.createElement('div');
    resultado.setAttribute('class', 'alert alert-primary mt-3');
    resultado.setAttribute('id', 'resultado');


    output.appendChild(option);
    selector.appendChild(operacion);
    selector.appendChild(suma);
    selector.appendChild(resta);
    selector.appendChild(multiplicacion);
    output.appendChild(primerA);
    output.appendChild(segundoA);
    output.appendChild(resultado);

    document.getElementById('opOption').addEventListener('change', OpcionesOperaciones);
}

function OpcionesOperaciones() {
    opcion = document.getElementById('option').value;
    aResultado = [];
    
    switch (opcion) {
        case 'suma':
            for (let i = 0; i < arrayUno.length; i++) {
                aResultado[i] = arrayUno[i] + arrayDos[i];
            }
            break;
        case 'resta':
            for (let i = 0; i < arrayUno.length; i++) {
                aResultado[i] = arrayUno[i] - arrayDos[i];
            }
            break;
        case 'multiplicacion':
            for (let i = 0; i < arrayUno.length; i++) {
                aResultado[i] = arrayUno[i] * arrayDos[i];
            }
            break;
    }

    let resultado = document.getElementById('finalResultado');
    resultado.innerText = `Resultado: ${aResultado}`;


}
