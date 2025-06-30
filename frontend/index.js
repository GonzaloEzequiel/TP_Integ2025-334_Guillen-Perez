import { inicializarTema } from  "./src/switchTemas.js";

document.addEventListener("DOMContentLoaded", () => { 
    inicializarTema();
});

const formCliente = document.getElementById("form-cliente");
formCliente.addEventListener("submit", event => {
    event.preventDefault();
    window.location.href = "./paginas/productos.html"
    sessionStorage.setItem("user", document.getElementById("nombre-cliente").value.trim());
});

const formAdmin = document.getElementById("form-admin");
formAdmin.addEventListener("submit", async event => {
   
    event.preventDefault();

    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());
    try {

        let response = await fetch("http://localhost:3000/admin/login", {

            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)

        })

        if(response.status === 404) {
            alert("Credenciales incorrectas")
        }

        if(response.status === 200) {

            let resultado = await response.json();
            sessionStorage.setItem("user", resultado.admin);
            window.location.href = "./paginas/dashboard.html"

        }
    
    } catch(error) {

        console.log(error);

    }
});