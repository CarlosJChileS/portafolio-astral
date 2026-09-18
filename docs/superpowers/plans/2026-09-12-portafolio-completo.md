# Portafolio Observatorio Digital — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking. En este entorno, usar la habilidad disponible executing-plans; trabajar en esta misma tarea salvo instrucción distinta de Carlos.

**Goal:** Publicar un portafolio profesional de Carlos Chile Silva, listo para enlazar desde LinkedIn y el CV, con proyectos verificables, identidad propia y una experiencia accesible.

**Architecture:** Mantener React + Vite y el concepto Observatorio digital. Separar el contenido verificable de la presentación; conservar la portada editorial y añadir casos de estudio con URLs compartibles. Publicar solo el directorio dist; el inventario privado de GitHub queda fuera del sitio y del repositorio público.

**Tech Stack:** React 19, Vite 7, JavaScript/JSX, CSS, Motion y Phosphor Icons. Incorporar Playwright para pruebas de recorridos, Node test runner para validación de contenido y generación estática para páginas compartibles si la decisión de rutas lo requiere.

**Fecha:** 12 de septiembre de 2026.
**Workspace:** C:/Users/carlo/Videos/portafolio2d
**Estado:** Plan de trabajo; sus casillas no representan funciones ya implementadas.
**Alcance de este encargo:** Crear el plan. No publicar, comprar dominio ni modificar LinkedIn durante la planificación.

---

## 1. Resultado esperado

Un reclutador debe poder identificar rápidamente quién es Carlos, qué puesto busca, cuáles son sus fortalezas, qué ha construido y cómo contactarlo. Una persona técnica debe poder profundizar en decisiones, responsabilidades y código.

La estética toma como referencia la escala tipográfica y composición de bepatrickdavid.com; la temática, ilustraciones y contenido son propios: espacio, órbitas, datos, negro cálido y marfil. Se conserva la animación como apoyo a la lectura.

**Recorridos principales:**
1. LinkedIn → portada → proyecto destacado → código o demo → contacto.
2. CV → URL del portafolio → perfil → evidencia técnica.
3. Visita técnica → búsqueda por tecnología → caso de estudio → repositorio.
4. Visita móvil o con movimiento reducido → mismo contenido y acciones disponibles.

## 2. Qué existe y qué falta

| Área | Estado comprobado | Trabajo restante |
| --- | --- | --- |
| Identidad | Nombre, Ecuador, LinkedIn y GitHub confirmados | Puesto objetivo, biografía final, contacto y disponibilidad actual |
| Diseño | Observatorio digital, esfera SVG, tipografía editorial | Pulido global, imágenes reales y consistencia de secciones |
| Movimiento | Entrada, satélite, parallax, hover, pausa y preferencia reducida | Pruebas completas, persistencia de pausa y control de rendimiento |
| Proyectos | 3 destacados y 17 entradas de archivo | Casos completos, contribución individual, fechas, capturas y demos |
| Tecnologías | 9 áreas a partir del inventario | Evidencia por tecnología y distinción de niveles de uso |
| GitHub | 68 repositorios inventariados, 247 archivos de documentación/configuración | Validación funcional de los proyectos que se destaquen |
| CV | Texto de próxima disponibilidad | Documento final, descarga y coherencia con la web |
| Compartir | Title, description y etiquetas OG básicas | Imagen social, URL definitiva, canonical y metadatos por caso |
| Calidad | Build y varias comprobaciones manuales aprobados | Pruebas repetibles, accesibilidad, rendimiento y navegadores |
| Publicación | Servidor local | Repositorio del sitio, despliegue, dominio y comprobación pública |

La revisión de GitHub no equivale a una auditoría de cada línea ni a haber ejecutado los 68 repositorios. No convertir dependencias, ejercicios o prototipos en experiencia profesional o resultados comerciales sin evidencia.

## 3. Decisiones de alcance

### Necesario para la versión 1
- Perfil orientado a contratación, en español.
- Tres casos de estudio completos; archivo filtrable con el resto de proyectos seleccionados.
- Tecnologías vinculadas a evidencia.
- CV descargable y canales de contacto reales.
- Diseño responsivo, animación controlable y navegación por teclado.
- URLs estables, vista previa en LinkedIn, metadatos e indexación.
- Hosting público, HTTPS y posibilidad de volver a la versión anterior.

### Después de publicar
- Versión inglesa completa si Carlos busca oportunidades internacionales.
- Más casos profundos, artículos o demostraciones interactivas.
- Analítica mínima si existe una pregunta concreta que responder.
- Casos de trabajo privado únicamente con contenido autorizado y anonimizado cuando corresponda.

### Fuera de la primera versión
CMS, login, panel administrativo, chatbot, backend propio, formularios sin servicio de entrega, blog vacío, certificados inventados y efectos que bloqueen el scroll. Ninguno es necesario para presentar el trabajo.

## 4. Información que debe aportar Carlos

Recopilarla en una sola entrega. Se puede avanzar en diseño, estructura, accesibilidad y pruebas mientras llega.

| Información | Para qué se necesita | Tratamiento si falta |
| --- | --- | --- |
| CV actual o experiencia y formación con fechas | Trayectoria y PDF | Bloquea declarar el CV terminado |
| Puesto objetivo | Orden y redacción del perfil | Usar provisionalmente desarrollador full stack, ya declarado |
| Correo profesional | Contacto directo | LinkedIn continúa como canal funcional |
| Disponibilidad, modalidad e idiomas | Perfil de contratación | Omitir afirmaciones sin confirmar |
| Responsabilidad y equipo en los tres casos | Autoría honesta | Describir el proyecto sin atribuir trabajo individual |
| Demos operativas o modo local reproducible | Capturas y comprobación | Ofrecer solo código; no crear botón de demo roto |
| Foto, si desea usarla | Humanizar la presentación | Mantener el monograma; no bloquea |
| Dominio preferido y destino de hosting | Publicación final | Preparar un despliegue de prueba cuando se autorice ejecutar |

No solicitar contraseñas ni tokens por el chat. Utilizar sesiones existentes y gestores de secretos del proveedor.

## 5. Mapa de archivos

Todos los caminos siguientes son relativos a C:/Users/carlo/Videos/portafolio2d.

| Archivo | Responsabilidad prevista |
| --- | --- |
| src/App.jsx | Composición general y navegación |
| src/projects.js | Migración del catálogo actual; retirar exportaciones sin uso al consolidar |
| src/content/profile.js | Nombre, rol, biografía, contacto, idiomas, experiencia, educación y CV |
| src/content/projects.js | Catálogo único con identificadores, grupos, estado y enlaces |
| src/content/technologies.js | Relación entre tecnología y evidencia |
| src/components/Orbit.jsx | Ilustración orbital y ciclo de movimiento |
| src/components/Hero.jsx | Presentación y acciones principales |
| src/components/ProjectArchive.jsx | Búsqueda, filtros, resultados y expansión |
| src/components/ProjectCase.jsx | Lectura de un caso de estudio |
| src/useMotionControl.js | Pausa, preferencia del sistema y pestaña visible |
| src/styles.css | Variables y estilos globales; separar estilos solo si mejora su mantenimiento |
| public/projects/ | Capturas públicas optimizadas, sin información sensible |
| public/cv/carlos-chile-silva-cv.pdf | CV público aprobado |
| public/social/ | Imagen social general y de cada caso |
| public/fonts/ | Fuentes locales y sus licencias |
| public/robots.txt | Política de rastreo del sitio publicado |
| scripts/validate-content.mjs | Validación de relaciones y enlaces declarados |
| scripts/build-public-pages.mjs | Generación de HTML y metadatos de páginas públicas |
| tests/content.test.mjs | Integridad del catálogo |
| tests/portfolio.spec.js | Recorridos de usuario y movimiento reducido |
| playwright.config.js | Configuración reproducible de navegador y servidor |
| .gitignore | Exclusión de secretos, resultados de pruebas e inventario privado |
| .github/workflows/checks.yml | Build y comprobaciones antes de entregar cambios |
| docs/launch-checklist.md | Evidencia y resultados de la aceptación final |

Crear componentes al modificar su responsabilidad; no fragmentar todo el sitio de antemano. No migrar a Next.js, Three.js o TypeScript únicamente por estética.

## 6. Fases de ejecución

### Fase 0 — Línea base y protección de la entrega · P0

**Archivos:** .gitignore, package.json, docs/launch-checklist.md.
**Dependencia:** Ninguna.

- [ ] Guardar capturas de portada, proyectos, tecnologías y contacto en escritorio y móvil.
- [ ] Registrar comportamiento actual: búsqueda, archivo, enlaces, pausa y preferencia reducida.
- [ ] Crear .gitignore antes de iniciar control de versiones.
- [ ] Preparar un repositorio local del sitio. La carpeta actual no es un repositorio Git.
- [ ] Mantener el inventario privado fuera del seguimiento público y de public/.
- [ ] Crear una primera versión local recuperable antes de cambios estructurales.

Contenido mínimo de .gitignore:
~~~gitignore
node_modules/
dist/
.env
.env.*
!.env.example
*.log
.playwright-mcp/
test-results/
playwright-report/
observatorio-*.png
GITHUB-REVIEW.md
~~~

Comprobación:
~~~powershell
npm run build
git status --short
~~~
Resultado: build correcto; ningún archivo .env, log o inventario privado preparado para publicar.

**Aceptación:** Se puede recuperar la versión actual y existe una frontera clara entre fuentes públicas y documentos privados.

### Fase 1 — Perfil, posicionamiento y CV · P0

**Archivos:** src/content/profile.js, src/components/Hero.jsx, src/App.jsx, public/cv/carlos-chile-silva-cv.pdf.

- [ ] Confirmar puesto objetivo y redactar una presentación de 40–60 palabras.
- [ ] Mantener Carlos Chile Silva como nombre profesional y enlaces existentes como fuentes.
- [ ] Presentar primero la especialidad profesional; usar “explorer” como parte creativa, sin reemplazar el rol.
- [ ] Redactar una sección sobre mí de 100–150 palabras con hechos confirmados.
- [ ] Incorporar experiencia y educación en orden cronológico inverso, solo cuando se reciban fechas y responsabilidades.
- [ ] Crear o adaptar el CV a una composición simple, texto seleccionable, enlaces clicables y una o dos páginas según experiencia.
- [ ] Vincular el PDF con “Descargar CV” desde portada y perfil.
- [ ] Verificar que el nombre, rol, fechas y tecnologías principales coincidan entre web y CV.

Contrato de contenido:
~~~js
export const profile = {
  name: 'Carlos Chile Silva',
  role: 'Desarrollador full stack',
  location: 'Ecuador',
  linkedin: 'https://www.linkedin.com/in/carloschile/',
  github: 'https://github.com/CarlosJChileS',
  email: null,
  cv: null,
  experience: [],
  education: [],
  languages: []
}
~~~
Los valores null o listas vacías representan datos no recibidos: no renderizar enlaces, empleos ni niveles de idioma ficticios. El paso de aceptación exige reemplazar cv por un archivo real comprobado.

**Aceptación:** Un visitante entiende quién eres y puede acceder a un CV real; desaparecen los textos de próxima disponibilidad del contenido final.

### Fase 2 — Catálogo único y evidencia técnica · P0

**Archivos:** src/content/projects.js, src/content/technologies.js, src/projects.js, src/components/ProjectArchive.jsx, tests/content.test.mjs.

- [ ] Unificar los 20 proyectos seleccionados en una colección; usar featured para los destacados, en lugar de depender de slice(0,3).
- [ ] Dar a cada proyecto un slug estable, categoría y palabras de búsqueda.
- [ ] Separar proyecto original, trabajo en equipo, práctica y fork según evidencia.
- [ ] Agrupar variantes de LearnPro, WatchHub y ExposIA; no contarlas como productos distintos.
- [ ] Mapear cada tecnología a uno o más proyectos o a evidencia privada verificada.
- [ ] Distinguir uso en proyecto, práctica y conocimiento declarado. No usar porcentajes de dominio.
- [ ] Revisar C#, .NET y Blazor: constan como declaraciones del perfil, pero requieren evidencia adicional antes de presentarlos como stack verificado.
- [ ] Mantener nombres, URLs y contenido de repositorios privados fuera del bundle.
- [ ] Quitar el antiguo export skills cuando ya no tenga consumidores.

Contrato de proyecto:
~~~js
{
  id: 'smart-fit-pulse',
  slug: 'smart-fit-pulse',
  title: 'Smart Fit Pulse',
  group: 'web',
  featured: true,
  repository: 'https://github.com/CarlosJChileS/smart-fit-pulse',
  demo: null,
  role: null,
  team: null,
  dates: null,
  stack: ['React', 'TypeScript', 'Supabase', 'PWA'],
  media: [],
  caseStudy: null
}
~~~
No marcar caseStudy como publicable hasta tener problema, contribución y evidencia.

**Aceptación:** Cada afirmación importante tiene respaldo y el catálogo no muestra enlaces privados ni duplica proyectos equivalentes.

### Fase 3 — Tres casos de estudio que demuestren el trabajo · P0

**Archivos:** src/components/ProjectCase.jsx, src/content/projects.js, public/projects/.

**Selección inicial:**
1. Smart Fit Pulse: criterio de producto, PWA y lógica de riesgo.
2. LearnPro Academy: aplicación full stack, pagos y backend.
3. Reconocimiento de dígitos: IA integrada en la web.

Si el tercer proyecto no se puede ejecutar con fiabilidad, valorar ExposIA como sustituto después de comprobarlo. No cambiar solo por el número de tecnologías.

Para cada uno, realizar estas acciones por separado:
- [ ] Revisar README, entrada principal, dependencias, flujos y condiciones de ejecución.
- [ ] Ejecutar en un entorno local aislado con datos de prueba cuando sea posible.
- [ ] Documentar cualquier servicio externo necesario, sin ejecutar pagos ni alterar datos reales.
- [ ] Confirmar con Carlos su contribución y la del equipo.
- [ ] Capturar 3–5 pantallas reales: inicio, flujo principal y resultado o administración.
- [ ] Redactar problema, usuario, alcance, responsabilidad, solución, decisiones, resultado y aprendizajes.
- [ ] Identificar una decisión técnica y su alternativa; explicar el motivo sin atribuir decisiones no confirmadas.
- [ ] Añadir métricas únicamente si existe medición; en otro caso describir capacidades observables y límites.
- [ ] Añadir repositorio y demo solo cuando la URL pública haya sido comprobada.
- [ ] Incorporar “Volver a proyectos” y navegación al siguiente caso.

**Formato de cada caso:** resumen de 2 frases, ficha breve, tres bloques de explicación, capturas con pie y una sección de límites/aprendizajes. Objetivo: lectura útil de 2–4 minutos, sin inflar la extensión.

**Aceptación:** Los tres casos contienen imágenes reales y permiten distinguir qué hace el producto y qué aportó Carlos. Los diagramas abstractos pueden acompañarlos, pero no hacerse pasar por capturas.

### Fase 4 — Navegación, filtros y contacto · P0

**Archivos:** src/App.jsx, src/components/ProjectArchive.jsx, src/components/ProjectCase.jsx.

- [ ] Mantener el orden portada → perfil breve → proyectos → tecnologías → contacto.
- [ ] Ofrecer accesos claros a Proyectos, CV y Contacto desde la primera pantalla.
- [ ] Añadir filtros: Todos, Web, IA y datos, Móvil, Automatización y Backend/cloud.
- [ ] Hacer que la búsqueda ignore mayúsculas, espacios sobrantes y tildes.
- [ ] Mostrar número de resultados, estado vacío y acción “Limpiar búsqueda”.
- [ ] Mantener índice e identidad de proyectos estables al filtrar.
- [ ] Permitir compartir un caso mediante /proyectos/slug/ y recargar esa dirección directamente.
- [ ] Hacer que Atrás/Adelante restauren la navegación de forma predecible.
- [ ] Confirmar correo; añadir mailto y copia con mensaje de éxito/error cuando exista.
- [ ] Conservar LinkedIn como canal disponible si Carlos no desea publicar correo.

Normalización definida para búsqueda:
~~~js
export const normalizeSearch = value =>
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase()
~~~

**Aceptación:** “movil” encuentra contenido móvil, un término inexistente ofrece recuperación y todos los caminos permiten volver al archivo.

### Fase 5 — Acabado visual y sistema de movimiento · P1

**Archivos:** src/styles.css, src/components/Orbit.jsx, src/components/Hero.jsx, src/useMotionControl.js.

- [ ] Consolidar paleta, escalas tipográficas, anchos y separaciones en variables CSS.
- [ ] Mantener tipografía grande, pero comprobar títulos largos y zoom sin recortes.
- [ ] Integrar capturas con marcos discretos y proporciones consistentes.
- [ ] Mantener esfera, satélite y entrada escalonada; animar solo las propiedades necesarias.
- [ ] Limitar el parallax a ratón y recorrido corto; conservar scroll nativo.
- [ ] Pausar bucles al salir de pantalla y al ocultarse la pestaña.
- [ ] Recordar la pausa elegida durante la sesión, dando prioridad a prefers-reduced-motion.
- [ ] Verificar que pausar o reactivar no esconda texto ni vuelva a lanzar toda la entrada.
- [ ] Hacer que las aperturas de tecnologías funcionen con teclado y sin animación.
- [ ] Reservar altura de imágenes y controles para evitar saltos.

**Aceptación:** El sitio completo funciona con animaciones apagadas. Los efectos aportan profundidad sin interrumpir lectura o navegación.

### Fase 6 — Accesibilidad y rendimiento · P0/P1

**Archivos:** componentes existentes, src/styles.css, public/fonts/, public/projects/, playwright.config.js, tests/portfolio.spec.js.

- [ ] Revisar 360, 390, 768, 1024 y 1440 píxeles de ancho.
- [ ] Revisar zoom al 200 %, orientación horizontal y textos largos.
- [ ] Corregir jerarquía de encabezados y landmarks: header, nav, main y footer.
- [ ] Mantener foco visible, enlace de salto y nombres accesibles de todos los controles.
- [ ] Asegurar contraste de texto y tamaño cómodo de controles táctiles.
- [ ] Anunciar resultados de búsqueda y errores de copia sin mover el foco.
- [ ] Optimizar capturas a WebP/AVIF, incluir width/height y cargar diferidamente las de abajo.
- [ ] Autoalojar las fuentes conservando licencias y font-display: swap.
- [ ] Cargar recursos de casos solo al necesitarlos.
- [ ] Medir portada y caso representativo en móvil con caché limpia.

**Objetivos de aceptación técnica:**
- Cero errores de consola en los recorridos principales.
- Cero enlaces internos rotos ni desbordamiento horizontal.
- LCP objetivo ≤ 2,5 s, CLS ≤ 0,1 e INP objetivo ≤ 200 ms.
- Antes de tener tráfico, usar mediciones de laboratorio como aproximación, no afirmar Core Web Vitals reales.
- Revisar Chrome, Firefox y WebKit; si no se dispone de un dispositivo Safari real, dejar explícito ese límite.

### Fase 7 — LinkedIn, buscadores y documentos compartibles · P0

**Archivos:** index.html, public/social/, public/robots.txt, scripts/build-public-pages.mjs.

- [ ] Crear imagen social de 1200 × 630 con nombre, rol y arte orbital.
- [ ] Crear metadatos propios para cada caso publicado.
- [ ] Generar HTML estático por URL para que las etiquetas OG no dependan de ejecutar React.
- [ ] Incluir en ese HTML un resumen significativo, no solo el root vacío.
- [ ] Incorporar canonical, og:url y og:image cuando exista el dominio real.
- [ ] Generar sitemap con las URLs publicadas y robots coherente con producción.
- [ ] Añadir datos estructurados Person con nombre, URL y perfiles públicos confirmados.
- [ ] Preparar favicon consistente y enlace de CV estable.
- [ ] Preparar texto para “Destacado” en LinkedIn y la URL que irá en el CV.
- [ ] Comprobar la tarjeta de enlace con el inspector de LinkedIn una vez publicado.

**Aceptación:** Compartir la portada o un caso muestra nombre, descripción e imagen correctos; el HTML inicial ya contiene las etiquetas. No incluir localhost en metadatos públicos.

### Fase 8 — Pruebas y control de calidad · P0

**Archivos:** scripts/validate-content.mjs, tests/content.test.mjs, tests/portfolio.spec.js, playwright.config.js, .github/workflows/checks.yml.

- [ ] Validar slugs únicos, enlaces HTTPS, referencias a tecnologías y archivos públicos existentes.
- [ ] Validar que los casos destacados tengan todos los campos requeridos.
- [ ] Validar que ninguna ruta de asset suba fuera de public/.
- [ ] Probar navegación, búsqueda, filtros, ausencia de resultados, descarga de CV, pausa y movimiento reducido.
- [ ] Probar un caso abierto por URL y por navegación desde portada.
- [ ] Probar fallos de portapapeles y carga de imagen con alternativas legibles.
- [ ] Configurar CI para instalación reproducible, contenido, build y recorridos principales.
- [ ] Guardar resultados en docs/launch-checklist.md.

Prueba mínima ejecutable de movimiento:
~~~js
import { test, expect } from '@playwright/test'

test('respeta la preferencia reducida al cambiar en vivo', async ({ page }) => {
  await page.goto('/')
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'off')
  await expect(page.locator('animateMotion')).toHaveCount(0)
  await expect(page.getByRole('button', { name: 'Movimiento reducido' })).toBeDisabled()
})
~~~

Comandos esperados una vez implementadas las tareas:
~~~powershell
npm ci
node --test tests/content.test.mjs
node scripts/validate-content.mjs
npm run build
npx playwright test
~~~
Resultado: todos terminan con código 0. Escribir pruebas para comportamientos y errores relevantes, no para cada clase CSS ni cada línea de contenido.

### Fase 9 — Publicación y entrega · P0

**Archivos:** configuración del hosting elegido, docs/launch-checklist.md, documentación del repositorio.

- [ ] Confirmar repositorio remoto y proveedor; preferir hosting estático compatible con dist.
- [ ] Revisar la lista exacta de archivos que se subirán.
- [ ] Desplegar una preview y verificar desde fuera de localhost.
- [ ] Resolver rutas de casos, 404, MIME del PDF, compresión y caché de assets.
- [ ] Conectar dominio y HTTPS cuando Carlos facilite o autorice el dominio.
- [ ] Verificar portada, casos, CV y contacto sobre el dominio definitivo.
- [ ] Revisar robots/canonical para que la preview no compita con producción.
- [ ] Registrar versión publicada y procedimiento de rollback.
- [ ] Entregar URL, acceso al código, instrucciones para editar proyectos y checklist final.
- [ ] Preparar la publicación en LinkedIn; modificar el perfil o publicar un mensaje solo si Carlos lo solicita explícitamente.

**Aceptación:** El sitio es accesible públicamente, no depende del ordenador local y sus rutas compartidas funcionan al abrirlas en una sesión nueva.

## 7. Orden y dependencias

Fase 0 → Fases 1 y 2 → Fase 3 → Fases 4 y 5 → Fases 6 y 7 → Fase 8 → Fase 9.

Trabajo que puede avanzar sin datos nuevos:
- Organización del contenido y mapa de evidencia.
- Refactor acotado, estructura de casos, filtros y pruebas.
- Optimización de assets, fuentes, movimiento y accesibilidad.
- Diseño de la imagen social.

Trabajo que requiere información:
- CV final, experiencia, formación, idiomas y correo.
- Responsabilidad individual y resultados no deducibles del código.
- Datos de dominio y decisión de publicación.

## 8. Estimación y entregas revisables

Estimación orientativa de esfuerzo; no constituye una fecha comprometida ni un calendario automático.

| Entrega | Contenido | Esfuerzo estimado |
| --- | --- | --- |
| A. Base y perfil | Fases 0–2 | 5–8 horas |
| B. Evidencia | Tres casos, capturas y CV | 10–18 horas |
| C. Experiencia | Navegación, pulido y movimiento | 6–10 horas |
| D. Calidad y compartir | Accesibilidad, rendimiento, OG y pruebas | 7–12 horas |
| E. Lanzamiento | Preview, dominio, comprobación y guía | 3–5 horas |

Total orientativo: 31–53 horas de trabajo, más espera por datos y cualquier reparación necesaria de repositorios externos. Si un proyecto requiere recuperar servicios, datos o credenciales, estimarlo por separado.

Cada entrega debe mostrar un resultado funcional y sus comprobaciones; no acumular todo hasta el final.

## 9. Qué significa “terminado”

- [ ] Nombre, rol y presentación aprobados por Carlos.
- [ ] CV real descargable y coherente con la web.
- [ ] Tres casos con capturas, responsabilidades y evidencia.
- [ ] Archivo completo, organizado y con búsqueda usable.
- [ ] Stack sin métricas inventadas ni afirmaciones de dominio sin respaldo.
- [ ] Enlaces públicos correctos; información privada excluida.
- [ ] Diseño legible en móvil, escritorio, teclado y zoom.
- [ ] Animaciones pausables, sin movimiento innecesario fuera de vista.
- [ ] Pruebas y build aprobados; objetivos de rendimiento medidos.
- [ ] Tarjetas sociales correctas para portada y casos.
- [ ] URL pública estable con HTTPS y rutas directas.
- [ ] Instrucciones para actualizar contenido y recuperar una versión anterior.

## 10. Mantenimiento después del lanzamiento

Al terminar un nuevo proyecto: actualizar su contenido, comprobar enlaces, agregar capturas y ejecutar el checklist reducido. Al cambiar de empleo o formación: actualizar web y CV en la misma entrega. Revisar periódicamente demos externas y retirar acciones que hayan dejado de funcionar.

No crear recordatorios, monitores o tareas recurrentes hasta que Carlos los solicite.

