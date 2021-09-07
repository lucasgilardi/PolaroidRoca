function validarFormContacto(){
    let ok = true;

    if(document.getElementById("fname").value == "" || document.getElementById("lname").value == "" || document.getElementById("email").value == "" || document.getElementById("tel").value == "" || document.getElementById("mes").value == ""){

        alert("Por favor complete todos los campos solicitados");
        ok = false;
    }else{
        mostrarMensajeEnviado();
        }
        return ok;
}

function mostrarMensajeEnviado(){
    $(`#divMensajeEnviado`).append($(`<div class="div-mensaje-enviado" id="sub-div-mensaje" style="display: none">
                                    <h6>¡Mensaje enviado!</h6>
                                    <p><b>¡Gracias por contactarte con nosotros!</b></p>
                                    <p>Te vamos a responder cuanto antes.</p>

                                    <button id="btn-aceptar">Aceptar</button>
                                    </div>`).fadeIn(200));

    $(`#btn-aceptar`).on("click", function(){
        $(`#sub-div-mensaje`).fadeOut(200, function(){
            $(`#sub-div-mensaje`).remove();
        });
    });
}

let formContacto = document.getElementById("formulario");
formContacto.addEventListener("submit", function(e){
    e.preventDefault();
    validarFormContacto();
    formContacto.reset();
});