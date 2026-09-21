const { useState } = React;

// --- ÍCONOS SVG ROBUSTOS ---
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 00-2 2z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const ArrowUpRight = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ChevronLeft = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

// ==============================================================================
// 1. GALERÍA UNIFICADA DE IMÁGENES
// ==============================================================================
const PROJECT_IMAGES = {
  "PROJ-01": [
    "images/project1 (1).jpeg",
    "images/project1 (2).jpeg",
    "images/project1 (3).jpeg",
    "images/project1 (4).jpeg",
    "images/project1 (5).jpeg",
    "images/project1 (6).jpeg"
  ],
  "PROJ-02": [
    "images/project2 (1).jpeg",
    "images/project2 (2).jpeg",
    "images/project2 (3).jpeg",
    "images/project2 (4).jpeg"
  ]
};

const CERTIFICATE_IMAGES = [
  "images/certificados (1).jpeg",
  "images/certificados (2).jpeg",
  "images/certificados (3).jpeg"
];

// ==============================================================================
// 2. CONTENIDO LOCALIZADO
// ==============================================================================
const content = {
  en: {
    nav: { profile: "// Profile", exp: "// Experience", projects: "// Projects", contact: "// Contact" },
    profileSection: {
      tag: "[ Professional Profile ]",
      name: "Camila Marenna",
      title: "Civil & Hydraulic Engineer | Civil 3D | GIS | BIM",
      about: "Civil and Hydraulic Engineer with 3+ years of professional experience in civil and hydraulic engineering projects, including land development, site grading, drainage, hydrologic/hydraulic analysis, and technical documentation. Experienced in Civil 3D, AutoCAD, ArcGIS, QGIS, and developing BIM capabilities in Revit for infrastructure and site development.",
      summaryTitle: "// Summary Sheet",
      spec: "Specialty:",
      specVal: "Civil & Hydraulic Engineering",
      modeling: "CAD / GIS / BIM:",
      modelingVal: "Civil 3D, QGIS, ArcGIS, Revit",
      method: "Software:",
      methodVal: "HEC-RAS, HEC-HMS, SAP2000",
      status: "Status:",
      statusVal: "Available for Remote Projects"
    },
    experienceSection: {
      num1: "//",
      num2: "//",
      expTitle: "Work Experience",
      eduTitle: "Education & Certifications",
      viewCertsBtn: "View Certificates",
      expList: [
        {
          period: "April 2025 — Present",
          role: "Hydraulic Designer",
          company: "PIVOTARO",
          detail: "Developed land development projects involving site grading and drainage. Performed drafting and engineering plans using AutoCAD and Civil 3D. Analyzed terrain models, drainage systems, and performed hydrologic/hydraulic analysis. Integrated GIS tools for terrain analysis and basin delineation."
        },
        {
          period: "September 2022 — April 2025",
          role: "Hydraulic Designer",
          company: "SERMAN & ASOCIADOS",
          detail: "Designed, calculated, and verified sanitary and drainage systems. Conducted hydrologic and hydraulic risk assessments for civil infrastructure. Drafted mitigation works, reviewed engineering deliverables, and coordinated technical tasks with clients and multidisciplinary teams."
        }
      ],
      eduList: [
        {
          id: "edu-1",
          title: "Civil Engineering",
          inst: "Universidad Nacional de La Plata (UNLP)",
          year: "2017 — 2023"
        },
        {
          id: "edu-2",
          title: "Hydraulic Engineering",
          inst: "Universidad Nacional de La Plata (UNLP)",
          year: "2018 — 2023"
        },
        {
          id: "edu-3",
          title: "BIM & Technical Training (Revit / Civil 3D)",
          inst: "Civil Infrastructure & Land Development Workflows",
          year: "Certified",
          hasCertificates: true
        },
        {
          id: "edu-4",
          title: "B2 Upper-Intermediate (First Certificate in English)",
          inst: "University of Cambridge",
          year: "Certified"
        }
      ]
    },
    projectsSection: {
      tag: "// Technical Selection",
      title: "Key Projects",
      clickHint: "[ Click on any project card to open the image gallery ]",
      imagesCount: "Images",
      items: [
        {
          id: "PROJ-01",
          title: "Restaurant & Waterfront Pier - BIM Modeling | Revit | Lumion",
          category: "BIM Modeling | Revit | Lumion",
          description: "Architectural BIM modeling of a restaurant and waterfront pier developed as part of a Revit training project. The work included modeling of the architectural elements, complex curved roof geometry, structural roof components, site and terrain, and the pier structure with pile foundations. The project also involved the development of floor plans, 3D views and presentation material.",
          captions: [
            "General Isometric View / Revit",
            "Perspective View & Structural Elements",
            "3D View & Pier Connections",
            "Site Layout & Elevation",
            "Section Cut & Spatial Arrangement",
            "Overall BIM Integration View"
          ],
          specs: [
            { label: "Design Software", val: "Autodesk Revit & Lumion" }
          ],
          tags: ["Revit", "Lumion", "BIM", "Architectural", "Site Modeling"]
        },
        {
          id: "PROJ-02",
          title: "Multi-Story Reinforced Concrete Building - Structural BIM Modeling | Revit",
          category: "Structural BIM Modeling | Revit",
          description: "Structural BIM model of a multi-story reinforced concrete building developed from structural drawings as part of BIM training. The project includes foundations, columns, beams, structural walls, stairs, conventional and ribbed slab systems, together with reinforcement modeling for selected foundations, columns, beams and stair elements.",
          captions: [
            "Structural Model Overview / Revit",
            "Reinforced Concrete Framework Detail",
            "Foundations and Column Connections",
            "Rebar Reinforcement Modeling in Stairs & Beams"
          ],
          specs: [
            { label: "BIM Software", val: "Autodesk Revit" },
            { label: "Structure Type", val: "Reinforced Concrete" },
            { label: "Detailing", val: "Structural & Rebar" }
          ],
          tags: ["Revit", "Structural BIM", "Reinforced Concrete", "Rebar"]
        }
      ]
    },
    modal: {
      reportTitle: "// Project Description",
      keyData: "// Key Metrics",
      certModalTitle: "// Certified Training Documents"
    },
    contactSection: {
      tag: "// Direct Channels",
      title: "Contact",
      chat: "Open Chat",
      send: "Send Message",
      view: "View Profile"
    },
    footer: {
      rights: "Camila Marenna — Civil & Hydraulic Engineer",
      sub: "Pinamar, Buenos Aires, Argentina"
    }
  },
  es: {
    nav: { profile: "// Perfil", exp: "// Trayectoria", projects: "// Proyectos", contact: "// Contacto" },
    profileSection: {
      tag: "[ Perfil Profesional ]",
      name: "Camila Marenna",
      title: "Ingeniera Civil e Hidráulica | Civil 3D | GIS | BIM",
      about: "Ingeniera Civil e Hidráulica con más de 3 años de experiencia en proyectos de ingeniería civil e hidráulica, incluyendo desarrollo de suelo, altimetría/nivelación, drenajes, análisis hidrológico e hidráulico y documentación técnica. Experiencia en Civil 3D, AutoCAD, ArcGIS, QGIS y desarrollo de capacidades BIM en Revit para infraestructura civil.",
      summaryTitle: "// Ficha Resumen",
      spec: "Especialidad:",
      specVal: "Ingeniería Civil e Hidráulica",
      modeling: "CAD / GIS / BIM:",
      modelingVal: "Civil 3D, QGIS, ArcGIS, Revit",
      method: "Software:",
      methodVal: "HEC-RAS, HEC-HMS, SAP2000",
      status: "Estado:",
      statusVal: "Disponible p/ Trabajo Remoto"
    },
    experienceSection: {
      num1: "//",
      num2: "//",
      expTitle: "Experiencia Laboral",
      eduTitle: "Formación & Certificaciones",
      viewCertsBtn: "Ver Certificados",
      expList: [
        {
          period: "Abril 2025 — Presente",
          role: "Proyectista Hidráulica",
          company: "PIVOTARO",
          detail: "Desarrollo de proyectos de infraestructura civil y urbanización, nivelación de terreno y soluciones de drenaje. Planimetría técnica en AutoCAD y Civil 3D, modelado de terreno, análisis hidrológico/hidráulico para evaluación de escurrimiento y riesgo. Uso de herramientas GIS para delimitación de cuencas."
        },
        {
          period: "Septiembre 2022 — Abril 2025",
          role: "Proyectista Hidráulica",
          company: "SERMAN & ASOCIADOS",
          detail: "Diseño, cálculo y verificación de sistemas sanitarios y de drenaje pluvial. Evaluaciones de riesgo hidráulico para obras civiles, diseño de obras de mitigación y documentación técnica. Coordinación de tareas técnicas con clientes y equipos multidisciplinarios."
        }
      ],
      eduList: [
        {
          id: "edu-1",
          title: "Ingeniería Civil",
          inst: "Universidad Nacional de La Plata (UNLP)",
          year: "2017 — 2023"
        },
        {
          id: "edu-2",
          title: "Ingeniería Hidráulica",
          inst: "Universidad Nacional de La Plata (UNLP)",
          year: "2018 — 2023"
        },
        {
          id: "edu-3",
          title: "Capacitación Técnica en BIM y Revit",
          inst: "Modelado de Infraestructura y Desarrollo de Suelo",
          year: "Acreditado",
          hasCertificates: true
        },
        {
          id: "edu-4",
          title: "Inglés B2 / Intermedio-Avanzado (First Certificate)",
          inst: "University of Cambridge",
          year: "Acreditado"
        }
      ]
    },
    projectsSection: {
      tag: "// Selección Técnica",
      title: "Proyectos Principales",
      clickHint: "[ Haz clic en cualquier proyecto para abrir la galería de imágenes ]",
      imagesCount: "Imágenes",
      items: [
        {
          id: "PROJ-01",
          title: "Restaurant & Waterfront Pier - BIM Modeling | Revit | Lumion",
          category: "Modelado BIM | Revit | Lumion",
          description: "Architectural BIM modeling of a restaurant and waterfront pier developed as part of a Revit training project. The work included modeling of the architectural elements, complex curved roof geometry, structural roof components, site and terrain, and the pier structure with pile foundations. The project also involved the development of floor plans, 3D views and presentation material.",
          captions: [
            "Vista Isométrica General / Revit",
            "Vista en Perspectiva y Elementos Estructurales",
            "Vista 3D y Vinculación del Muelle",
            "Disposición del Terreno y Elevación",
            "Corte de Sección y Distribución Espacial",
            "Integración General del Modelo BIM"
          ],
          specs: [
            { label: "Software de Diseño", val: "Autodesk Revit & Lumion" }
          ],
          tags: ["Revit", "Lumion", "BIM", "Arquitectónico", "Modelado de Sitio"]
        },
        {
          id: "PROJ-02",
          title: "Multi-Story Reinforced Concrete Building - Structural BIM Modeling | Revit",
          category: "Modelado BIM Estructural | Revit",
          description: "Structural BIM model of a multi-story reinforced concrete building developed from structural drawings as part of BIM training. The project includes foundations, columns, beams, structural walls, stairs, conventional and ribbed slab systems, together with reinforcement modeling for selected foundations, columns, beams and stair elements.",
          captions: [
            "Vista General del Modelo Estructural en Revit",
            "Detalle de Estructura e Interconexión de Elementos",
            "Fundaciones y Encuentros de Columnas",
            "Modelado de Armaduras de Acero en Escalera y Vigas"
          ],
          specs: [
            { label: "Software BIM", val: "Autodesk Revit" },
            { label: "Estructura", val: "Hormigón Armado" },
            { label: "Detallado", val: "Estructural & Armaduras" }
          ],
          tags: ["Revit", "BIM Estructural", "Hormigón Armado", "Armaduras"]
        }
      ]
    },
    modal: {
      reportTitle: "// Memoria Descriptiva",
      keyData: "// Datos Clave",
      certModalTitle: "// Documentación de Certificados"
    },
    contactSection: {
      tag: "// Comunicación Directa",
      title: "Contacto",
      chat: "Abrir Chat",
      send: "Enviar Mensaje",
      view: "Ver Perfil"
    },
    footer: {
      rights: "Camila Marenna — Ingeniera Civil e Hidráulica",
      sub: "Pinamar, Buenos Aires, Argentina"
    }
  }
};

function Portfolio() {
  const [lang, setLang] = useState('en'); 
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [showCertModal, setShowCertModal] = useState(false);
  const [certSlide, setCertSlide] = useState(0);

  const t = content[lang];

  const selectedProjectText = t.projectsSection.items.find(p => p.id === selectedProjectId);
  const selectedProjectImages = selectedProjectId ? PROJECT_IMAGES[selectedProjectId] : null;

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openProjectModal = (id) => {
    setSelectedProjectId(id);
    setCurrentSlide(0);
  };

  const closeProjectModal = () => {
    setSelectedProjectId(null);
    setCurrentSlide(0);
  };

  const nextSlide = () => {
    if (!selectedProjectImages) return;
    setCurrentSlide((prev) => (prev + 1) % selectedProjectImages.length);
  };

  const prevSlide = () => {
    if (!selectedProjectImages) return;
    setCurrentSlide((prev) => (prev - 1 + selectedProjectImages.length) % selectedProjectImages.length);
  };

  const openCertModal = () => {
    setCertSlide(0);
    setShowCertModal(true);
  };

  const closeCertModal = () => {
    setShowCertModal(false);
  };

  const nextCertSlide = () => {
    setCertSlide((prev) => (prev + 1) % CERTIFICATE_IMAGES.length);
  };

  const prevCertSlide = () => {
    setCertSlide((prev) => (prev - 1 + CERTIFICATE_IMAGES.length) % CERTIFICATE_IMAGES.length);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500 selection:text-black">
      
      {/* HEADER BRUTALISTA */}
      <header className="border-b border-zinc-800 bg-zinc-950/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-mono text-xl tracking-tighter font-bold uppercase border-l-2 border-emerald-500 pl-3">
            Camila Marenna <span className="text-zinc-500 text-xs block font-normal">// Portfolio</span>
          </div>

          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8 font-mono text-xs uppercase tracking-widest text-zinc-400">
              <a href="#perfil" onClick={(e) => handleScrollTo(e, 'perfil')} className="hover:text-emerald-400 transition-colors">{t.nav.profile}</a>
              <a href="#experiencia" onClick={(e) => handleScrollTo(e, 'experiencia')} className="hover:text-emerald-400 transition-colors">{t.nav.exp}</a>
              <a href="#proyectos" onClick={(e) => handleScrollTo(e, 'proyectos')} className="hover:text-emerald-400 transition-colors">{t.nav.projects}</a>
              <a href="#contacto" onClick={(e) => handleScrollTo(e, 'contacto')} className="hover:text-emerald-400 transition-colors">{t.nav.contact}</a>
            </nav>

            <div className="flex items-center border border-zinc-800 bg-zinc-900 p-1 font-mono text-xs">
              <span className="text-zinc-500 px-2 hidden sm:inline-block"><GlobeIcon /></span>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 font-bold transition-all ${
                  lang === 'en' 
                    ? 'bg-emerald-500 text-black' 
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('es')}
                className={`px-2.5 py-1 font-bold transition-all ${
                  lang === 'es' 
                    ? 'bg-emerald-500 text-black' 
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO / PERFIL PROFESIONAL */}
      <section id="perfil" className="max-w-7xl mx-auto px-6 py-24 border-b border-zinc-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <span className="font-mono text-emerald-400 text-xs tracking-widest uppercase block mb-4">
              {t.profileSection.tag}
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-8 text-zinc-100">
              {t.profileSection.name}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed mb-6">
              {t.profileSection.title}
            </p>
            <p className="text-zinc-500 text-base max-w-2xl font-light leading-relaxed">
              {t.profileSection.about}
            </p>
          </div>

          <div className="lg:col-span-4 bg-zinc-900 border border-zinc-800 p-6 font-mono text-xs text-zinc-400 space-y-3">
            <div className="text-emerald-400 font-bold mb-2 uppercase tracking-widest">{t.profileSection.summaryTitle}</div>
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span>{t.profileSection.spec}</span>
              <span className="text-zinc-200 font-medium">{t.profileSection.specVal}</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span>{t.profileSection.modeling}</span>
              <span className="text-zinc-200 font-medium">{t.profileSection.modelingVal}</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800 pb-2">
              <span>{t.profileSection.method}</span>
              <span className="text-zinc-200 font-medium">{t.profileSection.methodVal}</span>
            </div>
            <div className="flex justify-between">
              <span>{t.profileSection.status}</span>
              <span className="text-emerald-400 font-bold">{t.profileSection.statusVal}</span>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCIA Y ESTUDIOS */}
      <section id="experiencia" className="max-w-7xl mx-auto px-6 py-20 border-b border-zinc-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-emerald-400 text-xs tracking-widest uppercase">{t.experienceSection.num1}</span>
              <h2 className="text-2xl font-bold uppercase tracking-tight">{t.experienceSection.expTitle}</h2>
            </div>
            <div className="space-y-8 border-l border-zinc-800 pl-6">
              {t.experienceSection.expList.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 bg-zinc-800 group-hover:bg-emerald-500 transition-colors" />
                  <span className="font-mono text-xs text-emerald-400 tracking-wider block mb-1">{item.period}</span>
                  <h3 className="text-lg font-bold text-zinc-100">{item.role}</h3>
                  <div className="font-mono text-xs text-zinc-500 mb-2">{item.company}</div>
                  <p className="text-zinc-400 text-sm font-light leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-emerald-400 text-xs tracking-widest uppercase">{t.experienceSection.num2}</span>
              <h2 className="text-2xl font-bold uppercase tracking-tight">{t.experienceSection.eduTitle}</h2>
            </div>
            <div className="space-y-6">
              {t.experienceSection.eduList.map((item) => (
                <div key={item.id} className="bg-zinc-900 border border-zinc-800 p-6 hover:border-zinc-700 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-zinc-500 block mb-1">{item.year}</span>
                    <h3 className="text-base font-bold text-zinc-100 mb-1">{item.title}</h3>
                    <div className="font-mono text-xs text-emerald-400">{item.inst}</div>
                  </div>

                  {item.hasCertificates && (
                    <button
                      onClick={openCertModal}
                      className="shrink-0 self-start sm:self-center font-mono text-xs uppercase px-3 py-2 bg-zinc-950 border border-zinc-700 hover:border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all flex items-center gap-1"
                    >
                      <span>{t.experienceSection.viewCertsBtn}</span>
                      <ArrowUpRight />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* PROYECTOS PRINCIPALES */}
      <section id="proyectos" className="max-w-7xl mx-auto px-6 py-24 border-b border-zinc-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="font-mono text-emerald-400 text-xs tracking-widest uppercase">{t.projectsSection.tag}</span>
            <h2 className="text-4xl font-black uppercase tracking-tight mt-2">{t.projectsSection.title}</h2>
          </div>
          <p className="font-mono text-xs text-zinc-500 mt-4 md:mt-0 max-w-xs">
            {t.projectsSection.clickHint}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.projectsSection.items.map((p) => {
            const projectImagesList = PROJECT_IMAGES[p.id];
            const coverImage = projectImagesList[0];

            return (
              <div
                key={p.id}
                onClick={() => openProjectModal(p.id)}
                className="group cursor-pointer transition-all border border-zinc-800 hover:border-emerald-500 bg-zinc-900/40 hover:bg-zinc-900 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden border-b border-zinc-800 bg-zinc-950">
                    <img
                      src={coverImage}
                      alt={p.title}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute top-3 right-3 font-mono text-[10px] bg-zinc-950/90 text-emerald-400 border border-zinc-800 px-2 py-1 uppercase">
                      {projectImagesList.length} {t.projectsSection.imagesCount}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex justify-between items-center font-mono text-xs text-zinc-500 mb-4">
                      <span className="text-emerald-400">{p.id}</span>
                    </div>
                    <h3 className="text-xl font-bold uppercase mb-2 leading-snug group-hover:text-emerald-400 transition-colors">
                      {p.title}
                    </h3>
                    <p className="font-mono text-xs text-zinc-400 mb-4">{p.category}</p>
                    <p className="text-zinc-400 text-sm font-light leading-relaxed mb-6">
                      {p.description}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="space-y-2 mb-6 bg-zinc-950 p-4 border border-zinc-800 font-mono text-xs">
                    {p.specs.map((e, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span className="text-zinc-500">{e.label}:</span>
                        <span className="text-zinc-200 font-bold">{e.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag, idx) => (
                      <span key={idx} className="font-mono text-[10px] uppercase tracking-wider bg-zinc-950 border border-zinc-800 text-zinc-400 px-2 py-1">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* MODAL SLIDER DE PROYECTO */}
      {selectedProjectId && selectedProjectText && selectedProjectImages && (
        <div 
          onClick={closeProjectModal}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-900 border border-zinc-800 max-w-5xl w-full max-h-[90vh] overflow-y-auto flex flex-col justify-between relative shadow-2xl"
          >
            
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-950 sticky top-0 z-10">
              <div>
                <div className="flex items-center space-x-3 font-mono text-xs">
                  <span className="text-emerald-400 font-bold">{selectedProjectText.id}</span>
                  <span className="text-zinc-600">//</span>
                  <span className="text-zinc-400">{selectedProjectText.category}</span>
                </div>
                <h3 className="text-2xl font-black uppercase text-zinc-100 mt-1">
                  {selectedProjectText.title}
                </h3>
              </div>
              <button
                onClick={closeProjectModal}
                className="p-2 border border-zinc-800 hover:border-emerald-500 text-zinc-400 hover:text-emerald-400 bg-zinc-900 transition-colors"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="relative bg-zinc-950 flex flex-col items-center justify-center min-h-[350px] md:min-h-[480px]">
              <img
                src={selectedProjectImages[currentSlide]}
                alt={selectedProjectText.captions[currentSlide] || selectedProjectText.title}
                className="max-h-[60vh] w-auto object-contain"
              />

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-zinc-950/80 border border-zinc-800 text-zinc-200 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-zinc-950/80 border border-zinc-800 text-zinc-200 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
              >
                <ChevronRight />
              </button>

              <div className="w-full bg-zinc-950/90 border-t border-zinc-800 p-4 font-mono text-xs text-center text-zinc-300 flex justify-between items-center px-8">
                <span>{selectedProjectText.captions[currentSlide]}</span>
                <span className="text-emerald-400 font-bold">
                  {currentSlide + 1} / {selectedProjectImages.length}
                </span>
              </div>
            </div>

            <div className="p-8 bg-zinc-900 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-zinc-800">
              <div className="md:col-span-8">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest block mb-2">{t.modal.reportTitle}</span>
                <p className="text-zinc-300 text-sm font-light leading-relaxed">
                  {selectedProjectText.description}
                </p>
              </div>

              <div className="md:col-span-4 bg-zinc-950 p-4 border border-zinc-800 font-mono text-xs space-y-2">
                <span className="text-zinc-500 uppercase tracking-wider block border-b border-zinc-800 pb-2">{t.modal.keyData}</span>
                {selectedProjectText.specs.map((e, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="text-zinc-500">{e.label}:</span>
                    <span className="text-zinc-200 font-bold">{e.val}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* MODAL SLIDER DE CERTIFICADOS */}
      {showCertModal && (
        <div 
          onClick={closeCertModal}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-zinc-900 border border-zinc-800 max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col justify-between relative shadow-2xl"
          >
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-950 sticky top-0 z-10">
              <div>
                <span className="font-mono text-xs text-emerald-400 font-bold block">{t.modal.certModalTitle}</span>
                <h3 className="text-xl font-black uppercase text-zinc-100 mt-1">
                  BIM & Technical Training (Revit / Civil 3D)
                </h3>
              </div>
              <button
                onClick={closeCertModal}
                className="p-2 border border-zinc-800 hover:border-emerald-500 text-zinc-400 hover:text-emerald-400 bg-zinc-900 transition-colors"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="relative bg-zinc-950 flex flex-col items-center justify-center min-h-[350px] md:min-h-[480px] p-4">
              <img
                src={CERTIFICATE_IMAGES[certSlide]}
                alt={`Certificado ${certSlide + 1}`}
                className="max-h-[65vh] w-auto object-contain border border-zinc-800"
              />

              <button
                onClick={prevCertSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-zinc-950/80 border border-zinc-800 text-zinc-200 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextCertSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-zinc-950/80 border border-zinc-800 text-zinc-200 hover:text-emerald-400 hover:border-emerald-500 transition-colors"
              >
                <ChevronRight />
              </button>

              <div className="w-full bg-zinc-950/90 border-t border-zinc-800 p-4 font-mono text-xs text-center text-zinc-300 flex justify-between items-center px-8 mt-4">
                <span>Certificado {certSlide + 1} / {CERTIFICATE_IMAGES.length}</span>
                <span className="text-emerald-400 font-bold">
                  {certSlide + 1} of {CERTIFICATE_IMAGES.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECCIÓN DE CONTACTO */}
      <section id="contacto" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12">
          <span className="font-mono text-emerald-400 text-xs tracking-widest uppercase">{t.contactSection.tag}</span>
          <h2 className="text-4xl font-black uppercase tracking-tight mt-2">{t.contactSection.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://wa.me/542317473026"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-zinc-900 border border-zinc-800 p-8 hover:border-emerald-500 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="p-3 bg-zinc-950 w-fit text-emerald-400 mb-6 border border-zinc-800 group-hover:border-emerald-500 transition-colors">
                <PhoneIcon />
              </div>
              <h3 className="font-mono text-lg font-bold uppercase mb-2">WhatsApp</h3>
              <p className="text-zinc-500 text-sm font-mono">+54 2317 473026</p>
            </div>
            <div className="mt-8 flex items-center justify-between text-xs font-mono uppercase text-emerald-400">
              <span>{t.contactSection.chat}</span>
              <ArrowUpRight />
            </div>
          </a>

          <a
            href="mailto:marennacamila@gmail.com"
            className="group bg-zinc-900 border border-zinc-800 p-8 hover:border-emerald-500 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="p-3 bg-zinc-950 w-fit text-emerald-400 mb-6 border border-zinc-800 group-hover:border-emerald-500 transition-colors">
                <MailIcon />
              </div>
              <h3 className="font-mono text-lg font-bold uppercase mb-2">Email</h3>
              <p className="text-zinc-500 text-sm font-mono">marennacamila@gmail.com</p>
            </div>
            <div className="mt-8 flex items-center justify-between text-xs font-mono uppercase text-emerald-400">
              <span>{t.contactSection.send}</span>
              <ArrowUpRight />
            </div>
          </a>

          <a
            href="https://linkedin.com/in/marennacamila"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-zinc-900 border border-zinc-800 p-8 hover:border-emerald-500 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
          >
            <div>
              <div className="p-3 bg-zinc-950 w-fit text-emerald-400 mb-6 border border-zinc-800 group-hover:border-emerald-500 transition-colors">
                <LinkedinIcon />
              </div>
              <h3 className="font-mono text-lg font-bold uppercase mb-2">LinkedIn</h3>
              <p className="text-zinc-500 text-sm font-mono">linkedin.com/in/marennacamila</p>
            </div>
            <div className="mt-8 flex items-center justify-between text-xs font-mono uppercase text-emerald-400">
              <span>{t.contactSection.view}</span>
              <ArrowUpRight />
            </div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 bg-zinc-950 font-mono text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© 2026 {t.footer.rights}</div>
          <div>{t.footer.sub}</div>
        </div>
      </footer>

    </div>
  );
}