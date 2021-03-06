$(document).ready(function(){
    document.formulario.costoNeto.value="$ 0.-";
    document.formulario.costoTotal.value="$ 0.-";
    //Validación del formulario
    $("#formulario").validate({
        //Asignación de formatos de entrada válida y errónea
        errorClass: "error fail-alert",
        validClass: "valid success-alert",
        submitHandler: function(form) {
            // Almacenamiento de los valores del formulario
            let valorNombre = $("#nombre").val();
            let valorApellido = $("#apellido").val();
            let valorRut = $("#rut").val();
            let valorDV = $("#dv").val();
            let valorDireccion = $("#direccion").val();
            let valorComuna = $("#comuna").val();
            let valorTipoVehiculo = $("#tipoVehiculo").val();
            let valorMarca = $("#marca").val();
            let valorModelo = $("#modelo").val();
            let valorAño = $("#año").val();
            let valorRT = $("#revTec").val();
            let valorTrabajador = $("#personal").val();
            let valorFecha = $("#fecha").val();
            let valorHora = $("#hora").val();
            let valorCostoNeto = $("#costoNeto").val();
            let valorCostoTotal = $("#costoTotal").val();
            // Asignación de valor de variable para el lavado exterior (SI o NO)
            let valorNeto = 0;
            let valorLavadoExt ="";
            if ($("#lavadoExterior").is(":checked")) {
                valorLavadoExt = "SI";
                valorNeto += 7000;
            } else {
                valorLavadoExt = "NO";
            }
            // Asignación de valor de variable para el lavado de motor (SI o NO)
            let valorLavadoMot = "";
            if ($("#lavadoMotor").is(":checked")) {
                valorLavadoMot = "SI";
                valorNeto += 5000;
            } else {
                valorLavadoMot = "NO";
            }
            // Calculo de impuestos y total a pagar
            let impuesto = valorNeto * 0.19;
            let totalPagar = valorNeto + impuesto;
            // Mensaje por pantalla
            let mensaje = `Resumen:\nNombre: ${valorNombre} ${valorApellido}\nValor Neto Servicio: $${valorNeto}\nIVA: $${impuesto}\nTotal a Pagar: $${totalPagar}`;
            if (confirm(mensaje)) {
                //Reseteo de los campos del formulario
                form.reset();
            }
        },
        rules: {
            nombre: {
                //Obligatorio, solo letras, mínimo 3 caracteres, máximo 30 caracteres
                required: true,
                pattern: "[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]{1,48}",
                minlength: 3,
                maxlength: 30
            },
            apellido: {
                //Obligatorio, solo letras, mínimo 3 caracteres, máximo 30 caracteres
                required: true,
                pattern: "[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]{1,48}",
                minlength: 3,
                maxlength: 30
            },
            rut: {
                //Obligatorio, 8 dígitos
                required: true,
                pattern: "[0-9]{1,8}",
                minlength:7,
                maxlength:8,
            },
            /*digito verificador 0-9 ademas de letras k K*/
            dv:{
                required:true,
                pattern:"[kK0-9]{1,1}",
                maxlength:1,
            },
            direccion: {
                //Obligatiorio, solo letras, números o espacios, mínimo 3 caracteres, máximo 80 caracteres
                required: true,
                pattern: "^[\.a-zA-Z0-9 ]*$",
                minlength: 3,
                maxlength: 80,
            },
            comuna: {
                //Obligatorio
                required: true,
                pattern:"[a-zA-Z]{1,20}"
            },
            tipoVehiculo: {
                //Obligatorio
                required: true,
                pattern: "[a-zA-Z]{1,48}",
            },
            marca: {
                //Obligatorio, solo letras, mínimo 3 caracteres, máximo 20 caracteres
                required: true,
                pattern: "[a-zA-Z]{1,48}",
                minlength: 3,
                maxlength: 20,
            },
            modelo: {
                //Obligatorio, solo letras, mínimo 3 caracteres, máximo 20 caracteres
                required: true,
                pattern: "[a-zA-Z]{1,48}",
                minlength: 3,
                maxlength: 20,
            },
            año: {
                //Obligatorio, solo números, restringido a 4 caracteres
                required: true,
                number: true,
                minlength: 4,
                maxlength: 4,
            },
            revisionTec: {
                //Obligatorio
                required: true,
            },
            lavado: {
                //Obligatorio, mínimo 1 opción seleccionada (checkboxes para elegir tipo de lavado)
                required: true,
            },
            personal: {
                //Obligatorio
                required: true,
                pattern: "[a-zA-Z]{1,48}",
            },
            fecha: {
                //Obligatorio
                required: true,
            },
            hora: {
                //Obligatorio
                required: true,
            }
        },
        messages: {
            //Definición de mensajes de error personalizados, dependiendo de los requisitos previamente establecidos
            nombre: {
                required: "Este campo es obligatorio",
                pattern: "El campo solo puede contener letras",
                minlength: "Este campo debe tener al menos 3 caracteres",
                maxlength: "Este campo admite máximo 30 caracteres",
            },
            apellido: {
                required: "Este campo es obligatorio",
                pattern: "Este campo solo puede contener letras",
                minlength: "Este campo debe tener al menos 3 caracteres",
                maxlength: "Este campo admite máximo 30 caracteres",
            },
            rut: {
                required: "Este campo es obligatorio",
                pattern: "Formato de RUT incorrecto",
                minlength: "Rut no válido",
                maxlength: "Rut no válido",
            },
            dv:{
                required: "Este campo es obligatorio",
                pattern: "No es un verificador válido",
                minlength: "Wste campo debe contener 1 dígito",
            },
            direccion: {
                required: "Este campo es obligatorio",
                pattern: "Este campo solo puede contener letras, espacios y números",
                minlength: "Este campo debe tener al menos 3 caracteres",
                maxlength: "Este campo admite máximo 80 caracteres",
            },
            comuna: {
                required: "Este campo es obligatorio",
                pattern: "Debe seleccionar una opción",
            },
            tipoVehiculo: {
                required: "Este campo es obligatorio",
                pattern: "Debe seleccionar una opción",
            },
            marca: {
                required: "Este campo es obligatorio",
                pattern: "Este campo solo puede contener letras",
                minlength: "Este campo debe tener al menos 3 caracteres",
                maxlength: "Este campo admite máximo 20 caracteres",
            },
            modelo: {
                required: "Este campo es obligatorio",
                pattern: "Este campo solo puede contener letras",
                minlength: "Este campo debe tener al menos 3 caracteres",
                maxlength: "Este campo admite máximo 20 caracteres",
            },
            año: {
                required: "Este campo es obligatorio",
                number: "Solo se admiten valores numéricos",
                minlength: "Este campo debe tener 4 caracteres",
                maxlength: "Este campo debe tener 4 caracteres",
            },
            revisionTec: {
                required: "Este campo es obligatorio",
            },
            lavado: {
                required: "Debe seleccionar al menos una opción",
            },
            personal: {
                required: "Este campo es obligatorio",
                pattern: "Debe seleccionar una opción",
            },
            fecha: {
                required: "Este campo es obligatorio",
            },
            hora: {
                required: "Este campo es obligatorio",
            }
        },
    });
});
function costo(){

    if ($("#lavadoExterior").is(":checked") && $("#lavadoMotor").is(":checked") ) {
        document.formulario.costoNeto.value="$ 12.000.-"
        document.formulario.costoTotal.value="$ 14.280.-"
    }
    else if 
        ($("#lavadoExterior").is(":checked")){
        document.formulario.costoNeto.value="$ 7.000.-"
        document.formulario.costoTotal.value="$ 8.330.-"
    }
    else if
        ($("#lavadoMotor").is(":checked")){
        document.formulario.costoNeto.value="$ 5.000.-"
        document.formulario.costoTotal.value="$ 5.950.-"
    }
    else{ 
        document.formulario.costoNeto.value="$ 0.-"
        document.formulario.costoTotal.value="$ 0.-"
    }
}