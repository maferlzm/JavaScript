const button = document.getElementById('btnIncentivo');

button.addEventListener('click', recibirIncentivo);

function recibirIncentivo(){
    const unidad = Number(document.getElementById('unidad').value);

    const divAlert = document.getElementById('incentivo');

    if (unidad > 100){
        divAlert.innerText = 'El operario recibirá incentivos';
    }else{
        divAlert.innerText = 'El operario no recibirá incentivos';
    }
}