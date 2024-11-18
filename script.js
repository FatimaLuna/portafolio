document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contacto__formulario');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const mensaje = form.querySelector('textarea').value;

        if (nombre && email && mensaje) {
            alert(`Gracias, ${nombre}. Tu mensaje ha sido enviado.`);
            form.reset(); // Limpiar el formulario después de enviar
        } else {
            alert('Por favor, completa todos los campos antes de enviar.');
        }
    });
});
