class Digestivo {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    CoordenadaParte(parHum) {
        if (this.x >= 590 && this.x <= 620 && this.y >= 229 && this.y <= 257) {
            parHum.innerText = 'Faringe';
        } else if (this.x >= 590 && this.x <= 620 && this.y >= 329 && this.y <= 357) {
            parHum.innerText = 'Esófago';
        } else if (this.x >= 590 && this.x <= 620 && this.y >= 429 && this.y <= 457) {
            parHum.innerText = 'Hígado';
        } else if (this.x >= 590 && this.x <= 620 && this.y >= 460 && this.y <= 480) {
            parHum.innerText = 'Vesícula biliar';
        } else if (this.x >= 590 && this.x <= 620 && this.y >= 485 && this.y <= 505) {
            parHum.innerText = 'Estómago';
        } else if (this.x >= 597 && this.x <= 627 && this.y >= 507 && this.y <= 515) {
            parHum.innerText = 'Páncreas';
        } else if (this.x >= 590 && this.x <= 620 && this.y >= 517 && this.y <= 545) {
            parHum.innerText = 'Intestino grueso';
        } else if (this.x >= 590 && this.x <= 620 && this.y >= 557 && this.y <= 610) {
            parHum.innerText = 'Intestino delgado';
        } else if (this.x >= 590 && this.x <= 620 && this.y >= 625 && this.y <= 650) {
            parHum.innerText = 'Recto';
        }  else {
            parHum.innerText = ' ';
        }

    }
}