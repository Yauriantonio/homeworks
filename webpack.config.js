
// ARCHIVO DE CONFIGURACIÓN DEL WEBPACK

/*

https://webpack.js.org/configuration/

Me va a permitir que el código "moderno" sea compatible con versiones anteriores o navegadores web.

Hay una forma de especificar un archivo de JS - "build": "webpack --config webpack.config.js" --.
  Se manda al archivo de configuración 

Creamos un archivo llamado - webpack.config.js - en la carpeta raíz.

Creamos  - module.exports = { - Dentro del archivo. 

// HTML LOADER

Son instalaciones de desarrollo.
Los siguientes plugings son para cargar el archivo - index.html - y 


1.- https://webpack.js.org/plugins/html-webpack-plugin/

 -- npm install --save-dev html-loader --


para la inyeccion de JS dentro del - index.html - y 
otros tipos de controles.


2.- https://webpack.js.org/loaders/html-loader/

 --  npm install --save-dev html-webpack-plugin --

 --  npm install --save-dev html-webpack-plugin@5.5.0 -- Instala la versión 5.5.0 de webpack, (no es necesario).
 
npm run build // El siguiente comando es para correr el archivo build que creamos "build"

npm run start 
npm start


*/

// COPY PLUGIN

/*
https://webpack.js.org/plugins/copy-webpack-plugin/

* npm install copy-webpack-plugin --save-dev
* yarn add -D copy-webpack-plugin
* pnpm add -D copy-webpack-plugin


*/

// Es una importación, en la documentación se escribe - HtmlWebpackPlugin- pero queda a discreción.
const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Se requiere para útilizar el plugin de - styles.css -
const CopyPlugin = require("copy-webpack-plugin"); // Se requiere para útilizar el plugin de copy plugin.


module.exports = { // Es un módulo que se va a exportar.
    mode: 'development', // Es un modulo de desarrollo o de producción que quiere decir que queremos minimizar el código.
 // Y ya no nos marca el error, ya encuentra los archivos y el main ya no se encuentra minimizado u ofuscado, esta en modo de desarrollo.
    output:{ // Borra toda la carpeta dist y la vuelve a crear.
        clean: true // Super Útil.!!!
    },

module: {
    rules: [
        { // Espresión regular: Para buscar si puede hacer match con un string, por ejemplo con la expresión regular.
            // test: /\.html$/i - Es para que busque todos los html y si le colocamos la i al final es para que sea 
            // insencible a la busqueda y busque caracteres en mayusculas y minusculas.
            test: /\.html$/, // Busca los archivos .html y si lo encuentra se manda a llamar al loader.  
            loader: 'html-loader', // El archivo loader que instalamos.
            options: { //  sources: En caso de que se mueva un archivo con cierto atributo como una imagen igualmente lo mueve automaticamente.
                sources: false // y hace muchas otras formas automaticas.
            }
        },
        {
            test: /\.css$/, // También se puede hacer con SAS o LESS, se puede ser más especifico a nivel componente, en este caso es a todo el documento.
            exclude: /styles.css$/, // Excluye este archivo en especifico.
            use: ['style-loader','css-loader'] // Tenemos que poner en webpack los archivos instalados para hacer la importación de los estilos correctamente. 
        },
        {
            test: /styles.css$/, // Se requiere para realizar la importacion de estilos.
            use: [MiniCssExtractPlugin.loader, 'css-loader'] // - 'css-loader' -: Se útiliza para que cargue el - MiniCssExtractPlugin - .
        },
        {
            test: /\.(png|jpg?g|gif)$/, // Esta es una expresión regular que me va a permitir cargar cualquier formarto de imagen,  sin importar donde este.
            loader: 'file-loader' // usa el loader del file-loader.
        }
    ]
},

optimization: {},
// El puging es un arreglo dentro de otro arreglo.
plugins: [
    // Configuramos una nueva instancia.
    new HtmlWebPack({ // Con está instancia creamos un archivo volatil de HTLM en la carpeta - dist -.
        title: 'My WebPack App', // Cambia el título de el archivo HTML volatil.
        // filename: 'Holamundo.html' // Cambia el nombre del archivo HTML volatil.
        template: './src/index.html' // Es el archivo al que queremos que se base - index.html -.
    }),

    new MiniCssExtractPlugin ({ // Con esta instancia se agrega el archivo .css - nuevo-estilo.css - a la carpeta dist 
        // Y agrega en el - index.html - la etiqueta para el enlace al achivo .css - <link href="nuevo-estilo.css" rel="stylesheet"> -
       // filename: '[name].css', // El mismo nombre.
        filename: 'nuevo-estilo.css', // Otro nombre. 
       // filename: '[name].[fullhash].css', // Se crea un nuevo hash cada que se actualiza, ayuda a los clientes que no mantengan este archivo en cache
       ignoreOrder: false // Ignore el orden. El hash en produccion si pero en desarrollo no.
    }),

    new CopyPlugin ({ // Por lo regular en la carpeta assets se colocan archivos que no se van a cambiar.
        patterns: [ // si un archivo cae en alguna regla anterior tendria que ser excuido
            { from: 'src/assets/', to: 'assets/'}
        ]
    })
]
}

// WEBPACK DEV SERVER

// Instalamos el paquete de webpack-dev-server.

// https://webpack.js.org/configuration/dev-server/

// npm i --save-dev webpack-dev-server // Es lo mismo.
// npm i -D webpack-dev-server // Lo instala en las dependencias de desarrollo que no se despliega en producción ya que funciona como xampp.

//  Creamos un nuevo script "serve" o comúnmente conocido como "start" que inicia el backend en package.json

// -  "start": "webpack serve --config webpack.config.js --open --port=8080" - 

//  --open: Es para abrir el archivo automaticamente. --port: Es para especificar el puerto, que en este caso es 8080.
//  Ponemos en la terminal - npm run start - o - npm start - en uno de los pocos comandos que no útiliza el run. 


// IMPORTANDO ESTILOS DE FORMA DINÁMICA.





