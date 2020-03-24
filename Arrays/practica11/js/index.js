/**Que lea una cadena y la encripte sumando 3 
 * al código ASCII de cada carácter. Mostrar por pantalla. */


EventListener();
let arrayASCII = [];

function EventListener() {
    document.getElementById("tamArray").addEventListener("keypress", EncriptarCadena);
}

function EncriptarCadena(event) {
  if (event.key != "Enter") return;
  if (event.target.value == "") return;

  ArrayString(event.target.value);
}

function ArrayString(tamArray) {

  for (let i = 0; i < tamArray.length; i++) {
    arrayASCII[i] = tamArray.charAt(i).charCodeAt(0);
    arrayASCII[i] = tamArray.charAt(i).charCodeAt(0) + 3;
  }

  const output = document.getElementById("output");
  const div = document.createElement("div");
  div.setAttribute("class", "form-group");
  div.setAttribute("class", "alert alert-primary");
  div.innerText = arrayASCII;

  output.appendChild(div);
}