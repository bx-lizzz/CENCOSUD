// Navbar efecto scroll
window.addEventListener("scroll", () => {
  document.querySelector(".navbar")
  .classList.toggle("scrolled", window.scrollY > 50);
});

// Animaciones al hacer scroll
let animados = document.querySelectorAll(".animar");

window.addEventListener("scroll", () => {
  animados.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("activo");
    }
  });
});

// Encuesta
let responder = (opcion) => {
  let resultado = document.getElementById("resultado");
  resultado.classList.remove("show");

  setTimeout(() => {
    if (opcion === "cliente") resultado.innerHTML = "🤝 Atención al cliente";
    if (opcion === "orden") resultado.innerHTML = "📦 Reponedor";
    if (opcion === "computadora") resultado.innerHTML = "💻 Administrativo";
    if (opcion === "movimiento") resultado.innerHTML = "🧾 Cajero";

    resultado.classList.add("show");
  }, 100);
};

// Navbar efecto scroll PRO
window.addEventListener("scroll", () => {
  let nav = document.querySelector(".navbar-pro");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});