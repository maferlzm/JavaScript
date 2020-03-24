EventListener();

let array = [];
let outArray = [];

function EventListener() {
    document.getElementById('tamArray').addEventListener('keypress', getSize);
    document.addEventListener('click', ValidarClick);

}

function getSize(event) {
    if (event.key !== 'Enter') return;
    if (event.target.value == '') return;
    if (isNaN(event.target.value)) return;
    if (event.target.value <= 0) return;

    CreateArray(event.target.value);
    event.target.value = '';
}

function CreateArray(tamanoArray) {
    array = [];
    for (let i = 0; i < tamanoArray; i++) {
        array.push(Math.floor(Math.random() * (11 - 1)) + 1);
    }

    console.log(array);
}

function ValidarClick(event) {
    //Utiliza metodo push
    switch (event.target.id) {
        case 'op1':
            for (let i = 0; i < array.length; i++) {
                if ((i + 1) % 2 == 0) {
                    outArray.push(0);
                } else {
                    outArray.push(array[i]);
                }
            }
            console.log(outArray);
            break;
        case 'op2':
            array.pop();
            console.log(array);
            break;
        case 'op3':
            let random = Math.floor(Math.random() * (11 - 1) + 1);
            array.unshift(random);
            console.log(array);
            break;
        case 'op4':
            array.shift();
            console.log(array);
            break;
        case 'op5':
            let indices = [];
            let index = array.indexOf(10);
            while (index != -1) {
                indices.push(index);
                index = array.indexOf(10, index + 1);
            }
            console.log(indices);
            break;
        case 'op6':
            //Numeros - Mayusculas - Minusculas
            console.log(array.sort());
            break;
        case 'op7':
            console.log(array.reverse());
            break;
        case 'op8':
            for (let i = 0; i < array.length; i++) {
                if (array[i] == 5) {
                    array.splice(i, 1, 'Cinco');
                }
            }
            console.log(array);
            break;
        default:
            return;
    }
}