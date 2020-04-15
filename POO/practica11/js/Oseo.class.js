class Oseo {
    x = 0;
    y = 0;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    CoordenadaParte(parHum) {
        if (this.x >= 570 && this.x <= 625 && this.y >= 229 && this.y <= 287) {
            parHum.innerText = 'Cráneo';
        } else if (this.x >= 570 && this.x <= 625 && this.y >= 315 && this.y <= 335) {
            parHum.innerText = 'Vértebras cervicales';
        } else if (this.x >= 550 && this.x <= 700 && this.y >= 340 && this.y <= 345) {
            parHum.innerText = 'Clavículas';
        } else if (this.x >= 570 && this.x <= 650 && this.y >= 345 && this.y <= 390) {
            parHum.innerText = 'Costillas';
        } else if (this.x >= 555 && this.x <= 560 && this.y >= 355 && this.y <= 415) {
            parHum.innerText = 'Húmero';
        } else if (this.x >= 655 && this.x <= 670 && this.y >= 355 && this.y <= 415) {
            parHum.innerText = 'Húmero';
        } else if (this.x >= 565 && this.x <= 620 && this.y >= 405 && this.y <= 455) {
            parHum.innerText = 'Vértebras lumbares';
        } else if (this.x >= 555 && this.x <= 560 && this.y >= 417 && this.y <= 427) {
            parHum.innerText = 'Cúbito';
        } else if (this.x >= 655 && this.x <= 670 && this.y >= 417 && this.y <= 427) {
            parHum.innerText = 'Cúbito';
        } else if (this.x >= 555 && this.x <= 560 && this.y >= 430 && this.y <= 470) {
            parHum.innerText = 'Radio';
        } else if (this.x >= 655 && this.x <= 670 && this.y >= 430 && this.y <= 470) {
            parHum.innerText = 'Radio';
        } else if (this.x >= 580 && this.x <= 645 && this.y >= 460 && this.y <= 490) {
            parHum.innerText = 'Coxal';
        } else if (this.x >= 540 && this.x <= 560 && this.y >= 480 && this.y <= 500) {
            parHum.innerText = 'Huesos de la mano';
        } else if (this.x >= 660 && this.x <= 685 && this.y >= 480 && this.y <= 500) {
            parHum.innerText = 'Huesos de la mano';
        } else if (this.x >= 580 && this.x <= 590 && this.y >= 495 && this.y <= 555) {
            parHum.innerText = 'Fémur';
        } else if (this.x >= 630 && this.x <= 640 && this.y >= 495 && this.y <= 555) {
            parHum.innerText = 'Fémur';
        } else if (this.x >= 570 && this.x <= 585 && this.y >= 573 && this.y <= 595) {
            parHum.innerText = 'Rótula';
        } else if (this.x >= 635 && this.x <= 640 && this.y >= 573 && this.y <= 595) {
            parHum.innerText = 'Rótula';
        } else if (this.x >= 580 && this.x <= 590 && this.y >= 600 && this.y <= 650) {
            parHum.innerText = 'Tibia';
        } else if (this.x >= 630 && this.x <= 640 && this.y >= 600 && this.y <= 650) {
            parHum.innerText = 'Tibia';
        } else if (this.x >= 630 && this.x <= 640 && this.y >= 655 && this.y <= 670) {
            parHum.innerText = 'Huesos del pie';
        } else if (this.x >= 630 && this.x <= 640 && this.y >= 655 && this.y <= 670) {
            parHum.innerText = 'Huesos del pie';
        } else {
            parHum.innerText = ' ';
        }
    }
}