let a;
let b;
let c;
let area;

let button = document.getElementById('btnCalcular');
button.addEventListener('click', areaTriangulo);

function areaTriangulo(){
    a=Number(document.getElementById('a').value);
    b=Number(document.getElementById('b').value);
    c=Number(document.getElementById('c').value);
    // Semiperímetro S
    let s= (a+b+c)/2;
    let h; //altura
    area=(a*h)/2;

    let areaCalculada = document.getElementById('areaCalculada');
    
    if (a!=b && b!=c && c!=a){ //triángulo escaleno
        
        let valorRaiz= s*((s-a)*(s-b)*(s-c));
        let raiz=Math.sqrt(valorRaiz);
        h=(2/a)*raiz;
        
        areaCalculada.innerText='Las medidas corresponden a un triángulo escaleno y su área es: '+ area;
    }
    
    if(a==b && b==c){ //triángulo equilátero
        
        h=((Math.sqrt(3))*a)/2;
        areaCalculada.innerText='Las medidas corresponden a un triángulo equilátero y su área es: '+ area;
    }

    if(a==b && b!=c){//triángulo isósceles
        
        let aElevado=Math.pow(a,2);
        let bElevado=Math.pow(b,2);
        
        h=Math.sqrt(aElevado-((bElevado)/4));
        areaCalculada.innerText='Las medidas corresponden a un triángulo isósceles y su área es: '+ area;

    }

    
}