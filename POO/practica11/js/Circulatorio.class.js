class Circulatorio {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    CoordenadaParte(parHum) {
        if (this.x >= 550 && this.x <= 597 && this.y >= 229 && this.y <= 257) {
            parHum.innerText = 'Vena yugular';
        } else if (this.x >= 600 && this.x <= 640 && this.y >= 229 && this.y <= 257) {
            parHum.innerText = 'Arteria carótida';
        } else if (this.x >= 587 && this.x <= 620 && this.y >= 330 && this.y <= 360) {
            parHum.innerText = 'Vena cava superior';
        } else if (this.x >= 630 && this.x <= 640 && this.y >= 330 && this.y <= 360) {
            parHum.innerText = 'Corazón';
        } else if (this.x >= 640 && this.x <= 670 && this.y >= 300 && this.y <= 330) {
            parHum.innerText = 'Arteria humeral';
        } else if (this.x >= 580 && this.x <= 610 && this.y >= 468 && this.y <= 505) {
            parHum.innerText = 'Vena ilíaca';
        } else if (this.x >= 640 && this.x <= 675 && this.y >= 468 && this.y <= 505) {
            parHum.innerText = 'Arteria ilíaca';
        } else if (this.x >= 620 && this.x <= 647 && this.y >= 347 && this.y <= 375) {
            parHum.innerText = 'Arteria aorta';
        } else if (this.x >= 580 && this.x <= 610 && this.y >= 569 && this.y <= 605) {
            parHum.innerText = 'Vena femoral';
        } else if (this.x >= 625 && this.x <= 657 && this.y >= 569 && this.y <= 605) {
            parHum.innerText = 'Arteria femoral';
        }  else {
            parHum.innerText = ' ';
        }

    }
}