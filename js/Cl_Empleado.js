export default class Cl_Empleado{

    constructor(n,s,e){
        this.nombre=n,
        this.sexo=s;
        this.edad=+e
    }

    set nombre(n){
        this._nombre=n;
    }
    
    set sexo(s){
        this._sexo=s;
    }
    set edad(e){
        this._edad=+e;
    }
    
    get nombre(){
        return this._nombre;
    }
    
    get sexo(){
        return this._sexo;
    }
    
    get edad(){
        return this._edad;
    }
}