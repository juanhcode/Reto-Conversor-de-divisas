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
        setTimeout(() => {
            contenedor.style.height = '230px';
            div.style.display = 'none';
        }, 3000);
    } else {
        convertir(botonDinero.value, seleccionarDinero(),seleccionarMoneda());
    }

    //formulario.reset();
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
    agregarPrecios();
}

const agregarPrecios = () => {
    //console.log(selectOpcion.getAttribute);
}

selectOpcion.addEventListener('change',
    function () {
        //let monedas = ['default,'dolar','Peso mexicano','Peso colombiano','Euro','libra esterlina'];
        let preciosDolar = [0, 1, 20.07, 3.787, 0.91, 0.76];
        //let monedas = ['default,'dolar','Peso mexicano','Peso colombiano','Euro','libra esterlina'];
        let pesosMexicano = [0, 0.050, 1, 189.60, 0.045, 0.038];
        //let monedas = ['default,'dolar','Peso mexicano','Peso colombiano','Euro','libra esterlina'];
        let pesosColombiano = [0,0.00026,0.0053,1,0.00024,0.00020];
        //let monedas = ['default,'dolar','Peso mexicano','Peso colombiano','Euro','libra esterlina'];
        let euros = [0,1.10,22.00,4.172,1,0.83];
        //let monedas = ['default,'dolar','Peso mexicano','Peso colombiano','Euro','libra esterlina'];
        let libras = [0,1.32,26.43,5.010,1.20,1];

        let selectedOption = this.options[selectOpcion.selectedIndex];
        if (selectedOption.text === 'Dolar') {
            for (let i = 0; i < selectOpcion2.length; i++) {
                let opt = selectOpcion2[i];
                opt.value = preciosDolar[i];
            }
        } else if (selectedOption.text === 'Peso Mexicano') {
            for (let i = 0; i < selectOpcion2.length; i++) {
                let opt = selectOpcion2[i];
                opt.value = pesosMexicano[i];
            }
        } else if (selectedOption.text === 'Peso Colombiano') {
            for (let i = 0; i < selectOpcion2.length; i++) {
                let opt = selectOpcion2[i];
                opt.value = pesosColombiano[i];
            }
        } else if (selectedOption.text === 'Euro') {
            for (let i = 0; i < selectOpcion2.length; i++) {
                let opt = selectOpcion2[i];
                opt.value = euros[i];
            }
        } else if (selectedOption.text === 'Libra Esterlina') {
            for (let i = 0; i < selectOpcion2.length; i++) {
                let opt = selectOpcion2[i];
                opt.value = libras[i];
            }
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

const convertir = (cantidad, valorActual,moneda) => {
    let resultado = cantidad * valorActual;
    const contenedor = document.querySelector('.contenedor');
    //const div = document.createElement('div');
    //div.remove();
    contenedor.style.height = '280px';
    //div.classList.add('new-div');
    //div.style.display = 'block';
    const p = document.createElement('p');
    p.classList.add('parrafo');
    p.innerText = ` ${resultado.toFixed(4)} ${moneda}`;
    p.style.fontSize = '33px'
    p.style.color = 'black';
    p.style.textAlign='center';
    p.style.fontFamily = 'Helvetica';
    //div.appendChild(p);
    contenedor.appendChild(p);
}