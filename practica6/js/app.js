/** Se desea calcular la distancia recorrida 
 * por un movil que tiene velocidad constante 
 * durante un tiempo, considerar que es un movimiento
 * rectilineo uniforme
 * 
 * v=d/t -> d=(v)(t)
 */

 let vel;
 let time;
 let dis;

 let button=document.getElementById('btnCalcular');

 button.addEventListener('click', mruDistancia);

 function mruDistancia(){
    vel = Number(document.getElementById('vel').value);
    time= Number(document.getElementById('time').value);
    
    dis=(vel*time) + 'm';

    let calculo = document.getElementById('calculo');
    calculo.innerText=dis;

 }