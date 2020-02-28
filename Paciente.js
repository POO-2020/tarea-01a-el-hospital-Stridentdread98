import Fecha from "./Fecha.js";
export default class Paciente{


    constructor(nombre, apellidoPaterno, apellidoMaterno ,fechaNacimiento, telefono){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
    }

    getFormatoCorto(){
        return(`${this.fecha.getDate()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`);
}

    getPerfil(){
        return `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}, ${this.getFormatoCorto()}, ${this.telefono}`;
       /* return (`${this.fecha.getDate()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`); */
    }


    
}

const Paciente0 = new Paciente('armando','Lopez','Doriga',new Fecha(1,8,2000),'312-140-6987');

console.log(Paciente0.getPerfil());
