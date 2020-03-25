/** 
 let carro1Color='Rojo';
 let carro1Marca='Honda';
 let carro1Modelo=2000;
 let carro1Motor=2.0;
 
 let carro1Color='Azul';
 let carro1Marca='Nissan';
 let carro1Modelo=2015;
 let carro1Motor=1.8;
 
 let carro1Color='Azul';
 let carro1Marca='Nissan';
 let carro1Modelo=2015;
 let carro1Motor=1.0;
 
 let carro1Array = ['Rojo', 'Honda', 2000, 2.0];
 * 
*/

/**
 let posX=0;
 function avanzarX(){
 
     console.log(this);
 }
 
 let Carro1 = {
     color: "Rojo", 
     marca: "Honda",
     modelo: 2000,
     motor: 2.0,
     posX:0,
     posY:0,
     avanzarX(){
         this.posX++; 
         console.log(this);
     }
 };
 * 
 * */ 


/**
 * 
 let Carro2 = {
     color: "Rojo", 
     marca: "Nissan",
     modelo: 2015,
     motor: 1.5,
     posX:0,
     posY:0,
     avanzarX(){
         
         console.log(this.posX++);
     },
     avanzarY(){
         
         console.log(this.posY++);
     }
 };
 
 let Carro3 = {
     color: "Azul", 
     marca: "Nissan",
     modelo: 2015,
     motor: 1.8,
     posX:0,
     posY:0,
     avanzarX(){
         
         console.log(this.posX++);
     },
     avanzarY(){
         
         console.log(this.posY++);
     }
 };
 
 let Carro4 = {
     color: "Negro", 
     marca: "Honda",
     modelo: 2015,
     motor: 1.8,
     posX:0,
     posY:0,
     avanzarX(){
         
         console.log(this.posX++);
     },
     avanzarY(){
         
         console.log(this.posY++);
     }
 };
 */

// console.info(`${Carro1.avanzarX()}`);
// Carro1.avanzarX()
// avanzarX();
/**
 * 
 for(let i=0; i<carro1Array.length, i++){
 
     console.info(`${Carro1Array[i]}`);
 
 }
 
 console.info(`El carro es de color: ${Carro1Objeto.color}`); 
 */


 class Carro{
     color="";
     marca="";
     modelo=0;
     motor=0;
     posX=0;
     posY=0;

     constructor(color, marca, modelo, motor){
        // console.log(color); //consolea rojo
        // console.log(this.color); //consolea vacío

        this.color= color;
        this.marca=marca;
        this.modelo=modelo;
        this.motor=motor;
     }

     avanzarX(){

     }
     avanzarY(){

     }
}

let Carro1 = new Carro('Rojo', 'Honda', 2000, 2.0);
let Carro2 = new Carro('Azul', 'Nissan', 2015, 1.5);

console.log(Carro1.color); //rojo
console.log(Carro2.color); //azul