class ManipularLocalStorage {

    static AgregarCarritoLocalStorage(informacionCursos) {
    
        const cursosLS = this.obtenerCursoLocalStorage();
        cursosLS.push(informacionCursos);
        localStorage.setItem("cursos", JSON.stringify(cursosLS));
    }
  
    static obtenerCursoLocalStorage() {
      if (localStorage.getItem("Cursos") == null) return [];
      return JSON.parse(localStorage.getItem("Cursos"));
    }
  
    static eliminarCursoStorage(idCurso) {
      let cursosLS = this.obtenerCursoLocalStorage();
      let nuevoCursosLS = [];
  
      for (let i = 0; i < cursosLS.length; i++) {
        if (cursosLS[i].id != idCurso) {
          nuevoCursosLS.push(cursosLS[i]);
        }
      }
      console.log(cursosLS);
      console.log(nuevoCursosLS);
  
      localStorage.setItem("cursos", JSON.stringify(nuevoCursosLS));
    }
  
    static vaciarCarritosLS() {
      localStorage.clear();
    }
  
    static VerificarCursoRepetido(idCurso) {
      const cursosLS = this.obtenerCursoLocalStorage();
  
      for (let i = 0; i < cursosLS.length; i++) {
        if (idCurso == cursosLS[i].id) {
          return true;
        }
      }
  
      return false;
    }
  }