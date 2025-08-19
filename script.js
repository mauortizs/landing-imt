/////////// SECCIÓN 6: Talleres pasados IMT ///////////

document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.querySelector('.carrusel-talleres-imt-container');
    const items = document.querySelectorAll('.carrusel-talleres-imt-item');
    const itemWidth = items[0].offsetWidth + 16; // incluye el gap entre ítems

    // Crear contenedor de flechas
    const wrapper = document.createElement('div');
    wrapper.classList.add('carrusel-flechas-imt');
    carrusel.parentNode.insertBefore(wrapper, carrusel);
    wrapper.appendChild(carrusel);

    // Flechas
    const btnIzq = document.createElement('button');
    btnIzq.className = 'carrusel-flecha-imt izquierda';
    btnIzq.innerHTML = '&#10094;'; // ←

    const btnDer = document.createElement('button');
    btnDer.className = 'carrusel-flecha-imt derecha';
    btnDer.innerHTML = '&#10095;'; // →

    wrapper.appendChild(btnIzq);
    wrapper.appendChild(btnDer);

    btnIzq.addEventListener('click', () => {
        carrusel.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    });

    btnDer.addEventListener('click', () => {
        carrusel.scrollBy({ left: itemWidth, behavior: 'smooth' });
    });

    // Indicadores (puntos)
    const indicadorContainer = document.createElement('div');
    indicadorContainer.className = 'carrusel-indicadores-imt';
    wrapper.appendChild(indicadorContainer);

const calcularPaginas = () => {
    return items.length;
};

    let totalPaginas = calcularPaginas();

    const crearIndicadores = () => {
        indicadorContainer.innerHTML = "";
        for (let i = 0; i < totalPaginas; i++) {
            const punto = document.createElement("div");
            punto.classList.add("carrusel-indicador-imt");
            if (i === 0) punto.classList.add("activo");
            indicadorContainer.appendChild(punto);
        }
    };

    crearIndicadores();

    window.addEventListener("resize", () => {
        totalPaginas = calcularPaginas();
        crearIndicadores();
    });

    const actualizarIndicadores = () => {
        const scrollLeft = carrusel.scrollLeft;
        const paginaActual = Math.round(scrollLeft / carrusel.clientWidth);
        const puntos = indicadorContainer.querySelectorAll('.carrusel-indicador-imt');
        puntos.forEach((p, i) => {
            p.classList.toggle('activo', i === paginaActual);
        });
    };

    carrusel.addEventListener('scroll', actualizarIndicadores);
});

// Animaciones sección 1 IMT
document.addEventListener("DOMContentLoaded", () => {
    const animacionesIMT = document.querySelectorAll('.animar-arriba-imt, .animar-izquierda-imt, .animar-derecha-imt, .animar-abajo-imt');

    const observerIMT = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting && entrada.intersectionRatio >= 0.5) {
                entrada.target.classList.add('mostrar-imt');
            }
        });
    }, {
        threshold: 0.5
    });

    animacionesIMT.forEach(el => observerIMT.observe(el));
});