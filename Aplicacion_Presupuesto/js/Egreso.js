class Egreso extends Dato{
    static contadorEgresos = 0;

    constructor(descricion, valor){
        super(descricion,valor);
        this._id = ++Egreso.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}