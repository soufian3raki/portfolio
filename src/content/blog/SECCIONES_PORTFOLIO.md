---
title: '📑 Secciones del Portfolio - Guía Completa'
description: ''
pubDate: '2024-03-05'
image: '/blog/TOAST_NOTIFICATIONS_SYSTEM/maxresdefault.jpg'
tags: ['astro', 'blogging', 'desarrollo web']
---

# 📑 Secciones del Portfolio - Guía Completa

## 📋 Índice

1. [Introducción](#-introducción)
2. [Inicio / Home](#-inicio--home)
3. [Sobre Mí / About](#-sobre-mí--about)
4. [Proyectos / Works](#-proyectos--works)
5. [Experiencia / Experience](#-experiencia--experience)
6. [Certificados / Certificates](#-certificados--certificates)
7. [Blog](#-blog)
8. [Servicios / Services](#-servicios--services)
9. [Contacto / Contact](#-contacto--contact)
10. [Componentes Globales](#-componentes-globales)

---

## 🎯 Introducción

Este documento explica en detalle cada sección del portfolio, su propósito, estructura, implementación y características. El portfolio está diseñado siguiendo las mejores prácticas de UX/UI, accesibilidad y SEO.

### Estructura General

```
Portfolio
├── 🏠 Inicio (Landing Page)
├── 👤 Sobre Mí (About)
├── 💼 Proyectos (Works)
├── 📊 Experiencia (Experience)
├── 🎓 Certificados (Certificates)
├── 📝 Blog
├── 🛠️ Servicios (Services)
└── 📧 Contacto (Contact)
```

---

## 🏠 Inicio / Home

**Ruta:** `/` o `/index.astro`  
**Objetivo:** Causar una primera impresión impactante y presentar al desarrollador

### 🎯 Propósito

La página de inicio es la **carta de presentación** del portfolio. Debe captar la atención del visitante en los primeros 3 segundos y comunicar claramente:
- Quién eres
- Qué haces
- Cuál es tu especialidad
- Cómo contactarte

### 📐 Estructura

```html
<Layout title="Soufiane Raki - Desarrollador Full Stack">
  <main class="main-content">
    <section class="hero">
      <!-- Saludo -->
      <h2>¡HOLA!</h2>
      
      <!-- Nombre -->
      <h1>Soufiane Raki</h1>
      
      <!-- Descripción -->
      <p>Desarrollador Full Stack apasionado por crear...</p>
      
      <!-- Skill Tags -->
      <div class="skill-tags">
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>React</span>
        <span>Node.js</span>
        <span>MongoDB</span>
        <span>PostgreSQL</span>
      </div>
      
      <!-- Call to Actions -->
      <div class="hero__actions">
        <a href="/contact">Contrátame</a>
        <a href="/cv.pdf">CV</a>
        <a href="/works">Ver Proyectos</a>
      </div>
    </section>
    
    <!-- SEO Content (oculto visualmente) -->
    <section class="seo-content">
      <!-- Contenido para motores de búsqueda -->
    </section>
  </main>
</Layout>
```

### 🎨 Elementos Clave

#### 1. **Hero Section**
```css
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
}
```

**Características:**
- Ocupa altura completa de viewport
- Centrado vertical y horizontal
- Responsive y adaptable
- Animaciones de entrada

#### 2. **Skill Tags**
```html
<div class="skill-tags">
  <span class="skill-tag">
    <i class="fab fa-js-square skill-tag__icon"></i>
    JavaScript
  </span>
  <!-- Más skills... -->
</div>
```

**Características:**
- Iconos de Font Awesome
- Animación escalonada (stagger)
- Hover effects
- Código de colores

#### 3. **Call to Action (CTA)**
```html
<div class="hero__actions">
  <a href="/contact" class="btn btn--primary">
    <i class="fas fa-envelope"></i>
    Contrátame
  </a>
  <a href="/cv.pdf" class="btn btn--secondary">
    <i class="fas fa-download"></i>
    CV
  </a>
  <a href="/works" class="btn btn--link">
    <i class="fas fa-code"></i>
    Ver Proyectos
    <span class="arrow">→</span>
  </a>
</div>
```

**Jerarquía de botones:**
1. **Primary**: Acción principal (Contacto)
2. **Secondary**: Acción secundaria (Descargar CV)
3. **Link**: Navegación (Ver proyectos)

### 📊 SEO Optimization

```html
<!-- SEO Content Section (hidden) -->
<section class="seo-content" style="display: none;">
  <h2>Desarrollador Full Stack Profesional</h2>
  <p>Descripción rica en keywords...</p>
  <h3>Servicios de Desarrollo Web</h3>
  <ul>
    <li>Desarrollo de aplicaciones web con React</li>
    <li>APIs RESTful con Node.js</li>
    <!-- Más servicios... -->
  </ul>
</section>
```

**Propósito:**
- Mejorar SEO sin afectar diseño
- Keywords relevantes
- Contenido estructurado
- Información adicional para crawlers

### ✨ Animaciones

```css
/* Animación escalonada para skill tags */
.skill-tag {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.skill-tag:nth-child(1) { animation-delay: 0.1s; }
.skill-tag:nth-child(2) { animation-delay: 0.2s; }
.skill-tag:nth-child(3) { animation-delay: 0.3s; }
/* ... */

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 👤 Sobre Mí / About

**Ruta:** `/about.astro`  
**Objetivo:** Contar tu historia y conectar emocionalmente con el visitante

### 🎯 Propósito

Esta sección humaniza el portfolio y permite que los reclutadores/clientes te conozcan más allá de tus habilidades técnicas.

### 📐 Estructura Recomendada

```html
<section class="about">
  <!-- Introducción Personal -->
  <div class="about-intro">
    <img src="/avatar.png" alt="Foto de perfil">
    <div class="intro-text">
      <h1>Sobre Mí</h1>
      <p>Breve biografía profesional...</p>
    </div>
  </div>
  
  <!-- Habilidades Técnicas -->
  <div class="skills-section">
    <h2>Habilidades Técnicas</h2>
    <div class="skills-grid">
      <!-- Frontend -->
      <div class="skill-category">
        <h3>Frontend</h3>
        <div class="skill-bars">
          <div class="skill-bar">
            <span>React</span>
            <div class="progress" style="width: 90%"></div>
          </div>
          <!-- Más skills... -->
        </div>
      </div>
      
      <!-- Backend -->
      <div class="skill-category">
        <h3>Backend</h3>
        <!-- Skills... -->
      </div>
      
      <!-- Herramientas -->
      <div class="skill-category">
        <h3>Herramientas</h3>
        <!-- Tools... -->
      </div>
    </div>
  </div>
  
  <!-- Soft Skills -->
  <div class="soft-skills">
    <h2>Habilidades Blandas</h2>
    <div class="soft-skills-grid">
      <div class="soft-skill">
        <i class="fas fa-users"></i>
        <h3>Trabajo en Equipo</h3>
        <p>Descripción...</p>
      </div>
      <!-- Más soft skills... -->
    </div>
  </div>
  
  <!-- Educación -->
  <div class="education">
    <h2>Educación</h2>
    <div class="education-timeline">
      <!-- Timeline items... -->
    </div>
  </div>
  
  <!-- Intereses -->
  <div class="interests">
    <h2>Intereses y Hobbies</h2>
    <div class="interests-grid">
      <!-- Hobbies... -->
    </div>
  </div>
</section>
```

### 🎨 Elementos Destacados

#### 1. **Skill Bars (Barras de Progreso)**
```css
.skill-bar {
  position: relative;
  background: var(--background-glass);
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent-light));
  border-radius: 20px;
  transition: width 1s ease-out;
  animation: fillBar 1s ease-out;
}

@keyframes fillBar {
  from { width: 0%; }
}
```

#### 2. **Soft Skills Cards**
```html
<div class="soft-skill">
  <div class="soft-skill-icon">
    <i class="fas fa-lightbulb"></i>
  </div>
  <h3>Resolución de Problemas</h3>
  <p>Capacidad para analizar y resolver problemas complejos...</p>
</div>
```

### 📊 Información a Incluir

✅ **Esencial:**
- Biografía breve (2-3 párrafos)
- Foto profesional
- Habilidades técnicas principales
- Educación
- Años de experiencia

✅ **Recomendado:**
- Soft skills
- Intereses/hobbies
- Idiomas
- Valores profesionales
- Metodologías de trabajo

❌ **Evitar:**
- Información personal sensible
- Datos de contacto privados
- Edad exacta
- Dirección completa

---

## 💼 Proyectos / Works

**Ruta:** `/works/` y `/works/[slug].astro`  
**Objetivo:** Mostrar tu trabajo y demostrar tus capacidades

### 🎯 Propósito

Esta es una de las secciones **MÁS IMPORTANTES** del portfolio. Aquí demuestras lo que puedes hacer con ejemplos reales.

### 📐 Estructura

#### Index Page (`/works/index.astro`)

```html
<section class="works">
  <h1>Portfolio de Proyectos</h1>
  
  <!-- Filtros (opcional) -->
  <div class="filters">
    <button data-filter="all">Todos</button>
    <button data-filter="frontend">Frontend</button>
    <button data-filter="fullstack">Full Stack</button>
    <button data-filter="backend">Backend</button>
  </div>
  
  <!-- Grid de Proyectos -->
  <div class="projects-grid">
    {projects.map(project => (
      <article class="project-card" data-category={project.category}>
        <!-- Imagen -->
        <div class="project-image">
          <img src={project.image} alt={project.title}>
          <div class="project-overlay">
            <a href={`/works/${project.slug}`}>Ver Detalles</a>
            <a href={project.demo} target="_blank">Demo</a>
            <a href={project.github} target="_blank">GitHub</a>
          </div>
        </div>
        
        <!-- Contenido -->
        <div class="project-content">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          
          <!-- Tecnologías -->
          <div class="tech-stack">
            {project.technologies.map(tech => (
              <span class="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </article>
    ))}
  </div>
</section>
```

#### Detail Page (`/works/[slug].astro`)

```html
<article class="project-detail">
  <!-- Hero del Proyecto -->
  <header class="project-hero">
    <img src={project.image} alt={project.title}>
    <div class="project-info">
      <h1>{project.title}</h1>
      <p class="project-tagline">{project.tagline}</p>
      
      <div class="project-meta">
        <span><i class="fas fa-calendar"></i> {project.date}</span>
        <span><i class="fas fa-tag"></i> {project.category}</span>
      </div>
      
      <div class="project-links">
        <a href={project.demo}>
          <i class="fas fa-external-link-alt"></i> Ver Demo
        </a>
        <a href={project.github}>
          <i class="fab fa-github"></i> Ver Código
        </a>
      </div>
    </div>
  </header>
  
  <!-- Descripción Completa -->
  <section class="project-description">
    <h2>Descripción del Proyecto</h2>
    <Content />
  </section>
  
  <!-- Tecnologías Utilizadas -->
  <section class="tech-stack-detail">
    <h2>Tecnologías Utilizadas</h2>
    <div class="tech-grid">
      {project.technologies.map(tech => (
        <div class="tech-item">
          <i class={`fab fa-${tech.icon}`}></i>
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  </section>
  
  <!-- Características -->
  <section class="features">
    <h2>Características Principales</h2>
    <ul>
      {project.features.map(feature => (
        <li>
          <i class="fas fa-check-circle"></i>
          {feature}
        </li>
      ))}
    </ul>
  </section>
  
  <!-- Capturas de Pantalla -->
  <section class="screenshots">
    <h2>Galería</h2>
    <div class="screenshots-grid">
      {project.screenshots.map(screenshot => (
        <img src={screenshot} alt="Screenshot">
      ))}
    </div>
  </section>
  
  <!-- Desafíos y Aprendizajes -->
  <section class="challenges">
    <h2>Desafíos y Aprendizajes</h2>
    <p>{project.challenges}</p>
  </section>
</article>
```

### 📊 Content Collection Schema

```typescript
// src/content/config.ts
const works = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tagline: z.string().optional(),
    image: z.string(),
    screenshots: z.array(z.string()).optional(),
    date: z.coerce.date(),
    category: z.enum(['frontend', 'backend', 'fullstack', 'mobile']),
    technologies: z.array(z.string()),
    features: z.array(z.string()).optional(),
    demo: z.string().url().optional(),
    github: z.string().url().optional(),
    challenges: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});
```

### 🎨 Efectos y Animaciones

```css
/* Hover effect en project cards */
.project-card {
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

/* Overlay con botones */
.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}
```

### ✅ Mejores Prácticas

1. **Calidad sobre Cantidad**: 4-6 proyectos excelentes > 20 proyectos mediocres
2. **Proyectos Reales**: Incluye proyectos con casos de uso reales
3. **Código Limpio**: Asegúrate de que el código en GitHub esté bien documentado
4. **Demos Funcionales**: Links a demos funcionando (no solo código)
5. **Variedad**: Muestra diferentes tecnologías y tipos de proyectos

---

## 📊 Experiencia / Experience

**Ruta:** `/experience/index.astro`  
**Objetivo:** Mostrar tu trayectoria profesional

### 🎯 Propósito

Demostrar experiencia laboral real, contribuciones y responsabilidades en roles anteriores.

### 📐 Estructura - Timeline

```html
<section class="experience">
  <h1>Experiencia Profesional</h1>
  
  <div class="timeline">
    {experiences.map((exp, index) => (
      <div class="timeline-item" data-aos="fade-up">
        <!-- Timeline Point -->
        <div class="timeline-point">
          <div class="point-circle"></div>
          <div class="point-line"></div>
        </div>
        
        <!-- Content -->
        <div class="timeline-content">
          <div class="experience-card">
            <!-- Header -->
            <div class="exp-header">
              <div class="company-logo">
                <img src={exp.logo} alt={exp.company}>
              </div>
              <div class="exp-info">
                <h2>{exp.position}</h2>
                <h3>{exp.company}</h3>
                <div class="exp-meta">
                  <span>
                    <i class="fas fa-calendar"></i>
                    {exp.startDate} - {exp.endDate || 'Actualidad'}
                  </span>
                  <span>
                    <i class="fas fa-map-marker-alt"></i>
                    {exp.location}
                  </span>
                  <span>
                    <i class="fas fa-briefcase"></i>
                    {exp.type}
                  </span>
                </div>
              </div>
            </div>
            
            <!-- Description -->
            <div class="exp-description">
              <p>{exp.description}</p>
            </div>
            
            <!-- Responsibilities -->
            <div class="exp-responsibilities">
              <h4>Responsabilidades:</h4>
              <ul>
                {exp.responsibilities.map(resp => (
                  <li>
                    <i class="fas fa-check"></i>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
            
            <!-- Achievements -->
            {exp.achievements && (
              <div class="exp-achievements">
                <h4>Logros:</h4>
                <ul>
                  {exp.achievements.map(achievement => (
                    <li>
                      <i class="fas fa-trophy"></i>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <!-- Technologies -->
            <div class="exp-technologies">
              <h4>Tecnologías:</h4>
              <div class="tech-tags">
                {exp.technologies.map(tech => (
                  <span class="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
```

### 🎨 Timeline CSS

```css
.timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.timeline-item {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

/* Timeline Point */
.timeline-point {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.point-circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent);
  border: 4px solid var(--background);
  box-shadow: 0 0 0 4px var(--accent-light);
  z-index: 2;
}

.point-line {
  width: 2px;
  flex: 1;
  background: var(--border);
  margin-top: 1rem;
}

/* No line en el último item */
.timeline-item:last-child .point-line {
  display: none;
}

/* Experience Card */
.experience-card {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid var(--border);
  box-shadow: var(--glass-shadow);
  transition: transform 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
```

### 📊 Content Collection Schema

```typescript
const experience = defineCollection({
  type: 'content',
  schema: z.object({
    position: z.string(),
    company: z.string(),
    logo: z.string().optional(),
    location: z.string(),
    type: z.enum(['Full-time', 'Part-time', 'Freelance', 'Contract']),
    startDate: z.string(),
    endDate: z.string().optional(),
    description: z.string(),
    responsibilities: z.array(z.string()),
    achievements: z.array(z.string()).optional(),
    technologies: z.array(z.string()),
    order: z.number(), // Para ordenar cronológicamente
  }),
});
```

### 💡 Consejos

- **Orden Cronológico Inverso**: Lo más reciente primero
- **Cuantifica Logros**: "Aumenté conversiones en 35%" mejor que "Mejoré conversiones"
- **Sé Específico**: Describe qué hiciste realmente
- **Honestidad**: No exageres ni mientas

---

## 🎓 Certificados / Certificates

**Ruta:** `/certificates/index.astro`  
**Objetivo:** Demostrar formación continua y credenciales

### 🎯 Propósito

Mostrar certificaciones oficiales, cursos completados y títulos académicos que validen tus conocimientos.

### 📐 Estructura

```html
<section class="certificates">
  <h1>Certificados y Estudios</h1>
  
  <!-- Filtros -->
  <div class="filters">
    <select id="categoryFilter">
      <option value="">Todas las categorías</option>
      <option value="frontend">Frontend</option>
      <option value="backend">Backend</option>
      <!-- Más categorías... -->
    </select>
    
    <select id="typeFilter">
      <option value="">Todos los tipos</option>
      <option value="certification">Certificación</option>
      <option value="degree">Título</option>
    </select>
    
    <select id="skillFilter">
      <option value="">Todas las habilidades</option>
      <!-- Skills dinámicas... -->
    </select>
    
    <button id="clearFilters">Limpiar Filtros</button>
  </div>
  
  <!-- Estadísticas -->
  <div class="stats">
    <div class="stat-card">
      <h3>{totalCertificates}</h3>
      <p>Total Certificados</p>
    </div>
    <div class="stat-card">
      <h3>{degrees}</h3>
      <p>Títulos Universitarios</p>
    </div>
    <div class="stat-card">
      <h3>{certifications}</h3>
      <p>Certificaciones</p>
    </div>
    <div class="stat-card">
      <h3>{categories}</h3>
      <p>Categorías</p>
    </div>
  </div>
  
  <!-- Grid de Certificados -->
  <div class="certificates-grid">
    {certificates.map(cert => (
      <div 
        class="certificate-card"
        data-category={cert.category}
        data-type={cert.type}
        data-skills={cert.skills.join(',')}
        data-certificate={JSON.stringify(cert)}
      >
        <!-- Imagen -->
        <div class="certificate-image">
          <img src={cert.image} alt={cert.title}>
          <div class="certificate-overlay">
            <button class="certificate-link">
              <i class="fas fa-eye"></i>
              Ver Detalles
            </button>
          </div>
        </div>
        
        <!-- Contenido -->
        <div class="certificate-content">
          <div class="certificate-header">
            <h3>{cert.title}</h3>
            <span class="certificate-type">
              {cert.type === 'degree' ? 'Título' : 'Certificación'}
            </span>
          </div>
          
          <p class="certificate-issuer">
            <i class="fas fa-building"></i>
            {cert.issuer}
          </p>
          
          <p class="certificate-description">
            {cert.description}
          </p>
          
          <div class="certificate-meta">
            <span class="certificate-date">
              <i class="fas fa-calendar"></i>
              {cert.date}
            </span>
            <span class="certificate-category">
              <i class="fas fa-tag"></i>
              {cert.category}
            </span>
          </div>
          
          <div class="certificate-skills">
            {cert.skills.map(skill => (
              <span class="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

<!-- Modal de Detalles -->
<div id="certificateModal" class="modal">
  <div class="modal-content">
    <!-- Detalles completos del certificado -->
  </div>
</div>
</section>
```

### 🔍 Modal de Detalles

El modal muestra información completa:
- Imagen del certificado
- Información general (emisor, fecha, tipo, categoría)
- Descripción detallada
- Contenido cubierto
- Resultados de aprendizaje
- Habilidades adquiridas
- Duración del curso
- Horas de estudio
- Credencial ID y URL
- Enlace a PDF descargable

### 📊 Content Collection Schema

```typescript
const certificates = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    title_es: z.string().optional(),
    issuer: z.string(),
    issuer_es: z.string().optional(),
    date: z.coerce.date(),
    image: z.string(),
    description: z.string(),
    description_es: z.string().optional(),
    category: z.string(),
    category_es: z.string().optional(),
    type: z.enum(['certification', 'degree']),
    skills: z.array(z.string()),
    content_covered: z.array(z.string()).optional(),
    content_covered_es: z.array(z.string()).optional(),
    learning_outcomes: z.array(z.string()).optional(),
    learning_outcomes_es: z.array(z.string()).optional(),
    duration: z.string().optional(),
    duration_es: z.string().optional(),
    study_hours: z.string().optional(),
    study_hours_es: z.string().optional(),
    credential_id: z.string().optional(),
    credential_url: z.string().url().optional(),
    pdf_url: z.string().optional(),
  }),
});
```

### 💡 Mejores Prácticas

- **Certificados Verificables**: Incluye credential ID y URL
- **Relevantes**: Solo certificados relacionados con tu campo
- **Actualizados**: Mantén vigentes las certificaciones
- **Organizados**: Usa filtros para facilitar búsqueda

---

## 📝 Blog

**Ruta:** `/blog/` y `/blog/[...slug].astro`  
**Objetivo:** Demostrar conocimientos y mejorar SEO

### 🎯 Propósito

Un blog técnico sirve para:
- Demostrar expertise en temas específicos
- Mejorar posicionamiento SEO
- Construir autoridad en la industria
- Ayudar a la comunidad

### 📐 Estructura

#### Index Page (`/blog/index.astro`)

```html
<section class="blog">
  <h1>Blog de Desarrollo Web</h1>
  
  <div class="posts-grid">
    {posts.map(post => (
      <article class="post-card">
        <!-- Imagen de portada -->
        <div class="post-image">
          <img src={post.data.image} alt={post.data.title}>
        </div>
        
        <!-- Contenido -->
        <div class="post-content">
          <h2>{post.data.title}</h2>
          
          <p class="post-date">
            <i class="fas fa-calendar"></i>
            {new Date(post.data.pubDate).toLocaleDateString()}
          </p>
          
          <p class="post-description">
            {post.data.description}
          </p>
          
          <!-- Tags -->
          <div class="post-tags">
            {post.data.tags?.map(tag => (
              <span class="tag">#{tag}</span>
            ))}
          </div>
          
          <a href={`/blog/${post.slug}`} class="read-more">
            Leer más <span class="arrow">→</span>
          </a>
        </div>
      </article>
    ))}
  </div>
</section>
```

#### Post Page (`/blog/[...slug].astro`)

```html
<article class="post">
  <!-- Navegación -->
  <nav class="breadcrumb-nav">
    <a href="/blog">
      <i class="fas fa-arrow-left"></i>
      Volver al Blog
    </a>
  </nav>
  
  <!-- Header -->
  <header class="post-header">
    <div class="post-meta">
      <div class="post-tags">
        {post.data.tags?.map(tag => (
          <span class="tag">#{tag}</span>
        ))}
      </div>
      <time class="post-date">
        <i class="fas fa-calendar-alt"></i>
        {formattedDate}
      </time>
    </div>
    
    <h1>{post.data.title}</h1>
    <p class="post-description">{post.data.description}</p>
  </header>
  
  <!-- Imagen destacada -->
  <div class="post-image">
    <img src={post.data.image} alt={post.data.title}>
  </div>
  
  <!-- Contenido del post -->
  <div class="post-content">
    <Content />
  </div>
  
  <!-- Compartir en redes -->
  <div class="share-buttons">
    <h3>Compartir:</h3>
    <a href={`https://twitter.com/share?url=...`}>Twitter</a>
    <a href={`https://linkedin.com/share?url=...`}>LinkedIn</a>
    <a href={`https://facebook.com/share?url=...`}>Facebook</a>
  </div>
</article>
```

### 📊 Content Collection Schema

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().default('Soufiane Raki'),
    draft: z.boolean().default(false),
  }),
});
```

### ✍️ Ejemplo de Post en Markdown

```markdown
---
title: "Cómo crear un Sistema de Autenticación con JWT"
description: "Guía completa para implementar autenticación segura usando JSON Web Tokens"
pubDate: 2024-01-15
image: "/blog/jwt-auth/cover.jpg"
tags: ["javascript", "nodejs", "seguridad", "backend"]
---

## Introducción

En este artículo aprenderás a...

## ¿Qué es JWT?

JWT (JSON Web Token) es...

### Estructura de un JWT

Un JWT consta de tres partes:
1. Header
2. Payload
3. Signature

```javascript
// Ejemplo de código
const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}
```

## Implementación paso a paso...
```

### 💡 Consejos para el Blog

1. **Consistencia**: Publica regularmente (semanal o quincenal)
2. **Calidad**: Artículos bien investigados y útiles
3. **SEO**: Usa keywords relevantes
4. **Imágenes**: Incluye capturas y diagramas
5. **Código**: Ejemplos prácticos y funcionales
6. **Engagement**: Responde comentarios

---

## 🛠️ Servicios / Services

**Ruta:** `/services.astro`  
**Objetivo:** Mostrar qué servicios ofreces como freelancer/profesional

### 🎯 Propósito

Convertir visitantes en clientes potenciales al mostrar claramente qué puedes hacer por ellos.

### 📐 Estructura

```html
<section class="services">
  <h1>Servicios que Ofrezco</h1>
  <p class="services-intro">
    Como desarrollador Full Stack, ofrezco soluciones completas...
  </p>
  
  <div class="services-grid">
    <!-- Servicio 1: Desarrollo Web -->
    <div class="service-card">
      <div class="service-icon">
        <i class="fas fa-laptop-code"></i>
      </div>
      <h2>Desarrollo Web</h2>
      <p>Creación de sitios web modernos, responsive y optimizados...</p>
      <ul class="service-features">
        <li><i class="fas fa-check"></i> Diseño responsive</li>
        <li><i class="fas fa-check"></i> Optimización SEO</li>
        <li><i class="fas fa-check"></i> Performance optimizada</li>
        <li><i class="fas fa-check"></i> Accesibilidad WCAG</li>
      </ul>
      <div class="service-tech">
        <span>React</span>
        <span>Vue</span>
        <span>Astro</span>
      </div>
    </div>
    
    <!-- Servicio 2: Backend Development -->
    <div class="service-card">
      <div class="service-icon">
        <i class="fas fa-server"></i>
      </div>
      <h2>Desarrollo Backend</h2>
      <p>APIs RESTful, GraphQL y microservicios escalables...</p>
      <ul class="service-features">
        <li><i class="fas fa-check"></i> APIs RESTful</li>
        <li><i class="fas fa-check"></i> Autenticación JWT</li>
        <li><i class="fas fa-check"></i> Bases de datos</li>
        <li><i class="fas fa-check"></i> Microservicios</li>
      </ul>
      <div class="service-tech">
        <span>Node.js</span>
        <span>Express</span>
        <span>MongoDB</span>
      </div>
    </div>
    
    <!-- Servicio 3: E-commerce -->
    <div class="service-card">
      <div class="service-icon">
        <i class="fas fa-shopping-cart"></i>
      </div>
      <h2>E-commerce</h2>
      <p>Tiendas online completas con pasarelas de pago...</p>
      <ul class="service-features">
        <li><i class="fas fa-check"></i> Catálogo de productos</li>
        <li><i class="fas fa-check"></i> Carrito de compras</li>
        <li><i class="fas fa-check"></i> Pagos seguros</li>
        <li><i class="fas fa-check"></i> Panel de administración</li>
      </ul>
      <div class="service-tech">
        <span>Shopify</span>
        <span>WooCommerce</span>
        <span>Stripe</span>
      </div>
    </div>
    
    <!-- Más servicios... -->
  </div>
  
  <!-- CTA -->
  <div class="services-cta">
    <h2>¿Listo para comenzar tu proyecto?</h2>
    <p>Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos</p>
    <a href="/contact" class="btn btn--primary">
      <i class="fas fa-envelope"></i>
      Contactar Ahora
    </a>
  </div>
</section>
```

### 🎨 Service Card Design

```css
.service-card {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent);
  box-shadow: 0 10px 30px rgba(var(--accent-rgb), 0.3);
}

.service-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: var(--accent-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--accent);
}
```

### 💰 Pricing (Opcional)

```html
<section class="pricing">
  <h2>Planes y Precios</h2>
  
  <div class="pricing-cards">
    <!-- Plan Básico -->
    <div class="pricing-card">
      <h3>Básico</h3>
      <div class="price">
        <span class="amount">$500</span>
        <span class="period">/proyecto</span>
      </div>
      <ul class="features">
        <li><i class="fas fa-check"></i> Landing Page</li>
        <li><i class="fas fa-check"></i> Diseño responsive</li>
        <li><i class="fas fa-check"></i> SEO básico</li>
        <li><i class="fas fa-check"></i> Formulario de contacto</li>
      </ul>
      <a href="/contact" class="btn">Contratar</a>
    </div>
    
    <!-- Plan Profesional -->
    <div class="pricing-card featured">
      <div class="badge">Más Popular</div>
      <h3>Profesional</h3>
      <div class="price">
        <span class="amount">$1,500</span>
        <span class="period">/proyecto</span>
      </div>
      <ul class="features">
        <li><i class="fas fa-check"></i> Sitio web completo</li>
        <li><i class="fas fa-check"></i> Hasta 10 páginas</li>
        <li><i class="fas fa-check"></i> CMS integrado</li>
        <li><i class="fas fa-check"></i> SEO avanzado</li>
        <li><i class="fas fa-check"></i> Blog integrado</li>
      </ul>
      <a href="/contact" class="btn btn--primary">Contratar</a>
    </div>
    
    <!-- Plan Enterprise -->
    <div class="pricing-card">
      <h3>Enterprise</h3>
      <div class="price">
        <span class="amount">Personalizado</span>
      </div>
      <ul class="features">
        <li><i class="fas fa-check"></i> Aplicación web completa</li>
        <li><i class="fas fa-check"></i> Backend personalizado</li>
        <li><i class="fas fa-check"></i> Base de datos</li>
        <li><i class="fas fa-check"></i> APIs</li>
        <li><i class="fas fa-check"></i> Soporte prioritario</li>
      </ul>
      <a href="/contact" class="btn">Contactar</a>
    </div>
  </div>
</section>
```

---

## 📧 Contacto / Contact

**Ruta:** `/contact/index.astro`  
**Objetivo:** Facilitar que los visitantes te contacten

### 🎯 Propósito

Esta es la página de **conversión** final. Debe ser fácil, rápida y sin fricción.

### 📐 Estructura

```html
<section class="contact">
  <h1>Contacto</h1>
  
  <div class="contact-container">
    <!-- Información de Contacto -->
    <div class="contact-info">
      <h2>¡Hablemos!</h2>
      <p>Estoy disponible para nuevas oportunidades...</p>
      
      <!-- Métodos de Contacto -->
      <div class="contact-methods">
        <a href="mailto:tu@email.com" class="contact-method">
          <i class="fas fa-envelope"></i>
          <div>
            <h3>Email</h3>
            <span>tu@email.com</span>
          </div>
        </a>
        
        <a href="https://linkedin.com/in/..." class="contact-method">
          <i class="fab fa-linkedin"></i>
          <div>
            <h3>LinkedIn</h3>
            <span>linkedin.com/in/tu-perfil</span>
          </div>
        </a>
        
        <a href="https://github.com/..." class="contact-method">
          <i class="fab fa-github"></i>
          <div>
            <h3>GitHub</h3>
            <span>github.com/tu-usuario</span>
          </div>
        </a>
      </div>
    </div>
    
    <!-- Formulario de Contacto -->
    <div class="contact-form">
      <form id="contact-form">
        <div class="form-group">
          <label for="name">Nombre</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Tu nombre"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="tu@email.com"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="subject">Asunto</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            placeholder="Asunto del mensaje"
            required
          >
        </div>
        
        <div class="form-group">
          <label for="message">Mensaje</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Cuéntame sobre tu proyecto..."
            rows="5"
            required
          ></textarea>
        </div>
        
        <button type="submit" class="submit-btn">
          Enviar Mensaje
          <i class="fas fa-paper-plane"></i>
        </button>
      </form>
    </div>
  </div>
  
  <!-- Contenedor de Notificaciones Toast -->
  <div id="toast-container" class="toast-container"></div>
</section>
```

### 📧 Integración con EmailJS

```typescript
import emailjs from '@emailjs/browser';

// Inicializar
emailjs.init(import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY);

const form = document.getElementById('contact-form');
const submitBtn = form.querySelector('.submit-btn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Deshabilitar botón
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
  
  try {
    const formData = new FormData(form);
    
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      }
    );
    
    // Notificación de éxito
    showToast('success', '¡Mensaje Enviado!', 'Te responderé pronto.');
    form.reset();
    
  } catch (error) {
    // Notificación de error
    showToast('error', 'Error al Enviar', 'Inténtalo de nuevo.');
  } finally {
    // Restaurar botón
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Enviar Mensaje <i class="fas fa-paper-plane"></i>';
  }
});
```

### ✅ Mejores Prácticas

1. **Múltiples Opciones**: Email, formulario, redes sociales
2. **Validación**: Validar campos antes de enviar
3. **Feedback**: Notificaciones claras de éxito/error
4. **Privacidad**: Mencionar que no compartirás datos
5. **Tiempo de Respuesta**: Indica cuándo responderás

---

## 🧩 Componentes Globales

### 1. **Menu.astro** - Navegación Principal

```astro
<!-- src/components/Menu.astro -->
<nav class="menu">
  <div class="menu-header">
    <a href="/" class="logo">
      <img src="/avatar.png" alt="Logo">
      <span>Soufiane Raki</span>
    </a>
  </div>
  
  <ul class="menu-list">
    <li><a href="/" class="menu-link">
      <i class="fas fa-home"></i> Inicio
    </a></li>
    <li><a href="/about" class="menu-link">
      <i class="fas fa-user"></i> Sobre Mí
    </a></li>
    <li><a href="/works" class="menu-link">
      <i class="fas fa-briefcase"></i> Proyectos
    </a></li>
    <li><a href="/experience" class="menu-link">
      <i class="fas fa-chart-line"></i> Experiencia
    </a></li>
    <li><a href="/certificates" class="menu-link">
      <i class="fas fa-certificate"></i> Certificados
    </a></li>
    <li><a href="/blog" class="menu-link">
      <i class="fas fa-blog"></i> Blog
    </a></li>
    <li><a href="/services" class="menu-link">
      <i class="fas fa-cogs"></i> Servicios
    </a></li>
    <li><a href="/contact" class="menu-link">
      <i class="fas fa-envelope"></i> Contacto
    </a></li>
  </ul>
  
  <!-- Redes Sociales -->
  <div class="menu-social">
    <a href="https://github.com/..."><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com/..."><i class="fab fa-linkedin"></i></a>
    <a href="https://twitter.com/..."><i class="fab fa-twitter"></i></a>
  </div>
</nav>

<!-- Toggle para móvil -->
<button class="menu-toggle">
  <span></span>
  <span></span>
  <span></span>
</button>
```

**Características:**
- Fijo en desktop
- Hamburguesa en móvil
- Iconos descriptivos
- Estado activo visual
- Transiciones suaves

---

### 2. **ThemeToggle.astro** - Selector de Tema

```astro
<!-- src/components/ThemeToggle.astro -->
<button id="theme-toggle" class="theme-toggle" aria-label="Cambiar tema">
  <i class="fas fa-sun sun-icon"></i>
  <i class="fas fa-moon moon-icon"></i>
</button>

<script>
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Cargar tema guardado
  const currentTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', currentTheme);
  
  themeToggle?.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
</script>
```

**Funcionalidad:**
- Toggle claro/oscuro
- Persistencia con localStorage
- Icono animado
- Transiciones suaves

---

### 3. **LanguageToggle.astro** - Selector de Idioma

```astro
<!-- src/components/LanguageToggle.astro -->
<div class="language-toggle">
  <button data-lang="es" class="lang-btn active">
    <span class="flag">🇪🇸</span> ES
  </button>
  <button data-lang="en" class="lang-btn">
    <span class="flag">🇬🇧</span> EN
  </button>
</div>

<script>
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      const currentPath = window.location.pathname;
      
      // Cambiar URL según idioma
      if (lang === 'en' && !currentPath.startsWith('/en')) {
        window.location.href = `/en${currentPath}`;
      } else if (lang === 'es' && currentPath.startsWith('/en')) {
        window.location.href = currentPath.replace('/en', '');
      }
    });
  });
</script>
```

**Funcionalidad:**
- Cambio de idioma
- Actualización de URL
- Banderas animadas
- Estado persistente

---

## 📊 Resumen de Secciones

| Sección | Prioridad | Complejidad | SEO Impact | Conversion Impact |
|---------|-----------|-------------|------------|-------------------|
| **Inicio** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Proyectos** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Contacto** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Sobre Mí** | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Experiencia** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Certificados** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Blog** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Servicios** | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 🎯 Conclusión

Cada sección del portfolio tiene un propósito específico y contribuye al objetivo general: **conseguir oportunidades laborales o clientes**. 

### Orden de Implementación Recomendado:

1. ✅ **Inicio** - Primera impresión
2. ✅ **Proyectos** - Demostrar capacidades
3. ✅ **Contacto** - Facilitar conversión
4. ✅ **Sobre Mí** - Humanizar el portfolio
5. ✅ **Experiencia** - Validar expertise
6. ⭕ **Certificados** - Credenciales (opcional)
7. ⭕ **Blog** - SEO y autoridad (opcional)
8. ⭕ **Servicios** - Para freelance (opcional)

### Checklist Final:

- [ ] Todas las secciones tienen contenido real
- [ ] SEO optimizado en cada página
- [ ] Responsive en móvil/tablet/desktop
- [ ] Formulario de contacto funcional
- [ ] Links verificados (GitHub, LinkedIn, etc.)
- [ ] Imágenes optimizadas
- [ ] Rendimiento > 90 en Lighthouse
- [ ] Accesibilidad verificada
- [ ] Cross-browser testing
- [ ] Contenido actualizado

---

**¡Portfolio completo y profesional listo para impresionar!** 🚀✨

_Última actualización: Septiembre 2025_
