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
    console.log('\n📊 Imágenes convertidas a WebP y archivo JSON actualizado.');
}

// Ejecutar
processBadges();

