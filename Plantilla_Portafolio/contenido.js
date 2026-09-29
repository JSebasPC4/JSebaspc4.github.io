/* =====================================================================
   CONTENIDO DEL PORTAFOLIO — el único archivo que necesitas editar
   ===================================================================== */

window.PORTAFOLIO = {

  /* ---------- Identidad ---------- */
  nombre: "Tu Nombre",                       // Reemplaza por tu nombre completo
  rol: "Élève-ingénieur · IMT Atlantique (TAF TEE)",
  ubicacion: "Nantes, France",
  foto: "assets/perfil.jpg",                // Guarda tu foto en la carpeta assets/
  disponibilidad: "Recherche un stage de fin d'études / ingénieur (2027)", 
  colorAcento: "#1E40AF",                   // Azul técnico/corporativo

  /* ---------- Contacto ---------- */
  contacto: {
    email: "tu.email@ejemplo.com",          // Reemplaza por tu correo
    telefono: "+33 6 00 00 00 00",          // Reemplaza por tu teléfono
    linkedin: "https://www.linkedin.com/in/tu-perfil",
    github: "https://github.com/tu-usuario",
    cv: "assets/CV.pdf"                      // Guarda tu CV en PDF en assets/
  },

  /* ---------- Presentación ---------- */
  titular: "Ingénieur Électricien & Élève-ingénieur IMT Atlantique spécialisé en Transition Énergétique.",
  sobreMi: [
    "Ingénieur Électricien diplômé et élève-ingénieur en double diplôme à l'IMT Atlantique (Thématique d'Approfondissement : Transition Énergétique et Environnementale - TAF TEE). Mon parcours combine une solide formation scientifique et technique avec une vision globale des enjeux énergétiques.",
    "Actuellement en cours de finalisation de mon second diplôme en Génie Électronique (96 % validé), je recherche un stage d'ingénieur/fin d'études dans les secteurs de la transition énergétique, des systèmes électriques et des technologies bas-carbone."
  ],
  cifras: [
    { valor: "Double Diplôme", texto: "UNAL - IMT Atlantique" },
    { valor: "96 %",            texto: "Génie Électronique validé" },
    { valor: "TAF TEE",         texto: "Transition Énergétique" }
  ],

  /* ---------- Proyectos ---------- */
  proyectos: [
    {
      titulo: "Infrastructures Électriques & Systèmes de Puissance",
      categoria: "Énergie",
      descripcion: "Conception, exécution technique et inspection d'installations électriques industrielles et de réseaux de puissance.",
      etiquetas: ["Réseaux Électriques", "Haute Tension", "Montage Électromécanique"],
      media: "assets/proyecto-1.jpg",
      enlace: ""
    },
    {
      titulo: "Modélisation & Contrôle des Systèmes Électroniques",
      categoria: "Automatique",
      descripcion: "Analyse, simulation et contrôle de systèmes électroniques appliqués à la conversion de puissance et aux systèmes énergétiques.",
      etiquetas: ["Électronique de Puissance", "Automatique", "Simulink"],
      media: "assets/proyecto-2.jpg",
      enlace: ""
    },
    {
      titulo: "IA & Outils Numériques pour l'Ingénierie",
      categoria: "Innovation",
      descripcion: "Application de l'intelligence artificielle et d'outils logiciels spécialisés pour l'optimisation des procédés et l'analyse de données techniques.",
      etiquetas: ["IA Appliquée", "Analyse de Données", "Modélisation"],
      media: "assets/proyecto-3.jpg",
      enlace: ""
    }
  ],

  /* ---------- Experiencia / Recorrido ---------- */
  experiencia: [
    { 
      fecha: "2026 – présent", 
      titulo: "Élève-ingénieur · Diplôme d'Ingénieur (TAF TEE)", 
      lugar: "IMT Atlantique, Nantes, France", 
      texto: "Spécialisation en Transition Énergétique et Environnementale (TEE). Étude des systèmes énergétiques durables, décarbonation et ingénierie avancée." 
    },
    { 
      fecha: "En cours (96 %)", 
      titulo: "Génie Électronique (Double Diplôme)", 
      lugar: "Université Nationale de Colombie", 
      texto: "Formation approfondie en systèmes électroniques, traitement du signal, automatique et microélectronique." 
    },
    { 
      fecha: "Diplômé", 
      titulo: "Ingénieur Électricien", 
      lugar: "Université Nationale de Colombie", 
      texto: "Diplôme d'Ingénieur Électricien. Conception, dimensionnement et gestion de projets d'infrastructures électriques industrielles." 
    },
    { 
      fecha: "Expérience Pro", 
      titulo: "Chef de Projets & Enseignant de Physique", 
      lugar: "Secteur Industriel & Éducatif", 
      texto: "Gestion technique de projets de montage électromécanique. Enseignement des principes fondamentaux de la physique et de l'électromagnétisme." 
    }
  ],

  /* ---------- Competencias ---------- */
  competencias: [
    { grupo: "Génie Électrique & Énergie", items: ["Réseaux Électriques", "Systèmes de Puissance", "Transition Énergétique", "Montage Électromécanique"] },
    { grupo: "Génie Électronique & Contrôle", items: ["Systèmes Embarqués", "Automatique & Régulation", "Électronique de Puissance", "Traitement du Signal"] },
    { grupo: "Informatique & Outils", items: ["Python", "MATLAB / Simulink", "IA Appliquée", "Gestion de Projet"] }
  ],

  /* ---------- Idiomas ---------- */
  idiomas: [
    { idioma: "Espagnol", nivel: "Langue maternelle", puntos: 5 },
    { idioma: "Français", nivel: "Courant / Académique (Nantes)", puntos: 4 },
    { idioma: "Anglais",  nivel: "Technique / Professionnel", puntos: 4 }
  ],

  /* ---------- Textos de la interfaz (en Francés para reclutadores en Francia) ---------- */
  textos: {
    sobreMi: "À propos", 
    proyectos: "Projets", 
    todos: "Tous", 
    experiencia: "Parcours",
    competencias: "Compétences", 
    idiomas: "Langues", 
    contacto: "Contact",
    verProyecto: "Voir le projet", 
    descargarCV: "Télécharger CV", 
    copiar: "Copier e-mail", 
    copiado: "Copié !",
    contactoTitulo: "Travaillons ensemble", 
    contactoTexto: "Disponible pour un stage d'ingénieur / fin d'études dans les secteurs de l'énergie et des technologies avancées.",
    tema: "Thème"
  }
};