EventListener();
const imagen=document.getElementById('imagen');
const foco = new Foco();

function EventListener(){
    document.getElementById('btnCambiar').addEventListener('click', CambioEstado);
}

function CambioEstado(){
    imagen.src=foco.cambiarEstado();
}