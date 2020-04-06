// let acumulador=0;
// for (let valInicial=0; valInicial<10; valInicial++){
//     let numIngresado = Number(prompt('Ingrese el número'));
    
//      acumulador = acumulador + numIngresado;
     
//     }
//     console.log(acumulador);

//     const imprimir = document.getElementById('output');

//     imprimir.innerText = acumulador;


let button;

function crearDom(){

    const output = document.getElementById('output');

    for(let x=1; x<=5; x++){
        const div=document.createElement('div');
        div.classList.add('form-group');

        const label = document.createElement('label');
        label.innerText=`Ingresa el número ${x} :`  ;

        const input = document.createElement('input');

        input.setAttribute('type', 'number');
        input.setAttribute('class', 'form-control');
        input.setAttribute('id', `num${x}`);
        input.setAttribute('placeholder', 'Número a sumar');

        output.appendChild(div);

        div.appendChild(label);
        div.appendChild(input);

    }//fin del for x 

    const button = document.createElement('button');
    button.innerText = 'Sumar';
    button.setAttribute('id', 'btnCalcular');
    button.setAttribute('class','btn btn-outline-success btn-block');

    output.appendChild(button);

    EventListener();

} //fin de crearDom

function EventListener(){
     button = document.getElementById('btnCalcular');
     button.addEventListener('click', suma);

}

function suma(){
    let acumulador = 0 ;

    for(let i=1; i<=5; i++){
        let numero = Number(document.getElementById(`num${i}`).value);

        acumulador=acumulador+numero; 
    }//fin del for i

    console.log(acumulador);
}

crearDom();