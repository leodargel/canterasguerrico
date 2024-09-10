// Obtiene todos los botones de productos
const productButtons = document.querySelectorAll('.product-btn');

// Función para abrir el modal y agregar el contenido
productButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        if (modal) {
            // Muestra el modal
            modal.style.display = 'block';
        }
    });
});

// Cierra el modal cuando se hace clic en la "x" o fuera del modal
document.querySelectorAll('.modal .close').forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        const modal = closeButton.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
