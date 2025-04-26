let preguntaActual = 0; // Índice de la pregunta que se está mostrando
let puntuaje = 0;       // Contador de respuestas correctas

let opcionesBarajadas = [];          // Guardará las opciones mezcladas para cada pregunta
let indiceCorrectoActual = 0;        // Guardará el índice correcto después de mezclar

// 👇 Función para mezclar opciones y detectar el nuevo índice correcto
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

// 👇 Función que muestra una pregunta y sus 4 opciones barajadas
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

// 👇 Función que se ejecuta al hacer clic en una respuesta
function seleccionarRespuesta(indiceElegido) {
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

// 👇 Función para mostrar el mensaje final del juego
function mostrarResultadoFinal() {
  document.getElementById("pregunta").innerText = "🎉 Juego terminado";
  document.getElementById("opciones").innerHTML = ""; // Ocultar botones

  // Mostrar resultado y firma personal
  document.getElementById("resultado").innerHTML =
    `Obtuviste ${puntuaje} de ${preguntas.length} respuestas correctas.<br>` +
    "¡Gracias por jugar!<br>" +
    "¡Hasta la próxima!" +
    "<br><br><em>Programado con 💚 por Bernardo – comparte y aprende.</em>";
}

// 👇 Iniciar el juego al cargar la página
mostrarPregunta();
