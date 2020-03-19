/**Crea un array de numeros donde le indicamos por teclado
 * el tamaño del array, rellenaremos el array con números aleatorios
 * entre 0 y 9, al final muestra por pantalla el valor de 
 * cada posición y la suma de tdos los valores. Haz un método para rellenar 
 * el array (que tenga como parámetros los números entre los que tenga que generar),
 * para mostrar el contenido y la suma del array y un método privado para generar
 * número aleatorio (lo puedes usar para otros ejercicios).
 */
EventListener();
 function EventListener(){
     document.getElementById("tamArray").addEventListener('keypress', CrearInputs);
 }

 function CrearInputs(event){
    //  console.log("Funciona");

    if(event.key=="Enter"){
    if(isNaN(event.target.value)) return;
        RellenarArreglo(event.target.value);
    }
 }

 function RellenarArreglo(tamArray){
     let arregloNumeroAleatorio=[];
    for(let i=0; i<tamArray; i++){
        arregloNumeroAleatorio[i]=Math.random()*(10-1)+1;
    }
    console.log(arregloNumeroAleatorios);
    MostrarValores(arregloNumeroAleatorios);
 }

 function MostrarValores(arreglo){
    
    let suma=0;
    const listGroup = document.getElementById('arrayList'); //declaración para lista del vector

    for (let x=0; x< arreglo.lenght; x++){
        const li = document.createElement('li'); //creacion de elementos
        li.setAttribute('class', 'list-group-item');
        li.innerText= `Index${i+1}- Valor${arreglo[i]}`;
        listGroup.appendChild(li);
        suma+=arreglo[i];
    }
 }
