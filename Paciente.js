import nombre from "./Nombre.js";
import tiempo from "./Tiempo";
class paciente{


    constructor(nombre, fechaNacimiento, telefono){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
    }


    getPerfil(){
        return `${this.nombre} , ${this.apellidoPaterno} , ${this.apellidoMaterno}`;
        return (`${this.fecha.getDate()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`);
    }

    
}

