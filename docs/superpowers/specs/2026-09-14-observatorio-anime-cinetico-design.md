# Observatorio anime cinético: diseño

## Propósito

Convertir el portafolio de Carlos Chile Silva en una experiencia de exploración visual para LinkedIn y reclutadores. Su identidad combinará desarrollo full stack, IA y datos con una estética original inspirada en el ritmo gráfico del anime, la fantasía y la magia. No se usarán personajes, nombres, imágenes ni símbolos de franquicias, ni emojis como recurso gráfico.

## Dirección creativa

La web se organiza como una secuencia de cuatro capítulos: origen, misiones, sistemas y transmisión. Cada capítulo representa una sección existente del portafolio y debe conservar acceso directo desde la navegación.

La identidad personal se expresa con una constelación de Acuario y la fecha `30 · 01 · 2004`. Es una marca editorial y no una interpretación astrológica. Los elementos gráficos propios son: una estrella geométrica de cuatro puntas, el glifo de Acuario construido en SVG y una familia de líneas de impacto, órbitas y nodos.

La paleta mantiene negro y marfil, con verde mineral y ámbar como acentos. La tipografía conserva una lectura editorial en encabezados y una sans serif funcional para contenido.

## Experiencia por escenas

### 1. Origen: portada

La portada contiene la escena WebGL actual: globo, satélite, órbitas y campo de estrellas. Se añadirá una constelación de Acuario de once nodos y trazos acuáticos abstractos. La escena responde al cursor, gira de forma lenta y se puede pausar. El titular se presenta con máscaras y líneas cinéticas, sin alterar el orden semántico del encabezado.

### 2. Misiones: proyectos

Los proyectos se muestran como misiones numeradas. Al entrar en vista, cada tarjeta revela un marco de datos y una línea de trayectoria. Al enfocar o pasar el cursor, se eleva ligeramente y muestra su tecnología sin ocultar el enlace al repositorio. La búsqueda y el archivo siguen siendo controles convencionales y accesibles.

### 3. Sistemas: tecnologías

Las áreas tecnológicas se convierten en paneles de sistema expandibles. Al abrirlas se dibuja una breve trayectoria SVG y se revelan las etiquetas. Los elementos `details` conservan su comportamiento nativo y los enlaces permanecen visibles por teclado.

### 4. Transmisión: contacto

El cierre usa la constelación personal en formato reducido y una llamada a contactar por LinkedIn. La animación final es una transmisión de líneas hacia el exterior; debe detenerse con pausa o con la preferencia de movimiento reducido.

## Arquitectura

- `IdentityMark`: símbolos SVG propios reutilizables: estrella, Acuario, constelación y trazos de energía.
- `SceneChapter`: envoltorio declarativo para cada sección con etiqueta de capítulo y una animación de entrada controlada.
- `OrbitScene`: mantiene la escena Three.js y suma los objetos de identidad personal, con recursos liberados al desmontar.
- Datos de identidad: nombre, fecha, signo y texto de rol se agrupan en una constante local para evitar repeticiones.
- CSS: define tokens de color, animación y profundidad. Las animaciones decorativas quedan separadas de los controles y el contenido.

## Movimiento y rendimiento

La experiencia máxima se aplica en escritorio. En pantallas de hasta 680px se muestra una composición SVG estática o de movimiento mínimo, sin inicializar la escena WebGL visible. `prefers-reduced-motion`, el botón de pausa y la pestaña no visible detienen las animaciones. Three.js continúa cargándose de forma diferida; el bloque 3D no debe entrar en el JavaScript inicial.

Las transiciones utilizan `transform` y `opacity`. No se animan dimensiones, posiciones de documento o desenfoques costosos de forma continua. Cada escena activa sus animaciones una vez cuando entra en vista.

## Accesibilidad

- Los recursos 3D y SVG decorativos usan `aria-hidden`.
- El contenido de los capítulos conserva encabezados, enlaces y orden de tabulación.
- Todos los indicadores visuales tienen un equivalente de texto cuando comunican estado.
- Contraste mínimo AA entre texto y fondo.
- El control de pausa declara su estado con `aria-pressed`.

## Validación

1. `npm run build` debe completar sin errores.
2. Revisión de portada, proyectos, tecnologías y contacto en escritorio.
3. Revisión a 390 px: sin desplazamiento horizontal y sin canvas 3D visible.
4. Revisión con movimiento reducido: sin animaciones en curso y contenido íntegro.
5. Consola sin errores durante carga, pausa y navegación por secciones.

## Fuera de alcance

No se incorporan referencias directas de anime, personajes, música, efectos de sonido, autenticación ni cambios en el contenido de GitHub. El CV seguirá marcado como disponible próximamente hasta recibir el archivo o texto definitivo.
