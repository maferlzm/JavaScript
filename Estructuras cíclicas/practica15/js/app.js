EventListener();

function EventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', InitApp);
}

function InitApp(){
    
    
    let contUno = 0; 
    let contDos = 0; 
    let contTres = 0; 
    let contCuatro= 0; 
    let candidato ;
    while(candidato!=0){
        candidato = Number(prompt('Ingrese el número del candidato al cuál le dará su voto:'));
        
        if(candidato==1){
            contUno++;
        }
        else if(candidato==2){
            contDos++;
        }
        else if(candidato==3){
            contTres++;
        }
        else if(candidato==4){
            contCuatro++;
        }
    }
    let total = contUno + contDos + contTres + contCuatro;
    resul = 'Votos del candidato uno: ' + contUno + '\n' +
        'Votos del candidato dos: ' + contDos + '\n'+ 'Votos del candidato tres: '
        + contTres +'\n'+ 'Votos del candidato cuatro: ' + contCuatro +'\n' 
        + 'Total de votos: ' + total ;
        console.log(resul);
    }
