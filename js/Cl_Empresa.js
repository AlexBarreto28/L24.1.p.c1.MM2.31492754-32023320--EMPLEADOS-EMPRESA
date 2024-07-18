export default class Cl_Empresa{
    constructor(){
      this.acumEdadH=0;
      this.acumEdadM=0;
      this.mayor=0;
      this.auxNombre="";
      this.contHombre=0;
    }

    procesarEmpleado(e){

        if(e.sexo=="M"){
            this.contHombre++;
        }

    if(e.sexo=="M"){
        this.acumEdadH=this.acumEdadH+e.edad;
    }
    if(e.sexo=="F" && e.edad>this.mayor){
        this.mayor=e.edad;
        this.auxNombre=e.nombre;
    }
}

devolverNombre(){
    return this.auxNombre;
}

devolverEdad(){
    return this.mayor;
}

PromedioEdadHombre(){
    return this.acumEdadH/this.contHombre
}}
