//Defino el valor de los tickets

const precio_ticket = 200;
const boton = document.querySelector("#btn_resumen");
//Porcentaje de descuento

let descuento_estudiante = 0.80;
let descuento_trainee = 0.50;
let descuento_junior = 0.15;

//Creo variables necesarias

let cant_tickets = Number.parseInt(document.getElementById("cantidad_tickets").value);
console.log(cant_tickets)
let descuento = document.querySelector("#categoria_descuento")
let total_a_pagar = document.querySelector("#total_a_pagar")

//Creo funcion para calcular el total a pagar

function total_pago(total_con_descuento,total_sin_descuento,descuento) {
    total_con_descuento = total_sin_descuento - (descuento * total_sin_descuento)
    return total_con_descuento
}

function total() {

    let total_sin_descuento = (cantidad_tickets.value) * precio_ticket;

    let total_con_descuento = 0;

    //Aplico descuento segun categoria
    if (categoria_descuento.value == "estudiante") {
        total_con_descuento = total_pago(total_con_descuento,total_sin_descuento,descuento_estudiante)
    }
    
    if (categoria_descuento.value == "trainee") {
        total_con_descuento = total_pago(total_con_descuento,total_sin_descuento,descuento_trainee)
    }

    if (categoria_descuento.value == "junior") {
        total_con_descuento = total_pago(total_con_descuento,total_sin_descuento,descuento_junior)
    }
    return total_con_descuento
}

boton.onclick = () => {
    total_a_pagar.value = total_con_descuento
}