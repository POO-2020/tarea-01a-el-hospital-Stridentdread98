class Fecha{
constructor (dia, mes, año){
        this.fecha = new Date(año, mes -1, dia);
        this.diaSem= ["Sabado","Domingo", "Lunes", "Martes","Miercoles","Jueves","Viernes"];
        this.mes= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    }
    
    getFecha(){
            return(`${this.fecha.getDate()}/${this.fecha.getMonth()+1}/${this.fecha.getFullYear()}`);
    }

    getDiaFecha(){
        let dia = this.diaSem[this.fecha.getDay()+1];
        let numMes = this.mes[this.fecha.getMonth()];
            return(`El día ${dia}`);

    }

    /* Eso te cuenta exactamente los días
    (osea que 24 horas=1 día. Si faltan 4 días y 23 horas solo marcará 4 días)*/
    getDias(){
        let difMseg = Date.now() - this.fecha;
        let mSegAño= 1000 * 60 * 60 * 24;
        let dias = Math.trunc(difMseg/mSegAño*(-1)); 
        return dias;
    }

    getSemanas(){
        let difMseg = Date.now() - this.fecha;
        let mSegAño= 1000 * 60 * 60 * 24*7;
        let semanas = Math.trunc(difMseg/mSegAño*(-1)); 
        return semanas;
    }

    getMeses(){
        let difMseg = Date.now() - this.fecha;
        let mSegAño= 1000 * 60 * 60 * 24*7*4;
        let meses = Math.trunc(difMseg/mSegAño*(-1)); 
        return meses;
    }
    
    getAños(){
        let difMseg = Date.now() - this.fecha;
        let mSegAño= 1000 * 60 * 60 * 24 * 365;
        let años = Math.trunc(difMseg/mSegAño*(-1));
        return años;
    }
}

let fecha1= new Fecha(27,2,2021);

console.log(fecha1.getFecha());
console.log(fecha1.getDiaFecha());
console.log(fecha1.getDias());
console.log(fecha1.getSemanas());
console.log(fecha1.getMeses());
console.log(fecha1.getAños());