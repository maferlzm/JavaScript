class ManipularLocalStorage {
    static arrayCompletadas = [];
    static ArrayTerminadas = [];

    static AgregarTareaLS(contenidoTarea) {
        this.arrayCompletadas = this.ObtenerLocalStorage('tareas');
        this.arrayCompletadas.push(contenidoTarea);
        localStorage.setItem('tareas', JSON.stringify(this.arrayCompletadas));
    }

    static ObtenerLocalStorage(keyLS) {
        let tareaTDLS = [];
        if (localStorage.getItem(keyLS) === null) {
            return tareaTDLS;
        }

        return JSON.parse(localStorage.getItem(keyLS));
    }

    static TerminarTareaLS(contenido) {
        let tareaLS = this.ObtenerLocalStorage('tareas');
        let terminadasLS = this.ObtenerLocalStorage('terminadas');
        let arrayTareaNuevaLS = [];

        for (let i = 0; i < tareaLS.length; i++) {
            if (contenido !== tareaLS[i]) {
                arrayTareaNuevaLS.push(tareaLS[i]);
            } else {
                terminadasLS.push(tareaLS[i]);
            }
        }

        localStorage.setItem('tareas', JSON.stringify(arrayTareaNuevaLS));
        localStorage.setItem('terminadas', JSON.stringify(terminadasLS));
    }

    static EliminarTerminadas(lista) {
        if (localStorage.getItem('terminadas') === null) return;
        localStorage.removeItem('terminadas');
        const ul = document.getElementById(lista);
        while (ul.firstChild) {
            ul.firstChild.remove();
        }
    }

}