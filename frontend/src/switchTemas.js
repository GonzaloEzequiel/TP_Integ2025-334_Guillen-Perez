export function inicializarTema() {

    const indicador = document.getElementById("indicadorTema");
    let temaSwitch = document.getElementById("tema");

    const basepath = window.location.pathname.includes("paginas") ? "../recursos" : "./recursos";

    const temaGuardado = localStorage.getItem("tema");
    if (temaGuardado === "oscuro") {
        indicador.setAttribute("src", `${basepath}/temaClaro.png`);
        document.body.classList.add("tema-oscuro");
        temaSwitch.checked = true;
    } else {
        indicador.setAttribute("src", `${basepath}/temaOscuro.png`);
    }

    temaSwitch.addEventListener("change", () => {        

        if (temaSwitch.checked) {

            indicador.setAttribute("src", `${basepath}/temaClaro.png`);
            document.body.classList.add("tema-oscuro");
            localStorage.setItem("tema", "oscuro");

        } else {

            indicador.setAttribute("src", `${basepath}/temaOscuro.png`);
            document.body.classList.remove("tema-oscuro");
            localStorage.setItem("tema", "claro");

        }
    });

}