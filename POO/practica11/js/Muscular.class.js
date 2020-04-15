class Muscular {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    CoordenadaParte(parHum) {
        if (this.x >= 550 && this.x <= 600 && this.y >= 330 && this.y <= 345) {
            parHum.innerText = 'Deltoide';
        } else if (this.x >= 660 && this.x <= 690 && this.y >= 330 && this.y <= 345) {
            parHum.innerText = 'Deltoide';
        } else if (this.x >= 297 && this.x <= 323 && this.y >= 322 && this.y <= 352) {
            parHum.innerText = 'Gran pectoral';
        } else if (this.x >= 340 && this.x <= 387 && this.y >= 229 && this.y <= 257) {
            parHum.innerText = 'Gran pectoral';
        } else if (this.x >= 351 && this.x <= 370 && this.y >= 330 && this.y <= 350) {
            parHum.innerText = 'Aparato Reproductor';
        } else if (this.x >= 368 && this.x <= 396 && this.y >= 468 && this.y <= 502) {
            parHum.innerText = 'Pie Derecho';
        } else if (this.x >= 327 && this.x <= 359 && this.y >= 467 && this.y <= 501) {
            parHum.innerText = 'Pie Izquierdo';
        } else if (this.x >= 404 && this.x <= 432 && this.y >= 321 && this.y <= 354) {
            parHum.innerText = 'Mano Derecha';
        } else {
            parHum.innerText = ' ';
        }
    }
}