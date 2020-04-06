/**Los datos reunidos en la secretaría de industrias relacionado
 *  con la producción de N fábricas en cada uno de los meses:
 *  se proporcionan de la siguiente forma: a. Los totales 
 * anuales de producción de cada fabrica.
b. La clave de la fábrica que más produjo en el año. 
Indicar también el total de la producción.
c. Imprimir claves de las fabricas cuya producción en 
el mes de julio fueron superiores a los $3,000,000. */

EventListener();

function EventListener(){
    const button = document.getElementById('btnInit');
    button.addEventListener('click', InitApp);
}

function InitApp(){

    let fabrica;

    fabrica=Number(prompt('Ingrese el número total de fábricas: '));
    for(let i=0; i<fabrica; i++){
        let claveF;
        let anualF=0;
        let mayorP=0;
        for (let j=0; j<12; j++){
            
            let totalF=0;
            anualF[i]+=totalF[j];
            if (totalF[6]>3000000){
                console.log('Fábrica ' + i + 'tuvo una producción de: ' + totalF);
            }
        }
        
        if(anualF[i]>mayorP){

        }
        console.log('Total de la producción del año de la fábrica ' + i + 'es: '+ anualF);
    }
}