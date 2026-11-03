# Curva S · Ecopreneur

App de control de plazo: curva S planeada vs real ponderada por HH, SPI, atraso en puntos y en semanas, Earned Schedule, proyección de término y control de estados de pago del contratista. Sin control de costos: el foco es el plazo.

## Cómo se usa

- **App de trabajo:** abre el link del sitio (GitHub Pages). Los datos se guardan en ese teléfono o computador.
- **Instalar en el teléfono:** en iPhone, Safari → Compartir → "Agregar a inicio". En Android, Chrome → menú → "Instalar app".
- **Cada semana:** pestaña *Avance semanal* → nuevo corte → % completado por actividad (y % del estado de pago si llegó) → Guardar.
- **Respaldo:** pestaña *Proyecto* → "Descargar respaldo (datos.json)". Con "Restaurar desde archivo" se cargan los datos en otro equipo.

## Vista de solo lectura para compartir

El link `https://mmunoz049-dot.github.io/curva-s-ecopreneur/?lectura` muestra solo el informe, con los datos de `datos.json` de este repositorio.

Para un cliente, agrega el proyecto: `?lectura&proyecto=<id>` muestra solo ese proyecto, sin selector (ej. `?lectura&proyecto=pem-colun-537`).

Para actualizarla después de un corte:
1. En la app, descarga el respaldo `datos.json`.
2. En GitHub, abre este repositorio → `datos.json` → lápiz o "Add file → Upload files" y reemplázalo.
3. En uno o dos minutos el link muestra el informe nuevo.

## Publicar con GitHub Pages (una vez)

Settings → Pages → Source: "Deploy from a branch" → Branch: `main` / carpeta `/ (root)` → Save. El sitio queda en https://mmunoz049-dot.github.io/curva-s-ecopreneur/. GitHub Pages gratis requiere que el repositorio sea público; los datos de `datos.json` quedan visibles para quien tenga el link.

## Archivos

| Archivo | Para qué |
|---|---|
| `index.html` | La app completa (un solo archivo) |
| `datos.json` | Datos publicados para la vista de solo lectura y carga inicial |
| `manifest.webmanifest`, `sw.js`, `icons/` | Instalación como app y uso sin conexión |
