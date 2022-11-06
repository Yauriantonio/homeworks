// CREANDO UN PROYECTO DE NODE
/*
En la terminal:
Escribimos los siguientes comandos
npm(Node Package Manager ): Nos permite gestionar cualquier paquete de node.js que utilicemos.
1.- Revisar la version de Node: node --version
2.- Revisar la version del npm: npm --version

1.- Para iniciar: npm init // Nos creal el package.json
2.- Nos pregunta el nombre del paquete: webpack-initial
3.- La version. // Presionamos enter.
4.- La descripción: Este es un cascarón de un proyecto webpack
5.- El punto inicial de la aplicación: index.js
6.- Comando para pruebas automáticas.
7.- El repositorio de git.
8.- keywords: Nos ayuda cuando se sube al repositorio de paquetes de node.
9.- El autor: Antonio Aguirre.
10.- La lisencia (Por defecto).

En un archivo .JSON se utilizan "comillas dobles" si son 'comillas sencillas' marcara error.
*/


// EXPOSICIÓN DEL PROBLEMA Y NECESIDAD DEL WEBPACK

// Webpack nos va a servir para llevar el código a versiones anteriores de JS (Lo hace compatible)
// para que otros navegadores puedan visualizar la página desarrollada.
// https://webpack.js.org/

// Creamos una carpeta que se llama - src - debe tener este nombre en especifico.

import { saludar } from './js/componentes';
import './styles.css';

// Se utiliza para importar modulos y librerias de react o angular o demás tecnolgias para crear aplicaciones modernas.


const nombre = 'Antonio';

saludar (nombre);

// INSTALACIÓN Y CONFIGURACIÓN DE WEBPACK POR DEFECTO









