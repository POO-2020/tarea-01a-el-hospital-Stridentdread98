import Cita from "Cita.js";
import Doctor from "Doctor.js";

export default class Hospital{

    constructor(nombre, direccion){
        nombre = nombre;
        direccion = direccion;
        doctores = new Array();
        citas = new Array();
    }


    registrarDoctor(){
        this.doctores.push(Doctor);
    }

    listarDoctores(){
        this.doctores.forEach((doctores,z)=> {
            console.log(`${z} ${doctores.getPerfil()}`);
        });
    }


    registrarCita(){
        this.citas.push(Cita);
    }

    listarCitas(){
        this.citas.forEach((citas,y)=> {
            console.log(`${y} ${citas.getCita()}`);
        });
    }


}