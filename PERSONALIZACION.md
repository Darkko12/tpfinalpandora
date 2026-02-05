# Guía de Personalización

## Cambiar Colores

Los colores principales están definidos en `css/styles.css` al inicio del archivo:

```css
:root {
    --color-primary: #8a62b4;        /* Violeta principal */
    --color-primary-hover: #a07dc9;  /* Violeta hover */
    --color-secondary: #c83250;      /* Rojo secundario */
    --color-dark: #0d0a15;           /* Fondo oscuro */
    --color-gold: #d4af37;           /* Dorado */
    --color-text: #e8e6ef;           /* Texto claro */
}
```

## Cambiar Fuentes

Las fuentes están configuradas en el `<head>` de `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
```

- **Cinzel**: Para títulos (var(--font-heading))
- **Crimson Text**: Para cuerpo de texto (var(--font-body))

## Modificar Contenido

### Título del Proyecto
Archivo: `index.html`
- Línea ~15: `<title>`
- Línea ~28: `.navbar-brand`
- Línea ~64: `.hero-title`

### Información del Equipo
Archivo: `index.html`
Buscar la sección `id="equipo"` (aproximadamente línea 350)

### Imágenes de Muestra
Para las imágenes de ejemplo en la sección "Proceso IA":
- Cambiar las rutas en líneas ~250-270 de `index.html`

## Ajustar el Juego

### Tamaño del iframe
Archivo: `css/styles.css`
Buscar `.game-frame` (aproximadamente línea 580):

```css
.game-frame {
    padding-bottom: 75%; /* Cambiar este porcentaje */
}
```

- 75% = Relación 4:3
- 56.25% = Relación 16:9
- 100% = Cuadrado

## Optimizaciones

### Comprimir Imágenes
Usa herramientas como:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

### Comprimir Audio
Reduce el tamaño de los MP3 sin perder calidad:
- Bitrate recomendado: 128 kbps para música
- Bitrate recomendado: 64 kbps para efectos

## Secciones del Sitio

1. **Hero** (#inicio): Pantalla principal con fondo
2. **Temática** (#tematica): Información sobre el mito
3. **Proceso** (#proceso): Accordion con IA y programación
4. **Equipo** (#equipo): Cards de los integrantes
5. **Juego** (#juego): iframe con la aventura gráfica

## Troubleshooting

### El juego no se ve
- Verifica que `juego.html` esté en la raíz
- Verifica que `tpfinal1.js` esté en la raíz
- Revisa la consola del navegador (F12) para errores

### Las imágenes no cargan
- Verifica la estructura de carpetas: `assets/imagenes/`
- Verifica que los nombres coincidan exactamente
- GitHub Pages es case-sensitive: `Pandora1.png` ≠ `pandora1.png`

### Los sonidos no funcionan
- Verifica la estructura de carpetas: `assets/sounds/`
- En algunos navegadores, el audio necesita interacción del usuario primero
- Revisa que los archivos sean MP3 válidos

### El fondo no se ve
- Verifica que `fondo1.jpg` esté en la raíz del proyecto
- Verifica en `css/styles.css` que la ruta sea correcta: `url('../fondo1.jpg')`

## Consejos para GitHub Pages

1. **Nombres de archivo**: Usa minúsculas y evita espacios
2. **Commits frecuentes**: Guarda cambios regularmente
3. **Tiempo de deploy**: GitHub Pages puede tardar 1-5 minutos en actualizar
4. **Cache del navegador**: Usa Ctrl+Shift+R para refrescar sin cache
5. **Archivos grandes**: GitHub recomienda archivos < 100MB

## Recursos Adicionales

- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.3/)
- [p5.js Reference](https://p5js.org/reference/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Google Fonts](https://fonts.google.com/)
