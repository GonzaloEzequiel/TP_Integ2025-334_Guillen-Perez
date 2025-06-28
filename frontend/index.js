import { inicializarTema } from  "./src/switchTemas.js";


document.addEventListener("DOMContentLoaded", () => { 
    inicializarTema();
});


const formCliente = document.getElementById("form-cliente");


formCliente.addEventListener("submit", event => {
    event.preventDefault();
    window.location.href = "./paginas/productos.html"
});