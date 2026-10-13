/* =====================================================================
   CONTENIDO DEL PORTAFOLIO — el único archivo que necesitas editar
   ===================================================================== */

window.PORTAFOLIO = {

  /* ---------- Identidad ---------- */
  nombre: "Juan Sebastian PERDOMO CAICEDO",
  rol: "Élève-ingénieur · IMT Atlantique (TAF TEE)",
  ubicacion: "Nantes, France",
  foto: "assets/perfil.jpg",                // Guarda tu foto en la carpeta assets/
  disponibilidad: "Recherche un stage d'ingénieur de 4 mois (2027)",
  colorAcento: "#1E40AF",                   // Azul técnico/corporativo

  /* ---------- Contacto ---------- */
  contacto: {
    email: "juan.perdomo-caicedo@imt-atlantique.net",
    telefono: "+33 7 44 19 29 54",
    linkedin: "https://www.linkedin.com/in/juan-sebastian-perdomo-caicedo-064a952a8",
    github: "https://github.com/JSebasPC4",
    cv: "assets/CV.pdf"                      // Guarda tu CV en PDF en assets/
  },

  /* ---------- Presentación ---------- */
  titular: "Ingénieur Électricien & Élève-ingénieur IMT Atlantique spécialisé en Transition Énergétique.",
  sobreMi: [
    "Ingénieur Électricien diplômé et élève-ingénieur en double diplôme à l'IMT Atlantique (Thématique d'Approfondissement : Transition Énergétique et Environnementale - TAF TEE). Mon parcours combine une solide formation scientifique et technique avec une vision globale des enjeux énergétiques.",
    "Actuellement en cours de finalisation de mon second diplôme en Génie Électronique (96 % validé), je recherche un stage d'ingénieur de 4 mois (BAC+4) dans les secteurs de la transition énergétique, des systèmes électriques et des technologies bas-carbone."
  ],
  cifras: [
    { valor: "Ingénieur Électricien",  texto: "UNAL" },
    { valor: "Ingénieur Généraliste",  texto: "IMT Atlantique · TAF TEE (transition énergétique et environnementale)" },
    { valor: "Ingénieur Électronique", texto: "96 % validé · UNAL" }
  ],

  /* ---------- Proyectos ---------- */
  proyectos: [
    {
      titulo: "Infrastructures Électriques & Systèmes de Puissance",
      categoria: "Énergie",
      descripcion: "Conception, exécution technique et inspection d'installations électriques industrielles et de réseaux de puissance.",
      etiquetas: ["Réseaux Électriques", "Haute Tension", "Montage Électromécanique"],
      // Todas las fotos del Proyecto 1 agrupadas:
      media: [
        "assets/proyecto1-foto1.jpeg",
        "assets/proyecto1-foto2.jpeg",
        "assets/proyecto1-foto3.jpeg",
        "assets/proyecto1-foto4.jpeg",
        "assets/proyecto1-foto5.jpeg",
        "assets/proyecto1-foto6.jpeg",
        "assets/proyecto1-foto7.jpeg",
        "assets/proyecto1-foto8.jpeg",
        "assets/proyecto1-foto9.jpeg"
      ],
      enlace: ""
    },
    {
      titulo: "Modélisation & Contrôle des Systèmes Électroniques",
      categoria: "Automatique",
      descripcion: "Analyse, simulation et contrôle de systèmes électroniques appliqués à la conversion de puissance et aux systèmes énergétiques.",
      etiquetas: ["Électronique de Puissance", "Automatique", "Simulink"],
      // Fotos y videos del Proyecto 2 agrupados:
      media: [
        "assets/proyecto2-foto1.jpeg",
        "assets/proyecto2-foto2.jpg",
        "assets/proyecto2-foto3.jpg",
        "assets/proyecto2-foto4.jpg",
        "assets/proyecto2-foto5.jpg",
        "assets/proyecto2-video1.mp4",
        "assets/proyecto2-video2.mp4"
      ],
      enlace: ""
    },
    {
      titulo: "IA & Outils Numériques pour l'Ingénierie",
      categoria: "Innovation",
      descripcion: "Application de l'intelligence artificielle et d'outils logiciels spécialisés pour l'optimisation des procédés et l'analyse de données techniques.",
      etiquetas: ["IA Appliquée", "Analyse de Données", "Modélisation"],
      // Fotos y videos del Proyecto 3 agrupados:
      media: [
        "assets/proyecto3-foto1.jpg",
        "assets/proyecto3-foto2.jpg",
        "assets/proyecto3-foto3.jpg",
        "assets/proyecto3-foto4.jpg",
        //"assets/proyecto3-video1.mp4",
        "assets/proyecto3-video2.mp4"
      ],
      enlace: ""
    }
  ],

  /* ---------- Parcours (orden: más reciente primero, por fecha de inicio) ---------- */
  experiencia: [
    {
      fecha: "2026 – Présent",
      titulo: "Diplôme d'Ingénieur Généraliste · Parcours TEE",
      lugar: "IMT Atlantique · Nantes, France",
      texto: "Spécialisation / Dominante : Transition Énergétique et Environnementale."
    },
    {
      fecha: "2026",
      titulo: "Ingénieur de projets",
      lugar: "Proelect S.A.S · Bogotá, Colombie",
      texto: "Gestion intégrale de projets d'infrastructure électrique industrielle, de l'ingénierie de détail à l'exécution et la supervision de chantier. Gestion des plannings de travaux, dans le respect des réglementations techniques et des normes de sécurité industrielle."
    },
    {
      fecha: "2025",
      titulo: "Certification en Science des Données Énergétiques",
      lugar: "Coursera",
      texto: ""
    },
    {
      fecha: "2024 – 2025",
      titulo: "Professeur de physique, mathématiques, programmation et robotique",
      lugar: "FORMARTE · Bogotá, Colombie",
      texto: ""
    },
    {
      fecha: "2024",
      titulo: "Certification en ATP-Draw",
      lugar: "Universidad Nacional de Colombia · Bogotá",
      texto: ""
    },
    {
      fecha: "2023 – Présent",
      titulo: "Diplôme en Génie Électronique (96,5 % validé)",
      lugar: "Universidad Nacional de Colombia · Bogotá",
      texto: ""
    },
    {
      fecha: "2023 – 2025",
      titulo: "Participation au groupe de recherche MNYSA",
      lugar: "Universidad Nacional de Colombia · Bogotá",
      texto: "Groupe Matériaux nanostructurés et leurs applications."
    },
    {
      fecha: "2022 – 2025",
      titulo: "Participation au groupe de recherche EMC-UN",
      lugar: "Universidad Nacional de Colombia · Bogotá",
      texto: "Groupe de recherche sur la compatibilité électromagnétique."
    },
    {
      fecha: "2021 – 2025",
      titulo: "Ingénieur en Génie Électrique",
      lugar: "Universidad Nacional de Colombia · Bogotá",
      texto: "Troisième meilleur diplômé sur 41."
    },
    {
      fecha: "2018 – 2025",
      titulo: "Tuteur en physique / Coordinateur pédagogique",
      lugar: "Groupe d'étude communautaire Owl · Bénévolat · Bogotá, Colombie",
      texto: "Tuteur en analyse d'images et dessin, puis en physique, avec des rôles de coordination et de codirection pédagogique."
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
    contactoTexto: "Disponible pour un stage d'ingénieur de 4 mois dans les secteurs de l'énergie et des technologies avancées.",
    tema: "Thème"
  }
};