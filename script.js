document.getElementById("form-contacto").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const motivo = document.getElementById("motivo").value;

    if (nombre && email && motivo) {
        alert("Formulario enviado correctamente. ¡Gracias por tu mensaje!");
        // Aquí puedes agregar un código para enviar los datos a un servidor o manejar el formulario
    } else {
        alert("Por favor, completa todos los campos del formulario.");
    }
});
