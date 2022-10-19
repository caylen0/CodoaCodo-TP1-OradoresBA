//Defino el valor de los tickets

const precio_ticket = 200;

//Porcentaje de descuento

let descuento_estudiante = 80;
let descuento_trainee = 50;
let descuento_junior = 15;

//Creo variables necesarias

let cant_tickets = document.getElementById("cantidad_tickets")
let descuento = document.getElementById("tipo_descuento")
let total_a_pagar = document.getElementById("total_a_pagar")

//Creo funcion para calcular el total a pagar

function total() {

    let total_sin_descuento = (cantidad_tickets.value) * precio_ticket;

    let total_con_descuento = 0;

    //Aplico descuento segun categoria
    if (tipo_descuento.value == "estudiante") {
        total_con_descuento = total_sin_descuento - (descuento_estudiante * total_sin_descuento / 100)
    }
    
    if (tipo_descuento.value == "trainee") {
        total_con_descuento = total_sin_descuento - (descuento_trainee * total_sin_descuento / 100)
    }

    if (tipo_descuento.value == "junior") {
        total_con_descuento = total_sin_descuento - (descuento_junior * total_sin_descuento / 100)
    }
}

function mostrar_total () {
    total_a_pagar.innerHTML = total_con_descuento
}
