import Fecha from "./Fecha.js";
import Paciente from "./Paciente.js";
import Doctor from "./Doctor.js";
import Tiempo from "./Tiempo.js";

export default class Cita{


constructor(fecha, hora, doctor, paciente){

    this.fecha = fecha;
    this.hora = hora;
    this.doctor = doctor;
    this.paciente = paciente;

}

getCita(){
    return (`${this.fecha.getFormatoCorto()}, ${this.hora.getFormato24()}, DR.${this.doctor.getNombreCOmpleto()},${this.Paciente.getNombreCompleto()} `)
}

}

var Cita0 = new Cita(new Fecha(5,4,2020), new Tiempo(15,20), new Doctor("Elmer","Homero","Doc"), new Paciente("Elpior","Paciente","Delmundo"));

console.log(Cita0.getCita());