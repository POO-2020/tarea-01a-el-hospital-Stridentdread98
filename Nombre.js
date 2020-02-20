export default class nombre{

constructor(nombre, apellidoPaterno, apellidoMaterno){
this.nombre = nombre;
this.apellidoPaterno = apellidoPaterno;
this.apellidoMaterno = apellidoMaterno;
}

getNombreCompleto(){
    return `${this.nombre} , ${this.apellidoPaterno} , ${this.apellidoMaterno}`;
}

getApellidoNombre(){
    return `${this.apellidoPaterno} , ${this.apellidoMaterno}, ${this.nombre}`;
}

getInicialees(){

}



}

var nombre1 = new nombre("Barniel","Dinos","Aurio");

