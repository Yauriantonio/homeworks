// INICIO DE PROYECTO TODO

import './styles.css';

// Para evitar las importaciones en este archivo, creamos un sólo archivo con todas las importaciones.
import { Todo, TodoList } from './classes'; // Y hacemos referencia a ambas importaciones.
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class'; // Ahora podemos eliminar estas lineas.
// import { TodoList } from './classes'; // Ahora podemos eliminar estas lineas.

// Se utiliza para importar modulos y librerias de react o angular o demás tecnolgias para crear aplicaciones modernas.

// Nos aseguramos de exportar- export - el - todoList -  para poder útilizarlo en - componentes.js -.
export const todoList = new TodoList();



// console.log( todoList. todos ); // En consola tenemos las tareas.
// La informacion de las tareas se muestran en la app.
// Un pequeño tip es que cuándo sólo se tiene un sólo argumento que se quiere enviar a una función ó método se pueden omitir los siguientes elementos:
// todoList.todos.forEach( todo => crearTodoHtml( todo ) ); // Y es exactamente lo mismo.
// todoList.todos.forEach( crearTodoHtml(a,b) ); // esto sólo funciona si sólo hay un sólo argumento sí, no, no funciona como aquí.
   todoList.todos.forEach( crearTodoHtml ); 

/*

const tarea = new Todo('Aprendidendo JS');
// const tarea2 = new Todo('Aprendidendo JavasssssS');
// console.log(tarea);
todoList.nuevoTodo( tarea );
// todoList.nuevoTodo( tarea2 );
// tarea.completado = true; // Sólo se útilizo para prueba de marcar y desmarcar una tarea.
console.log( todoList );
crearTodoHtml( tarea );
*/

// LOCALSTORAGE Y SESSIONSTORAGE

// No es backend, sólo guarda la página en el navegador, és sólo de uso exclusivo para FrondEnd. 
// Se ve en - Aplication - del navegador.
// En el - SessionStorage  - se borra todo cuando se cierra el navegador.
// En el - LocalStorage - aguanta un reinicio de la computadora, aqui ¡¡¡¡ .....guardamos información que necesite la aplicacion,
// Pero esta informacón es visible por el usuario final, por lo que no es conveniente que se almacenen contraseñas o cosas sensibles para el úsuario ......!!!!!!!!. 
// Mozila MDN: La única diferencia es que la información almacenada en el localStorage no posee tiempo de expiración.

/*

// No hay que poner espacios ocaracteres raros, o caracteres especiales en un objeto - ('my-key' -.
localStorage .setItem('my-key', 'ABC1234'); // Ponemos mi llave - my- key - seguido de lo que se quiere almacenar en el - localStorage - qué, és -ABC123 -.
// Existen diferentes métodos y popiedades como el -  length - para saber cuántos elémentos hay, 
// El - removeItem - para remover el Item - setItem - para colocar un Item, el - clean - que borra todo el - localStorage -
// key - Para confirmar si existe alguna llave, pero en este caso se útiliza - setItem() -
// Y el valor tiene que ser de valor tipo string, sí, ó sí.

// Si se quiere eliminar un valor se puede hacer de diferentes maneras: 
// El - setTimeout - ejecuta la instrucción en cierto tiempo( 1.5 segs).
setTimeout( () => {

    localStorage.removeItem('my-key');

}, 1500 );

// Usualmente con el localStorage tenemos pero también existe - sessionStorage - que es exactamente igual.

sessionStorage .setItem('my-key', 'Ad rgdr34');

*/


// RECONSTRUYENDO INSTANCIAS DE TODOS
// La instancia que se imprime es un arreglo de objetos y no permite que se impriman correctamente.

// const newTodo = new Todo('Comprender la Sintaxis de JS');
// // todoList.nuevoTodo( newTodo ); // Se crea una instancia del nuevo todo - newTodo -
// // A pesar de que - todoList - Tiene todos los arrreglos de - todos -
// todoList.todos[0].imprimirClase(); // Por lo que ya se puede tener el primer - todo - y mandar a llamar el método - imprimirClase() -

    // newTodo.imprimirClase(); 

console.log( 'todos', todoList.todos ); // Solo para fines ilustrativos en la consola.
// Este es un inconveniente porque, todos sus métodos se pierden, las propiedades no se pierden, 
// por qué son almacenadas en el - localSrage - mediante el - JSON.Stringifi -.
// Para estó se creá una nueva instancia en - todo.class.js -

