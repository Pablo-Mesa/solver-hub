# Solver Hub — versión 1.0 (candidata para publicación)

Portafolio profesional estático de Pablo Mesa. Tecnologías: HTML, CSS,
JavaScript nativo y JSON Resume. Sin frameworks, base de datos ni
compilación.

## Vista local
En la carpeta que contiene `index.html`:
```bash
php -S localhost:8000
```
Abrir http://localhost:8000. El servidor PHP se usa **solo para probar**:
la web publicada no necesita PHP. Evitar `file://` porque `fetch()` puede
bloquear la lectura de JSON.

## Editar
- `data/resume.json`: identidad profesional, correo, teléfono, habilidades y
  proyecto. Este archivo es público; no guardar información privada.
- `index.html`: estructura y contenido editorial.
- `assets/css/`: estilos y cubo 3D.
- `assets/js/content.js`: lee JSON Resume, construye datos y contactos.
- `assets/js/main.js`: navegación.
- `assets/js/draw-cube.js` y `assets/js/cube.js`: cubo 3D.

## Publicar
Leer `PUBLICACION.md` y `CHECKLIST_FINAL.md`. Subir el contenido de esta
carpeta a un hosting estático con HTTPS, conservando rutas y directorios.

## Alcance
Incluye Inicio, Sobre mí, Habilidades, Solver App y Contacto.
El currículum/PDF y un posible Web Component para el cubo quedan fuera
de esta versión.

## Limitación conocida
La información cargada desde `data/resume.json` requiere JavaScript.
Los textos editoriales del HTML permanecen visibles sin él.
