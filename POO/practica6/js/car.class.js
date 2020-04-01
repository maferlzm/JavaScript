class Carro {
    posicionX = 0;
    posicionY = 0;
  
    constructor(posicionX, posicionY) {
      this.posicionX = posicionX;
      this.posicionY = posicionY;
    }
  
    MoverCarro(direccion, Imagen) {
      switch (direccion) {
        case "ArrowUp":
          if (this.posicionY <= 0) return;
          Imagen.src = "/assets/cArriba.jpeg";
          Imagen.style.top = `${this.posicionY-=10}px`;
          break;
  
        case "ArrowLeft":
          if (this.posicionX <= 0) return;
          Imagen.src = "/assets/cIzquierda.jpeg";
          Imagen.style.left = `${this.posicionX-=10}px`;
          break;
  
        case "ArrowRight":
          if (this.posicionX >= 900) return;
          Imagen.src = "/assets/cDerecha.jpeg";
          Imagen.style.left = `${this.posicionX+=10}px`;
          break;
  
        case "ArrowDown":
          if (this.posicionY >= 540) return;
          Imagen.src = "/assets/cAbajo.jpeg";
          Imagen.style.top = `${this.posicionY+=10}px`;
          break;
      }
    
    }
  
    verificarColision(PosicionPremio = []) {
      console.log(this.posicionX, this.posicionY);
      for (let i = 0; i < PosicionPremio.length; i++) {
        if (
          this.posicionX >=
            Math.floor((PosicionPremio[i].styleLeft)) &&
          this.posicionX <=
            Math.floor((PosicionPremio[i].styleLeftMax)) &&
          this.posicionY >=
            Math.floor((PosicionPremio[i].styleTop)) &&
          this.posicionY <=
            Math.floor((PosicionPremio[i].styleTopMax))
        ) {
          // console.log("Colisión");
          // console.log(PosicionPremio[i]);
          return i;
        }
      }
      return null;
    }
  }