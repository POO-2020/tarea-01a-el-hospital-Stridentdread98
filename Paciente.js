import Nombre from "./Nombre.js";
import Fecha from "Fecha.js";
export default class Paciente{

    constructor(nombre, fechaNacimiento, telefono){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
    }

    getPerfil(){
        return (`${this.nombre.getNombreCompleto()},${this.fechaNacimiento.getFecha()},${this.telefono}`);
    }
}

/*
var Paciente0 = new Paciente(new Nombre("armando","Lopez","Doriga"),new Fecha(1,8,2000),"312-140-6987");

console.log(Paciente0.getPerfil());
*/