// Interactividad básica para validar y enviar el formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Gracias, ' + name + '. Tu mensaje ha sido enviado.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, rellena todos los campos.');
    }
});
