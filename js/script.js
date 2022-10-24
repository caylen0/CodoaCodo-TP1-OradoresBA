//Defino el valor de los tickets

const precio_ticket = 200;
//Porcentaje de descuento

let descuento_estudiante = 0.80;
let descuento_trainee = 0.50;
let descuento_junior = 0.15;

//Creo variables para los botones
let boton_resumen = document.querySelector("#btn-resumen")
let boton_borrar = document.querySelector("#btn-borrar")


//Creo funcion para calcular el total a pagar

function total_pago(total_con_descuento,total_sin_descuento,descuento) {
    total_con_descuento = total_sin_descuento - (descuento * total_sin_descuento)
    return total_con_descuento
}

function total() {
    //Creo variables con los campos del html
    let cant_tickets = document.querySelector("#cantidad").value;

    let descuento = document.querySelector("#categoria_descuento").value

    let total_a_pagar = document.querySelector("#total_a_pagar")

    let total_sin_descuento = (cant_tickets) * precio_ticket;

    let total_con_descuento = 0;
    //Aplico descuento segun categoria
    let estudiante = "estudiante"
    let trainee = "trainee"
    let junior = "junior"

    switch (descuento == estudiante) {
        case descuento == estudiante:
            total_con_descuento = total_pago(total_con_descuento,total_sin_descuento,descuento_estudiante)
            total_a_pagar.innerHTML = "Total a pagar: $" + total_con_descuento
            break
        case descuento == trainee:
            total_con_descuento = total_pago(total_con_descuento,total_sin_descuento,descuento_trainee)
            total_a_pagar.innerHTML = "Total a pagar: $" + total_con_descuento
            break
        case descuento == junior:
            total_con_descuento = total_pago(total_con_descuento,total_sin_descuento,descuento_junior)
            total_a_pagar.innerHTML = "Total a pagar: $" +total_con_descuento
            break
    }
}

//Hago un reset del campo total a pagar
function borrar() {
    let total = document.querySelector("#total_a_pagar")
    total.innerHTML = "Total a pagar: $"
}
boton_resumen.addEventListener("click", total())
boton_borrar.addEventListener("click" , borrar())