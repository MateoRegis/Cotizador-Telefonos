function cambiarImagenProducto() {
  const color = document.getElementById("color").value;
  const imagen = document.getElementById("imagen-iphone");

  switch (color) {
    case "grafito":
      imagen.src = "grafito.jpg";
      break;
    case "silver":
      imagen.src = "silver.jpg";
      break;
    case "sierra":
      imagen.src = "sierra.jpg";
      break;
    case "gold":
      imagen.src = "gold.jpg";
      break;
    default:
      imagen.src = "iphone13.jpg";
  }
}

function calcularPrecio() {
  const color = document.getElementById("color").value;
  const capacidad = document.getElementById("capacidad").value;
  const cantidad = parseInt(document.getElementById("cantidad").value);
  const resultadoDiv = document.getElementById("resultado");

  if (
    color === "0" ||
    capacidad === "0" ||
    isNaN(cantidad) ||
    cantidad < 1 ||
    cantidad > 10
  ) {
    resultadoDiv.textContent =
      "Por favor, complete todos los campos correctamente.";
    return;
  }

  let precioPorUnidad;
  switch (capacidad) {
    case "128":
      precioPorUnidad = 150000;
      break;
    case "256":
      precioPorUnidad = 165000;
      break;
    case "512":
      precioPorUnidad = 180000;
      break;
    default:
      resultadoDiv.textContent = "Capacidad no válida.";
      return;
  }

  const precioTotal = precioPorUnidad * cantidad;

  resultadoDiv.textContent = `Cotización: $${precioTotal.toLocaleString()}`;
}
