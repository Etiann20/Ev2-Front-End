const servicios = [
  {
    nombre: "Caminata Monte Tarn",
    precio: 25000,
    descripcion: "Explora el histórico monte Tarn con esta caminata donde disfrutaras vistas unicas.",
    imagen: "img/monteTarn.jpg"
  },
  {
    nombre: "Laguna Parrillar",
    precio: 20000,
    descripcion: "Disfruta de naturaleza con la caminata por la hermosa laguna Parrillar.",
    imagen: "img/lagParrillar.jpg"
  },
  {
    nombre: "Mirador Zapador Austral",
    precio: 18000,
    descripcion: "Disfruta de una vista panorámica increíble del sur de Chile junto a esta caminata hacia el mirador Zapador Austral.",
    imagen: "img/mirZapador.jpg"
  }
];

function mostrarServicios() {
  const contenedor = document.getElementById("contenedor-servicios");

  servicios.forEach(servicio => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${servicio.nombre}</h3>
      <img src="${servicio.imagen}" width="300">
      <p>${servicio.descripcion}</p>
      <p>Precio por persona: $${servicio.precio}</p>
      <hr>
    `;

    contenedor.appendChild(div);
  });
}

function mostrarSeccion(id) {
  const secciones = document.querySelectorAll("section");

  secciones.forEach(sec => {
    sec.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
}

function validarFormulario(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const celular = document.getElementById("celular").value.trim();
  const email = document.getElementById("email").value.trim();
  const consulta = document.getElementById("consulta").value.trim();

  if (!nombre || !celular || !email || !consulta) {
    alert("Todos los campos son obligatorios");
    return;
  }

  if (isNaN(celular)) {
    alert("El celular debe ser numérico");
    return;
  }

  if (!email.includes("@")) {
    alert("Email inválido");
    return;
  }

  alert("Datos enviados correctamente al correo de la empresa");
  
  limpiarFormulario();
}

function limpiarFormulario() {
  document.getElementById("formulario").reset();
}