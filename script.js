document.addEventListener("DOMContentLoaded", () => {

    const enlaces = document.querySelectorAll("nav a");

    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function (e) {
            const destino = this.getAttribute("href");

            if (destino.startsWith("#")) {
                e.preventDefault();

                const seccion = document.querySelector(destino);

                if (seccion) {
                    seccion.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    const botones = document.querySelectorAll(".boton");

    botones.forEach(boton => {
        boton.addEventListener("mouseenter", () => {
            boton.style.transition = "0.3s";
        });
    });

    const secciones = document.querySelectorAll("section");

    const observar = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.15
    });

    secciones.forEach(seccion => {
        observar.observe(seccion);
    });

});