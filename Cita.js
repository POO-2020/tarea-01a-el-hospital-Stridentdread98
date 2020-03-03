class Cita(){

constructor(Fecha,Hora, Doctor, Paciente){

    this.fecha = fecha;
    this.hora = hora;
    this.doctor = doctor;
    this.paciente = paciente;

}

getCita(){
return `${this.fecha}`


}


}