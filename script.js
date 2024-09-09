document.addEventListener("DOMContentLoaded", function() {
    // Ejemplo de interacción: agregar productos al carrito
    const cart = [];
    const buttons = document.querySelectorAll('.product-item button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.parentElement.querySelector('h3').textContent;
            cart.push(productName);
            alert(`Añadido al carrito: ${productName}`);
        });
    });
});
