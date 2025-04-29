let preguntas = [];
let opciones = [];
let respuestasCorrectas = [];

let preguntaActual = 0; // Índice de la pregunta que se está mostrando
let puntuaje = 0;       // Contador de respuestas correctas

let opcionesBarajadas = [];          // Guardará las opciones mezcladas para cada pregunta
let indiceCorrectoActual = 0;        // Guardará el índice correcto después de mezclar




//  Función para mezclar opciones y detectar el nuevo índice correcto
function barajarOpciones(opcionesOriginales, indiceCorrecta) {
  // Asociamos cada opción con si es la correcta o no
  const opcionesConIndice = opcionesOriginales.map((opcion, i) => ({
    texto: opcion,
    esCorrecta: i === indiceCorrecta,
  }));

  // Mezclar el array de objetos (Fisher-Yates)
  for (let i = opcionesConIndice.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opcionesConIndice[i], opcionesConIndice[j]] = [opcionesConIndice[j], opcionesConIndice[i]];
  }

  // Buscar en qué posición quedó la opción correcta
  indiceCorrectoActual = opcionesConIndice.findIndex(op => op.esCorrecta);

  // Devolver solo los textos ya mezclados
  return opcionesConIndice.map(op => op.texto);
}

//  Función que muestra una pregunta y sus 4 opciones barajadas
function mostrarPregunta() {
  if (preguntaActual < preguntas.length) {
    // Mostrar el texto de la pregunta
    document.getElementById("pregunta").innerHTML = preguntas[preguntaActual];

    // Obtener opciones mezcladas con índice correcto actualizado
    opcionesBarajadas = barajarOpciones(
      opciones[preguntaActual],
      respuestasCorrectas[preguntaActual]
    );

    // Mostrar las 4 opciones en los botones
    for (let i = 0; i < 4; i++) {
      const boton = document.getElementById(`opcion${i}`);
      boton.innerHTML = opcionesBarajadas[i];
      boton.disabled = false; // Activar botones
      boton.classList.remove("correcta", "incorrecta"); // Limpiar estilos anteriores
    }

    // Limpiar resultado anterior
    document.getElementById("resultado").innerHTML = "";
  } else {
    // Si ya no hay preguntas, mostrar resultado final
    mostrarResultadoFinal();
  }
}

//  Función que se ejecuta al hacer clic en una respuesta
function seleccionarRespuesta(indiceElegido) {

  // Animaciín de pulaado
  document.getElementById(`opcion${indiceElegido}`).classList.add("boton-pulsado");

  // Eliminar la clase de animación después de que termine (para que se pueda volver a animar)
  setTimeout(() => {
    document.getElementById(`opcion${indiceElegido}`).classList.remove("boton-pulsado");
  }, 300);

  // Comparar con el índice correcto actualizado
  if (indiceElegido === indiceCorrectoActual) {
    document.getElementById("resultado").innerHTML = "✅ ¡Correcto!";
    puntuaje++;
    document.getElementById(`opcion${indiceElegido}`).classList.add("correcta");
  } else {
    document.getElementById("resultado").innerHTML = "❌ Incorrecto.";
    document.getElementById(`opcion${indiceElegido}`).classList.add("incorrecta");
    document.getElementById(`opcion${indiceCorrectoActual}`).classList.add("correcta");
  }

  // Desactivar botones
  for (let i = 0; i < 4; i++) {
    document.getElementById(`opcion${i}`).disabled = true;
  }

  // Esperar 5 segundos antes de pasar a la siguiente
  setTimeout(() => {
    // Limpiar estilos
    for (let i = 0; i < 4; i++) {
      document.getElementById(`opcion${i}`).classList.remove("correcta", "incorrecta");
    }

    preguntaActual++;
    mostrarPregunta();
  }, 5000);
}

//  Función para mostrar el mensaje final del juego
function mostrarResultadoFinal() {
  document.getElementById("pregunta").innerText = "🎉 Juego terminado";
  document.getElementById("opciones").innerHTML = ""; // Ocultar botones

  // Mostrar resultado y firma personal
  document.getElementById("resultado").innerHTML =
    `Obtuviste ${puntuaje} de ${preguntas.length} respuestas correctas.<br>` +
    "¡Gracias por jugar!<br>"+
    "<br><br><em>Programado con 💚 por Bernardo – comparte y aprende 🚀.</em>";

 // Botón para volver al menú
 const botonVolverMenu = document.createElement("button");
 botonVolverMenu.innerText = "Volver al menú de inicio 🏠";
 botonVolverMenu.classList.add("boton-reiniciar");
 botonVolverMenu.onclick = volverAlMenu;
 document.getElementById("resultado").appendChild(botonVolverMenu);
}

// función para reiniciar el juego
function reiniciarJuego() {
  preguntaActual = 0;
  puntuaje = 0;
  document.getElementById("resultado").innerHTML = ""; // Limpiar resultado
  mostrarPregunta(); // Emprzar de nuevo
}

function elegirSeccion(seccion) {
  document.getElementById("menu-secciones").style.display = "none";
  document.querySelector(".container").style.display = "block";

  if (seccion === 'ciencias') {
    preguntas = preguntasCiencias;
    opciones = opcionesCiencias;
    respuestasCorrectas = respuestasCiencias;
  } else if (seccion === 'sociales') {
    preguntas = preguntasSociales;
    opciones = opcionesSociales;
    respuestasCorrectas = respuestasSociales;
  }

  preguntaActual = 0;
  puntuaje = 0;
  mostrarPregunta();
}


function volverAlMenu() {
  document.querySelector(".container").style.display = "none"; // Ocultar el juego
  const menu = document.getElementById("menu-secciones"); menu.style.display = "block"; // Mostrar el menú
  
  menu.classList.add("animacion-aparecer");

  setTimeout(() => {
    menu.classList.remove("animacion-aparecer");
  }, 500);

  // limpiar estados anteriores
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("opciones").innerHTML = `
    <button onclick="seleccionarRespuesta(0)" id="opcion0"></button>
    <button onclick="seleccionarRespuesta(1)" id="opcion1"></button>
    <button onclick="seleccionarRespuesta(2)" id="opcion2"></button>
    <button onclick="seleccionarRespuesta(3)" id="opcion3"></button>
  `;
}


//mostrarPregunta();