import Nombre from "./Nombre.js";

class Doctor{

    consructor(nombre, especialidad, telefono, cedula){
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.cedula = cedula;
    }

getPerfil(){
return (`${this.cedula},${this.especialidad},${this.nombre.getNombreCompleto()},${this.telefono}`);
}

}

/*
var Doctor0 = new Doctor(new Nombre("Eldoc","Torazo","Simi"),"Traumatología", "312-313-2519","CedulaRandom");

console.log(Doctor0.getPerfil());
*/