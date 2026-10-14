# Lista de cierre y publicación — Solver Hub 1.0

## Confirmado durante el desarrollo
- [x] El usuario confirmó cubo tridimensional en su navegador.
- [x] El usuario confirmó lectura de datos desde JSON Resume.
- [x] El usuario confirmó redacción de correo en Gmail móvil con destinatario y asunto.
- [x] El usuario confirmó funcionamiento general del paquete de la etapa 4.
- [x] Arquitectura HTML/CSS/JS/JSON sin Python ni frameworks.

## Pendiente al elegir alojamiento y URL
- [ ] Confirmar dirección pública final y HTTPS.
- [ ] Agregar `canonical` y `og:url` con la URL real, sin inventar dominios.
- [ ] Si se desea vista previa con imagen, crear una imagen propia y definir
      `og:image` y `twitter:image` con URL absoluta HTTPS.
- [ ] Subir **el contenido** de `solver-hub/`, no una carpeta extra innecesaria.
- [ ] Comprobar que `/data/resume.json` responde y que la página muestra datos.
- [ ] Verificar en producción consola sin errores, sin 404 y navegación móvil.
- [ ] Probar WhatsApp, copiar correo, redactar correo y llamada.
- [ ] Probar teclado, foco visible, tamaños de pantalla y movimiento reducido.
- [ ] Verificar cómo aparece el enlace al compartirlo.

## Notas
- No se requiere backend ni formulario de contacto.
- `resume.json` es público: no incorporar contraseñas, domicilios particulares
  ni datos sensibles.
- El CV/PDF y Web Component son posibles actualizaciones futuras.
