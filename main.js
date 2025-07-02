const productos = [
  {
    nombre: "Cubrevolante Racing",
    codigo: "AF-001",
    categoria: "Interior",
  },
  {
    nombre: "Limpia Vidrios Antiempañado",
    codigo: "AF-002",
    categoria: "Limpieza",
  },
  {
    nombre: "Faros LED Alta Potencia",
    codigo: "AF-003",
    categoria: "Iluminación",
  },
  {
    nombre: "Kit Seguridad Vial",
    codigo: "AF-004",
    categoria: "Emergencia",
  },
];

const contenedor = document.getElementById("productos");

productos.forEach((producto) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  tarjeta.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p><strong>Código:</strong> ${producto.codigo}</p>
    <p><strong>Categoría:</strong> ${producto.categoria}</p> `;

  const boton = document.createElement("button");
  boton.innerText = "Agregar al carrito";
  boton.classList.add("boton-carrito");
  boton.onclick = () => agregarAlCarrito(producto);

  tarjeta.appendChild(boton);

  contenedor.appendChild(tarjeta);
});

const productos2 = [
  { nombre: "Limpiador de Tablero", codigo: "AF-101", categoria: "limpieza" },
  { nombre: "Cubrevolante Racing", codigo: "AF-201", categoria: "interior" },
  {
    nombre: "Faros LED Alta Potencia",
    codigo: "AF-301",
    categoria: "iluminacion",
  },
  { nombre: "Kit Seguridad Vial", codigo: "AF-401", categoria: "seguridad" },
  { nombre: "Cargador USB Doble", codigo: "AF-501", categoria: "electronica" },
  { nombre: "Soporte Celular Universal", codigo: "AF-601", categoria: "otros" },
];

const grupos = {
  limpieza: document.getElementById("grupo-limpieza"),
  interior: document.getElementById("grupo-interior"),
  iluminacion: document.getElementById("grupo-iluminacion"),
  seguridad: document.getElementById("grupo-seguridad"),
  electronica: document.getElementById("grupo-electronica"),
  otros: document.getElementById("grupo-otros"),
};

productos2.forEach((producto) => {
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  tarjeta.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p><strong>Código:</strong> ${producto.codigo}</p>
    <p><strong>Categoría:</strong> ${producto.categoria}</p> `;

  const boton = document.createElement("button");
  boton.innerText = "Agregar al carrito";
  boton.classList.add("boton-carrito");
  boton.onclick = () => agregarAlCarrito(producto);

  tarjeta.appendChild(boton);

  const categoriaNormalizada = producto.categoria
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const grupo = grupos[categoriaNormalizada] || grupos.otros;

  grupo.appendChild(tarjeta);
});

const carrito = [];
const listaCarrito = document.getElementById("lista-carrito");
const contenedorCarrito = document.getElementById("carrito");
const botonVaciar = document.getElementById("vaciar-carrito");
const botonFinalizar = document.getElementById("finalizar-compra");

function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
  contenedorCarrito.classList.remove("oculto");
}

function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  carrito.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.nombre} <button onclick="eliminarDelCarrito(${index})">❌</button>`;
    listaCarrito.appendChild(li);
  });
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
  if (carrito.length === 0) {
    contenedorCarrito.classList.add("oculto");
  }
}

botonVaciar.addEventListener("click", () => {
  carrito.length = 0;
  actualizarCarrito();
  contenedorCarrito.classList.add("oculto");
});

botonFinalizar.addEventListener("click", () => {
  const resumen = carrito.map((p) => p.nombre).join(", ");
  const mensaje = `Hola, quiero comprar: ${encodeURIComponent(resumen)}`;
  window.open(`https://wa.me/5491120202020?text=${mensaje}`, "_blank");
});

button.onclick = () => agregarAlCarrito(productos);
