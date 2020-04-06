// A = 1.5 
// B = 2.0
// C = 2.5
// D = 3.0

const button = document.getElementById('btnTotal');

button.addEventListener('click', precioTotal);

function precioTotal(){
    const km = Number(document.getElementById('km').value);
    const tipoAutobus = document.getElementById('tipoAutobus').value;
    const personas = Number(document.getElementById('personas').value);
    const divAlert = document.getElementById('total');

    let costoKmA = km * 1.5;
    let costoKmB = km * 2.0;
    let costoKmC = km * 2.5;
    let costoKmD = km * 3.0;

    // Tipo A 
    if(tipoAutobus=='A' && personas >= 20){
        
    
       let costoT = costoKmA * personas;
       let costoP = costoT / personas;
       divAlert.innerText = 'Costo total: ' + costoT + '\n' + 
       'Costo por persona: ' + costoP;

    }else if(tipoAutobus=='A' && personas <= 20){
        
    
       let costoT = costoKmA * 20;
       let costoP = costoT / personas;

       divAlert.innerText = 'Costo total: ' + costoT + '\n' + 
       'Costo por persona: ' + costoP;
    }

    // Tipo B

    if(tipoAutobus=='B' && personas >= 20){
        
    
       let costoT = costoKmB * personas;
       let costoP = costoT / personas;
       divAlert.innerText = 'Costo total: ' + costoT + '\n' + 
       'Costo por persona: ' + costoP;

    }else if(tipoAutobus=='B' && personas <= 20){
        
    
       let costoT = costoKmB * 20;
       let costoP = costoT / personas;

       divAlert.innerText = 'Costo total: ' + costoT + '\n' + 
       'Costo por persona: ' + costoP;
    }


    // Tipo C
    if(tipoAutobus=='C' && personas >= 20){
        
    
       let costoT = costoKmC * personas;
       let costoP = costoT / personas;
       divAlert.innerText = 'Costo total: ' + costoT + '\n' + 
       'Costo por persona: ' + costoP;

    }else if(tipoAutobus=='C' && personas <= 20){
        
    
       let costoT = costoKmC * 20;
       let costoP = costoT / personas;

       divAlert.innerText = 'Costo total: ' + costoT + '\n' + 
       'Costo por persona: ' + costoP;
    }

    // Tipo D
    if(tipoAutobus=='D' && personas >= 20){
        
    
       let costoT = costoKmD * personas;
       let costoP = costoT / personas;
       divAlert.innerText = 'Costo total: ' + costoT + '\n' + 
       'Costo por persona: ' + costoP;

    }else if(tipoAutobus=='D' && personas <= 20){
        
    
       let costoT = costoKmD * 20;
       let costoP = costoT / personas;

       divAlert.innerText = 'Costo total: ' + costoT + '\n' + 
       'Costo por persona: ' + costoP;
    }

}