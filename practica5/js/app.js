/** Dada la matricula y 5 calificaciones de un alumno obtenidas 
 * a lo largo del semeestre, imprimir la matricula del alumno y 
 * el promedio de sus calificaciones
 * 
 */

 let nombre;
 let promedio;
 let mat;
 let matUno;
 let matDos;
 let matTres;
 let matCuatro;
 let matCinco;
 let datosAlumno;

 let button=document.getElementById('btnCalcular');

 button.addEventListener('click', calcularProm);
 button.addEventListener('click', mostrarDatos);

 


 function calcularProm(){
    matUno= Number(document.getElementById('uno').value);
    matDos= Number(document.getElementById('dos').value);
    matTres= Number(document.getElementById('tres').value);
    matCuatro= Number(document.getElementById('cuatro').value);
    matCinco= Number(document.getElementById('cinco').value);

    promedio=(matUno+matDos+matTres+matCuatro+matCinco)/5;

    let calProm=document.getElementById('prome');
    calProm.innerText=promedio;

 }

 function mostrarDatos(){
    nombre=(document.getElementById('nombre').value);
    mat=(document.getElementById('mat').value);

   datosAlumno = 'Alumno: ' + nombre + '\n' + ' Matrícula:  ' + mat;

   let completo=document.getElementById('datos');
   completo.innerText=datosAlumno;
 }
 