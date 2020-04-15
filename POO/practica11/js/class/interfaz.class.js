class Interfaz {

    MostrarMensaje(mensaje, tipo) {
        const div = document.createElement('div');
        if (tipo == 'error') {
            div.classList.add('mensaje', 'error');
        } else {
            div.classList.add('mensaje', 'correcto');
        }

        div.innerHTML = `${mensaje}`;
        document.querySelector('#cotizar-seguro').insertBefore(div, document.querySelector('.form-group'));

        setTimeout(function() {
            document.querySelector('.mensaje').remove();
        }, 5000);
    }

    MostrarResultado(seguro) {
        const resultado = document.getElementById('resultado');
        let marca = '';

        switch (seguro.marca) {
            case '1':
                marca = 'Circulatorio';
                break;
            case '2':
                marca = 'Digestivo';
                break;
            case '3':
                marca = 'Esquelético';
                break;
            case '4':
                marca = 'Muscular';
                break;
            case '5':
                marca = 'Nervioso';
                break;
        }

        const spinner = document.querySelector('#cargando img');
        spinner.style.display = 'block';

        setTimeout(function() {
            spinner.style.display = 'none';
            resultado.appendChild(div);
        }, 5000);
    }
}