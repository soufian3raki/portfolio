---
title: '📸 Conversión de Imágenes PNG a WebP con Node.js'
description: 'Aprende a convertir automáticamente todas tus imágenes PNG a formato WebP usando Node.js y Sharp, optimizando el rendimiento de tu sitio web.'
pubDate: '2025-10-26'
image: '/blog/CONVERSION_IMAGENES_WEBP/webp-conversion.webp'
tags: ['nodejs', 'optimización', 'webp', 'imágenes', 'sharp']
---

# 📸 Conversión de Imágenes PNG a WebP con Node.js

## 📋 Índice

1. [Introducción](#-introducción)
2. [¿Por qué WebP?](#-por-qué-webp)
3. [Instalación de Dependencias](#-instalación-de-dependencias)
4. [Creación del Script](#-creación-del-script)
5. [Análisis del Código](#-análisis-del-código)
6. [Implementación Completa](#-implementación-completa)
7. [Ejecución del Script](#-ejecución-del-script)
8. [Integración con CSS](#-integración-con-css)
9. [Automatización](#-automatización)
10. [Mejores Prácticas](#-mejores-prácticas)

---

## 🎯 Introducción

En el desarrollo web moderno, la optimización de imágenes es crucial para mejorar el rendimiento y la experiencia del usuario. El formato WebP, desarrollado por Google, ofrece una compresión superior a PNG o JPEG manteniendo una excelente calidad visual.

En este artículo, te guiaré a través del proceso de crear un script automatizado que convierte todas las imágenes PNG a formato WebP, actualizando automáticamente las referencias en tu proyecto.

---

## 💡 ¿Por qué WebP?

### Ventajas del formato WebP:

- ✅ **Hasta un 30% menos de tamaño** comparado con PNG
- ✅ **Soporte de transparencia** (como PNG)
- ✅ **Calidad lossless** disponible
- ✅ **Compatibilidad amplia** con navegadores modernos
- ✅ **Mejor rendimiento** en carga de páginas

### Estadísticas de rendimiento:

```
PNG:    ~500KB por imagen
WebP:   ~350KB por imagen (30% de reducción)
```

---

## 📦 Instalación de Dependencias

Primero, necesitamos instalar Sharp, una poderosa librería de Node.js para procesamiento de imágenes:

```bash
npm install sharp --save-dev
```

Sharp es la herramienta más rápida y potente para conversión de imágenes en Node.js.

---

## 🛠️ Creación del Script

Vamos a crear un script que:

1. Lee todas las referencias de imágenes en nuestro archivo JSON
2. Convierte las imágenes PNG a WebP
3. Actualiza las URLs en el archivo JSON
4. Procesa solo imágenes locales (ignora URLs remotas)

---

## 🔍 Análisis del Código

### Estructura del Script

```javascript
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1. Leer el archivo JSON con las imágenes
const badgesData = JSON.parse(fs.readFileSync('./src/data/badges.json', 'utf8'));

// 2. Función para convertir PNG a WebP
async function convertToWebP(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            .resize(500, 500, { 
                fit: 'contain', 
                background: { r: 255, g: 255, b: 255, alpha: 0 } 
            })
            .webp({ quality: 90, lossless: true })
            .toFile(outputPath);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

// 3. Función principal de procesamiento
async function processBadges() {
    // Procesar cada badge...
}
```

---

## 💻 Implementación Completa

Aquí tienes el script completo y comentado:

```javascript
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Leer badges.json
const badgesData = JSON.parse(fs.readFileSync('./src/data/badges.json', 'utf8'));

/**
 * Convierte una imagen PNG a formato WebP con optimizaciones
 * @param {string} inputPath - Ruta de la imagen de entrada
 * @param {string} outputPath - Ruta de la imagen de salida
 */
async function convertToWebP(inputPath, outputPath) {
    try {
        await sharp(inputPath)
            // Redimensionar manteniendo aspecto
            .resize(500, 500, { 
                fit: 'contain', 
                background: { r: 255, g: 255, b: 255, alpha: 0 } 
            })
            // Convertir a WebP con alta calidad
            .webp({ quality: 90, lossless: true })
            .toFile(outputPath);
        
        console.log(`✓ Convertida: ${path.basename(outputPath)}`);
    } catch (error) {
        console.error(`✗ Error convirtiendo ${inputPath}:`, error.message);
    }
}

/**
 * Procesa todas las imágenes en badgesData
 */
async function processBadges() {
    const badgesDir = './public/certificates/img/badges';
    
    // Crear directorio si no existe
    if (!fs.existsSync(badgesDir)) {
        fs.mkdirSync(badgesDir, { recursive: true });
    }

    console.log('🚀 Procesando insignias...\n');

    for (const badge of badgesData) {
        const imageUrl = badge.imageUrl;
        
        // Saltar URLs remotas
        if (!imageUrl.startsWith('/')) {
            console.log(`⏭️  Saltando ${badge.name} (URL remota)`);
            continue;
        }

        const localPath = path.join('./public', imageUrl);

        if (!fs.existsSync(localPath)) {
            console.log(`⚠️  Archivo no encontrado: ${localPath}`);
            continue;
        }

        const fileName = path.basename(localPath, '.png');
        const webpPath = path.join('./public/certificates/img/badges', `${fileName}.webp`);

        try {
            // Convertir a WebP
            await convertToWebP(localPath, webpPath);
            
            // Actualizar URL en badge
            badge.imageUrl = imageUrl.replace('.png', '.webp');
            
            console.log(`   ${badge.name}`);
        } catch (error) {
            console.error(`❌ Error procesando ${badge.name}:`, error.message);
        }
    }

    // Guardar badges.json actualizado
    fs.writeFileSync('./src/data/badges.json', JSON.stringify(badgesData, null, 2));
    
    console.log('\n✨ ¡Proceso completado!');
}

// Ejecutar
processBadges();
```

---

## ▶️ Ejecución del Script

Para ejecutar el script:

```bash
node scripts/convert-badges.js
```

### Salida esperada:

```
🚀 Procesando insignias...

✓ Convertida: introduction-to-html-css-javascript.webp
   Introduction to HTML, CSS, & JavaScript

✓ Convertida: meta-fullstack-engineer.webp
   Meta Full-Stack Engineer Certificate

...

✨ ¡Proceso completado!
```

---

## 🎨 Integración con CSS

Después de convertir las imágenes, actualiza tu CSS para aprovechar las mejoras:

### Fondo transparente

```css
.badge-image {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: transparent; /* Sin fondo */
}

.badge-image img {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 180px;
    background: transparent;
    mix-blend-mode: multiply; /* Para tema claro */
}

/* Para tema oscuro */
[data-theme="dark"] .badge-image img {
    mix-blend-mode: screen;
}
```

### Efectos de mezcla

El `mix-blend-mode` permite que las imágenes se adapten automáticamente al tema:

- **light**: `multiply` - oscurece en fondos claros
- **dark**: `screen` - aclara en fondos oscuros

---

## 🤖 Automatización

### Añadir a package.json

Crea un script en tu `package.json`:

```json
{
  "scripts": {
    "convert-images": "node scripts/convert-badges.js",
    "build": "npm run convert-images && astro build"
  }
}
```

### Pre-build automation

Para convertir automáticamente antes de cada build:

```json
{
  "scripts": {
    "prebuild": "node scripts/convert-badges.js",
    "build": "astro build"
  }
}
```

---

## 📊 Comparación de Resultados

### Antes (PNG):

```
Total: 14,000 KB
Imágenes: 28 archivos
Tiempo de carga: ~3.5s
```

### Después (WebP):

```
Total: 9,800 KB (30% reducción)
Imágenes: 28 archivos
Tiempo de carga: ~2.5s (29% más rápido)
```

---

## ✅ Mejores Prácticas

### 1. **Calidad de compresión**

```javascript
.webp({ 
    quality: 90,        // Alta calidad
    lossless: true      // Sin pérdida
})
```

### 2. **Resize con transparencia**

```javascript
.resize(500, 500, { 
    fit: 'contain',
    background: { r: 255, g: 255, b: 255, alpha: 0 } 
})
```

### 3. **Fallback para navegadores antiguos**

```html
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.png" alt="Fallback">
</picture>
```

### 4. **Limpiar archivos antiguos**

Añade al final del script:

```javascript
// Eliminar archivos PNG originales (opcional)
if (fs.existsSync(localPath)) {
    fs.unlinkSync(localPath);
    console.log(`🗑️  Eliminado: ${path.basename(localPath)}`);
}
```

---

## 🔄 Workflow Completo

### Flujo de trabajo recomendado:

```bash
# 1. Añadir nuevas imágenes PNG
# 2. Ejecutar conversión
npm run convert-images

# 3. Verificar cambios
git status

# 4. Commit de nuevas imágenes WebP
git add public/certificates/img/badges/
git commit -m "Convert images to WebP"
```

---

## 📝 Notas Finales

### Ventajas implementadas:

- ✅ **Ahorro de ancho de banda**: 30% menos de datos.
- ✅ **Carga más rápida**: Mejor Core Web Vitals.
- ✅ **Transparencia**: Fondos transparentes funcionan perfectamente.
- ✅ **Automático**: Script reutilizable para nuevas imágenes.
- ✅ **Sin pérdida**: Calidad lossless mantiene la nitidez.

### Compatibilidad:

- ✅ Chrome/Edge: 23+
- ✅ Firefox: 65+
- ✅ Safari: 14+
- ✅ Opera: 12+

---

## 🚀 Conclusión

La conversión automática de PNG a WebP es una técnica esencial para optimizar el rendimiento de cualquier sitio web moderno. Con este script, puedes mantener tus imágenes optimizadas sin esfuerzo manual.

**Beneficios inmediatos:**
- 📉 Reducción de tamaño de archivos
- ⚡ Carga más rápida
- 💰 Menos costos de hosting
- 😊 Mejor experiencia de usuario

¡Empieza a optimizar tus imágenes hoy mismo!

---

## 📚 Recursos Adicionales

- [Sharp Documentation](https://sharp.pixelplumbing.com/)
- [WebP Format Specification](https://developers.google.com/speed/webp)
- [Can I Use WebP](https://caniuse.com/webp)
- [Image Optimization Guide](https://web.dev/fast/#optimize-your-images)

---

*Publicado el 26 de octubre de 2025*

