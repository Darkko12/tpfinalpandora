# El Destino de Pandora - Sitio Web

Aventura Gráfica Interactiva basada en el mito griego de Pandora.

## 📋 Estructura del Proyecto

```
/
├── index.html              # Página principal del sitio
├── juego.html              # Página del juego (p5.js)
├── tpfinal1.js             # Código JavaScript del juego
├── fondo1.jpg              # Imagen de fondo para el hero
├── css/
│   └── styles.css          # Estilos personalizados
├── js/
│   └── main.js             # JavaScript para interacciones
├── assets/
│   ├── imagenes/           # Imágenes del juego (pandora1.png a pandora14.png)
│   └── sounds/             # Archivos de audio
│       ├── fondo.mp3
│       ├── finalbueno.mp3
│       ├── finalmalo.mp3
│       └── boton.mp3
└── README.md
```

## 🎮 Características

- **Diseño Responsivo** con Bootstrap 5
- **Navegación Suave** entre secciones
- **Accordion Interactivo** para el proceso de producción
- **Integración del Juego** con p5.js en iframe
- **Estética Oscura y Elegante** acorde al mito de Pandora
- **4 Finales Diferentes** en la aventura gráfica

## 🚀 Instrucciones para GitHub Pages

### 1. Crear el Repositorio

```bash
git init
git add .
git commit -m "Initial commit: El Destino de Pandora"
```

### 2. Subir a GitHub

```bash
git remote add origin https://github.com/TU-USUARIO/el-destino-de-pandora.git
git branch -M main
git push -u origin main
```

### 3. Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona **main** branch
5. Click en **Save**
6. Espera unos minutos y tu sitio estará en: `https://TU-USUARIO.github.io/el-destino-de-pandora/`

## 📁 Archivos Necesarios

**IMPORTANTE:** Debes agregar los siguientes archivos que no están incluidos:

### Carpeta `assets/imagenes/`:
- pandora1.png
- pandora2.png
- pandora3.png
- pandora4.png
- pandora5.png
- pandora6.png
- pandora7.png
- pandora8.png
- pandora9.png
- pandora10.png
- pandora11.png
- pandora12.png
- pandora13.png
- pandora14.png

### Carpeta `assets/sounds/`:
- fondo.mp3 (música de fondo)
- finalbueno.mp3 (música para finales positivos)
- finalmalo.mp3 (música para finales negativos)
- boton.mp3 (sonido de click)

## 🎨 Tecnologías Utilizadas

- HTML5
- CSS3 (con variables CSS)
- JavaScript ES6
- Bootstrap 5.3.2
- Bootstrap Icons 1.11.1
- p5.js 1.9.3
- p5.sound
- Google Fonts (Cinzel & Crimson Text)

## 👥 Equipo

- **Darkko Nair Jorajuria Etchevarne** - Legajo: 122739/6
  - [Video de Presentación](https://youtu.be/mq8bYUWPzSk)
- **Seanna Ursula Sarlangue** - Legajo: 122892/5
  - [Video de Presentación](https://youtu.be/E8nro34AR34)

## 📚 Materia

**Programación para Medios Interactivos Orientada a las Tecnologías Web**
- Comisión 3
- Profesor: David Bedoian
- Año: 2025

## 📝 Licencia

Este proyecto fue creado con fines educativos para la materia PMIW.

---

**¿Problemas?** Asegúrate de que:
- Todos los archivos de `assets/` estén en sus carpetas correspondientes
- Las rutas en `tpfinal1.js` apunten correctamente a los assets
- El archivo `fondo1.jpg` esté en la raíz del proyecto
