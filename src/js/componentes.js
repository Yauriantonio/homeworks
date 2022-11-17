
import { Todo } from '../classes';  // Importamos de, - classes - el, - Todo -.
import { todoList } from '../index'; // Sí, no, nos aparece el - todoList - es que no lo hemos exportado en el - index.js -.
// CONSTRUIR LAS TAREAS EN EL HTML

// Referencias en el HTML


const divTodoList   = document.querySelector('.todo-list');
const txtInputo     = document.querySelector('.new-todo');
const btnEliminar   = document.querySelector('.clear-completed');
const ulfiltors     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro'); // Tiene que ser - querySelectorAll - para que lo regrese como un arreglo...!!!

//El objetivo es crear un método en el HTML el - todo - como se tiene en el index.
export const crearTodoHtml = ( todo ) => {

// Ocupamos el operador condicional terniario antes visto.
// mediante la interpolación de string - ${ todo.completado ? 'completed': '' } -
    const htmlTodo = `
     <li class="${ todo.completado ? 'completed': '' } " data-id="${ todo.id }">
    <div class="view">
							<input class="toggle" type="checkbox" ${ todo.completado ? 'checked': '' }>
							<label>${ todo.tarea }</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
            </li>`;
 // No es buena práctica que en consola nos aparezca el div 
 // El div se inserto para crear un elemento con sus nodos. 
            const div = document.createElement('div');
            div.innerHTML = htmlTodo;
// Pero sólo nos interesa el - <li> -  asi que se agrega - .firstElementChild - al - div -.
// Para que erede el primer elemento despúes del div que vedría siendo - <li> -.
            divTodoList.append( div.firstElementChild );
// Lo mismo se realiza en el return para asegurarse que cuando se útilice el método se regrese ya el elemento al HTML.
            return div.firstElementChild;
}

// EVENTOS 

// EVENTO PARA AGREGAR UN TODO

// 'keyup': Evento que hace referencia a cuando el usuario deja de presionar la tecla.
txtInputo.addEventListener('keyup', ( event ) => { // Es importante colocar el - event - ya que, el evento nos va a decir que tecla precionó el usuario. 
  // console.log( event ); // Nos sirve para ver que - Keycode: 13 - tiene y que - value: rdsdd - en consola.
// .keyCode: Nos dice que tecla presionó el usuario.
if ( event.keyCode === 13 && txtInputo.value.length > 0 ) { // Quiere decir que el usuario presionó - enter = 13, ó  flecha arriba = 38. 
  // console.log(txtInputo.value); // Sólo para estar seguros de lo que el usuario escribe.
  const nuevoTodo = new Todo( txtInputo.value ) // Si, no, nos aparece el - Todo - lo importamos en la parte superior.
// Y mandamos a llamar lo que el usuario escribió con - txtInputo.value -.
// El único prolema es que tenemos que evaluar cuándo mande un string vacio (el usuario no escribió nada y presionó enter).
// Y para ello agregamos - && txtInputo.value.length > 0 - al - event.keyCode -. 
// Se tiene que insertar el  - nuevoTodo - en el arreglo de - index.js - así que lo importamos en la parte superior. 
  todoList.nuevoTodo( nuevoTodo );
  // console.log(todoList); // Pero no aparece en el HTML, así que hacemos referencia al - crearTodoHtml - . 
  crearTodoHtml( nuevoTodo ); // A el - nuevoTodo -.
  // Para que al precionar enter se borre lo anterior (lo que escribió el usuario) se agrega:
  txtInputo.value = ''; // Le decimos que entregue una cedena de caracteres vacia.

}
}); 
// Todos los objetos en JS, pasan por referencia.

// MARCAR COMO COMPLETADO UN TODO

divTodoList.addEventListener('click', ( event ) => { // Está en la espera de un click.

  // console.log( 'click '); // .localName: Lo útilizamos para identificar en que parte del <li></li> se hizó click.
  // console.log( event.target.localName ); // target: Lo útilizamos para ver en consola en donde hacemos click dentro de la app.

  const nombreElemento = event.target.localName; // input, label, button
// Se tiene que hacer referencia al <li></li> completamente, ya que cúando el usuario precione la x, se tiene que destruir el elemento HTML.
  const todoElemento   = event.target.parentElement.parentElement; // .parentElement - Si, sólo ponemos un - .parentElement - regresamos un - <div></div>
// Pero, queremos el - <li></li> - , así que colocamos otro - .parentElement - y ahora si se tiene la referencia completa.
  const todoId         = todoElemento.getAttribute('data-id'); // Útilizamos - .getAttribute - para recuperar el atributo - data-id -
 // Así mandamos a llamar el - id - del todo.
// console.log( todoElemento );
// console.log( todoId );
// console.log( nombreElemento );

// Para saber si una tarea ha sido terminada:
// Si, el nombre del elemento incluye algo en algo llamanado - input - entonces hizó click en el check. 
  if ( nombreElemento.includes('input')) {
    todoList.marcarCompletado( todoId );
    // Si, queremos ver el tachado en la tarea al colocar la paloma:
    // Para eso tenemos la referencia al elemento HTML que es - todoElemento -
    // Y si queremos hacer referencia a todas las clases colocamos - classList -
    // Y si queremos agregar o cambiar una clase es .toggle('')
    // Y la clase que queremos que ponga ó que quite sería completed
    todoElemento.classList.toggle('completed');
    // Estamos reciviendo un string, pero lo que tenemos en la clase es un número, por eso la diferencia de color en la consola.
  // Y por ello manejamos el - todo.id == id - en el - todo-list-class.js - y no...
  // El  - todo.id === id - que es un cambio que se deveria realizar.
  // Al pasar el id de - marcarCompletado( id ) - en el  - todo-list-class.js -
  // console.log( todoList );
  } else if( nombreElemento.includes('button') ) { // Hay que borrar el todo.
// Hacemos el llamado al - todoList - y hacemos el llamado al método de - eliminarTodo - y mandamos el  - todoId -
     todoList.eliminarTodo( todoId ); // Esto lo elimina del arreglo, pero la referencia HTML, todavia va a existir.
// Para eso hacemos referencia al - divTodoList- y se necesita remover con - .removeChild - el que coincida con el - todoElemento -
    divTodoList.removeChild( todoElemento )

}

  // console.log( todoList );

});
// Queremos crear un evento para la espera del click en el boton de eliminar.
btnEliminar.addEventListener('click', () => {
// Esto lo elimina del arreglo que tenemos en la clase, pero aún aparece en el HTML.
// Lo que se necesita es barrer cada uno de los elementos de los contenedores del div y eliminarlos uno por uno.
// Sólo que se va a empezar a eliminar de abajo hacia arriba,
// ya que si empieza de arriba hacia abajo los elementos no existen por lo que no pasa nada.
  todoList.eliminarCompletados();// Por último se puede quitar y poner esta linea para ser más eficiente el código al elemento -
  // Para eso se tiene que hacer refencia a todos los hijos que tenga el - divTodoList -
  for  ( let i = divTodoList.children.length -1; i >= 0; i-- ){ // Hacemos referencia a el último elemento con - .length - menos uno - -1 - ya que 
  // 0 es el primer elemento y -1 no es mayor o igual a 0, todo el ciclo for es: si, - i - es mayor o igual - >= -  a - 0 - que se ejecute y por último hacemos el procedimineto a la inversa con i--.
  const elemento = divTodoList.children[i]; // Mandamos a llamar a los elementos pero en orden ascendente.
// .contains : De esta forma podemos saber si el elemento tiene una clase.
    if ( elemento.classList.contains('completed') ) // La clase que se quiere evaluar es completed, y si lo encuentra lo tiene que eliminar del -divTodoList -
      divTodoList.removeChild(elemento);

    //  console.log( elemento );

  }
});


//  APLICAR FILTROS
// Todos, Pendientes y Completados
  ulfiltors.addEventListener('click', (event) => {
// Me muestra el texto de los botones, conveniente, pero, cuando se da click afuera del boton marca - undefined -
// console.log( event.target.text ); // Por lo que hacemos una validación

    const filtro = event.target.text; // Preguntamos si el filtro tiene algo
// Sí, sólo existe una sola instrucción se puede dejar de la siguinte manera.
// if( !filtro ) return; // Pero se acostumbra dejar las llaves para que se vea más claro.
   if( !filtro ){ return; } 

// Tenemos que barrer cada uno de los achortacs y borrar la clase selected.
    anchorFiltros.forEach( elem => elem.classList.remove('selected') );
    // console.log( event.target ); // Queremos saber si es un elemento - li  
// Para ello al elemento en consola sólo hay que agregarle la clase - selected -.
    event.target.classList.add('selected');// Y con esto se mueve el recuadro del botón al seleccionarlo al hacer click.

    for( const elemento of divTodoList.children ) {
    // console.log( elemento ); // Podemos observar como al presionar un botón tiene los datos del - todo -
    elemento.classList.remove('hidden'); // Tenemos que remover la clase hidden que tenemos eventualmente
    const completado = elemento.classList.contains('completed'); // Por que puede que seleccione otro botón y se necesita tener la clase limpia..
// Después reguntamos sí, el registro está completado.
// Sólo falraría mostrar si se requieren los completados ó no.
// Para eso se útiliza un switch, por que queremos hacer varias evaluaciónes,
// mediante el filtro que pueden ser completado, todos ó pendientes.
    switch( filtro ){// En el caso que seán - Pendientes - quiere decir que a todos los que están completados,
       case 'Pendientes': // les tiene que agregar la clase - hidden -
        if( completado ) {
          elemento.classList.add('hidden');
        }
        break;

        case 'Completados': // Se hace lo mismo pero con los completados.
        if( !completado ) { // Sólo que se pregunta lo opuesto.
          elemento.classList.add('hidden');
        }
        break;
    }
  }



  });







