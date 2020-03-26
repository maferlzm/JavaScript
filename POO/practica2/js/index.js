EventListener();

function EventListener(){
    document.getElementById('btnCalcular').addEventListener('click', TiroParabolico);

}


function TiroParabolico(){
    let angulo = document.getElementById('angulo').value;
    let velocidad = document.getElementById('velocidad').value;

    const proyectil = new Proyectil(velocidad,angulo);
    
    proyectil.crearSpan();
}