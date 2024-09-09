// Configuración del Visualizador 3D usando Three.js
let scene, camera, renderer, currentProduct;

function init() {
    const canvasContainer = document.getElementById('canvas-container');

    // Crear escena
    scene = new THREE.Scene();

    // Crear cámara
    camera = new THREE.PerspectiveCamera(75, canvasContainer.clientWidth / 400, 0.1, 1000);
    camera.position.z = 5;

    // Crear renderizador
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(canvasContainer.clientWidth, 400);
    canvasContainer.appendChild(renderer.domElement);

    // Añadir luz
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // Cargar el primer producto por defecto
    loadProduct('arroz');

    animate();
}

function animate() {
    requestAnimationFrame(animate);

    // Rotar el objeto 3D
    if (currentProduct) {
        currentProduct.rotation.x += 0.01;
        currentProduct.rotation.y += 0.01;
    }

    renderer.render(scene, camera);
}

function loadProduct(product) {
    // Limpiar la escena
    while (scene.children.length > 1) { // Mantener la luz
        scene.remove(scene.children[scene.children.length - 1]);
    }

    // Definir colores para cada producto (solo como ejemplo)
    const colors = {
        arroz: 0xFFFFFF,
        frijol: 0x8B4513,
        maiz: 0xFFD700,
        queso: 0xFFFFE0,
        cacao: 0x4B0082,
        leche: 0xFFFFFF,
        miel: 0xFFB300,
        cafe: 0x6F4E37,
        yuca: 0xDEB887,
        platano: 0xFFFF00
    };

    // Crear geometría y material basado en el producto
    let geometry;
    switch(product) {
        case 'arroz':
            geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
            break;
        case 'frijol':
            geometry = new THREE.DodecahedronGeometry(1);
            break;
        case 'maiz':
            geometry = new THREE.ConeGeometry(1, 2, 32);
            break;
        case 'queso':
            geometry = new THREE.BoxGeometry(1.5, 1, 1);
            break;
        case 'cacao':
            geometry = new THREE.IcosahedronGeometry(1);
            break;
        case 'leche':
            geometry = new THREE.SphereGeometry(1, 32, 32);
            break;
        case 'miel':
            geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
            break;
        case 'cafe':
            geometry = new THREE.OctahedronGeometry(1);
            break;
        case 'yuca':
            geometry = new THREE.CylinderGeometry(0.8, 0.8, 2.5, 32);
            break;
        case 'platano':
            geometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
            break;
        default:
            geometry = new THREE.BoxGeometry();
    }

    const material = new THREE.MeshStandardMaterial({ color: colors[product] || 0x4caf50 });
    currentProduct = new THREE.Mesh(geometry, material);
    scene.add(currentProduct);
}

// Inicializar visualizador 3D al cargar la página
window.onload = init;

// Manejar clics en la lista de productos
document.getElementById('products').addEventListener('click', function(e) {
    const product = e.target.dataset.product;
    if (product) {
        loadProduct(product);
    }
});
