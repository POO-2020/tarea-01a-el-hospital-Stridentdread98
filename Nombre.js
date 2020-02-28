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

getInicialees(){

}}

let nombre1 = new nombre("Barniel","Dinos","Aurio");

console.log(nombre1.getNombreCompleto());
console.log(nombre1.getApellidoNombre());