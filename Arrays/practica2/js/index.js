
let contadorInput=0;
let arregloPromedio=[];
EventListers();

function EventListers(){
    document.addEventListener('DOMContentLoaded', AddEvents);
}

function AddEvents(){
    document.getElementById('btnAddInput').addEventListener('click',AddInput);
    document.getElementById('btnCalcular').addEventListener('click', CalcularPromedio);
}


function AddInput(){
    const output = document.getElementById("output");
    const divCol = document.createElement("div");
    divCol.setAttribute("class", "col-12");

    const divFG = document.createElement("div");
    divFG.setAttribute("class", "form-group");

    const label= document.createElement("label");
    label.innerText = `Ingrese la calificación${contadorInput+1}`;
    
    const inputFC = document.createElement("input");
    inputFC.setAttribute("class", "form-control");
    inputFC.setAttribute("type", "number");
    inputFC.setAttribute("placeholder", "Ingrese valor");
    inputFC.setAttribute("id", `InputPromedio${contadorInput}`);

    contadorInput++;

    output.appendChild(divCol);
    divCol.appendChild(divFG);
    divFG.appendChild(label);
    divFG.appendChild(inputFC);
}

function CalcularPromedio(){
    LlenarArray();
    let acumulador =0;
    for(let i=0; i<contadorInput; i++){
        acumulador += arregloPromedio[i];
    }
    acumulador /= contadorInput;
    console.log(acumulador);
}

function LlenarArray(){

    for(let x=0; x < contadorInput; x++){
        //comprueba si lo que se ingresa es un número, entra un número y sale un bool isNotANumber
        const valor = document.getElementById(`InputPromedio${x}`).value;
        if (!isNaN(valor)){
            arregloPromedio[x]=Number(valor);
        }else {
            arregloPromedio[x]=0;
        }
    }


}