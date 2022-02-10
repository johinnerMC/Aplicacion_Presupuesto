class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descricion, valor){
        super(descricion,valor);
        this._id = ++Ingreso.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}