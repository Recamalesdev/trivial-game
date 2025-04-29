// Preguntas de Ciencias 
const preguntasCiencias = [
    "¿Qué es una función?",
    "¿Qué diferencia hay entre variable independiente y dependiente?",
    "¿Qué es el dominio y el recorrido de una función?",
    "¿Cómo es la ecuación de una función lineal?",
    "¿Qué indica la pendiente de una recta?",
    "¿Qué es la energía y cómo se mide?",
    "¿Qué diferencia hay entre energía cinética y potencial?",
    "¿Qué es la potencia?",
    "¿Qué es el rendimiento energético?",
    "¿Qué es el calor específico?",
    "¿Qué es la carga eléctrica y cuál es su unidad?",
    "¿Qué es la corriente eléctrica?",
    "¿Qué es el voltaje o tensión eléctrica?",
    "¿Qué dice la Ley de Ohm?",
    "¿Qué tipos de materiales existen respecto a la electricidad?",
    "¿Qué es el pensamiento computacional?",
    "¿Cuáles son las herramientas principales del pensamiento computacional?",
    "¿Qué es un algoritmo?",
    "¿Cómo se puede expresar un algoritmo?",
    "¿Para qué sirven los diagramas de flujo?"
 ];
 
 const opcionesCiencias = [
     [
       "Es una relación donde a cada valor de x le corresponde un único valor de y.",
       "Es una operación matemática que siempre da como resultado cero.",
       "Es un tipo de número que depende del tiempo.",
       "Es una línea recta que nunca cambia de valor."
     ],
     [
       "La variable independiente es x. La dependiente es y, porque depende de x.",
       "La variable dependiente se elige libremente y la independiente es el resultado.",
       "Las dos variables siempre tienen el mismo valor.",
       "La variable dependiente es x, porque controla el valor de y."
     ],
     [
       "Dominio: valores posibles de x. Recorrido: valores posibles de y.",
       "Dominio: valores que no se pueden usar. Recorrido: resultados fuera del gráfico.",
       "Dominio: valores negativos. Recorrido: valores positivos.",
       "Dominio: puntos de corte. Recorrido: distancia entre ejes."
     ],
     [
       "y = m por x más b. Es una línea recta.",
       "y = x dividido por m menos b. Es una parábola.",
       "x = y por b más m. Es una curva cerrada.",
       "m = x menos b por y. Es una recta horizontal."
     ],
     [
       "Si es positiva, la recta sube. Si es negativa, baja. Si es cero, la recta es horizontal.",
       "Si es cero, la recta sube. Si es negativa, es una curva. Si es positiva, es una parábola.",
       "La pendiente siempre indica que la recta es vertical.",
       "Es un número que siempre cambia y no tiene dirección."
     ],
     [
         "Es la capacidad para producir cambios. Se mide en julios, con J.",
         "Es la velocidad que tiene un objeto. Se mide en vatios.",
         "Es la fuerza que hace moverse a un cuerpo. Se mide en metros por segundo.",
         "Es el calor que siente un cuerpo. Se mide en grados Celsius."
       ],
       [
         "Cinética: por el movimiento. Potencial: por la altura.",
         "Cinética: por la masa. Potencial: por la velocidad.",
         "Cinética: por la electricidad. Potencial: por el calor.",
         "Cinética: por el aire. Potencial: por la distancia."
       ],
       [
         "Es la energía usada por segundo. Su unidad es el vatio.",
         "Es el calor que desprende una bombilla. Su unidad es el julio.",
         "Es la velocidad de un coche. Su unidad es el metro por segundo.",
         "Es el peso total de un objeto. Su unidad es el kilogramo."
       ],
       [
         "Es la energía útil dividida entre la energía consumida.",
         "Es el total de energía generada por una fuente.",
         "Es la energía que se transforma completamente en calor.",
         "Es la diferencia entre energía cinética y potencial."
       ],
       [
         "Es el calor necesario para subir un grado la temperatura de un kilo de sustancia.",
         "Es la energía que emite un cuerpo caliente en la oscuridad.",
         "Es el tipo de calor que solo afecta a los gases.",
         "Es la velocidad con la que el calor se propaga por un metal."
       ],
       [
         "Es una propiedad de la materia. Se mide en culombios.",
         "Es una forma de energía que se mide en amperios.",
         "Es la capacidad de calentar metales. Se mide en vatios.",
         "Es un tipo de fuerza invisible. Se mide en newtons."
       ],
       [
         "Es el movimiento de carga eléctrica. Puede ser continua o alterna.",
         "Es la fuerza que genera un imán.",
         "Es el número de electrones en un átomo.",
         "Es la velocidad con la que viaja la luz."
       ],
       [
         "Es la fuerza que empuja la corriente por el circuito.",
         "Es la cantidad de calor que tiene un cable.",
         "Es el número de cargas que pasan por un punto.",
         "Es la frecuencia con la que vibra un electrón."
       ],
       [
         "Corriente es igual a voltaje dividido por resistencia. I = V / R",
         "Voltaje es igual a masa por aceleración. V = m · a",
         "Resistencia es igual a corriente por voltaje. R = I · V",
         "Corriente es igual a temperatura dividida por voltaje. I = T / V"
       ],
       [
         "Conductores (como el cobre), aislantes (como el plástico), y semiconductores (como el silicio).",
         "Líquidos, sólidos y gases.",
         "Magnéticos, no magnéticos y neutros.",
         "Plásticos, metales y cerámicos."
       ],
       [
         "Es una forma lógica de resolver problemas paso a paso, como una máquina.",
         "Es la capacidad de programar ordenadores sin errores.",
         "Es un tipo de pensamiento creativo para escribir historias.",
         "Es la habilidad de recordar fórmulas matemáticas complejas."
       ],
       [
         "Descomposición, patrones, abstracción y algoritmos.",
         "Números primos, raíces, potencias y divisiones.",
         "Memorización, análisis, cálculo y síntesis.",
         "Lenguaje binario, sensores, pantallas y motores."
       ],
       [
         "Es un conjunto de pasos para resolver un problema.",
         "Es una fórmula mágica que predice el futuro.",
         "Es un código secreto usado por los programadores.",
         "Es el resultado final de un cálculo matemático."
       ],
       [
         "En lenguaje natural, pseudocódigo o diagramas de flujo.",
         "Solo con fórmulas matemáticas.",
         "Exclusivamente mediante código HTML.",
         "Usando notas musicales o expresiones artísticas."
       ],
       [
         "Para visualizar el algoritmo, encontrar errores y comunicarlo mejor.",
         "Para decorar documentos con dibujos geométricos.",
         "Para representar gráficamente el sistema solar.",
         "Para calcular áreas de figuras con precisión."
       ]
   ];
   
   const respuestasCiencias = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]; // índice correcto