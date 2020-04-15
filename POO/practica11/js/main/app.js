const cuerpo = document.getElementById('imgBody');

EventListener();

function EventListener() {
    document.querySelector('#cotizar-seguro').addEventListener('submit', CotizarSeguro);
    cuerpo.addEventListener('mousemove', CoordenadaCuerpo);
    // cuerpo.addEventListener('mousemove', CuerpoCirculatorio);
    // cuerpo.addEventListener('mousemove', CuerpoDigestivo);
    // cuerpo.addEventListener('mousemove', CuerpoOseo);
    // cuerpo.addEventListener('mousemove', CuerpoMuscular);
    // cuerpo.addEventListener('mousemove', CuerpoNervioso);
}

function CoordenadaCuerpo(event){
    let mensaje = document.getElementById('parte');
    const cursorCirculatorio= new Circulatorio(event.x, event.y);
    const cursorDigestivo = new Digestivo(event.x, event.y);
    const cursorOseo = new Oseo(event.x, event.y);
    const cursorMuscular = new Muscular(event.x, event.y);
    const cursorNervioso = new Nervioso(event.x, event.y);


    const marcaSistema = document.getElementById('marca').value;

    if(marcaSistema=='circulatorio'){
        cursorCirculatorio.CoordenadaParte(mensaje);
    } else if(marcaSistema=='digestivo'){
        cursorDigestivo.CoordenadaParte(mensaje);
    }else if(marcaSistema=='muscular'){
        cursorMuscular.CoordenadaParte(mensaje);
    }else if(marcaSistema=='nervioso'){
        cursorNervioso.CoordenadaParte(mensaje);
    }else if(marcaSistema=='oseo'){
        cursorOseo.CoordenadaParte(mensaje);
    }
}

// function CuerpoCirculatorio(event) {
//     const cursor= new Circulatorio(event.x, event.y);
//     cursor.CoordenadaParte(mensaje);
// }
// function CuerpoDigestivo(event){
//     const cursor= new Digestivo(event.x, event.y);
//     cursor.CoordenadaParte(mensaje);
// }
// function CuerpoMuscular(event){
//     const cursor= new Muscular(event.x, event.y);
//     cursor.CoordenadaParte(mensaje);
// }
// function CuerpoNervioso(event){
//     const cursor= new Nervioso(event.x, event.y);
//     cursor.CoordenadaParte(mensaje);
// }
// function CuerpoOseo(event){
//     const cursor= new Oseo(event.x, event.y);
//     cursor.CoordenadaParte(mensaje);
// }

function CotizarSeguro(event) {
    event.preventDefault();
    const marcaSeleccionada = document.getElementById('marca').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    const interfaz = new Interfaz();
    

    if (marcaSeleccionada == '' || tipo == '' ) {
        interfaz.MostrarMensaje('Faltan Datos, favor de revisar el formulario', 'error');
        return;
    }

    const resultado = document.querySelector('#resultado div');

    if (resultado != null) resultado.remove();

    const seguro = new Seguro(marcaSeleccionada,  tipo);
    const total = seguro.cotizarSeguro();

    interfaz.MostrarResultado(seguro, total);
    interfaz.MostrarMensaje('Espere un momento, por favor...', 'Éxito');

}