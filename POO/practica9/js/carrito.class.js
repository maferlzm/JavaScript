class Carrito {
    
    AgregarCursoCarrito(informacionCurso, TablaCarrito, origen) {
      if (ManipularLocalStorage.VerificarCursoRepetido(informacionCurso.id) && origen)
        return;
      const tableRow = document.createElement("tr");
  
      tableRow.innerHTML = `<td><img src="${informacionCurso.image}" width="100%"/></td>
      <td>${informacionCurso.titulo}</td>
      <td>${informacionCurso.precio}</td>
      <td><a class="borrar-curso" data-id="${informacionCurso.id}"> X </a></td>`;
  
      TablaCarrito.appendChild(tableRow);
  
      if (origen)
        ManipularLocalStorage.AgregarCarritoLocalStorage(informacionCurso);
    }
  
    static eliminarCursoCarrito(nodeDom) {
      const idCurso = nodeDom.querySelector(".borrar-curso").getAttribute("data-id");
  
      ManipularLocalStorage.eliminarCursoStorage(idCurso);
      nodeDom.remove();
    }
  
    static vaciarCarrito(tablaCursos) {
      while (tablaCursos.firstChild) {
        tablaCursos.firstChild().remove();
      }
  
      ManipularLocalStorage.vaciarCarritosLS();
    }
  }