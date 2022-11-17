
// TODO CLASS

export class Todo { // La clase la útilizamos fura del archivo por lo que útilizamos export.

    // Crear una nueva instancia en base a valores que vienen del localStorage Por ejemplo
// Nos devuelve algo que parece un - todo - pero no lo es, no es una instancia del todo
// Así que se deveria tener, se deveria recibir un objeto
    // static fromJson( obj ) { // Aqui se utiliza la desestructuración de argumantos con {}
    // y recibimos un objeto pero nos interesa el - id, tarea, completado, creado -
    static fromJson( {id, tarea, completado, creado} ) { // cuando tiene parentesis quire decir que tiene que mandar un objeto.
        // Como un - todo - temporal y una nueva instancia del - todo -
        // Para mandar a llamar este contructor se tiene que mandar a llamar la tarea,
        // Vamos a suponer que la propiedad - obj - tendía esa propiedad también.
        // Así que colocamos - obj.tarea -
        const TempTodo = new Todo( tarea ); // Aqui ya no se útiliza - obj - por la desestructuración de datos. 
        // const TempTodo = new Todo( obj.tarea ); // Y esto crea una nueva instancia y
        // Luego se tendían que establecer las propiedades.

        // Esto crea una nueva instancia, pero faltan las refenrencias de - id, tarea, completado, creado -
        TempTodo.id         = id; // De esta manera se crean las instancias como se establescan
        TempTodo.completado = completado; // Y esto permite recuperar los métodos 
        TempTodo.creado     = creado; // que se definierón en la clase.
        // Para que sean instancias del - todo - y no,  objetos se establece el - fromJson -
        // en - cargarLocalStorage() - en  - todo-list.class.js -.

        // Y con esto en vez de tener objetos ahora si se tienen instancias de cada uno de los - todos -.
        return TempTodo;
    }

    constructor( tarea ){ // Se recibe la descripción de lo que se quiere hacer en este caso - tarea -.

        this.tarea = tarea; // this.tarea va a ser igual al argumento - tarea -

        this.id         = new Date().getTime(); // El .getTime en este caso funciona como id.
        // Ocupamos el operador condicional terniario antes visto.
        // mediante la interpolación de string - ${ todo.completado } - 
        this.completado = false; // Es un booleano por lo que es perfecto.
        this.creado     = new Date();
    }


    // El - class Todo - tiene este método.
    
    imprimirClase() {
        console.log(`${ this.tarea } - ${ this.id }`);
    }

}



