import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

/**
 * Convierte una imagen PNG a formato WebP con optimizaciones
 * @param {string} inputPath - Ruta de la imagen de entrada
 * @param {string} outputPath - Ruta de la imagen de salida
 */
async function convertToWebP(inputPath, outputPath) {
    try {
        // Leer la imagen y convertir a WebP
        await sharp(inputPath)
            .webp({ quality: 90, lossless: true })
            .toFile(outputPath);
        
        console.log(`✓ Convertida: ${path.basename(outputPath)}`);
        return true;
    } catch (error) {
        console.error(`✗ Error convirtiendo ${path.basename(inputPath)}:`, error.message);
        return false;
    }
}

/**
 * Procesa todos los archivos PNG en la carpeta png
 */
async function processPNGFolder() {
    const pngDir = './public/certificates/img/badges/png';
    const badgesDir = './public/certificates/img/badges';
    
    // Verificar que la carpeta existe
    if (!fs.existsSync(pngDir)) {
        console.error('❌ La carpeta png no existe!');
        return;
    }

    console.log('🚀 Procesando imágenes PNG...\n');

    // Leer todos los archivos PNG
    const files = fs.readdirSync(pngDir).filter(file => file.endsWith('.png'));
    
    if (files.length === 0) {
        console.log('⚠️  No se encontraron archivos PNG en la carpeta.');
        return;
    }

    console.log(`📁 Encontrados ${files.length} archivos PNG\n`);

    let converted = 0;
    let failed = 0;

    for (const file of files) {
        const inputPath = path.join(pngDir, file);
        const fileName = path.basename(file, '.png');
        const outputPath = path.join(badgesDir, `${fileName}.webp`);

        try {
            const success = await convertToWebP(inputPath, outputPath);
            
            if (success) {
                converted++;
                console.log(`   ✓ ${file}`);
            } else {
                failed++;
            }
        } catch (error) {
            console.error(`❌ Error procesando ${file}:`, error.message);
            failed++;
        }
    }

    console.log('\n📊 Resumen:');
    console.log(`   ✅ Convertidas: ${converted}`);
    console.log(`   ❌ Fallidas: ${failed}`);
    console.log('\n✨ ¡Proceso completado!');
    console.log('\n💡 Tip: Puedes eliminar los archivos PNG originales si ya no los necesitas.');
}

// Ejecutar
processPNGFolder();

