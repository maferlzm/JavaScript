EventListener();

function EventListener(){

    const button=document.getElementById('btnInit');
    button.addEventListener('click', iniciarAplicacion);
}

function iniciarAplicacion(){

    let numAlum=Number(prompt('¿Cuántos alumnos son?'));
    let acumulador=0;

    for (let i=1; i<=numAlum; i++){

        let edad=Number(prompt(`Ingresa la edad del alumno ${i}:`))

        acumulador+=edad;
        
        
    }//fin del for i

    let resultado = acumulador/numAlum;
    console.log(resultado);
}