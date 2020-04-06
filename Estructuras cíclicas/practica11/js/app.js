/**Una persona adquirió un producto para pagar en 20 meses.
 *  El primer mes pago $10, el segundo $20, el tercero $40 y
 *  así sucesivamente. Realice un algoritmo para determinar 
 * cuánto debe pagar mensualmente y el total de lo que pago 
 * después de los 20 meses. */

 EventListener();

 function EventListener(){
     const button = document.getElementById('btnInit');
     button.addEventListener('click', InitApp);
 }

 function InitApp(){

      let mens=Number(prompt('Ingrese el pago del mes correspondiente: '));
      let total=0;

      for(let i =1; i<=20; i++){

        
        mens*=2;
        total+=mens;
      }

      console.log(total);
 }