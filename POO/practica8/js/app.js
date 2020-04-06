const tarea = document.querySelector('#txTareas');
const listaTareas = document.querySelector('#lista-porHacer');
const listaCompletadas = document.querySelector('#lista-completadas');
EventListener();
CargarActividadesLocalStorage();

function EventListener() {
    document.querySelector('#formulario').addEventListener('submit', ObtenerFormulario);
    listaTareas.addEventListener('click', TerminarActividad);
    document.querySelector('#btnEliminarCompletadas').addEventListener('click', EliminarTerminadas);
}

function EliminarTerminadas() {
    ManipularLocalStorage.EliminarTerminadas('lista-completadas');
}

function ObtenerFormulario(event) {
    event.preventDefault();

    if (tarea.value.trim() == '') return;

    const InstanciaActividades = new toDo(tarea.value);
    InstanciaActividades.AgregarTarea(listaTareas, true);
    tarea.value = '';
}

function TerminarActividad() {
    toDo.EliminarTarea(event);
    const liBorrado = event.target.parentElement.parentElement;
    let textoLiBorrado = liBorrado.textContent.substring(0, liBorrado.textContent.length - 1);
    const instanciaTerminado = new toDo(textoLiBorrado);
    instanciaTerminado.AgregarTarea(listaCompletadas, false);
}

function CargarActividadesLocalStorage() {
    const tareasLS = ManipularLocalStorage.ObtenerLocalStorage('tareas');
    for (let i = 0; i < tareasLS.length; i++) {
        const InstanciaActividades = new toDo(tareasLS[i]);
        InstanciaActividades.AgregarTarea(listaTareas, false);
    }
    const terminadasLS = ManipularLocalStorage.ObtenerLocalStorage('terminadas');
    console.log(terminadasLS);
    for (let i = 0; i < terminadasLS.length; i++) {
        const InstanciaActividadesTerminadas = new toDo(terminadasLS[i]);
        InstanciaActividadesTerminadas.AgregarTarea(listaCompletadas, false);
    }
}