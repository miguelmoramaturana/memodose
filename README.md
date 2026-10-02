# MemoDose · landing

Landing estática bilingüe (español e inglés), sin compilación ni dependencias de JavaScript. Preparada para cualquier hosting de archivos estáticos. El selector ES/EN recuerda la preferencia del visitante.

## Vista local

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:4173`.

## Publicar en tu hosting

Subir `index.html`, `privacidad.html`, `privacy.html`, `soporte.html`, `support.html`, `styles.css`, `app.js` y la carpeta `assets/` a la raíz pública. No hace falta subir este README ni PROJECT_CONTEXT.md.

Las fuentes Outfit y Libre Franklin se cargan desde Google Fonts y tienen alternativas del sistema si no hay conexión. Para una instalación completamente autónoma pueden alojarse localmente.

## Antes del lanzamiento

- Cambiar «Próximamente» por el enlace real de App Store cuando esté disponible.
- Confirmar precio, prueba y disponibilidad definitivos. No se muestran precios inventados ni botones falsos de descarga.
- Política y soporte completos (responsable Miguel Mora Maturana, contacto hello@memodose.app, en vigor desde el 1 de octubre de 2026). Si cambias la política, actualiza la fecha. Las URL de privacidad y soporte van en App Store Connect (español → `privacidad.html` / `soporte.html`, inglés → `privacy.html` / `support.html`) y en `Links.swift` de la app.
- Dominio: https://www.memodose.app en Vercel; memodose.app redirige a www (las páginas ya tienen su URL canónica). Los dominios .app exigen HTTPS. Configurar el reenvío de hello@memodose.app antes del lanzamiento.
- La vista de la app es una ilustración HTML interactiva basada en el diseño y comportamiento actuales, no una captura de la app. No almacena ni transmite datos.

## Archivos

- `index.html`: estructura, contenido, preguntas frecuentes y estado de lanzamiento.
- `privacidad.html` / `privacy.html`: política de privacidad en español e inglés.
- `soporte.html` / `support.html`: contacto y preguntas de soporte en español e inglés.
- `styles.css`: identidad visual y diseño responsive.
- `app.js`: demostración de registro de toma, sin persistencia.
- `assets/memodose-logo.png`: logo original de la app.
- `PROJECT_CONTEXT.md`: decisiones recuperadas para continuar el proyecto.
