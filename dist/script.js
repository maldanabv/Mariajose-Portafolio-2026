document.addEventListener('DOMContentLoaded', () => {
    const contactForms = document.querySelectorAll('.contact-form');

    contactForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Capturar los datos del formulario
            const nombre = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const mensaje = form.querySelector('textarea').value;
            const fecha = new Date().toLocaleString();

            // Crear el contenido del archivo de texto
            const contenido = `Nueva Solicitud de Contacto\n` +
                              `--------------------------\n` +
                              `Fecha: ${fecha}\n` +
                              `Nombre: ${nombre}\n` +
                              `Email: ${email}\n` +
                              `Mensaje: ${mensaje}\n` +
                              `--------------------------\n`;

            // Crear un "Blob" (archivo en memoria)
            const blob = new Blob([contenido], { type: 'text/plain' });
            
            // Crear un enlace temporal para la descarga
            const enlace = document.createElement('a');
            enlace.download = `contacto_${nombre.replace(/\s+/g, '_')}.txt`;
            enlace.href = window.URL.createObjectURL(blob);
            
            // Simular clic para descargar
            document.body.appendChild(enlace);
            enlace.click();
            document.body.removeChild(enlace);

            alert('¡Gracias! Tu mensaje ha sido procesado y se ha generado un archivo de registro.');
            form.reset();
        });
    });
});
