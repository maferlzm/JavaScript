EventListener();


function EventListener(){

    const button = document.getElementById('btnInit');

    button.addEventListener('click', InitApp);
}

function InitApp(){
    let continuar = true;

    let contador=0;
    let acumulador=0;
    //while(continuar==true)
    while(continuar){
        let estatura = Number(prompt('Ingrese la estatura: '));

        if(estatura==0){
            continuar=false;
        }

        acumulador+=estatura;
        contador++;
    }

    let resultado = acumulador / (contador-1);
    console.log(resultado);
}