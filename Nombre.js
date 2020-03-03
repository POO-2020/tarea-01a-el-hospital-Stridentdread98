class Nombre{

constructor(nombre, apellidoPaterno, apellidoMaterno){
this.nombre = nombre;
this.apellidoPaterno = apellidoPaterno;
this.apellidoMaterno = apellidoMaterno;
}

getNombreCompleto(){
    return `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;
}

getApellidoNombre(){
    return `${this.apellidoPaterno} ${this.apellidoMaterno} ${this.nombre}`;
}

getIniciales(){
    return ` ${this.nombre.slice(0,1)}${this.apellidoPaterno.slice(0,1)}${this.apellidoMaterno.slice(0,1)}`;    
}}

var nombre1 = new Nombre("Barniel","Dinos","Aurio");
var nombre2 = new Nombre("Pedro","Elpicap","Iedras");
/* Cómo obtener la primera letra 
let name = "Pepe"
let inicial = name.slice(0,1);
console.log(inicial);
*/

console.log(nombre1.getNombreCompleto());
console.log(nombre1.getApellidoNombre());
console.log(nombre1.getIniciales());