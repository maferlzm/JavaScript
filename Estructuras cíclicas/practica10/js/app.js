

function eventListener(){

    const button = document.getElementById('btnInit')
    button.addEventListener('click', initApplication)

}

eventListener();

function initApplication(){

    const label = document.createElement('label');
    label.innerText = 'Ingresa el numero de ventas durante el dia: ';

    const input = document.createElement('input');
    input.setAttribute('type', 'number');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', 'horas');

    

}