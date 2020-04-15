class Seguro {

    marca = '';
    tipo = '';

    constructor(marca, tipo) {
        this.marca = marca;
        this.tipo = tipo;
    }

    cotizarSeguro() {

        let cantidadTotalSeguro = 0;
        const base = 2000;

        switch (this.marca) {
            case 'circulatorio': //americano -> 15%
                cantidadTotalSeguro = base * 1.15;
                break;
            case 'digestivo': //asiático -> 5%
                cantidadTotalSeguro = base * 1.05;
                break;
            case 'esqueletico': //europeo -> 35%
                cantidadTotalSeguro = base * 1.35;
                break;
            case 'muscular': //europeo -> 35%
                cantidadTotalSeguro = base * 1.35;
                break;
            case 'nervioso': //europeo -> 35%
                cantidadTotalSeguro = base * 1.35;
                break;
        }

    //     if (this.tipo == 'basico') {
    //         cantidadTotalSeguro *= 1.3;
    //     } else {
    //         cantidadTotalSeguro *= 1.5;
    //     }

    //     return cantidadTotalSeguro;

 }
}