document.addEventListener('DOMContentLoaded', () => {
    const profileSection = document.getElementById('profile-section');
    const catalogSection = document.getElementById('catalog-section');
    const optionsSection = document.getElementById('options-section');
    const termsSection = document.getElementById('terms-section');
    const catalogContainer = document.getElementById('catalog-container');
    const themeSwitch = document.getElementById('theme-switch');
    
    document.getElementById('menu-profile').addEventListener('click', () => {
        showSection(profileSection);
    });

    document.getElementById('menu-catalog').addEventListener('click', () => {
        showSection(catalogSection);
        loadCatalog();
    });

    document.getElementById('menu-options').addEventListener('click', () => {
        showSection(optionsSection);
    });

    document.getElementById('menu-terms').addEventListener('click', () => {
        showSection(termsSection);
    });

    themeSwitch.addEventListener('change', (event) => {
        document.body.style.backgroundColor = event.target.value === 'dark' ? '#333' : '#f5f5f5';
        document.body.style.color = event.target.value === 'dark' ? '#fff' : '#333';
    });

    function showSection(section) {
        document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
        section.style.display = 'block';
    }

    function loadCatalog() {
        catalogContainer.innerHTML = ''; // Clear previous items

        for (let i = 1; i <= 10; i++) {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>Producto ${i}</h3>
                <div class="product-canvas" id="product-${i}"></div>
                <p>Descripción del producto ${i}</p>
                <button>Comprar</button>
            `;
            catalogContainer.appendChild(productDiv);
            initialize3DView(`product-${i}`);
        }
    }

    function initialize3DView(containerId) {
        const container = document.getElementById(containerId);
        const width = container.clientWidth;
        const height = container.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        const controls = new THREE.OrbitControls(camera, renderer.domElement);
        camera.position.z = 5;

        // Create a simple 3D object
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const animate = function () {
            requestAnimationFrame(animate);

            // Rotation animation
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();
    }
});
