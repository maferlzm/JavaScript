/**
 * La conjetura de ULAM consiste en lo siguiente:
a. Inicia a partir de cualquier número positivo entero.
b. Si el número es par, se divide entre 2; si es impar, se multiplica por 3 y se agrega uno. De manera que podemos obtener lo siguiente: 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1.
Dado un numero positivo, ejecute la serie ULAM.
 */

EventListener();

function EventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', InitApp);
}

function InitApp(){
    
    let num=Number(prompt('Ingresa el número:'));

    while(num!=1){
    if(num%2==0){
        num = num/2;
    }else{
         num=(num*3)+1;
    }
    console.log(num);
}
}