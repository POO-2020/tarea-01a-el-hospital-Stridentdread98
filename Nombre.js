class nombre{

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
    return ` ${this.nombre.slice(0,1)}${this.apellidoMaterno.slice(0,1)}${this.apellidoPaterno.slice(0,1)}`;    
    /*this.nombre.slice(0, -1);*/
    /*
String.prototype.subst();
String.prototype.slice(1);
*/

}}

let nombre1 = new nombre("Barniel","Dinos","Aurio");
let nombre2 = new nombre("Pedro","Elpicap","Iedras");
/* Cómoobtener la primera letra 
let name = "Pepe"
let inicial = name.slice(0,1);
console.log(inicial);
*/

console.log(nombre1.getNombreCompleto());
console.log(nombre1.getApellidoNombre());
console.log(nombre1.getIniciales());