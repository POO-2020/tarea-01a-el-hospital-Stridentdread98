class fecha{
constructor (dia, mes, año){
        this.fecha = new Date(año, mes -1, dia);
        this.diaSem= ["Sabado","Domingo", "Lunes", "Martes","Miercoles","Jueves","Viernes"];
        this.mes= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    }
    
    getFormatoCorto(){
            return(`${this.fecha.getDate()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`);
    }
    getFormatoExtendido(){
        let dia= this.diaSem[this.fecha.getDay()];
        let numMes= this.mes[this.fecha.getMonth()];
        return(`${dia} ${this.fecha.getDate()} de ${numMes} del ${this.fecha.getFullYear()}`);
    }
    getEdad(){
        let difMseg = Date.now() - this.fecha;
        let mSegAño= 1000 * 60 * 60 * 24 * 365;
        let edad = Math.trunc(difMseg/mSegAño);
        return edad;
    }
}
/*
let fecha1= new FechaNacimiento(7,2,2020);
console.log(fecha1.getFormatoExtendido());
console.log(fecha1.getFormatoCorto());
console.log(fecha1.getEdad());
*/