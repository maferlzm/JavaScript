class Proyectil{

    velInicial=0;
    angulo=0;

    constructor(velInicial, angulo){
        this.velInicial = velInicial;
        this.angulo = angulo;

        console.log(this.angulo, this.velInicial);
    }
    calcularDistanciaX(t){
        const DistanciaX = this.velInicial * Math.cos(this.angulo*(Math.PI /180))*t;
        return DistanciaX;
    }

    calcularDistanciaY(t){
        let DistanciaY = this.velInicial * Math.sin(this.angulo*(Math.PI /180))*t;
        DistanciaY = DistanciaY * (t-0.5) * 9.8 * Math.pow(t,2);
        return DistanciaY;
    }

    crearSpan(){
        for(let tiempo=0; tiempo <= 7; tiempo +=0.1){
            const span = document.createElement("span");

            const left = this.calcularDistanciaX(tiempo);
            const bottom = this. calcularDistanciaY(tiempo);

            if(left<0 || bottom <0 || left >=100 || bottom >=100) break;

            span.style.left = `${left}%`;
            span.style.bottom = `${bottom}%`;

            document.getElementById("contenedor").appendChild(span);
        }
    }
}