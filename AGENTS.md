# Reglas del Proyecto (HC Group App)

Para asegurar que la aplicación no se rompa al realizar cambios en el futuro, sigue estrictamente estas reglas de desarrollo para este proyecto:

## 1. Manejo de Imágenes en JavaScript (Vite)
- **NUNCA** uses rutas relativas simples como `image: "./foto.png"` dentro de JavaScript (`script.js`) si esas imágenes van a ser inyectadas en el DOM o usadas dinámicamente.
- **SIEMPRE** utiliza la sintaxis de Vite para resolución estática: `new URL("./foto.png", import.meta.url).href`. Esto asegura que al compilar con `npm run build`, Vite encuentre el archivo y actualice su nombre correctamente (ej. `foto-1a2b3c.png`).

## 2. Rutas en HTML y CSS
- Nunca utilices referencias a carpetas que no se empaquetarán adecuadamente o que asuman la existencia de `./public` de forma estricta si las imágenes están en la raíz del proyecto.
- Evita el uso de `./public/assets/...` desde los archivos `.html`. Las rutas de los estáticos que procesará Vite deben apuntar directamente al archivo relativo (ej. `./1.png` o `./assets/...`).

## 3. Prevención de Errores
- Dado que los archivos `index.html` y `404.html` son bastante grandes (casi 2MB), **siempre realiza ediciones parciales (quirúrgicas) con las herramientas `edit_file` o `multi_edit_file`**. No intentes reescribir archivos masivos por completo.
- Al agregar nuevas funcionalidades, asegúrate de que el código no rompa los flujos de "Google Sheets" preexistentes en `script.js`.
- **SIEMPRE** ejecuta el comando `npm run build` después de hacer cambios en el código para verificar que Vite compile exitosamente. Si la build falla, el cambio debe ser revertido o solucionado de inmediato.
