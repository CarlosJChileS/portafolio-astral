export const projects = [
  { title: 'Brecha Tecnológica Ecuador', category: 'Tesis · Datos e IA aplicada', repo: null, description: 'Analítica de datos socioeconómicos sobre el acceso a recursos tecnológicos en Ecuador.', detail: 'Integra datos INEC y Banco Mundial: tendencias, brechas regionales, correlaciones, proyecciones y modelos de regresión, Random Forest y K-means.', stack: ['Python', 'FastAPI', 'React', 'Vite', 'INEC', 'Banco Mundial'], note: 'Tesis: Analítica de datos sobre factores socioeconómicos y acceso tecnológico en Ecuador.', privateCase: true },
  { title:'RastroSeguro', category:'Colaboración · IA explicable', repo:'Marcwos/RastroSeguro_hackIAthon', url:'https://github.com/Marcwos/RastroSeguro_hackIAthon', description:'Plataforma colaborativa que prioriza siniestros sospechosos y explica las señales de riesgo para revisión humana.', detail:'Integra señales de negocio, comportamiento y documentos para ordenar los casos que requieren análisis.', stack:['Python','FastAPI','IA explicable','React'], note:'Colaboración para hackIAthon 2026.' },
  { title: 'Prompt y Reza', category: 'IA · Inteligencia documental', repo: 'prompt-y-reza', description: 'Sistema de IA para analizar pliegos, propuestas y anexos de licitaciones de construcción.', detail: 'Extrae requisitos, plazos y criterios de cumplimiento para señalar brechas entre documentos.', stack: ['Python', 'FastAPI', 'Docker', 'Vercel'], note: 'Proyecto de Viamatica HackIAthon con demo pública.' },
  { title: 'Dental Clinic Manager', category: 'Full stack · Gestión clínica', repo: 'dental-clinic-manager', description: 'Aplicación de gestión odontológica con agenda interactiva de citas y vistas orientadas por rol.', detail: 'Conecta FullCalendar con una API Express, persistencia en PostgreSQL y autenticación JWT.', stack: ['React', 'Express', 'PostgreSQL', 'JWT'], note: 'Calendario, autenticación y flujos de pacientes.' },
  { title: 'D3.js Interactive Guide', category: 'Datos · Visualización', repo: 'd3js-interactive-guide', description: 'Guía de visualización de datos con 14 ejemplos independientes, desde gráficos básicos hasta composiciones avanzadas.', detail: 'Incluye mapas de calor, diagramas Sankey, distribuciones KDE y visualizaciones 3D.', stack: ['JavaScript', 'D3.js', 'HTML', 'CSS'], note: 'Ejemplos autocontenidos para explorar el código.' },
  { title: 'AI or Real?', category: 'IA · Visión por computador', repo: 'ai-or-real-quiz', description: 'Quiz multijugador para distinguir imágenes creadas por IA, utilizando gestos de mano como respuestas.', detail: 'Usa la webcam, OpenCV y MediaPipe para convertir el movimiento en una interacción de juego.', stack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'], note: 'Captura de cámara y puntuación multijugador.' },
]
export const skills = [
  { title: 'Frontend', technologies: 'React · TypeScript · JavaScript · Vite · Tailwind CSS', evidence: 'learnpro-academy', label: 'LearnPro Academy' },
  { title: 'Backend y datos', technologies: 'Node.js · Express · PostgreSQL · Supabase · Stripe', evidence: 'dental-clinic-manager', label: 'Dental Clinic Manager' },
  { title: 'IA y visión', technologies: 'TensorFlow.js · Python · OpenCV · MediaPipe', evidence: 'ai-or-real-quiz', label: 'AI or Real?' },
  { title: 'Visualización', technologies: 'D3.js · HTML · CSS', evidence: 'd3js-interactive-guide', label: 'D3.js Interactive Guide' },
  { title: 'Desarrollo móvil', technologies: 'Kotlin · Android · Supabase', evidence: 'comerx-android', label: 'Comerx' },
  { title: 'Herramientas y pruebas', technologies: 'Docker · Git · Vitest · Testing Library · Playwright', evidence: 'Fitbit', label: 'Fitbit' },
]


export const moreProjects = [
 { title:'Yapa · Agentes financieros', category:'Colaboración · LLMs y RAG', repo:'justinz12xd/HACKATON-TAWS', url:'https://github.com/justinz12xd/HACKATON-TAWS', description:'MVP de agentes financieros por WhatsApp para registrar gastos, presupuestos y alertas en lenguaje natural.', stack:['FastAPI','LangGraph','Supabase','RAG','WhatsApp'] },
 { title:'Reconocimiento de dígitos', category:'IA · Machine learning en navegador', repo:'digit-recognition-tfjs', description:'Red neuronal TensorFlow.js que clasifica dígitos dibujados directamente en el navegador.', stack:['React','TypeScript','TensorFlow.js','Express'] },
 { title:'Comerx', category:'Móvil · Comercio', repo:'comerx-android', description:'Aplicación Android de comercio con catálogo, autenticación y sensores del dispositivo.', stack:['Kotlin','Jetpack Compose','Supabase'] },
 { title:'EtiquetarApp', category:'Automatización · Comercio', repo:'etiquetar-app', description:'Convierte hojas Excel en etiquetas térmicas con códigos de barras y validaciones.', stack:['Python','Flask','openpyxl','PyInstaller'] },
 { title:'WatchHub', category:'Full stack · Streaming', repo:'watchhub-streaming', description:'Plataforma de streaming con autenticación, suscripciones y administración.', stack:['React','TypeScript','Supabase','PayPal'] },
 { title:'TaskMate', category:'Cloud · Full stack', repo:'taskmate', description:'Gestión de tareas con API, base de datos y un flujo de despliegue a Azure.', stack:['Express','PostgreSQL','Docker','GitHub Actions'] },
 { title:'Coastal Environment Dashboard', category:'Datos · Medioambiente', repo:'coastal-environment-dashboard', description:'Panel de monitoreo costero con mapas, datos ambientales y controles de accesibilidad.', stack:['React','Express','SQLite','Leaflet','Recharts'] },
 { title:'Geo Community', category:'Full stack · Comunidad', repo:'geo-community-app', description:'Plataforma comunitaria con mapas interactivos, internacionalización y comunicación.', stack:['React','Supabase','Leaflet','JavaScript'] },
 { title:'Clean Architecture API', category:'Backend · Arquitectura', repo:'clean-architecture-todo-api', description:'API de tareas con fuentes de datos intercambiables para explorar arquitectura limpia.', stack:['TypeScript','Express','Prisma','TypeORM'] },
 { title:'Spring Boot Deploy', category:'Backend · Java', repo:'springboot-docker-deploy', description:'Módulo de evaluación de presentaciones y práctica de despliegue con contenedores.', stack:['Java','Spring Boot','Maven','Docker'] },
 { title:'Fitbit', category:'IA · Riesgo explicable', repo:'Fitbit', description:'PWA que prioriza alertas de riesgo de abandono para entrenadores con señales explicables.', stack:['React','TypeScript','Supabase','PWA'] },
 { title:'Expo Device Capabilities', category:'Móvil · Exploración', repo:'expo-device-capabilities', description:'Demostración de capacidades del dispositivo, cámara y selección de imágenes.', stack:['React Native','Expo','JavaScript'] },
 { title:'Dental Records System', category:'Full stack · Salud', repo:'dental-records-system', description:'Gestión de historias clínicas odontológicas mediante una interfaz web y API.', stack:['JavaScript','Express'] },
 { title:'Clinical Appointment Scheduler', category:'Backend · Python', repo:'clinic-appointment-scheduler', description:'Sistema de programación de citas clínicas con persistencia local.', stack:['Python','SQLite'] },
]
export const technologyAreas = [
 { title:'Interfaces web', tags:['React','Next.js','Angular','TypeScript','JavaScript','HTML','CSS','Vite','Tailwind CSS'], repo:'prompt-y-reza' },
 { title:'APIs y arquitectura', tags:['Node.js','Express','NestJS','Python','FastAPI','Flask','Java','Spring Boot'], repo:'clean-architecture-todo-api' },
 { title:'Datos y persistencia', tags:['PostgreSQL','Supabase','SQLite','Prisma','TypeORM','SQLAlchemy'], repo:'clean-architecture-todo-api' },
 { title:'IA, LLMs y agentes', tags:['Python','FastAPI','LangGraph','RAG','TensorFlow.js','OpenCV','MediaPipe','Whisper'], repo:'prompt-y-reza' },
 { title:'Visualización e interacción', tags:['D3.js','Three.js','Recharts','Leaflet','FullCalendar'], repo:'d3js-interactive-guide' },
 { title:'Aplicaciones móviles', tags:['Kotlin','Android','Jetpack Compose','React Native','Expo'], repo:'comerx-android' },
 { title:'Cloud y entrega', tags:['Docker','Docker Compose','GitHub Actions','Azure','Google Cloud Run','AWS','Vercel','nginx'], repo:'taskmate' },
 { title:'Calidad y automatización', tags:['Vitest','Testing Library','Playwright','Jest','PyInstaller','openpyxl'], repo:'Fitbit' },
 { title:'Integraciones', tags:['Stripe','PayPal','Supabase Auth','JWT','WooCommerce','Contifico'], repo:'learnpro-academy' },
]

