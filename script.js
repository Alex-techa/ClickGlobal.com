// Script para cambiar entre pestañas
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("nav button");
    const tabContent = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all tab contents
            tabContent.forEach(tab => tab.classList.remove("active"));

            // Add active class to the selected tab
            const tabToShow = document.getElementById(this.dataset.tab);
            tabToShow.classList.add("active");
        });
    });
});

// Filtro de búsqueda de productos
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

// Registro e inicio de sesión interactivo
let userData = {};

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const profileUsername = document.getElementById("profileUsername");
const profileEmail = document.getElementById("profileEmail");

document.getElementById("register").addEventListener("click", function () {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
});

document.getElementById("registerButton").addEventListener("click", function () {
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;
    const email = document.getElementById("email").value;

    // Guardar datos de registro
    userData = { username: newUsername, password: newPassword, email: email };

    // Mostrar información en el perfil
    profileUsername.textContent = userData.username;
    profileEmail.textContent = userData.email;

    // Volver a la pantalla de inicio de sesión
    registerForm.style.display = "none";
    loginForm.style.display = "block";
});

document.getElementById("loginButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validación simple
    if (userData.username === username && userData.password === password) {
        profileUsername.textContent = userData.username;
        profileEmail.textContent = userData.email;
        alert("Inicio de sesión exitoso.");
    } else {
        alert("Nombre de usuario o contraseña incorrectos.");
    }
});
