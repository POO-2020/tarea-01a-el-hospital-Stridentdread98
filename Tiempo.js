class Tiempo{
    constructor(hora, minutos){
        this.hora = hora;
        this.minutos = minutos;
        this.periodo = ["AM","PM"];
    }

getFormato24(){
    return (`${this.hora}:${this.minutos}`);
}

getFormato12(){
/**/ 
if (this.hora >=0 && this.hora < 12){

    return (`${this.hora}:${this.minutos} ${this.periodo[0]}`)
}

if (this.hora >= 12 && this.hora < 24){
    if (this.hora ==12){
    return (`${this.hora-11}:${this.minutos} ${this.periodo[1]}`);
    }
    if (this.hora > 12 && this.hora < 24){
    return (`${this.hora-12}:${this.minutos} ${this.periodo[1]}`);

}



}
 
}
}


/*
var hora1 = new Tiempo(6,20);
var hora2 = new Tiempo(15,45);
var hora3 = new Tiempo(12,45);

console.log(hora1.getFormato12());
console.log(hora2.getFormato12());
console.log(hora3.getFormato12());
console.log(hora3.getFormato24());
*/