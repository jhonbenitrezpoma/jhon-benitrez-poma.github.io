
(() => {
  "use strict";

  const dock = document.getElementById("botDock");
  const launcher = document.getElementById("botLauncher");
  const panel = document.getElementById("botPanel");
  const messages = document.getElementById("botMessages");
  const form = document.getElementById("botForm");
  const input = document.getElementById("botInput");

  const conocimientos = [
    {
      palabras: ["algoritmo", "algoritmos"],
      respuesta: `Un algoritmo es un conjunto de pasos ordenados
para resolver un problema.

Características:
1. Es preciso.
2. Es finito.
3. Tiene entradas y salidas.
4. Sigue una secuencia lógica.

Ejemplo PSeInt:

Algoritmo Sumar
  Definir a, b Como Entero
  Leer a, b
  Escribir a + b
FinAlgoritmo`
    },
    {
      palabras: ["estructura de datos", "estructuras de datos"],
      respuesta: `Una estructura de datos permite organizar
y almacenar información.

Tipos principales:
• Arreglos
• Listas enlazadas
• Pilas
• Colas
• Árboles
• Grafos
• Tablas hash

Cada estructura tiene diferentes ventajas
según el problema que se desea resolver.`
    },
    {
      palabras: ["arreglo", "vector", "array", "matriz"],
      respuesta: `Un arreglo almacena varios valores
del mismo tipo.

Ejemplo Java:

int[] numeros = {10, 20, 30};

for (int numero : numeros) {
    System.out.println(numero);
}

Acceso por índice: O(1).
Búsqueda lineal: O(n).

Una matriz es un arreglo de dos dimensiones.`
    },
    {
      palabras: ["pila", "stack", "lifo"],
      respuesta: `Una pila utiliza el principio LIFO:
último en entrar, primero en salir.

Operaciones:
• push(): insertar
• pop(): eliminar el elemento superior
• peek(): consultar el elemento superior

Ejemplo Java:

Deque<Integer> pila = new ArrayDeque<>();
pila.push(10);
pila.push(20);
System.out.println(pila.pop());

Resultado: 20`
    },
    {
      palabras: ["cola", "queue", "fifo"],
      respuesta: `Una cola utiliza el principio FIFO:
primero en entrar, primero en salir.

Ejemplo:
Una fila de atención en un banco.

Java:

Queue<Integer> cola = new ArrayDeque<>();
cola.add(10);
cola.add(20);
System.out.println(cola.remove());

Resultado: 10`
    },
    {
      palabras: ["lista enlazada", "listas enlazadas"],
      respuesta: `Una lista enlazada está formada por nodos.

Cada nodo contiene:
• Un dato.
• Una referencia al siguiente nodo.

Tipos:
1. Simplemente enlazada.
2. Doblemente enlazada.
3. Circular.

La inserción al inicio puede ser O(1).
La búsqueda suele ser O(n).`
    },
    {
      palabras: ["arbol", "árbol", "binario"],
      respuesta: `Un árbol es una estructura jerárquica.

Elementos:
• Raíz
• Nodos
• Hijos
• Padres
• Hojas

Un árbol binario permite como máximo
dos hijos por nodo.

Se utiliza en búsquedas, organización
de datos y sistemas de archivos.`
    },
    {
      palabras: ["grafo", "grafos", "bfs", "dfs"],
      respuesta: `Un grafo contiene vértices y aristas.

Tipos:
• Dirigido
• No dirigido
• Ponderado

Algoritmos importantes:
BFS: búsqueda por amplitud.
DFS: búsqueda por profundidad.

Aplicaciones:
Mapas, redes, rutas y conexiones.`
    },
    {
      palabras: ["big o", "complejidad", "rendimiento"],
      respuesta: `La notación Big O describe el crecimiento
del costo de un algoritmo.

O(1): constante.
O(log n): logarítmico.
O(n): lineal.
O(n log n): eficiente para ordenar.
O(n²): cuadrático.

Ejemplo:
Un recorrido completo de un arreglo
tiene complejidad O(n).`
    },
    {
      palabras: ["ordenamiento", "burbuja", "quicksort"],
      respuesta: `Los algoritmos de ordenamiento
organizan los datos.

Ejemplos:
• Burbuja: O(n²) promedio.
• Merge Sort: O(n log n).
• Quick Sort: O(n log n) promedio.

Burbuja compara elementos consecutivos
y los intercambia cuando están desordenados.`
    },
    {
      palabras: ["busqueda binaria", "búsqueda binaria"],
      respuesta: `La búsqueda binaria trabaja sobre
datos ordenados.

Procedimiento:
1. Buscar el elemento central.
2. Comparar con el objetivo.
3. Descartar la mitad innecesaria.
4. Repetir.

Complejidad: O(log n).`
    },
    {
      palabras: ["busqueda", "búsqueda", "secuencial"],
      respuesta: `La búsqueda secuencial revisa
los elementos uno por uno.

Su complejidad es O(n).

La búsqueda binaria es más rápida
para arreglos ordenados: O(log n).`
    },
    {
      palabras: ["recursion", "recursión", "recursividad"],
      respuesta: `La recursividad ocurre cuando una función
se llama a sí misma.

Ejemplo Java:

static int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

Siempre debe existir un caso base
para detener las llamadas.`
    },
    {
      palabras: ["pseint", "pseudocodigo", "pseudocódigo"],
      respuesta: `PSeInt permite desarrollar algoritmos
utilizando pseudocódigo.

Ejemplo:

Algoritmo ParImpar
  Definir n Como Entero
  Leer n

  Si n MOD 2 = 0 Entonces
    Escribir "Par"
  SiNo
    Escribir "Impar"
  FinSi
FinAlgoritmo`
    },
    {
      palabras: ["java", "netbeans"],
      respuesta: `Java es un lenguaje de programación
orientado a objetos.

Para algoritmos se utilizan:
• Variables
• Condicionales
• Bucles
• Métodos
• Arreglos
• Clases
• Colecciones

NetBeans permite crear, ejecutar
y depurar proyectos Java.`
    },
    {
      palabras: ["hash", "hashmap", "diccionario"],
      respuesta: `Una tabla hash almacena pares
de clave y valor.

Java:

Map<String, Integer> edades = new HashMap<>();
edades.put("Ana", 20);

System.out.println(edades.get("Ana"));

Resultado: 20

El acceso promedio es O(1).`
    },
    {
      palabras: ["ejercicio", "practica", "práctica"],
      respuesta: `Ejercicio propuesto:

Crear un algoritmo que:
1. Lea cinco números.
2. Los almacene en un arreglo.
3. Calcule la suma.
4. Calcule el promedio.
5. Muestre el mayor.

Puedes resolverlo en Java o PSeInt.`
    }
  ];

  function normalizar(texto) {
    return texto.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function responder(pregunta) {
    const texto = normalizar(pregunta);

    if (/^(hola|buenas|hey|saludos)/.test(texto)) {
      return "¡Hola! Soy RONIN. Pregúntame sobre Algoritmos y Estructuras de Datos.";
    }

    let mejor = null;
    let puntuacion = 0;

    for (const tema of conocimientos) {
      let puntos = 0;

      for (const palabra of tema.palabras) {
        const clave = normalizar(palabra);

        if (texto.includes(clave)) {
          puntos += clave.length + 5;
        }
      }

      if (puntos > puntuacion) {
        puntuacion = puntos;
        mejor = tema;
      }
    }

    if (mejor) return mejor.respuesta;

    return `Soy un asistente especializado en
Algoritmos y Estructuras de Datos.

Todavía no tengo una respuesta específica
para esa pregunta.

Puedes preguntarme sobre:
algoritmos, arreglos, pilas, colas,
árboles, grafos, Java, PSeInt o Big O.`;
  }

  function agregarMensaje(texto, tipo) {
    const elemento = document.createElement("div");
    elemento.className = "bot-message " + tipo;
    elemento.textContent = texto;
    messages.appendChild(elemento);
    messages.scrollTop = messages.scrollHeight;
  }

  function preguntar(texto) {
    const pregunta = texto.trim();
    if (!pregunta) return;

    agregarMensaje(pregunta, "bot-user");
    agregarMensaje(responder(pregunta), "bot-answer");
  }

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    preguntar(input.value);
    input.value = "";
    input.focus();
  });

  document.querySelectorAll("[data-question]").forEach(boton => {
    boton.addEventListener("click", () => {
      preguntar(boton.dataset.question);
    });
  });

  launcher.addEventListener("click", () => {
    if (seArrastro) {
      seArrastro = false;
      return;
    }
    panel.hidden = !panel.hidden;
    if (!panel.hidden) input.focus();
  });

  document.getElementById("botClose")
    .addEventListener("click", () => {
      panel.hidden = true;
    });

  let inicio = null;
  let seArrastro = false;

  function iniciarArrastre(evento) {
    if (evento.target.closest("#botClose")) return;
    if (evento.button !== undefined && evento.button !== 0) return;

    const rect = dock.getBoundingClientRect();

    inicio = {
      x: evento.clientX,
      y: evento.clientY,
      left: rect.left,
      top: rect.top
    };

    seArrastro = false;
    evento.currentTarget.setPointerCapture(evento.pointerId);
  }

  function moverRobot(evento) {
    if (!inicio) return;

    const dx = evento.clientX - inicio.x;
    const dy = evento.clientY - inicio.y;

    if (Math.abs(dx) + Math.abs(dy) > 7) {
      seArrastro = true;
    }

    if (!seArrastro) return;

    dock.style.left = Math.max(
      0, Math.min(window.innerWidth - dock.offsetWidth, inicio.left + dx)
    ) + "px";

    dock.style.top = Math.max(
      0, Math.min(window.innerHeight - dock.offsetHeight, inicio.top + dy)
    ) + "px";

    dock.style.right = "auto";
    dock.style.bottom = "auto";
  }

  function finalizarArrastre() {
    inicio = null;
  }

  [launcher, document.getElementById("botHandle")].forEach(elemento => {
    elemento.addEventListener("pointerdown", iniciarArrastre);
    elemento.addEventListener("pointermove", moverRobot);
    elemento.addEventListener("pointerup", finalizarArrastre);
    elemento.addEventListener("pointercancel", finalizarArrastre);
  });
})();
