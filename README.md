# 🚀 Portfolio Personal - Soufiane Raki

![Astro](https://img.shields.io/badge/Astro-5.4.2-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

## 📋 Descripción del Proyecto

Este es mi portfolio personal desarrollado con **Astro**, una plataforma web moderna que combina la velocidad de los sitios estáticos con la flexibilidad de los frameworks dinámicos. El proyecto presenta mi experiencia como desarrollador full-stack, certificaciones, proyectos realizados y un blog personal.

### ✨ Características Principales

- 🌐 **Multilingüe**: Soporte completo para español e inglés
- 🌙 **Tema Oscuro/Claro**: Toggle dinámico con persistencia en localStorage
- 📱 **Totalmente Responsivo**: Diseño adaptativo para todos los dispositivos
- ⚡ **Rendimiento Optimizado**: Construido con Astro para máxima velocidad
- 🎨 **Diseño Moderno**: Interfaz glassmorphism con animaciones suaves
- 📧 **Formulario de Contacto**: Integración con EmailJS
- 📝 **Sistema de Blog**: Gestión de contenido con Markdown
- 🏆 **Galería de Certificados**: Visualización interactiva de certificaciones
- 💼 **Portfolio de Proyectos**: Showcase de trabajos realizados

## 🛠️ Tecnologías Utilizadas

### Frontend
- **Astro 5.4.2** - Framework principal
- **TypeScript** - Tipado estático
- **CSS3** - Estilos personalizados con variables CSS
- **Font Awesome** - Iconografía

### Herramientas de Desarrollo
- **Node.js** - Entorno de ejecución
- **npm** - Gestor de paquetes
- **Astro Content Collections** - Gestión de contenido
- **Zod** - Validación de esquemas

### Servicios Externos
- **EmailJS** - Envío de formularios de contacto
- **GitHub** - Control de versiones y hosting de código

## 📁 Estructura del Proyecto

```
portfolio/
├── 📁 public/                 # Archivos estáticos
│   ├── 📁 certificates/       # Imágenes y PDFs de certificados
│   ├── 📁 blog/              # Assets del blog
│   └── 🖼️ avatar.png         # Imágenes de perfil
├── 📁 src/
│   ├── 📁 components/        # Componentes reutilizables
│   │   ├── 🧩 Body.astro
│   │   ├── 🌐 LanguageToggle.astro
│   │   ├── 🧭 Menu.astro
│   │   ├── 🌙 ThemeToggle.astro
│   │   └── 👋 Welcome.astro
│   ├── 📁 content/           # Contenido en Markdown
│   │   ├── 📁 blog/          # Artículos del blog
│   │   ├── 📁 certificates/  # Datos de certificados
│   │   ├── 📁 experience/    # Experiencia laboral
│   │   ├── 📁 works/         # Proyectos realizados
│   │   └── ⚙️ config.ts      # Configuración de colecciones
│   ├── 📁 i18n/              # Internacionalización
│   │   ├── 🌍 translations.ts
│   │   └── 🔧 useTranslations.ts
│   ├── 📁 layouts/           # Plantillas base
│   │   └── 📄 Layout.astro
│   ├── 📁 pages/             # Páginas de la aplicación
│   │   ├── 🏠 index.astro
│   │   ├── 👤 about.astro
│   │   ├── 🛠️ services.astro
│   │   ├── 💼 experience/
│   │   ├── 🏆 certificates/
│   │   ├── 💻 works/
│   │   ├── 📝 blog/
│   │   └── 📞 contact/
│   └── 📁 styles/            # Estilos globales
│       └── 🎨 global.css
├── ⚙️ astro.config.mjs       # Configuración de Astro
├── 📦 package.json           # Dependencias del proyecto
└── 📄 README.md             # Este archivo
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/portfolio.git
   cd portfolio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno** (opcional)
   ```bash
   # Crear archivo .env.local
   EMAILJS_SERVICE_ID=tu_service_id
   EMAILJS_TEMPLATE_ID=tu_template_id
   EMAILJS_PUBLIC_KEY=tu_public_key
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

5. **Construir para producción**
   ```bash
   npm run build
   ```

6. **Previsualizar build de producción**
   ```bash
   npm run preview
   ```

## 🎯 Funcionalidades Detalladas

### 🌐 Sistema de Internacionalización
- **Archivo de traducciones**: `src/i18n/translations.ts`
- **Soporte para**: Español (es) e Inglés (en)
- **Cambio dinámico**: Toggle en tiempo real sin recarga de página
- **Persistencia**: Preferencia guardada en localStorage

### 🌙 Sistema de Temas
- **Temas disponibles**: Modo claro y modo oscuro
- **Toggle animado**: Transición suave entre temas
- **Persistencia**: Estado guardado en localStorage
- **Variables CSS**: Sistema de colores dinámico

### 📝 Gestión de Contenido
- **Content Collections**: Organización estructurada del contenido
- **Validación con Zod**: Esquemas de validación para cada tipo de contenido
- **Markdown**: Escritura de contenido en formato Markdown
- **Metadatos**: Frontmatter para cada artículo/proyecto

### 📧 Formulario de Contacto
- **EmailJS**: Integración para envío de emails
- **Validación**: Validación del lado del cliente
- **Estados**: Loading, success y error
- **Responsive**: Adaptado para móviles

## 🔧 Configuración Avanzada

### Personalización de Contenido

1. **Agregar nuevo proyecto**:
   ```markdown
   # src/content/works/nuevo-proyecto.md
   ---
   title: "Mi Nuevo Proyecto"
   description: "Descripción del proyecto"
   image: "/works/nuevo-proyecto.jpg"
   technologies: ["React", "Node.js", "MongoDB"]
   link: "https://mi-proyecto.com"
   github: "https://github.com/usuario/proyecto"
   completed: "2024-01-15"
   featured: true
   ---
   ```

2. **Agregar nuevo certificado**:
   ```markdown
   # src/content/certificates/nuevo-certificado.md
   ---
   title: "Nuevo Certificado"
   issuer: "Institución Emisora"
   date: "2024-01-15"
   category: "Desarrollo Web"
   type: "certification"
   image: "/certificates/nuevo-certificado.jpg"
   description: "Descripción del certificado"
   skills: ["JavaScript", "React", "Node.js"]
   ---
   ```

3. **Agregar nuevo artículo de blog**:
   ```markdown
   # src/content/blog/nuevo-articulo.md
   ---
   title: "Mi Nuevo Artículo"
   description: "Descripción del artículo"
   pubDate: 2024-01-15
   tags: ["tutorial", "javascript"]
   ---
   Contenido del artículo...
   ```

### Personalización de Estilos

El archivo `src/styles/global.css` contiene todas las variables CSS personalizables:

```css
:root {
  /* Colores principales */
  --primary: #your-color;
  --accent: #your-accent-color;
  
  /* Tema claro */
  --background: #ffffff;
  --text: #000000;
  
  /* Tema oscuro */
  --background-dark: #000000;
  --text-dark: #ffffff;
}
```

## 🐛 Problemas Conocidos y Soluciones

### 1. **Problema**: Error de hidratación en componentes de Astro
**Solución**: Asegúrate de que los componentes que usan JavaScript del lado del cliente tengan la directiva `client:load` o `client:visible`.

### 2. **Problema**: Imágenes no se cargan correctamente
**Solución**: Verifica que las rutas de las imágenes en el frontmatter sean relativas a la carpeta `public/`.

### 3. **Problema**: Formulario de contacto no envía emails
**Solución**: 
- Verifica la configuración de EmailJS
- Asegúrate de que las variables de entorno estén correctamente configuradas
- Revisa la consola del navegador para errores de JavaScript

### 4. **Problema**: Tema no persiste después de recargar la página
**Solución**: Verifica que el script de inicialización del tema se ejecute antes de que se renderice el contenido.

### 5. **Problema**: Contenido no se actualiza en desarrollo
**Solución**: Reinicia el servidor de desarrollo después de agregar nuevo contenido a las colecciones.

## 🚀 Despliegue

### Opciones de Despliegue

1. **Vercel** (Recomendado)
   ```bash
   npm install -g vercel
   vercel --prod
   ```

2. **Netlify**
   ```bash
   npm run build
   # Subir carpeta dist/ a Netlify
   ```

3. **GitHub Pages**
   ```bash
   npm run build
   # Configurar GitHub Actions para deploy automático
   ```

## 📊 Rendimiento

- **Lighthouse Score**: 95+ en todas las métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Soufiane Raki**
- 🌐 Website: [tu-portfolio.com](https://tu-portfolio.com)
- 📧 Email: tu-email@ejemplo.com
- 💼 LinkedIn: [tu-linkedin](https://linkedin.com/in/tu-perfil)
- 🐙 GitHub: [@tu-usuario](https://github.com/tu-usuario)

## 🙏 Agradecimientos

- [Astro](https://astro.build/) - Por el framework increíble
- [Font Awesome](https://fontawesome.com/) - Por los iconos
- [EmailJS](https://www.emailjs.com/) - Por el servicio de emails
- Comunidad de desarrolladores - Por la inspiración y recursos

---

⭐ **¡Si te gusta este proyecto, no olvides darle una estrella!** ⭐