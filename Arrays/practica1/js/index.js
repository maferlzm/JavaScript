/** Crear un array de 10 posiciones de números
 * con vectores con valores pedidos por teclado. 
 * Mostrar el indice y el valor al que correspoonde. Haz dos 
 * métodos
 * 
 * Pascal = EventListener < - funciones, clases
 * camelCase = eventListener < - variables
 */

let arreglo = [];
const output=document.getElementById('output');

 function EventListener(){
     document.addEventListener('DOMContentLoaded', CargarInputs);
     document.getElementById('btnAceptar').addEventListener('click', ObtenerResultado);
     document.getElementById('btnReiniciar').addEventListener('click', ReiniciarApp);
 }

 function ReiniciarApp(){
     window.location.reload();
 }

 EventListener();

 function CargarInputs(){


    for(let x=0; x<10; x++){
        const divFG = document.createElement('div');
        divFG.setAttribute('class', 'form-group');

        const labelFG = document.createElement('label');
        labelFG.innerText=`Dame el valor de la posición ${x+1}`;

        const inputFC = document.createElement('input');
        inputFC.setAttribute('type', 'number');
        inputFC.setAttribute('placeholder', 'Ingresa el valor');
        inputFC.setAttribute('class', 'form-control');
        inputFC.setAttribute('id', `inputValor${x}`);

        output.appendChild(divFG);
        divFG.appendChild(labelFG);
        divFG.appendChild(inputFC);
    }
 }

 function ObtenerResultado(){
    
    for (let x=0; x<10; x++){
        const valor=document.getElementById(`inputValor${x}`).value;
    if(valor!=""){
        arreglo[x] = valor;
        }else{
            arreglo[x]=`<span class="text-danger">No se ingresó número </span>`;
        }
    }
    MostrarValores();
 }

 function MostrarValores(){

     EliminarDom();

    const MostrarValoresUl = document.getElementById("mostrarArreglo");
    for(let x=0; x<arreglo.length; x++){

        const li = document.createElement('li');
        li.setAttribute('class','list-group-item');
        li.innerHTML = `<p>Index: ${x} </p> <p>Valor: ${arreglo[x]} </p>`;

        MostrarValoresUl.appendChild(li);
    }
}


 function EliminarDom(){

     while(output.firstChild){
        output.firstChild.remove();
     }

 }