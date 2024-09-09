document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("nav button");
    const tabContent = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            tabContent.forEach(tab => tab.classList.remove("active"));
            const tabToShow = document.getElementById(this.dataset.tab);
            tabToShow.classList.add("active");
        });
    });
});

// Filtro de búsqueda
const searchInput = document.getElementById("search");
const productsList = document.getElementById("products").children;

searchInput.addEventListener("keyup", function () {
    const filter = this.value.toLowerCase();

    for (let product of productsList) {
        const productName = product.textContent.toLowerCase();

        if (productName.includes(filter)) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    }
});

// Función para inicializar visualizadores 3D por producto
function init3DViewer(productId, shape) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 300 / 300, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(300, 300);
    document.getElementById(`viewer-${productId}`).appendChild(renderer.domElement);

    let geometry;
    switch (shape) {
        case 'sphere': // Por ejemplo, para frijol
            geometry = new THREE.SphereGeometry(1, 32, 32);
            break;
        case 'box': // Por ejemplo, para arroz o maíz
            geometry = new THREE.BoxGeometry(1, 1, 1);
            break;
        case 'cylinder': // Para otros productos
            geometry = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 32);
            break;
        default:
            geometry = new THREE.BoxGeometry(1, 1, 1);
    }

    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const object = new THREE.Mesh(geometry, material);
    scene.add(object);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        object.rotation.x += 0.01;
        object.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

// Inicialización de visualizadores para cada producto
init3DViewer('arroz', 'box');
init3DViewer('frijol', 'sphere');
init3DViewer('maiz', 'box');
