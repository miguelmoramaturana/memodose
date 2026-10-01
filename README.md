# MemoDose · landing

Landing estática bilingüe (español e inglés), sin compilación ni dependencias de JavaScript. Preparada para cualquier hosting de archivos estáticos. El selector ES/EN recuerda la preferencia del visitante.

## Vista local

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:4173`.

## Publicar en tu hosting

Subir `index.html`, `styles.css`, `app.js` y la carpeta `assets/` a la raíz pública. No hace falta subir este README ni PROJECT_CONTEXT.md.

Las fuentes Outfit y Libre Franklin se cargan desde Google Fonts y tienen alternativas del sistema si no hay conexión. Para una instalación completamente autónoma pueden alojarse localmente.

## Antes del lanzamiento

- Cambiar «Próximamente» por el enlace real de App Store cuando esté disponible.
- Confirmar precio, prueba y disponibilidad definitivos. No se muestran precios inventados ni botones falsos de descarga.
- Preparar la política de privacidad con los datos del responsable, contacto y prácticas verificadas de producción. Añadir su enlace en el footer y en Links.swift de la app.
- Confirmar correo de soporte y crear la página de soporte. La memoria no contiene un contacto confirmado para MemoDose.
- Añadir URL canónica cuando se defina el dominio.
- La vista de la app es una ilustración HTML interactiva basada en el diseño y comportamiento actuales, no una captura de la app. No almacena ni transmite datos.

## Archivos

- `index.html`: estructura, contenido, preguntas frecuentes y estado de lanzamiento.
- `styles.css`: identidad visual y diseño responsive.
- `app.js`: demostración de registro de toma, sin persistencia.
- `assets/memodose-logo.png`: logo original de la app.
- `PROJECT_CONTEXT.md`: decisiones recuperadas para continuar el proyecto.
