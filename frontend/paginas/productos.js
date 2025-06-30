import { inicializarTema } from  "../src/switchTemas.js";

let botoneraNav = document.querySelectorAll(".boton-navegacion");
botoneraNav.forEach(btn => btn.style.visibility = "visible");

document.addEventListener("DOMContentLoaded", () => { 
    inicializarTema();
})