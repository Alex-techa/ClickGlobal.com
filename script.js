/* Estilos globales */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f4f4;
    color: #333;
    line-height: 1.6;
}

/* Encabezado */
header {
    background-color: #2e7d32;
    color: white;
    padding: 1.5em;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}

header h1 {
    margin-bottom: 0.5em;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    display: inline-block;
    margin: 0 15px;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #a5d6a7;
}

/* Secciones */
section {
    padding: 60px 20px;
    background-color: #fff;
}

.section-container {
    max-width: 1200px;
    margin: auto;
}

section:nth-of-type(even) {
    background-color: #e8f5e9;
}

h2 {
    color: #2e7d32;
    margin-bottom: 20px;
    text-align: center;
}

p {
    margin-bottom: 20px;
    text-align: center;
}

/* Sección de Productos */
#productos .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

#product-viewer {
    width: 60%;
    min-width: 300px;
}

#product-viewer h3 {
    text-align: center;
    margin-bottom: 10px;
}

#canvas-container {
    width: 100%;
    height: 400px;
    background-color: #e8f5e9;
    border: 2px solid #81c784;
    border-radius: 10px;
}

#product-list {
    width: 35%;
    min-width: 250px;
    margin-top: 20px;
}

#product-list ul {
    list-style: none;
}

#product-list li {
    padding: 10px;
    margin-bottom: 10px;
    background-color: #a5d6a7;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
    color: #2e7d32;
    transition: background-color 0.3s ease;
}

#product-list li:hover {
    background-color: #66bb6a;
}

/* Formulario de Contacto */
form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto;
}

form label {
    margin-bottom: 5px;
    font-weight: bold;
}

form input, form textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

form button {
    padding: 10px;
    background-color: #2e7d32;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

form button:hover {
    background-color: #1b5e20;
}

/* Pie de Página */
footer {
    text-align: center;
    padding: 15px;
    background-color: #2e7d32;
    color: white;
    position: relative;
    bottom: 0;
    width: 100%;
}

/* Responsividad */
@media (max-width: 768px) {
    #productos .content {
        flex-direction: column;
        align-items: center;
    }

    #product-viewer, #product-list {
        width: 100%;
    }
}
