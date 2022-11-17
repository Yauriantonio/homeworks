
// TODO LIST CLASS

// import { Todo } from "./todo.class";

// import { } from './index'; // Se puede dejar así o hacer referencia directamente - ./todo.class -.
import { Todo } from './todo.class';

// El TodoList Va a agrupar toda la lista de todos.

// La regla dice que si es una clase la primera letra tiene que estar capitalizada y las deás tamnién. 
export class TodoList { // Se útiliza OperCamellCase por que es una clase.

constructor() {
// creamos un arreglo en el constructor
    //this.todos = []; // Aqui se quiere manejar todas las listas de tareas. Está linea se vuelve obsoleta...
    // Porqué sí, no existe se inicializa hasta abajo en el - cargarLocalStorage() -, de lo contrario se inicializa con el valor que tenga el - localStorage -.
    this.cargarLocalStorage();
}
// Métodos
// Y para ello se útiliza este método
nuevoTodo( todo ) { // Insertamos el todo en el arreglo.
    this.todos.push( todo );
    
    this.guardarLocalStorage(); // Se necesita guardar al agregar una nueva tarea.
}

// ELIMINAR UN TODO

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

// Eliminamos el - todo - se podría haber útilizado  - eliminarTodo( todo ) - pero, mejor útilizamos el id.
eliminarTodo( id ) {
// Se necesita barrer todos los - Todos - con el filter
    // this.todos.filter() // Luego viene un callback
    // Que va a recivir como argumento el - todo -
    // Ahora barre cada uno de ellos y obtiene un Todo individual.
    // this.todos.filter( todo => ) // se pregunta si,
    // El - todo.id -  es diferente al id que se recive del argumento - eliminarTodo( id ) -
    // Estará regresando un string y un número almacenado.
    // this.todos.filter( todo =>todo.id != id ) // Este núevo arreglo se va a almacenar en - this.todos -
    // Toda la instrucción anterior regresa un nuevo arreglo y es almacenada en el - this.todo - que se encuentra 
    // en el - constructor() - sobreescribiendo cada uno de sus valores.
   
    // Esto hará la impresion de que se esta eliminando el todo ó la tarea.
    this.todos = this.todos.filter( todo =>todo.id != id )

// Nescecitamos guardar antes de eliminar, por si se hace la modificación.
    this.guardarLocalStorage();
}

// MARCAR COMO COMPLETADO UN TODO
// Si, estabá completado, a, no completado y virceversa.
marcarCompletado ( id ) { // Ocupamos saber cúal es el id.
 for ( const todo of this.todos ) { 

    // console.log( id, todo.id ); // Ocupamos para hacer una comparación en la consola.
// Uno va  a tener un strin y el otro un número.
    if ( todo.id == id ) { // Si, el id = id que se recive entonces se tiene que hacer el cambio.
// Si, es - true - que sea - false - y viseversa  
        todo.completado = !todo.completado;
        this.guardarLocalStorage(); // Aquí también se deveria de guardar, por que se hizó una modificación y se tuvó que guardar.
        break; // Suponiendo que no hay otro todo con el mismo - id - hacemos un break para salir del ciclo.
    // Para agregar el tachado a la tarea agregamos:
    }
 }

}

//  ELIMINAR TODOS COMPLETADOS.
eliminarCompletados( ) {

this.todos = this.todos.filter( todo => !todo.completado )
this.guardarLocalStorage(); // Y en eliminar completados, también se tienen que guardar los cambios.

}
// Creamos un método para guardar en el localStorage
guardarLocalStorage() {
// Existe otra forma de grabar lo - todos - y  trasformarlos a un JSON, que literal se trasforma como un package.json, y luego a su vez pasarlo a un string.
// De manera que grabe todo el documento abierto y ese objeto lo grave en él string.
// Para eso existe otro objeto en Java Script  que es todo capitallizado - JSON -
// Al poner  - JSON.stringify - le decimos que convierta en arreglo de - this.todos - a un JSON perfecto.
    localStorage.setItem('todo', JSON.stringify (this.todos) ); // Y nos va a devolver TODA LA INFORMACIÓN DEL OBJETO y sí, se recarga  el navegador se borran las tareas, pero SE GUARDA EN EL LOCALSTORAGE. 
    // localStorage.setItem('todo', this.todos ); // Se está intentando guardar un arreglo, pero ¿Por qué no hay error? sí, esté método sólo se útiliza con strings.
} // Porque, en la parte de Aplication dentro del navegador especificamente en el LocalStorage se enceuntran entre corchetes las palabras,
// [object Object],[object Object] - es común verlo y quiere decir que es la representación de un objeto en sú forma string.


cargarLocalStorage(){
    
    /*

    // Antes de trabajar con el localStorage tenemos que verificar si existe un objeto 
    if ( localStorage.getItem('todo') ) {

        // Tenemos que trasformar nuevamente el - JSON.stringify - a su archivo original y para eso se útiliza - JSON.parse -.
        // this.todos = localStorage.getItem('todo'); 
        this.todos = JSON.parse ( localStorage.getItem('todo') ); 

        console.log( 'Cargar Local:  ', this.todos ); // Hacemos una impresión para saber que hay en el localStorage.
        console.log( typeof this.todos ); // Todo - es de tipo strin y no un arreglo, po eso no se puede insertar nada en la consola.
    } else { // Sí, no, existe entonces que se inicialice.
        this.todos = [];
    }
*/
// Se vuelven obsoletas estás lineas de código, por el operador terneario:
    this.todos = ( localStorage.getItem('todo') ) 
                    ? JSON.parse ( localStorage.getItem('todo') ) 
                    : [];
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
//  - https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map - 
// Se pone - Todo - en mayuscula por que se esta haciendo referencia a una propiedad - statica -

    // this.todos = this.todos.map( obj => Todo.fromJson( obj ) ); // Esto se puede simplificar
    // por que sólo se esta mandando a llamar el pimer argumento.
    this.todos = this.todos.map( Todo.fromJson );


}

}


// CONSTRUIR LAS TAREAS EN EL HTML
// componentes.js






