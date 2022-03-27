const monedas = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euro', 'Libra Esterlina'];
let botonDinero = document.getElementById('money');


//seleccionando el primer Select
let selectOpcion = document.querySelector('#options');
let selectOpcion2 = document.querySelector('#option2');
//console.log(selectOpcion2)

let resultado = 0;


//Al cargar el documento se colocan las opciones de el select
document.addEventListener("DOMContentLoaded", () => {
    agregarOpciones();
});


let formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const contenedor = document.querySelector('.contenedor');
    const parrafo = document.querySelector('.parrafo');
    console.log(botonDinero.value);
    if (isNaN(parseInt(botonDinero.value))) {
        const div = document.createElement('div');
        div.remove();
        contenedor.style.height = '280px';
        div.classList.add('new-div');
        div.style.display = 'block';
        const p = document.createElement('p');
        p.classList.add('parrafo');
        p.innerText = 'Formulario invalido digite una cantidad';
        div.appendChild(p);
        contenedor.appendChild(div);
    } else {
        let selectedOption = this.options[selectOpcion.selectedIndex];
        convertir(selectedOption,botonDinero.value, seleccionarDinero(),seleccionarMoneda());
    }
    formulario.reset();
})

const agregarOpciones = () => {
    monedas.forEach((elemento) => {
        let option = document.createElement('option');
        let option2 = document.createElement('option');
        option.text = elemento;
        option.value = 1;
        option2.text = elemento;
        option2.value = 0;
        option2.classList.add('prueba');
        selectOpcion.appendChild(option);
        selectOpcion2.appendChild(option2);
    })
}

const agregarPrecios = (elemento,array) => {
    for (let i = 0; i < elemento.length; i++) {
        let opt = elemento[i];
        opt.value = array[i];
    }
}


selectOpcion.addEventListener('change',
    function () {
        //let monedas = ['default,'dolar','Peso mexicano','Peso colombiano','Euro','libra esterlina'];
        let preciosDolar = [0, 1, 20.07, 3798.54, 0.91, 0.76];
        let pesosMexicano = [0, 0.050, 1, 189.60, 0.045, 0.038];
        let pesosColombiano = [0,0.00026,0.0053,1,0.00024,0.00020];
        let euros = [0,1.10,22.00,4172.51,1,0.83];
        let libras = [0,1.32,26.43,5010.46,1.20,1];


        let selectedOption = this.options[selectOpcion.selectedIndex];
        if (selectedOption.text === 'Dolar') {
            agregarPrecios(selectOpcion2,preciosDolar);
        } else if (selectedOption.text === 'Peso Mexicano') {
            agregarPrecios(selectOpcion2,pesosMexicano);
        } else if (selectedOption.text === 'Peso Colombiano') {
            agregarPrecios(selectOpcion2,pesosColombiano);
        } else if (selectedOption.text === 'Euro') {
            agregarPrecios(selectOpcion2,euros);
        } else if (selectedOption.text === 'Libra Esterlina') {
            agregarPrecios(selectOpcion2,libras);
        }
    }
);

const seleccionarDinero = () => {
    let selectedOption2 = this.options[selectOpcion2.selectedIndex];
    return selectOpcion2.value;
}

const seleccionarMoneda = () => {
    let selectedOption2 = this.options[selectOpcion2.selectedIndex];
    return selectedOption2.text;
}

const convertir = (monedaActual,cantidad, valorActual,moneda) => {
    let resultado = new Intl.NumberFormat('es-Mx').format(cantidad * valorActual);
    const contenedor = document.querySelector('.contenedor');
    contenedor.style.height = '280px';
    const p = document.createElement('p');
    p.classList.add('parrafo');
    p.innerText = `$${cantidad} ${monedaActual.text} ->  $${resultado} ${moneda}`;
    p.style.fontSize = '25px'
    p.style.color = 'black';
    p.style.textAlign='center';
    p.style.fontFamily = 'Helvetica';
    contenedor.appendChild(p);
}