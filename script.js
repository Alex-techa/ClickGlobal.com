document.addEventListener('DOMContentLoaded', function () {
    // Manejo de pestañas
    const tabs = document.querySelectorAll('nav button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const targetTab = this.getAttribute('data-tab');
            
            tabContents.forEach(content => {
                if (content.id === targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
    
    // Manejo de formularios
    const loginForm = document.getElementById('login-form');
    const registroForm = document.getElementById('registro-form');
    
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Aquí puedes manejar el inicio de sesión, por ahora solo simula la funcionalidad
        alert('Inicio de sesión exitoso.');
    });
    
    registroForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre-registro').value;
        const email = document.getElementById('email-registro').value;
        
        // Aquí puedes manejar el registro, por ahora solo simula la funcionalidad
        alert('Registro exitoso.');
        
        // Actualiza el perfil
        document.getElementById('nombre-perfil').textContent = nombre;
        document.getElementById('email-perfil').textContent = email;
        
        // Cambia a la pestaña de perfil
        document.querySelector('button[data-tab="perfil"]').click();
    });
    
    // Inicialización de visualizadores 3D
    function init3DViewer(containerId, modelUrl) {
        const container = document.getElementById(containerId);
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
        
        const loader = new THREE.GLTFLoader();
        loader.load(modelUrl, function (gltf) {
            scene.add(gltf.scene);
            gltf.scene.scale.set(0.5, 0.5, 0.5); // Ajusta el tamaño del modelo si es necesario
        }, undefined, function (error) {
            console.error(error);
        });
        
        camera.position.z = 5;
        
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();
    }
    
    // Inicia los visualizadores 3D con modelos específicos
    init3DViewer('viewer-arroz', 'GLB/Strawberry_gltf.gltf');
    init3DViewer('viewer-frijol', 'path/to/frijol-model.glb');
    init3DViewer('viewer-maiz', 'path/to/maiz-model.glb');
});
