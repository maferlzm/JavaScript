class Foco{
    estado=false;

    cambiarEstado(){
        this.estado=!this.estado;

        if(this.estado){
            return "/assets/encender.jpeg";
        }else{
            return "/assets/apagar.jpeg";
        }
    }
}