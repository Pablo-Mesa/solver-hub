# Publicar Solver Hub (etapa 4)

## Requisitos
Hosting estático con HTTPS que sirva HTML, CSS, JS, JSON y PNG. No se necesita PHP, Python ni base de datos en producción.

## Antes de subir
1. Confirmar que `data/resume.json` contiene los datos públicos correctos.
2. Abrir la carpeta con un servidor HTTP local (`php -S localhost:8000`) y verificar todas las secciones.
3. Verificar móvil, menú, navegación por teclado, cubo y contactos.
4. Elegir el dominio/URL definitiva. **No** configurar URL canónica ni `og:url` con valores inventados.

## Subir
Subir el contenido de la carpeta `solver-hub/` al directorio público del alojamiento. Mantener juntos `index.html`, `data/` y `assets/`, sin modificar sus rutas relativas.

## Una vez elegida la URL definitiva
- Añadir en `<head>` la etiqueta `<link rel="canonical" href="https://DOMINIO-REAL/">`.
- Añadir `<meta property="og:url" content="https://DOMINIO-REAL/">`.
- Si querés una vista previa con imagen al compartir, preparar una imagen horizontal propia y usar URL **absoluta** HTTPS en `og:image` y `twitter:image`. No se agregó ninguna imagen ficticia.
- Comprobar la vista previa de enlaces en WhatsApp y redes, y el título/description en buscadores.
- Verificar HTTPS y que `https://DOMINIO-REAL/data/resume.json` responda correctamente. **Importante:** el JSON es público; no colocar allí datos privados.

## Comprobaciones en producción
- Inicio, Sobre mí, Habilidades, Solver App y Contacto se ven correctamente.
- La consola no muestra errores de JavaScript ni solicitudes 404.
- El cubo gira con volumen 3D y respeta la preferencia de movimiento reducido.
- En móvil no hay desplazamiento horizontal; los textos largos se parten correctamente.
- Copiar correo, Redactar correo, WhatsApp y llamada funcionan.
- Probar con teclado: Tab, foco visible, menú móvil y Escape.
- Probar el sitio con JavaScript desactivado: los textos editoriales siguen visibles y aparece un aviso; los datos profesionales y enlaces dinámicos no se muestran. Esto es una limitación conocida de esta arquitectura.

## Actualizar datos
Editar únicamente `data/resume.json` para perfil, habilidades, proyecto y contactos. El texto editorial se edita en `index.html`. Después, volver a subir los archivos cambiados.

## Pendiente para cierre
Revisión final de accesibilidad/responsividad en dispositivos reales y configuración de URLs absolutas cuando se conozca el alojamiento. La página de CV/PDF queda fuera del alcance.
