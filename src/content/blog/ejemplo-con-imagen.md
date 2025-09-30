---
title: 'Ejemplo de Post con Imagen Local'
description: 'Este es un ejemplo de post que usa una imagen local del directorio public'
pubDate: '2024-01-15'
image: '/blog/ejemplo-con-imagen/css-image-styling.jpg'
tags: ['ejemplo', 'imagen', 'astro']
---

# Ejemplo de Post con Imagen Local

Este es un ejemplo de post que demuestra cómo usar imágenes locales en el blog.

## Imagen de Portada

La imagen de portada se carga desde el directorio `public/` usando la ruta `/avatar.png`.

## Características

- ✅ Imagen local funcionando
- ✅ Meta tags optimizados
- ✅ Estilo consistente con la app
- ✅ Responsive design

## Código de ejemplo

```javascript
// Ejemplo de cómo cargar imágenes en Astro
const imagePath = '/avatar.png';
const altText = 'Descripción de la imagen';

// En el template
<img src={imagePath} alt={altText} />
```

## Conclusión

¡Ahora las imágenes del blog funcionan correctamente! 🎉
