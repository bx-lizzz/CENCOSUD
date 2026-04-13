// NAVBAR SCROLL
window.addEventListener("scroll", () => {
  let nav = document.querySelector(".navbar-pro");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// ANIMACIONES
let animados = document.querySelectorAll(".animar");

window.addEventListener("scroll", () => {
  animados.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("activo");
    }
  });
});

//ENCUESTA
let form = document.getElementById("formulario");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let rol = document.getElementById("rol").value;
  let interes = document.getElementById("interes").value;
  let habilidades = document.getElementById("habilidades").value;
  let ubicacion = document.getElementById("ubicacion").value;

  try {
    await addDoc(collection(db, "talento_cencosud"), {
      rol,
      interes,
      habilidades,
      ubicacion,
      fecha: new Date()
    });

    document.getElementById("mensaje").innerText = "✅ Tu información fue registrada correctamente";
    form.reset();

  } catch (error) {
    document.getElementById("mensaje").innerText = "❌ Error al registrar";
    console.error(error);
  }
});

  } catch (error) {
    document.getElementById("mensaje").innerText = "❌ Error al registrar";
    console.error(error);
  }
});
