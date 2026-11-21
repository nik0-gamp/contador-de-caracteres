
// Obtener los elementos del HTML
const texto = document.getElementById("texto");
const contador = document.getElementById("contador");

// Establecer el límite de caracteres
const limite = 250;

// Colocar el máximo de caracteres
texto.maxLength = limite;

// Evento para contar los caracteres
texto.addEventListener("input", function() {

    // Contar los caracteres escritos
    let caracteres = texto.value.length;

    // Actualizar el contador
    contador.textContent = caracteres + " / " + limite;

    // Verificar si llegó al límite
    if (caracteres === limite) {
        texto.classList.add("borde-rojo");
    } else {
        texto.classList.remove("borde-rojo");
    }

});
