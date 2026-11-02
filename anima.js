// ===== INFORMACIÓN DE LOS DIRECTORES DEL ITACE =====

const directores = [
    {
        nombre: "Profr. Arturo Lerma Anaya",
        cargo: "Director General",
        imagen: "imagen/lerma anaya.png",
        descripcion: "Fue un destacado maestro, educador y gestor tamaulipeco",
        detalles: [
            "Periodo de gestión: 1984 - 1997.",
            "Reconocido principalmente como el fundador",
            "Primer director general del Instituto Tamaulipeco de Capacitación para el Empleo (ITACE)."
        ]
    },
    {
        nombre: "Profr. Roberto Alanís Hernández",
        cargo: "Director General",
        imagen: "imagen/Profr.Roberto Alanis Hernandez.jpg",
        descripcion: "Primer diirector Académico del sistema ITACE Matamoros.",
        detalles: [
            "Periodo de gestión: 1997 - 1999.",
            "Director General del sistema"
        ]

    },
    {
        nombre: "Ing. Guillermo Barthel Cisneros",
        cargo: "Director General",
        imagen: "maestros/sin foto.jpg",
        descripcion: "Dirigió la institución durante el periodo de 1999 a 2001.",
        detalles: [
            "Periodo de gestión: 1999 - 2001."
        ]
    },
    {
        nombre: "Vicealmirante Rafael A. Irigoyen González",
        cargo: "Director General",
        imagen: "maestros/sin foto.jpg",
        descripcion: "Estuvo al frente de la institución durante el periodo de 2001 a 2004.",
        detalles: [
            "Periodo de gestión: 2001 - 2004."
        ]
    },
    {
        nombre: "Lic. Santos Lozano Cedillo",
        cargo: "Director General",
        imagen: "maestros/sin foto.jpg",
        descripcion: "Su periodo al frente del ITACE comprendió de 2005 a 2011.",
        detalles: [
            "Periodo de gestión: 2005 - 2011."
        ]
    },
    {
        nombre: "Lic. Federico Manautou Villarreal",
        cargo: "Director General",
        imagen: "maestros/sin foto.jpg",
        descripcion: "Dirigió la institución durante el periodo comprendido entre 2011 y 2016.",
        detalles: [
            "Periodo de gestión: 2011 - 2016."
        ]
    },
    {
        nombre: "Lic. Luis Fernando Campos Martínez",
        cargo: "Director General",
        imagen: "maestros/sin foto.jpg",
        descripcion: "Estuvo al frente del ITACE entre 2016 y 2020.",
        detalles: [
            "Periodo de gestión: 2016 - 2020."
        ]
    },
    {
        nombre: "Mtro. Óscar Jesús Ballesteros González",
        cargo: "Director General",
        imagen: "maestros/sin foto.jpg ",
        descripcion: "Dirigió la institución durante el periodo de 2020 a 2022.",
        detalles: [
            "Periodo de gestión: 2020 - 2022."
        ]
    },
    {
        nombre: "Dra. Claudia Anaya Alvarado",
        cargo: "Directora General ",
        imagen: "imagen/claudia.jpg",
        descripcion: "Es la directora correspondiente al periodo iniciado en 2022.",
        detalles: [
            "Periodo de gestión: 2022 - a la fecha."
        ]
    }
];


// ===== ELEMENTOS DEL CARRUSEL =====

const imagenDirector = document.getElementById("imagen-persona");
const nombreDirector = document.getElementById("nombre-persona");
const cargoDirector = document.getElementById("cargo-persona");
const descripcionDirector = document.getElementById("descripcion-persona");
const detallesDirector = document.getElementById("detalles-persona");
const contadorDirector = document.getElementById("contador-personaje");

const botonAnterior = document.getElementById("persona-anterior");
const botonSiguiente = document.getElementById("personaje-siguiente");

let indiceDirector = 0;


// ===== MOSTRAR DIRECTOR =====

function mostrarDirector(indice) {
    if (!imagenDirector || !nombreDirector || !cargoDirector ||
        !descripcionDirector || !detallesDirector || !contadorDirector) {
        return;
    }

    indiceDirector = (indice + directores.length) % directores.length;

    const director = directores[indiceDirector];

    imagenDirector.src = director.imagen;
    imagenDirector.alt = director.nombre;

    nombreDirector.textContent = director.nombre;
    cargoDirector.textContent = director.cargo;
    descripcionDirector.textContent = director.descripcion;

    // Mostrar los detalles del director
    detallesDirector.replaceChildren();

    director.detalles.forEach(detalle => {
        const elemento = document.createElement("li");
        elemento.textContent = detalle;
        detallesDirector.appendChild(elemento);
    });

    // Actualizar el contador
    contadorDirector.textContent =
        `${String(indiceDirector + 1).padStart(2, "0")} / ${String(directores.length).padStart(2, "0")}`;
}


// ===== BOTONES DE NAVEGACIÓN =====

if (botonAnterior) {
    botonAnterior.addEventListener("click", () => {
        mostrarDirector(indiceDirector - 1);
    });
}

if (botonSiguiente) {
    botonSiguiente.addEventListener("click", () => {
        mostrarDirector(indiceDirector + 1);
    });
}


// ===== MOSTRAR EL PRIMER DIRECTOR =====

mostrarDirector(0);


// ===== BOTÓN DE LA LÍNEA DEL TIEMPO =====

const botonHistoria = document.getElementById("boton-historia");
const contenidoHistoria = document.getElementById("historia-contenido");
const textoBotonHistoria = document.getElementById("texto-boton-historia");
const flechaHistoria = document.getElementById("flecha-historia");

if (botonHistoria && contenidoHistoria) {
    botonHistoria.addEventListener("click", () => {
        const estaAbierto =
            botonHistoria.getAttribute("aria-expanded") === "true";

        contenidoHistoria.hidden = estaAbierto;

        botonHistoria.setAttribute(
            "aria-expanded",
            String(!estaAbierto)
        );

        if (textoBotonHistoria) {
            textoBotonHistoria.textContent = estaAbierto
                ? "Ver línea del tiempo"
                : "Ocultar línea del tiempo";
        }

        if (flechaHistoria) {
            flechaHistoria.textContent = estaAbierto ? "↓" : "↑";
        }
    });
}





function mostrarLetra(id, boton) {
    const letra = document.getElementById(id);
    const estaOculta = letra.hidden;

    letra.hidden = !estaOculta;
    boton.setAttribute("aria-expanded", estaOculta);

    boton.innerHTML = estaOculta
        ? "<span>−</span> Ocultar la letra"
        : "<span>＋</span> Consultar la letra";
}



//====================Galeria==============//

function mostrarGaleria(categoria, boton) {
    // Ocultar todas las galerías
    document.querySelectorAll('.contenido-galeria').forEach(galeria => {
        galeria.classList.remove('activa');
    });

    // Quitar el estado activo de todos los botones
    document.querySelectorAll('.boton-galeria').forEach(b => {
        b.classList.remove('activo');
    });

    // Mostrar la categoría seleccionada
    document.getElementById(categoria).classList.add('activa');

    // Resaltar el botón seleccionado
    boton.classList.add('activo');
}





/* ======= DIRECTORIO DE DOCENTES ======= */

const buscador = document.getElementById("buscar-docente");
const filtroAcademia = document.getElementById("filtro-academia");
const filtroSemestre = document.getElementById("filtro-semestre");
const botonLimpiar = document.getElementById("limpiar-docentes");
const listaDocentes = document.getElementById("lista-docentes");
const totalDocentes = document.getElementById("total-docentes");

let docentes = [];

/* Normalizar texto para que la búsqueda ignore acentos */
function normalizar(texto) {
    return String(texto ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

/* Crear opciones de los filtros */
function crearFiltros() {
    const academias = [...new Set(
        docentes.map(docente => docente.academia).filter(Boolean)
    )].sort((a, b) => a.localeCompare(b, "es"));

    const semestres = [...new Set(
        docentes.flatMap(docente => docente.semestres || [])
    )].sort((a, b) => a.localeCompare(b, "es"));

    filtroAcademia.replaceChildren();
    filtroSemestre.replaceChildren();

    const opcionAcademia = document.createElement("option");
    opcionAcademia.value = "";
    opcionAcademia.textContent = "Todas las academias";
    filtroAcademia.appendChild(opcionAcademia);

    const opcionSemestre = document.createElement("option");
    opcionSemestre.value = "";
    opcionSemestre.textContent = "Todos los semestres";
    filtroSemestre.appendChild(opcionSemestre);

    academias.forEach(academia => {
        const opcion = document.createElement("option");
        opcion.value = academia;
        opcion.textContent = academia;
        filtroAcademia.appendChild(opcion);
    });

    semestres.forEach(semestre => {
        const opcion = document.createElement("option");
        opcion.value = semestre;
        opcion.textContent = semestre;
        filtroSemestre.appendChild(opcion);
    });
}

/* Crear tarjeta de cada docente */
function crearTarjeta(docente) {
    const tarjeta = document.createElement("article");
    tarjeta.className = "docente-tarjeta";

    /* Fotografía */
    const avatar = document.createElement("div");
    avatar.className = "docente-avatar";

    if (docente.fotografia) {
        const imagen = document.createElement("img");
        imagen.src = docente.fotografia;
        imagen.alt = "Fotografía de " + docente.nombre;

        imagen.addEventListener("error", () => {
            avatar.replaceChildren();
            avatar.textContent = "D";
            avatar.setAttribute("aria-label", "Fotografía no disponible");
        });

        avatar.appendChild(imagen);
    } else {
        avatar.textContent = "D";
        avatar.setAttribute("aria-label", "Avatar genérico");
    }

    /* Nombre */
    const nombre = document.createElement("h3");
    nombre.textContent = docente.nombre;

    /* Academia */
    const academia = document.createElement("span");
    academia.className = "docente-academia";
    academia.textContent = docente.academia;

    tarjeta.append(avatar, nombre, academia);

    /* Materias */
    agregarDato(
        tarjeta,
        "Materias: ",
        (docente.materias || []).join(", ") || "No disponible"
    );

    /* Semestres */
    if (docente.semestres?.length) {
        agregarDato(
            tarjeta,
            "Semestres: ",
            docente.semestres.join(", ")
        );
    }

    /* Perfil */
    if (docente.perfil) {
        agregarDato(tarjeta, "Perfil: ", docente.perfil);
    }

    /* Título académico */
    if (docente.titulo) {
        agregarDato(tarjeta, "Título: ", docente.titulo);
    }

    /* Antigüedad en el ITACE */
    if (docente.antiguedad) {
        agregarDato(tarjeta, "Antigüedad: ", docente.antiguedad);
    }

    return tarjeta;
}

/* Agregar datos de forma segura a la tarjeta */
function agregarDato(tarjeta, etiquetaTexto, contenido) {
    const parrafo = document.createElement("p");
    const etiqueta = document.createElement("strong");

    etiqueta.textContent = etiquetaTexto;
    parrafo.append(etiqueta, document.createTextNode(contenido));

    tarjeta.appendChild(parrafo);
}

/* Mostrar docentes y aplicar filtros */
function mostrarDocentes() {
    const busqueda = normalizar(buscador.value);
    const academiaSeleccionada = filtroAcademia.value;
    const semestreSeleccionado = filtroSemestre.value;

    const resultados = docentes.filter(docente => {
        const textoDocente = normalizar([
            docente.nombre,
            docente.academia,
            ...(docente.materias || []),
            docente.perfil || "",
            docente.titulo || "",
            docente.antiguedad || ""
        ].join(" "));

        const coincideTexto = textoDocente.includes(busqueda);

        const coincideAcademia =
            !academiaSeleccionada ||
            docente.academia === academiaSeleccionada;

        const coincideSemestre =
            !semestreSeleccionado ||
            (docente.semestres || []).includes(semestreSeleccionado);

        return coincideTexto && coincideAcademia && coincideSemestre;
    });

    listaDocentes.replaceChildren();

    totalDocentes.textContent =
        resultados.length === 1
            ? "1 docente encontrado"
            : `${resultados.length} docentes encontrados`;

    if (resultados.length === 0) {
        const mensaje = document.createElement("div");
        mensaje.className = "docente-sin-resultados";
        mensaje.textContent =
            "No se encontraron docentes con esos criterios.";

        listaDocentes.appendChild(mensaje);
        return;
    }

    resultados.forEach(docente => {
        listaDocentes.appendChild(crearTarjeta(docente));
    });
}

/* Limpiar búsqueda y filtros */
function limpiarBusqueda() {
    buscador.value = "";
    filtroAcademia.value = "";
    filtroSemestre.value = "";

    mostrarDocentes();
}

/* Eventos de búsqueda y filtros */
buscador.addEventListener("input", mostrarDocentes);
filtroAcademia.addEventListener("change", mostrarDocentes);
filtroSemestre.addEventListener("change", mostrarDocentes);
botonLimpiar.addEventListener("click", limpiarBusqueda);

/* Cargar información desde el archivo JSON */
async function cargarDocentes() {
    try {
        const respuesta = await fetch("datos/docentes.json");

        if (!respuesta.ok) {
            throw new Error(
                "No se encontró datos/docentes.json. Revisa la ruta."
            );
        }

        const datos = await respuesta.json();

        if (!Array.isArray(datos)) {
            throw new Error(
                "El archivo JSON debe contener una lista de docentes."
            );
        }

        docentes = datos.filter(docente =>
            docente &&
            typeof docente.nombre === "string" &&
            typeof docente.academia === "string" &&
            Array.isArray(docente.materias)
        );

        crearFiltros();
        mostrarDocentes();

    } catch (error) {
        console.error("Error al cargar el directorio:", error);

        totalDocentes.textContent = "No se pudo cargar el directorio.";
        listaDocentes.replaceChildren();

        const mensaje = document.createElement("p");
        mensaje.className = "docente-sin-resultados";
        mensaje.textContent =
            "Revisa el archivo JSON, su ruta y la consola del navegador. Abre la página con Live Server.";

        listaDocentes.appendChild(mensaje);
    }
}

cargarDocentes();




document.addEventListener("DOMContentLoaded", () => {
    const actividades = [
        {
            nombre: "Prácticas en talleres de especialidad",
            imagen: "imagen/talleres.jpg",
            descripcion: "Los estudiantes aplican lo que aprenden en espacios de práctica, como el taller de electrónica o el de máquinas de combustión interna, desarrollando habilidades técnicas."
        },
        {
            nombre: "Danza, arte y presentaciones",
            imagen: "imagen/danza.jpg",
            descripcion: "La danza permite a los estudiantes expresar su creatividad mediante el movimiento y la música, promoviendo la cultura, la coordinación y el trabajo en equipo."
        },
        {
            nombre: "Deportes",
            imagen: "imagen/deportes.jpg",
            descripcion: "Los clubes deportivos, como fútbol y voleibol, fomentan la actividad física, la disciplina, el compañerismo y el respeto, además de impulsar hábitos saludables."
        },
        {
            nombre: "Honores a la bandera",
            imagen: "imagen/honores.jpg",
            descripcion: "Las ceremonias cívicas fortalecen el respeto por los símbolos patrios, los valores cívicos y el sentido de identidad y responsabilidad de los estudiantes."
        }
    ];

    const foto = document.getElementById("vida-foto");
    const nombre = document.getElementById("vida-nombre");
    const descripcion = document.getElementById("vida-descripcion");
    const pestanas = document.querySelectorAll(".pestana");

    if (!foto || !nombre || !descripcion) return;

    let actual = 0;

    function mostrarActividad(indice) {
        actual = (indice + actividades.length) % actividades.length;

        foto.src = actividades[actual].imagen;
        foto.alt = actividades[actual].nombre;
        nombre.textContent = actividades[actual].nombre;
        descripcion.textContent = actividades[actual].descripcion;

        pestanas.forEach((pestana, i) => {
            pestana.classList.toggle("activa", i === actual);
        });
    }

    pestanas.forEach((pestana) => {
        pestana.addEventListener("click", () => {
            mostrarActividad(Number(pestana.dataset.actividad));
        });
    });

    document.getElementById("vida-anterior")
        ?.addEventListener("click", () => mostrarActividad(actual - 1));

    document.getElementById("vida-siguiente-flecha")
        ?.addEventListener("click", () => mostrarActividad(actual + 1));

    document.getElementById("vida-siguiente")
        ?.addEventListener("click", () => mostrarActividad(actual + 1));
});




document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu-fijo");

    // Mantener el menú fuera de la portada
    if (menu) {
        document.body.prepend(menu);
    }

    // Secciones principales que pueden mostrarse por separado
    const selectores = [
        ".portada",
        ".datos",
        ".escuela",
        ".galeria-persona",
        ".historia-itace",
        ".identidad-itace",
        ".himnos-itace",
        ".espec",
        ".inscripcion",
        ".galeria",
        ".directorio",
        ".ubicacion",
        ".contacto",
        ".preguntas-frecuentes",
        ".noticias",
        ".vida-interactiva"
    ];

    const secciones = [...document.querySelectorAll(selectores.join(","))];

    const paginas = {
        inicio: [".portada", ".datos"],
        descripccion: [".escuela"],
        historia: [".galeria-persona", ".historia-itace"],
        identidad: [".identidad-itace"],
        himnos: [".himnos-itace"],
        especialidades: [".espec:nth-of-type(1)"],
        inscripcion: [".inscripcion"],
        cursos: [],
        galeria: [".galeria"],
        directorio: [".directorio"],
        ubicacion: [".ubicacion"],
        contacto: [".contacto"],
        preguntas: [".preguntas-frecuentes"],
        noticias: [".noticias"],
        "vida-estudiantil": [".vida-interactiva"]
        
    };

    // Identificar por orden las secciones de especialidades y cursos
    const apartadosEspec = document.querySelectorAll("section.espec");
    paginas.especialidades = apartadosEspec[0]
        ? [apartadosEspec[0]]
        : [];
    paginas.cursos = apartadosEspec[1]
        ? [apartadosEspec[1]]
        : [];

    function mostrarPagina(nombre) {
        const elegidas = paginas[nombre];

        if (!elegidas) return;

        secciones.forEach(seccion => {
            seccion.classList.add("seccion-oculta");
        });

        elegidas.forEach(item => {
            const elementos = typeof item === "string"
                ? document.querySelectorAll(item)
                : [item];

            elementos.forEach(elemento => {
                elemento.classList.remove("seccion-oculta");
            });
        });

        // Mostrar el pie únicamente en Contacto
        const pie = document.querySelector(".pie");
        if (pie) {
            pie.classList.toggle("seccion-oculta", nombre !== "contacto");
        }

        window.scrollTo({ top: 0, behavior: "instant" });
    }

    // Navegación del menú y enlaces internos
    document.addEventListener("click", evento => {
        const enlace = evento.target.closest('a[href^="#"]');
        if (!enlace) return;

        const nombre = enlace.getAttribute("href").slice(1);

        if (paginas[nombre]) {
            evento.preventDefault();
            mostrarPagina(nombre);
        }
    });

    // La página inicia mostrando Inicio
    mostrarPagina("inicio");
});

const audios = document.querySelectorAll("audio");

audios.forEach((audio) => {
    audio.addEventListener("play", () => {
        audios.forEach((otroAudio) => {
            if (otroAudio !== audio) {
                otroAudio.pause();
            }
        });
    });
});

