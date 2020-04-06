class toDo {
    tarea = '';

    constructor(tarea) {
        this.tarea = tarea;
    }

    AgregarTarea(contenedor, origen) {
        const li = document.createElement('li');
        li.classList = 'list-group-item text-break';
        li.textContent = this.tarea;

        const btnFinalizado = document.createElement('button');
        btnFinalizado.classList = 'close';

        const span = document.createElement('span');
        span.classList = 'badge badge-pill text-success';

        span.textContent = '✓';

        contenedor.appendChild(li);
        li.appendChild(btnFinalizado);
        btnFinalizado.appendChild(span);

        if (origen) ManipularLocalStorage.AgregarTareaLS(this.actividad);

    }

    static EliminarTarea(event) {
        if (event.target.tagName !== 'SPAN') return;
        const liBorrado = event.target.parentElement.parentElement;
        let textoLiBorrado = liBorrado.textContent.substring(0, liBorrado.textContent.length - 1);
        ManipularLocalStorage.TerminarTareaLS(textoLiBorrado);
        liBorrado.remove();
    }
}