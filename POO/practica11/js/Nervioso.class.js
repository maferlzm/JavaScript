class Nervioso {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    CoordenadaParte(parHum) {
        if (this.x >= 343 && this.x <= 380 && this.y >= 144 && this.y <= 186) {
            parHum.innerText = 'Cerebro';
        } else if (this.x >= 297 && this.x <= 323 && this.y >= 322 && this.y <= 352) {
            parHum.innerText = 'Médula espinal';
        } else if (this.x >= 340 && this.x <= 387 && this.y >= 229 && this.y <= 257) {
            parHum.innerText = 'Tronco cerebral';
        } else if (this.x >= 351 && this.x <= 370 && this.y >= 330 && this.y <= 350) {
            parHum.innerText = 'Nervios cervicales';
        } else if (this.x >= 368 && this.x <= 396 && this.y >= 468 && this.y <= 502) {
            parHum.innerText = 'Nervios torácicos';
        } else if (this.x >= 327 && this.x <= 359 && this.y >= 467 && this.y <= 501) {
            parHum.innerText = 'Nervios lumbares';
        } else if (this.x >= 404 && this.x <= 432 && this.y >= 321 && this.y <= 354) {
            parHum.innerText = 'Nervio radial';
        } else if (this.x >= 404 && this.x <= 432 && this.y >= 321 && this.y <= 354) {
            parHum.innerText = 'Nervios sacros';
        } else if (this.x >= 404 && this.x <= 432 && this.y >= 321 && this.y <= 354) {
            parHum.innerText = 'Nervio cubital';
        } else if (this.x >= 404 && this.x <= 432 && this.y >= 321 && this.y <= 354) {
            parHum.innerText = 'Nervio femoral';
        } else if (this.x >= 404 && this.x <= 432 && this.y >= 321 && this.y <= 354) {
            parHum.innerText = 'Nervio ciático';
        } else if (this.x >= 404 && this.x <= 432 && this.y >= 321 && this.y <= 354) {
            parHum.innerText = 'Nervio tibial';
        } else if (this.x >= 404 && this.x <= 432 && this.y >= 321 && this.y <= 354) {
            parHum.innerText = 'Nervio plabtar medio';
        } else {
            parHum.innerText = ' ';
        }
    }
}