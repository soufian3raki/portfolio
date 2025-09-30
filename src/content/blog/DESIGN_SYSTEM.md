---
title: '🎨 Design System - Portfolio Soufiane Raki'
description: ''
pubDate: '2024-03-05'
image: '/blog/TOAST_NOTIFICATIONS_SYSTEM/maxresdefault.jpg'
tags: ['astro', 'blogging', 'desarrollo web']
---

# 🎨 Design System - Portfolio Soufiane Raki

## 📋 Índice
- [Introducción](#introducción)
- [Sistema de Colores](#sistema-de-colores)
- [Tipografía](#tipografía)
- [Espaciado](#espaciado)
- [Componentes](#componentes)
- [Utilidades](#utilidades)
- [Responsive Design](#responsive-design)
- [Migración](#migración)

## 🚀 Introducción

Este design system está construido con una arquitectura escalable y moderna que utiliza:
- **CSS Custom Properties** para consistencia
- **Design Tokens** para valores reutilizables
- **Utility Classes** para desarrollo rápido
- **Component Classes** para elementos complejos
- **Mobile-First** approach

## 🎨 Sistema de Colores

### Colores Primarios
```css
--color-primary-50: #eff6ff;
--color-primary-100: #dbeafe;
--color-primary-200: #bfdbfe;
--color-primary-300: #93c5fd;
--color-primary-400: #60a5fa;
--color-primary-500: #3b82f6;
--color-primary-600: #2563eb;  /* Accent */
--color-primary-700: #1d4ed8;
--color-primary-800: #1e40af;
--color-primary-900: #1e3a8a;
--color-primary-950: #172554;
```

### Colores Semánticos
```css
--color-success: #10b981;
--color-warning: #f59e0b;
--color-error: #ef4444;
--color-info: var(--color-primary-600);
```

### Uso en Componentes
```css
/* Botón primario */
.btn--primary {
  background: var(--color-accent);
  color: var(--color-white);
}

/* Texto secundario */
.text-secondary {
  color: var(--color-text-secondary);
}
```

## ✍️ Tipografía

### Escala de Tamaños
```css
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */
--font-size-5xl: 3rem;      /* 48px */
--font-size-6xl: 3.75rem;   /* 60px */
```

### Pesos de Fuente
```css
--font-weight-thin: 100;
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
--font-weight-black: 900;
```

### Clases de Utilidad
```html
<h1 class="text-4xl font-bold">Título Principal</h1>
<p class="text-lg text-secondary">Texto secundario</p>
<small class="text-sm text-tertiary">Texto pequeño</small>
```

## 📏 Espaciado

### Escala de Espaciado
```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Clases de Espaciado
```html
<div class="p-4 m-6">Padding 16px, Margin 24px</div>
<div class="px-8 py-4">Padding horizontal 32px, vertical 16px</div>
<div class="gap-4">Gap de 16px en flexbox/grid</div>
```

## 🧩 Componentes

### Botones
```html
<!-- Botón primario -->
<button class="btn btn--primary">Botón Primario</button>

<!-- Botón secundario -->
<button class="btn btn--secondary">Botón Secundario</button>

<!-- Botón fantasma -->
<button class="btn btn--ghost">Botón Fantasma</button>

<!-- Botón enlace -->
<a href="#" class="btn btn--link">Enlace</a>

<!-- Tamaños -->
<button class="btn btn--primary btn--sm">Pequeño</button>
<button class="btn btn--primary btn--lg">Grande</button>
<button class="btn btn--primary btn--xl">Extra Grande</button>
```

### Tarjetas
```html
<!-- Tarjeta básica -->
<div class="card">
  <div class="card__header">
    <h3>Título de la tarjeta</h3>
  </div>
  <div class="card__body">
    <p>Contenido de la tarjeta</p>
  </div>
  <div class="card__footer">
    <button class="btn btn--primary">Acción</button>
  </div>
</div>

<!-- Variantes -->
<div class="card card--elevated">Tarjeta elevada</div>
<div class="card card--flat">Tarjeta plana</div>
```

### Efectos Glass
```html
<div class="glass">Efecto glass básico</div>
<div class="glass glass--hover">Efecto glass con hover</div>
```

## 🛠️ Utilidades

### Display
```html
<div class="flex items-center justify-between">Flexbox</div>
<div class="grid grid-cols-3 gap-4">Grid</div>
<div class="hidden">Oculto</div>
```

### Colores de Texto
```html
<p class="text-primary">Texto primario</p>
<p class="text-secondary">Texto secundario</p>
<p class="text-tertiary">Texto terciario</p>
<p class="text-accent">Texto de acento</p>
```

### Tamaños de Texto
```html
<h1 class="text-6xl">Título gigante</h1>
<h2 class="text-4xl">Título grande</h2>
<h3 class="text-2xl">Título mediano</h3>
<p class="text-base">Texto normal</p>
<small class="text-sm">Texto pequeño</small>
```

### Pesos de Fuente
```html
<p class="font-thin">Texto fino</p>
<p class="font-normal">Texto normal</p>
<p class="font-semibold">Texto semi-negrita</p>
<p class="font-bold">Texto negrita</p>
<p class="font-black">Texto extra-negrita</p>
```

## 📱 Responsive Design

### Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Uso en Media Queries
```css
@media (max-width: 767px) {
  .hero__actions {
    flex-direction: column;
  }
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## 🔄 Migración

### De Clases Antiguas a Nuevas
```html
<!-- Antes -->
<button class="btn btn-primary">Botón</button>

<!-- Después -->
<button class="btn btn--primary">Botón</button>
```

### Variables CSS Legacy
Las variables antiguas siguen funcionando para compatibilidad:
```css
/* Estas siguen funcionando */
--accent: var(--color-accent);
--text: var(--color-text-primary);
--background: var(--color-background);
```

## 🎯 Mejores Prácticas

### 1. Usar Design Tokens
```css
/* ❌ Evitar valores hardcodeados */
.button {
  color: #3b82f6;
  padding: 16px;
}

/* ✅ Usar variables del sistema */
.button {
  color: var(--color-accent);
  padding: var(--space-4);
}
```

### 2. Composición de Clases
```html
<!-- ✅ Componer con clases de utilidad -->
<div class="card p-6 m-4 text-center">
  <h3 class="text-xl font-semibold text-primary mb-4">Título</h3>
  <p class="text-secondary">Contenido</p>
</div>
```

### 3. Responsive First
```css
/* ✅ Mobile first */
.component {
  padding: var(--space-4);
}

@media (min-width: 768px) {
  .component {
    padding: var(--space-8);
  }
}
```

## 📚 Recursos Adicionales

- **Figma**: [Link al diseño en Figma]
- **Storybook**: [Link a Storybook si está disponible]
- **Guía de Contribución**: [Link a guía de contribución]

---

**Versión**: 1.0.0  
**Última actualización**: Enero 2025  
**Mantenido por**: Soufiane Raki

