const titulo_Pagina = document.querySelector('h1');
const number_A = document.getElementById('value_A');
const number_B = document.getElementById('value_B');
const name = document.getElementsByClassName('form--name');
const contenedor_Img = document.getElementsByClassName('container--img');
const formulario = document.getElementsByClassName('form');
const impresion_Resultado = document.getElementById('resultado');

console.log(number_A.value);
console.log ({
    titulo_Pagina,
    number_A,
    name,
});
// titulo_Pagina.innerText = 'Curso JS'   
// titulo_Pagina.innerHTML = 'Manipulación del DOM'
// Cambio de atributos
//name[0].setAttribute('placeholder','Usuario');
// Agregar o quitar clases 
titulo_Pagina.classList.add('cotainer--titulo');
titulo_Pagina.classList.remove('title');
//Crear un nuevo elemento
    //const imagen_Respuesta  = document.createElement('img');
    //imagen_Respuesta.setAttribute('src', '../img/wakandaPruebaP.jpeg');
//agregarlo al HTML
    //contenedor_Img[0].appendChild(imagen_Respuesta);
/*
 +  -------------Escuchando eventos desde JS--------------------
 */

 formulario[0].addEventListener('submit', btnClick);

 function btnClick(event) {
    event.preventDefault();
    const imagen_Respuesta  = document.createElement('img');
    imagen_Respuesta.setAttribute('src', '../img/wakandaPruebaP.jpeg');
    imagen_Respuesta.setAttribute('class','form--img')
    contenedor_Img[0].appendChild(imagen_Respuesta);
    const resultado = Number(number_A.value) + Number(number_B.value);
    impresion_Resultado.innerText = resultado;
    
    const button_Delete = document.createElement('button');
    button_Delete.setAttribute('class', 'form--btn');
    button_Delete.innerText = 'Borrar';

    formulario[0].appendChild(button_Delete);


 } 
