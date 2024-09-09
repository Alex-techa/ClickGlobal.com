document.addEventListener("DOMContentLoaded", function() {
    const productList = document.querySelector('.product-list');

    const products = [
        { name: 'Maíz', description: 'Granos de maíz de alta calidad' },
        { name: 'Café', description: 'Café orgánico nicaragüense' },
        { name: 'Frijoles', description: 'Frijoles rojos seleccionados' },
        { name: 'Cacao', description: 'Cacao fino para chocolate' },
        { name: 'Aguacates', description: 'Aguacates frescos' },
        { name: 'Plátanos', description: 'Plátanos maduros y verdes' },
        { name: 'Mango', description: 'Mangos dulces y jugosos' },
        { name: 'Arroz', description: 'Arroz de primera calidad' },
        { name: 'Yuca', description: 'Yuca para el consumo' },
        { name: 'Leche', description: 'Leche fresca y pasteurizada' }
    ];

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button>Ver más</button>
        `;
        
        productList.appendChild(productDiv);
    });
});
