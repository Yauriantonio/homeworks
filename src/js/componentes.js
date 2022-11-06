

import '../css/components.css' // Permite la importación de CSS.

// MANEJO DE IMAGENES

// Nos va a permitir cargar una imagen y poderla mover a otros directorios entre otras cosas

//  https://v4.webpack.js.org/loaders/file-loader/

// - npm install file-loader --save-dev -

/*

"Si no quiero importar la imagen de esta manera y mejor desde el HTML"

import webpacklogo from '../assets/img/webpack-logo.png' //  webpacklogo: Es la referencia a esta imagen y podremos crear una constante.

*/
// INSTALACIÓN Y CONFIGURACIÓN DE WEBPACK POR DEFECTO

// https://webpack.js.org/guides/getting-started/

// En la terminal de VSCode colocamos los siguientes comandos

// mkdir webpack-demo // Aquí se crea una carpeta webpack-demo, que ya realizamos y se llama 03.- WEBPACK-INICIAL
// cd webpack-demo // Se navega hacia la carpeta.
// npm init -y // Se crea el package.json // que ya se creó con anterioridad.
// Sólo útilizamos este comando...
// npm install webpack webpack-cli --save-dev // Se instala el webpack.
// Se crea la carpeta node_modules.

// Las dependencias de desarrollo, no serán necesario en la producción, sólo en desarrollo.
// Creamos el archivo:- "build":"webpack" - Para que se pueda ejecutar webpack.
// Escribimos en la terminal:- npm run buil - Para ejecutar el webpack.
// Se crea una carpeta con el nombre - dist - con un archivo -  main - el cuál tiene el código infuscado.
// En index.html ponemos la dirección de el archivo  - main  -.
// No olvidar poner export para poder exportar el código y pueda funcionar ya que se separo la lógica en 2 archivos.

// Es el mismo código pero separado por módulos que ya ayudaran a ofuscar nuestro código.

// Para poder utilizar la constante saludar hay que exportar y para ello se utiliza export.
// export: Palabra reservada útilizada para exportar.
export const saludar = ( nombre ) => { // Las cosas que no esten exportadas no las podremos utilizar y nos marcará error

    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }!!!!`;

    document.body.append( h1 );
/*

 "Si no quiero importar la imagen de esta manera y mejor desde el HTML"

    // IMAGEN
  //  console.log(webpacklogo); // Imprimimos en consola el link de la direccion de la imagen.
    const img = document.createElement('img'); // creamos un elemento para la imagen.
    img.src = webpacklogo; // Hacemos referencia a la imagen del webpacklogo que importamos.
    document.body.append( img ); // Agregamos la imagen.
*/
}

// ARCHIVO DE CONFIGURACIÓN DEL WEBPACK

/*
Creamos un archivo llamado - webpack.config.js - en la carpeta raíz.


*/









