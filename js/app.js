const ingresos = [
    new Ingreso('salario', 20000),
    new Ingreso('carro', 50000)
];

const egresos = [
    new Egreso('perdida', 600),
    new Egreso('full presdida', 2000)
];

let cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
    

}

let totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}
let totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor
    }
    return totalEgreso
}

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('Presupuesto').innerText = "$ " + formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerText = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerText = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerText = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('ES', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 2 });
}

const cargarIngresos = () => {
    let ingresosHTML = '';
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"
                onclick='eliminarIngreso(${ingreso.id})' ></ion-icon>
            </button>
        </div>
    </div>
</div>`;
return ingresoHTML;
}

const eliminarIngreso = (id) =>{
    let indeceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indeceEliminar,1);
    cargarCabecero();
    cargarIngresos();
} 

const cargarEgresos = () => {
    let egresosHTML = '';
    for (let egreso of egresos){
        egresosHTML += crearEgresosHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresosHTML = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name = 'close-circle-outline'
                onclick="eliminarEgreso(${egreso.id})" ></ion-icon>
            </button>
        </div>
    </div>
</div>`;
    return egresoHTML;
}

const eliminarEgreso = (id) => {
    let indeceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indeceEliminar,1);
    cargarCabecero();
    cargarEgresos();
}