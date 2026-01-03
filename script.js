// =======================
// PREGUNTAS (RELLENA TÚ)
// =======================

// --- SENTENCIAS (V / F) ---
const preguntasSentencias = [
  {
    texto: "La gestió de persones inclou totes les tasques relacionades amb la gestió dels empleats dins l’empresa.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "La planificació de necessitats determina quants empleats calen i de quin tipus.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "La selecció de candidats forma part de l’administració de personal.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "La gestió administrativa inclou tasques com les altes, baixes i el pagament de sous.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Les relacions laborals fan referència a la negociació amb els representants dels treballadors.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Els sindicats són organitzacions creades per defensar els drets dels treballadors.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Els serveis orientats a les persones busquen millorar l’experiència dels empleats.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "La seguretat laboral no influeix en la cultura organitzativa.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "La direcció d’equips i lideratge forma part de la gestió estratègica de persones.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "L’organització funcional agrupa els treballadors segons la seva especialització.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "L’organització per zones geogràfiques s’utilitza quan l’empresa està molt centralitzada.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "L’organització per productes és habitual en empreses amb gammes diferenciades.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "L’estructura jeràrquica es caracteritza per una piràmide amb responsabilitats clares.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Un inconvenient de l’estructura jeràrquica és la manca de flexibilitat.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "L’organització funcional pot provocar conflictes entre departaments.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "L’organització matricial combina funció i projecte.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Un desavantatge de l’organització matricial és la possible confusió d’autoritat.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "La divisionalització és adequada per a empreses grans amb múltiples productes o mercats.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "L’organització informal no existeix dins les empreses.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "Els líders informals poden influir fortament en el funcionament de l’empresa.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "El disseny del lloc de treball defineix què fa una persona, com ho fa i amb quina responsabilitat.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "L’organigrama mostra gràficament l’estructura de l’empresa.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Els organigrames poden ser verticals, horitzontals o radials.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "L’agilitat empresarial permet reaccionar ràpidament als canvis del mercat.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Agile i Scrum són només eines tecnològiques, no formes de treballar.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "Scrum treballa amb projectes dividits en petites fases anomenades sprints.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "El model EFQM és un sistema de gestió de la qualitat.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "L’orientació actual del treball dóna més autonomia i responsabilitat al treballador.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  },
  {
    texto: "Les noves competències digitals no són importants en l’actualitat.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "f"
  },
  {
    texto: "Les empreses actuals busquen perfils flexibles i amb capacitat d’adaptació.",
    opciones: ["v) Vertader", "f) Fals"],
    correcta: "v"
  }
];


// --- MINITEST (3 OPCIONES) ---

const preguntasMinitest = [
  {
    texto: "Quina és la funció principal de la gestió de persones dins l’empresa?",
    opciones: [
      "a) Controlar només els salaris",
      "b) Gestionar els empleats i connectar-los amb els objectius de l’empresa",
      "c) Substituir la direcció"
    ],
    correcta: "b"
  },
  {
    texto: "Determinar quants treballadors calen i de quin tipus correspon a:",
    opciones: [
      "a) Selecció",
      "b) Planificació de necessitats",
      "c) Relacions laborals"
    ],
    correcta: "b"
  },
  {
    texto: "Quina tasca forma part de la gestió administrativa de personal?",
    opciones: [
      "a) Formació dels empleats",
      "b) Motivació",
      "c) Altes, baixes i nòmines"
    ],
    correcta: "c"
  },
  {
    texto: "Negociar amb sindicats és una funció de:",
    opciones: [
      "a) Serveis orientats a les persones",
      "b) Relacions laborals",
      "c) Organització informal"
    ],
    correcta: "b"
  },
  {
    texto: "Millorar el clima laboral i l’experiència dels empleats és objectiu de:",
    opciones: [
      "a) Serveis orientats a les persones",
      "b) Organització per productes",
      "c) Control financer"
    ],
    correcta: "a"
  },
  {
    texto: "Agrupar treballadors segons la seva especialització correspon a:",
    opciones: [
      "a) Organització per processos",
      "b) Organització funcional",
      "c) Organització divisional"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa amb centres repartits pel territori sol utilitzar:",
    opciones: [
      "a) Organització per zones geogràfiques",
      "b) Organització funcional",
      "c) Organització per projectes"
    ],
    correcta: "a"
  },
  {
    texto: "L’organització per productes és adequada quan:",
    opciones: [
      "a) L’empresa és molt petita",
      "b) Hi ha productes molt diferenciats",
      "c) Només hi ha un servei"
    ],
    correcta: "b"
  },
  {
    texto: "Quina és una característica clau de l’estructura jeràrquica?",
    opciones: [
      "a) Autoritat difusa",
      "b) Responsabilitats clares",
      "c) Absència de comandaments"
    ],
    correcta: "b"
  },
  {
    texto: "Un inconvenient habitual de l’estructura jeràrquica és:",
    opciones: [
      "a) Excés de flexibilitat",
      "b) Lentitud en la presa de decisions",
      "c) Falta de control"
    ],
    correcta: "b"
  },
  {
    texto: "L’organització matricial es caracteritza per:",
    opciones: [
      "a) Un únic cap",
      "b) Combinació de funcions i projectes",
      "c) Absència d’especialització"
    ],
    correcta: "b"
  },
  {
    texto: "Quin problema pot generar l’organització matricial?",
    opciones: [
      "a) Massa autonomia",
      "b) Conflictes d’autoritat",
      "c) Poca especialització"
    ],
    correcta: "b"
  },
  {
    texto: "La divisionalització és especialment útil en:",
    opciones: [
      "a) Empreses petites",
      "b) Empreses amb un únic producte",
      "c) Grans empreses amb múltiples mercats"
    ],
    correcta: "c"
  },
  {
    texto: "Què és l’organització informal?",
    opciones: [
      "a) L’estructura oficial de l’empresa",
      "b) Les relacions no oficials entre persones",
      "c) Un error de gestió"
    ],
    correcta: "b"
  },
  {
    texto: "Un líder informal és:",
    opciones: [
      "a) Sempre el director",
      "b) Algú amb influència encara que no tingui càrrec",
      "c) Un treballador sancionat"
    ],
    correcta: "b"
  },
  {
    texto: "El disseny del lloc de treball defineix:",
    opciones: [
      "a) Només el salari",
      "b) Tasques, responsabilitats i motivació",
      "c) Només la jerarquia"
    ],
    correcta: "b"
  },
  {
    texto: "Un organigrama serveix per:",
    opciones: [
      "a) Mostrar els salaris",
      "b) Representar l’estructura de l’empresa",
      "c) Avaluar la productivitat"
    ],
    correcta: "b"
  },
  {
    texto: "Quin tipus d’organigrama és més flexible i modern?",
    opciones: [
      "a) Vertical",
      "b) Radial",
      "c) Horitzontal"
    ],
    correcta: "c"
  },
  {
    texto: "L’agilitat empresarial permet:",
    opciones: [
      "a) Evitar la planificació",
      "b) Reaccionar ràpidament als canvis",
      "c) Centralitzar totes les decisions"
    ],
    correcta: "b"
  },
  {
    texto: "Scrum es basa principalment en:",
    opciones: [
      "a) Projectes llargs i tancats",
      "b) Treball per fases curtes (sprints)",
      "c) Jerarquia rígida"
    ],
    correcta: "b"
  },
  {
    texto: "Quin és l’objectiu del model EFQM?",
    opciones: [
      "a) Controlar salaris",
      "b) Gestionar la qualitat",
      "c) Substituir els empleats"
    ],
    correcta: "b"
  },
  {
    texto: "Les tendències actuals del treball promouen:",
    opciones: [
      "a) Control estricte",
      "b) Autonomia i responsabilitat",
      "c) Tasques repetitives"
    ],
    correcta: "b"
  },
  {
    texto: "Les noves competències més valorades avui són:",
    opciones: [
      "a) Només tècniques",
      "b) Digitals i flexibles",
      "c) Exclusivament manuals"
    ],
    correcta: "b"
  },
  {
    texto: "El treball en equip és important perquè:",
    opciones: [
      "a) Redueix la comunicació",
      "b) Millora la col·laboració i resultats",
      "c) Elimina la responsabilitat individual"
    ],
    correcta: "b"
  },
  {
    texto: "Una empresa que confia en les persones tendeix a:",
    opciones: [
      "a) Centralitzar totes les decisions",
      "b) Donar autonomia als treballadors",
      "c) Eliminar la formació"
    ],
    correcta: "b"
  },
  {
    texto: "La motivació dels empleats influeix directament en:",
    opciones: [
      "a) La burocràcia",
      "b) La productivitat",
      "c) L’organigrama"
    ],
    correcta: "b"
  },
  {
    texto: "Un entorn de treball segur contribueix a:",
    opciones: [
      "a) Millorar el clima laboral",
      "b) Augmentar conflictes",
      "c) Reduir la qualitat"
    ],
    correcta: "a"
  },
  {
    texto: "L’organització informal pot:",
    opciones: [
      "a) Ajudar o dificultar el funcionament de l’empresa",
      "b) Substituir l’organització formal",
      "c) Eliminar la jerarquia"
    ],
    correcta: "a"
  },
  {
    texto: "Les empreses actuals prefereixen treballadors:",
    opciones: [
      "a) Molt especialitzats en una sola tasca",
      "b) Flexibles i adaptables",
      "c) Sense formació"
    ],
    correcta: "b"
  },
  {
    texto: "La gestió moderna de persones posa el focus principalment en:",
    opciones: [
      "a) Les màquines",
      "b) Les persones",
      "c) El control estricte"
    ],
    correcta: "b"
  }
];


// --- FRASES DE ÁNIMO ---
const frases_animo = [
  "¡Muy bien!",
  "¡Correcto!",
  "¡Buen trabajo!",
  "¡Así se hace!",
  "¡Perfecto!"
];

// =======================
// VARIABLES
// =======================

let modo = "";
let preguntasParaEsteTest = [];
let i = 0;
let puntuacion = 0;

// =======================
// FUNCIONES
// =======================

function barajar(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] =
      [array[randomIndex], array[currentIndex]];
  }
}

function mostrarMensaje(texto, tipo) {
  const chat = document.getElementById("chat");
  const msg = document.createElement("div");
  msg.classList.add("message", tipo);
  msg.innerHTML = texto.replace(/\n/g, "<br>");
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

function mostrarMenuInicial() {
  mostrarMensaje(
    "👋 Hola, bienvenido al Tema T401.1.\n\n¿Qué quieres practicar?",
    "bot"
  );
  mostrarMensaje(
    "A) Sentencias (Verdadero / Falso)\n      o \n B)Mini-test (3 opciones)",
    "bot"
  );

  configurarBoton("btnA", "A", iniciarSentencias);
  configurarBoton("btnB", "B", iniciarMinitest);
  ocultarBotones(["btnC", "btnD"]);
}

function iniciarSentencias() {
  modo = "sentencias";
  i = 0;
  puntuacion = 0;

  barajar(preguntasSentencias);
  preguntasParaEsteTest = preguntasSentencias.slice(0, 30);

  configurarBoton("btnA", "V", () => responder("v"));
  configurarBoton("btnB", "F", () => responder("f"));
  ocultarBotones(["btnC", "btnD"]);

  mostrarPregunta();
}

function iniciarMinitest() {
  modo = "minitest";
  i = 0;
  puntuacion = 0;

  barajar(preguntasMinitest);
  preguntasParaEsteTest = preguntasMinitest.slice(0, 30);

  configurarBoton("btnA", "A", () => responder("a"));
  configurarBoton("btnB", "B", () => responder("b"));
  configurarBoton("btnC", "C", () => responder("c"));
  ocultarBotones(["btnD"]);

  mostrarPregunta();
}

function mostrarPregunta() {
  if (!preguntasParaEsteTest[i]) return;

  const p = preguntasParaEsteTest[i];
  const texto = `${p.texto}\n\n${p.opciones.join("\n")}`;
  mostrarMensaje(texto, "bot");
}

function responder(opcion) {
  const p = preguntasParaEsteTest[i];
  mostrarMensaje(opcion.toUpperCase(), "user");

  if (opcion === p.correcta) {
    puntuacion++;
    mostrarMensaje(
      frases_animo[Math.floor(Math.random() * frases_animo.length)],
      "bot"
    );
  } else {
    mostrarMensaje(
      `❌ Incorrecte. La correcta era ${p.correcta.toUpperCase()}`,
      "bot"
    );
  }

  i++;

  if (i < preguntasParaEsteTest.length) {
    setTimeout(mostrarPregunta, 600);
  } else {
    setTimeout(() => {
      mostrarMensaje(
        `🏁 Resultat final: ${puntuacion} / ${preguntasParaEsteTest.length}`,
        "bot"
      );
      desactivarBotones();
    }, 600);
  }
}

function configurarBoton(id, texto, accion) {
  const btn = document.getElementById(id);
  btn.style.display = "block";
  btn.textContent = texto;
  btn.onclick = accion;
}

function ocultarBotones(ids) {
  ids.forEach(id => {
    document.getElementById(id).style.display = "none";
  });
}

function desactivarBotones() {
  document.querySelectorAll("button").forEach(b => b.disabled = true);
}

// =======================
// ARRANQUE
// =======================

document.addEventListener("DOMContentLoaded", mostrarMenuInicial);





