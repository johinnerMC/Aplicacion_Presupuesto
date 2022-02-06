const ingresos = [
    new Ingreso('salario',20000),
    new Ingreso('carro',50000)
    ];

const egresos = [
    new Egreso('perdida', 500),
    new Egreso('full presdida',2000)
];

let cargarApp = () =>{
    cargarCabecero();
}

let totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}
let totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos){
        totalEgreso += egreso.valor
    }
    return totalEgreso
}

let cargarCabecero =  () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('Presupuesto').innerText = "$ " + formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerText = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerText = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerText = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor) =>{
   return valor.toLocaleString('ES',{style:'currency', currency:'COP',minimumFractionDigits:0}); 
}

const formatoPorcentaje = (valor) =>{
return valor.toLocaleString('en-US', {style: 'percent',minimumFractionDigits:2});
}
    