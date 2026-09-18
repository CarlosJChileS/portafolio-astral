# Biblioteca mágica de grimorios: diseño

## Propósito

Presentar los proyectos fuera de las cuatro misiones destacadas como una biblioteca mágica interactiva. La experiencia debe reforzar la temática de observatorio, fantasía y tecnología de Carlos sin ocultar información profesional ni dificultar la navegación.

## Estructura

La sección de archivo actual se reemplaza por una biblioteca de cinco grimorios: `IA y LLMs`, `Datos`, `Full stack`, `Móvil` y `Colaboraciones`. Cada proyecto se clasifica en una sola familia para evitar duplicados.

Los cuatro destacados permanecen en su posición actual: Brecha Tecnológica Ecuador, RastroSeguro, Prompt y Reza y Yapa. La biblioteca incluye los proyectos restantes.

Cada grimorio es un botón. Al abrirlo, muestra un panel de páginas. Una página contiene nombre de proyecto, resumen, tecnologías, categoría y enlace a GitHub cuando el repositorio es público. El panel activo reemplaza el contenido anterior; no se apilan páginas abiertas.

## Interacción y movimiento

- Al entrar en vista, los lomos de los grimorios suben en una cascada de hasta 400 ms.
- Al pasar el cursor o enfocar un tomo, este se adelanta y se ilumina por su borde.
- Al seleccionar un grimorio, su cubierta rota levemente sobre el eje Y y una página interior entra desde la derecha con opacidad y desplazamiento. La transición dura 420 ms con curva de desaceleración.
- Cambiar de grimorio hace que la página anterior salga hacia la izquierda en 180 ms antes de que la siguiente entre.
- El fondo muestra partículas y líneas de estantería muy sutiles. No se usan emojis, imágenes de franquicias ni símbolos con licencia.

## Accesibilidad y responsive

- Los tomos son botones con `aria-pressed`; la biblioteca mantiene un encabezado y controles con texto.
- Las páginas tienen encabezados semánticos y enlaces visibles por teclado.
- Con movimiento reducido no hay rotación, cascada ni partículas; el cambio de contenido es inmediato.
- En móvil los tomos pasan a una fila horizontal desplazable y la página se presenta debajo, sin 3D CSS.

## Componentes

- `GrimoireLibrary`: mantiene el grimorio activo y agrupa proyectos por familia.
- `GrimoireBook`: botón visual de un tomo con color y señal propia.
- `GrimoirePage`: panel de detalle del proyecto activo.
- `projects.js`: añade una propiedad `shelf` a cada proyecto de archivo.

## Validación

1. La biblioteca muestra cinco tomos y todos los proyectos de archivo una sola vez.
2. Cada tomo se abre con clic, teclado y lector de pantalla.
3. El panel muestra las fichas correctas y enlaza solo a repositorios públicos.
4. La vista móvil no genera desplazamiento horizontal de la página.
5. Movimiento reducido elimina las animaciones decorativas.
6. `npm run build` termina sin errores.
