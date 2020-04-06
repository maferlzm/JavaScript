const button = document.getElementById('btnEstado');

button.addEventListener('click', estadoAlumno);

function estadoAlumno(){
    const calificacion = Number(document.getElementById('cal').value);
    const printAlert = document.getElementById('estado');
    if(calificacion > 8){
        printAlert.innerText = 'Aprobado';
    }else{
        printAlert.innerText = 'Reprobado';
        const audioR=document.getElementById('audRepro');

        audioR.play();
    }


}