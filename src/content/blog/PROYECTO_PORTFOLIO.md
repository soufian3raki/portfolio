---
title: '📱 Portfolio Profesional - Soufiane Raki'
description: ''
pubDate: '2024-03-05'
image: '/blog/TOAST_NOTIFICATIONS_SYSTEM/maxresdefault.jpg'
tags: ['astro', 'blogging', 'desarrollo web']
---

# 📱 Portfolio Profesional - Soufiane Raki

## 📋 Índice

1. [Descripción General](#-descripción-general)
2. [Tecnologías Utilizadas](#-tecnologías-utilizadas)
3. [Características Principales](#-características-principales)
4. [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
5. [Sistema de Diseño](#-sistema-de-diseño)
6. [Optimizaciones SEO](#-optimizaciones-seo)
7. [Componentes Principales](#-componentes-principales)
8. [Funcionalidades Especiales](#-funcionalidades-especiales)
9. [Sistema de Notificaciones](#-sistema-de-notificaciones)
10. [Instalación y Configuración](#-instalación-y-configuración)
11. [Desafíos y Soluciones](#-desafíos-y-soluciones)
12. [Próximas Mejoras](#-próximas-mejoras)

---

## 🎯 Descripción General

Portfolio profesional moderno y responsive desarrollado con **Astro**, diseñado para mostrar proyectos, certificaciones, experiencia y habilidades de un desarrollador Full Stack. El sitio cuenta con un diseño elegante basado en **glassmorphism**, sistema de temas (claro/oscuro), soporte multiidioma (español/inglés) y optimizaciones avanzadas de SEO.

### 🎨 Características Visuales

- **Diseño Glassmorphism**: Efectos de cristal esmerilado con blur
- **Tema Dinámico**: Modo claro/oscuro con transiciones suaves
- **Animaciones Fluidas**: Transiciones CSS personalizadas
- **Responsive Design**: Adaptado para móvil, tablet y desktop
- **Iconografía Moderna**: Font Awesome 6.0

---

## 🛠️ Tecnologías Utilizadas

### Frontend Framework
```
├── Astro v5.4.2          # Framework principal
├── TypeScript            # Tipado estático
├── CSS3                  # Estilos (sin preprocessadores)
└── JavaScript ES6+       # Lógica del cliente
```

### Librerías y Servicios
```
├── EmailJS               # Envío de emails desde el formulario
├── Font Awesome 6.0      # Iconos
├── PWA Manifest          # Progressive Web App
└── Schema.org            # Datos estructurados para SEO
```

### Herramientas de Desarrollo
```
├── Vite                  # Build tool
├── ESLint               # Linter
└── Git                  # Control de versiones
```

---

## ⭐ Características Principales

### 1. **Navegación Intuitiva**
- Menú lateral fijo en desktop
- Menú hamburguesa en móvil
- Navegación suave entre secciones
- Indicador de página activa

### 2. **Sistema de Contenido**
Basado en **Astro Content Collections**:
- **Blog**: Artículos en Markdown con imágenes
- **Certificados**: Colección con datos estructurados
- **Proyectos**: Portfolio de trabajos realizados
- **Experiencia**: Timeline de trayectoria profesional

### 3. **Internacionalización (i18n)**
- Español (predeterminado)
- Inglés
- Selector de idioma integrado
- URLs con prefijo de idioma
- Metadatos traducidos

### 4. **Optimización SEO**
✅ Meta tags completos (título, descripción, keywords)  
✅ Open Graph para redes sociales  
✅ Twitter Cards  
✅ Datos estructurados JSON-LD (Schema.org)  
✅ Sitemap.xml dinámico  
✅ Robots.txt configurado  
✅ URLs canónicas  
✅ Etiquetas hreflang para i18n  

### 5. **Progressive Web App (PWA)**
- Manifest.json configurado
- Icono de aplicación
- Instalable en dispositivos móviles
- Experiencia de aplicación nativa

---

## 📁 Arquitectura del Proyecto

```
portfolio/
├── public/                      # Archivos estáticos
│   ├── avatar.png              # Imagen de perfil
│   ├── favicon.svg             # Favicon
│   ├── manifest.json           # PWA manifest
│   ├── robots.txt              # Instrucciones para crawlers
│   └── blog/                   # Imágenes de blog posts
│
├── src/
│   ├── components/             # Componentes reutilizables
│   │   ├── Menu.astro         # Menú de navegación
│   │   ├── ThemeToggle.astro  # Selector de tema
│   │   ├── LanguageToggle.astro # Selector de idioma
│   │   └── OptimizedImage.astro # Componente de imágenes
│   │
│   ├── content/                # Content Collections
│   │   ├── blog/              # Posts del blog (Markdown)
│   │   ├── certificates/      # Certificados (Markdown)
│   │   ├── works/             # Proyectos (Markdown)
│   │   └── config.ts          # Configuración de schemas
│   │
│   ├── layouts/
│   │   └── Layout.astro       # Layout principal con SEO
│   │
│   ├── pages/                  # Rutas de la aplicación
│   │   ├── index.astro        # Página de inicio
│   │   ├── about.astro        # Sobre mí
│   │   ├── blog/              # Blog posts
│   │   ├── certificates/      # Certificados
│   │   ├── contact/           # Formulario de contacto
│   │   ├── experience/        # Experiencia laboral
│   │   ├── works/             # Portfolio de proyectos
│   │   ├── services.astro     # Servicios ofrecidos
│   │   └── sitemap.xml.ts     # Sitemap dinámico
│   │
│   └── styles/                 # Estilos globales
│       ├── global.css         # Variables CSS y base
│       └── components.css     # Estilos de componentes
│
├── astro.config.mjs            # Configuración de Astro
├── package.json                # Dependencias
├── tsconfig.json               # Configuración TypeScript
└── README.md                   # Documentación principal
```

---

## 🎨 Sistema de Diseño

### Variables CSS (Design Tokens)

#### Colores
```css
/* Tema Claro */
--background: #ffffff;
--text: #1a1a1a;
--text-secondary: #6b7280;
--accent: #007AFF;

/* Tema Oscuro */
--background: #0a0a0a;
--text: #ffffff;
--text-secondary: #9ca3af;
--accent: #007AFF;
```

#### Espaciado
```css
--spacing-xs: 0.25rem;    /* 4px */
--spacing-sm: 0.5rem;     /* 8px */
--spacing-md: 1rem;       /* 16px */
--spacing-lg: 1.5rem;     /* 24px */
--spacing-xl: 2rem;       /* 32px */
--spacing-2xl: 3rem;      /* 48px */
```

#### Tipografía
```css
--font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-bold: 700;
```

#### Efectos Glassmorphism
```css
--background-glass: rgba(255, 255, 255, 0.1);
--glass-blur: blur(10px);
--glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
--border: rgba(255, 255, 255, 0.18);
```

#### Z-Index
```css
--z-base: 1;
--z-dropdown: 1000;
--z-fixed: 1020;
--z-modal: 1050;
--z-tooltip: 1070;
```

### Componentes CSS

#### Botones
```css
.btn {
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    font-weight: var(--font-weight-medium);
    transition: all var(--transition-base);
}

.btn--primary {
    background: var(--accent);
    color: white;
}

.btn--secondary {
    background: transparent;
    border: 2px solid var(--accent);
    color: var(--accent);
}
```

#### Cards
```css
.card {
    background: var(--card-bg);
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid var(--border);
    box-shadow: var(--glass-shadow);
}
```

---

## 🔍 Optimizaciones SEO

### Meta Tags Implementados

```html
<!-- Meta Tags Primarios -->
<title>Soufiane Raki - Desarrollador Full Stack | Portfolio</title>
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta name="author" content="Soufiane Raki">
<meta name="robots" content="index,follow">
<link rel="canonical" href="https://soufiane-raki.com">

<!-- Open Graph (Facebook) -->
<meta property="og:type" content="website">
<meta property="og:url" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">

<!-- Twitter Cards -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:title" content="...">
<meta property="twitter:description" content="...">
<meta property="twitter:image" content="...">

<!-- i18n -->
<link rel="alternate" hreflang="es" href="...">
<link rel="alternate" hreflang="en" href="...">
<link rel="alternate" hreflang="x-default" href="...">
```

### Datos Estructurados (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Soufiane Raki",
  "jobTitle": "Full Stack Developer",
  "description": "Desarrollador Full Stack especializado en React, Node.js...",
  "url": "https://soufiane-raki.com",
  "image": "https://soufiane-raki.com/avatar.png",
  "sameAs": [
    "https://github.com/soufiane-raki",
    "https://linkedin.com/in/soufiane-raki"
  ]
}
```

### Sitemap.xml Dinámico

```typescript
// src/pages/sitemap.xml.ts
export async function GET() {
  const posts = await getCollection('blog');
  const works = await getCollection('works');
  const certificates = await getCollection('certificates');
  
  // Generar XML dinámicamente...
}
```

---

## 🧩 Componentes Principales

### 1. **Menu.astro**
Menú de navegación lateral fijo con:
- Logo y avatar
- Enlaces a secciones principales
- Iconos Font Awesome
- Estado activo visual
- Versión móvil con hamburguesa

### 2. **ThemeToggle.astro**
Selector de tema claro/oscuro:
- Almacenamiento en localStorage
- Transiciones suaves
- Icono sol/luna animado
- Persistencia entre páginas

### 3. **LanguageToggle.astro**
Selector de idioma ES/EN:
- Cambio de idioma sin recargar
- Traducción de rutas
- Bandera animada
- Estado persistente

### 4. **Layout.astro**
Layout principal con:
- Meta tags SEO completos
- Datos estructurados
- Importación de estilos globales
- Scripts de tema e idioma

---

## 🎯 Funcionalidades Especiales

### 📄 Sistema de Blog

**Características:**
- Posts en Markdown con frontmatter
- Imágenes de portada
- Etiquetas (tags)
- Fecha de publicación
- Descripción SEO
- Botón "Volver al Blog"

**Ejemplo de Post:**
```markdown
---
title: "Mi Primer Post"
description: "Descripción del artículo"
pubDate: 2024-01-15
image: "/blog/mi-post/cover.jpg"
tags: ["javascript", "react"]
---

Contenido del post...
```

### 🎓 Sistema de Certificados

**Características:**
- Modal detallado con información completa
- Filtros por categoría, tipo y habilidad
- Tarjetas con hover effects
- Visualización de imagen del certificado
- Enlaces a credenciales online
- Descarga de PDF

**Datos del Certificado:**
- Título (español/inglés)
- Emisor
- Fecha de obtención
- Categoría (Frontend, Backend, etc.)
- Tipo (Certificación, Título)
- Habilidades adquiridas
- Contenido cubierto
- Resultados de aprendizaje
- Credencial ID y URL
- PDF descargable

### 💼 Portfolio de Proyectos

**Características:**
- Grid responsive de proyectos
- Vista detallada por proyecto
- Tecnologías utilizadas
- Enlaces a GitHub/Demo
- Capturas de pantalla
- Descripción completa

### 📧 Formulario de Contacto

**Características:**
- Integración con EmailJS
- Validación de campos
- Estado de carga (spinner)
- Notificaciones toast modernas
- Campos: Nombre, Email, Asunto, Mensaje

---

## 🔔 Sistema de Notificaciones Toast

### Características

✅ **4 Tipos de Notificación:**
- Success (verde) - Operación exitosa
- Error (rojo) - Error en operación
- Info (azul) - Información general
- Warning (naranja) - Advertencia

✅ **Diseño Moderno:**
- Fondo sólido con gradiente sutil
- Borde izquierdo de color con glow
- Icono contextual grande
- Título y mensaje
- Botón de cierre manual
- Barra de progreso animada

✅ **Animaciones:**
- Entrada: Slide desde la derecha
- Salida: Slide hacia la derecha
- Auto-cierre: 4 segundos
- Transiciones suaves cubic-bezier

✅ **Responsive:**
- Desktop: Esquina superior derecha
- Móvil: Ancho completo, centrado arriba

### Estructura del Toast

```html
<div class="toast success">
  <div class="toast-icon">
    <i class="fas fa-check-circle"></i>
  </div>
  <div class="toast-content">
    <h4 class="toast-title">¡Mensaje Enviado!</h4>
    <p class="toast-message">Gracias por contactarme...</p>
  </div>
  <button class="toast-close">
    <i class="fas fa-times"></i>
  </button>
  <div class="toast-progress"></div>
</div>
```

### Uso en Código

```typescript
showToast(
  'success',
  '¡Mensaje Enviado!',
  'Gracias por contactarme. Te responderé pronto.'
);

showToast(
  'error',
  'Error al Enviar',
  'Hubo un problema. Inténtalo de nuevo.'
);
```

---

## 🚀 Instalación y Configuración

### Requisitos Previos
```bash
Node.js >= 18.0.0
npm >= 9.0.0
```

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio.git

# Navegar al directorio
cd portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

### Configuración de EmailJS

1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Configurar servicio de email
3. Crear plantilla de email
4. Obtener las claves (Public Key, Service ID, Template ID)
5. Crear archivo `.env`:

```env
PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
```

### Variables de Entorno

```env
# EmailJS Configuration
PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
PUBLIC_EMAILJS_SERVICE_ID=your_service_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id

# Site Configuration
PUBLIC_SITE_URL=https://tu-dominio.com
```

---

## 🎪 Desafíos y Soluciones

### 1. **Layout con Menú Fijo**

**Problema:**  
El contenido se ocultaba debajo del menú fijo en desktop.

**Solución:**
```css
.main-content {
  margin-left: 0;
  transition: margin-left var(--transition-base);
}

@media (min-width: 768px) {
  .main-content {
    margin-left: 250px; /* Ancho del menú */
  }
}
```

### 2. **Modal de Certificados No Abría**

**Problema:**  
Las funciones JavaScript no eran globalmente accesibles.

**Solución:**
```typescript
// Declarar funciones en window
window.openCertificateModal = function(element) { ... }
window.closeCertificateModal = function() { ... }

// Usar script is:inline para evitar transformaciones
<script is:inline>
  // Código...
</script>
```

### 3. **Imágenes de Blog No Cargaban**

**Problema:**  
Schema de content collection solo tenía `heroImage`, pero Markdown usaba `image`.

**Solución:**
```typescript
// Agregar ambos campos como opcionales
const blog = defineCollection({
  schema: z.object({
    image: z.string().optional(),
    heroImage: z.string().optional(),
    // ...
  })
});

// Priorizar image, luego heroImage
const img = post.data.image || post.data.heroImage || '/avatar.png';
```

### 4. **Console Ninja Causaba Errores de Sintaxis**

**Problema:**  
La extensión Console Ninja inyectaba código malformado en `console.log`.

**Solución:**
1. Usar `is:inline` en scripts para evitar transformaciones
2. Eliminar todos los `console.log` del código de producción
3. Marcar funciones como globales usando `window.`

### 5. **Fondo Transparente en Toasts**

**Problema:**  
Las notificaciones tenían fondo transparente con backdrop-filter.

**Solución:**
```css
.toast {
  /* Antes: var(--card-bg) con backdrop-filter */
  background: var(--background); /* Fondo sólido */
}

.toast.success {
  /* Gradiente sutil de color contextual */
  background: linear-gradient(
    to right, 
    rgba(16, 185, 129, 0.05), 
    var(--background)
  );
}
```

---

## 📈 Próximas Mejoras

### Funcionalidades Planeadas

- [ ] Sistema de comentarios en blog
- [ ] Búsqueda de contenido
- [ ] Filtros avanzados en proyectos
- [ ] Modo offline (Service Worker)
- [ ] Analytics integrado
- [ ] Sección de testimonios
- [ ] Galería de imágenes
- [ ] Newsletter subscription
- [ ] Integración con CMS headless
- [ ] Tests unitarios y E2E

### Optimizaciones Técnicas

- [ ] Lazy loading de imágenes
- [ ] Code splitting avanzado
- [ ] Preload de recursos críticos
- [ ] Caché estratégica
- [ ] Optimización de Core Web Vitals
- [ ] A11y (accesibilidad) completa
- [ ] Performance budget

---

## 📊 Métricas y Rendimiento

### Lighthouse Score (Objetivo)
```
Performance:    95+
Accessibility:  100
Best Practices: 100
SEO:            100
```

### Bundle Size
```
HTML:  < 50 KB
CSS:   < 30 KB
JS:    < 100 KB (total)
```

### Tiempo de Carga
```
First Contentful Paint:  < 1.5s
Largest Contentful Paint: < 2.5s
Time to Interactive:      < 3.5s
```

---

## 🤝 Contribución

Si deseas contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👨‍💻 Autor

**Soufiane Raki**
- Portfolio: [soufiane-raki.com](https://soufiane-raki.com)
- GitHub: [@soufiane-raki](https://github.com/soufiane-raki)
- LinkedIn: [/in/soufiane-raki](https://linkedin.com/in/soufiane-raki)
- Email: tu.email@ejemplo.com

---

## 🙏 Agradecimientos

- [Astro](https://astro.build/) - Framework increíble
- [Font Awesome](https://fontawesome.com/) - Iconos
- [EmailJS](https://www.emailjs.com/) - Servicio de emails
- Comunidad de desarrolladores por el feedback

---

## 📚 Recursos Adicionales

### Documentación del Proyecto
- [README.md](./README.md) - Visión general
- [SEO-IMPROVEMENTS.md](./SEO-IMPROVEMENTS.md) - Mejoras SEO detalladas
- [CSS_IMPROVEMENTS.md](./CSS_IMPROVEMENTS.md) - Refactorización CSS
- [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) - Sistema de diseño completo

### Enlaces Útiles
- [Astro Documentation](https://docs.astro.build/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [CSS-Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**¡Gracias por visitar mi portfolio!** 🚀✨

_Última actualización: Septiembre 2025_
