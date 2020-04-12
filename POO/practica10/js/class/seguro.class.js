class Seguro {

    marca = '';
    anio = '';
    tipo = '';

    constructor(marca, anio, tipo) {
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;
    }

    cotizarSeguro() {

        let cantidadTotalSeguro = 0;
        const base = 2000;

        switch (this.marca) {
            case '1': //americano -> 15%
                cantidadTotalSeguro = base * 1.15;
                break;
            case '2': //asiático -> 5%
                cantidadTotalSeguro = base * 1.05;
                break;
            case '3': //europeo -> 35%
                cantidadTotalSeguro = base * 1.35;
                break;
        }

        const diferencia = new Date().getFullYear() - this.anio;

        cantidadTotalSeguro -= (diferencia * 3 * cantidadTotalSeguro) / 100;

        if (this.tipo == 'basico') {
            cantidadTotalSeguro *= 1.3;
        } else {
            cantidadTotalSeguro *= 1.5;
        }

        return cantidadTotalSeguro;

    }
}